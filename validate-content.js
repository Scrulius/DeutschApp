// Validador de contenido, Node puro (sin dependencias). No se sirve al navegador.
// Carga todos los data-*.js (que se auto-registran via registerModule) y comprueba
// la integridad estructural de cada módulo/ejercicio: ids únicos, respuestas coherentes
// con las opciones, y que los ejercicios "reorder" reconstruyan literalmente su answer.
'use strict';

const fs = require('fs');
const path = require('path');

global.window = global; // los data-*.js usan window.SHARED / registerModule (patrón browser+Node)

const jsDir = path.join(__dirname, 'js');
// Autodescubre todos los data-*.js (data-shared.js primero: define registerModule + tablas).
const discovered = fs.readdirSync(jsDir)
  .filter(f => /^data-.*\.js$/.test(f))
  .sort();
const dataFiles = ['data-shared.js', ...discovered.filter(f => f !== 'data-shared.js')];

for (const f of dataFiles) {
  const full = path.join(jsDir, f);
  if (!fs.existsSync(full)) {
    console.error(`ERROR: no existe ${f}`);
    process.exit(1);
  }
  const code = fs.readFileSync(full, 'utf8');
  try {
    (0, eval)(code);
  } catch (e) {
    console.error(`ERROR cargando ${f}: ${e.message}`);
    process.exit(1);
  }
}

const MODULES = global.MODULES || {};
const VALID_TYPES = ['multiple-choice', 'select-case', 'fill-blank', 'translate', 'reorder', 'match', 'clock', 'listen', 'dictation', 'buckets', 'find-error'];
const CASES = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];

// ⚠️ Mantener EN SINCRONÍA con normalize() de js/exercises.js (misma tolerancia al comparar).
function normalize(str) {
  return (str || '')
    .toString()
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/[.,;:!?¡¿'’"„“”«»()]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\bgerne\b/g, 'gern');
}

const errors = [];
const warnings = [];
const allExerciseIds = new Set();
let totalExercises = 0;
let totalExamples = 0;

const moduleIds = Object.keys(MODULES);
moduleIds.forEach(function (modId) {
  const m = MODULES[modId];
  if (!m.id || !m.title || !m.category || !m.icon || !m.desc) errors.push(`[${modId}] falta id/title/category/icon/desc`);
  if (m.story) {
    // Módulo de historia: diálogo en vez de lecciones.
    if (!Array.isArray(m.story.lines) || m.story.lines.length < 6) {
      errors.push(`[${modId}] story.lines insuficientes (mínimo 6)`);
    } else {
      m.story.lines.forEach(function (ln, i) {
        if (!ln || !ln.de || !ln.es) errors.push(`[${modId}] story línea ${i}: falta de/es`);
      });
    }
  } else if (!Array.isArray(m.lessons) || m.lessons.length === 0) {
    errors.push(`[${modId}] sin lecciones`);
  }

  (m.lessons || []).forEach(function (l, i) {
    if (!l.title || !l.content) errors.push(`[${modId}] lección ${i}: falta title/content`);
    totalExamples += (l.examples || []).length;
    (l.examples || []).forEach(function (ex, j) {
      if (!ex.de || !ex.es) errors.push(`[${modId}] lección ${i} ejemplo ${j}: falta de/es`);
    });
  });

  if (!m.cheatsheet) warnings.push(`[${modId}] sin cheatsheet`);
  if (!Array.isArray(m.exercises) || m.exercises.length === 0) errors.push(`[${modId}] sin ejercicios`);

  (m.exercises || []).forEach(function (ex, i) {
    const where = `[${modId}] ejercicio ${i} (${ex.id || '???'})`;

    if (!ex.id) { errors.push(`${where}: falta id`); return; }
    if (allExerciseIds.has(ex.id)) errors.push(`${where}: id duplicado en toda la app`);
    allExerciseIds.add(ex.id);
    totalExercises++;

    if (!VALID_TYPES.includes(ex.type)) { errors.push(`${where}: tipo desconocido "${ex.type}"`); return; }
    if (ex.type !== 'reorder' && (!ex.prompt || !ex.prompt.trim())) errors.push(`${where}: falta prompt`);

    if (ex.type === 'multiple-choice') {
      if (!Array.isArray(ex.options) || ex.options.length < 2) {
        errors.push(`${where}: options insuficientes`);
      } else {
        const opts = ex.options.map(normalize);
        if (new Set(opts).size !== opts.length) errors.push(`${where}: options con duplicados`);
        if (!opts.includes(normalize(ex.answer))) errors.push(`${where}: answer "${ex.answer}" no está en options [${ex.options.join(', ')}]`);
      }
      if ((ex.prompt || '').indexOf('___') === -1) warnings.push(`${where}: prompt sin "___" (blank visual)`);
    }

    if (ex.type === 'select-case') {
      const opts = ex.options || CASES;
      if (!opts.includes(ex.answer)) errors.push(`${where}: answer "${ex.answer}" no es un caso válido de [${opts.join(', ')}]`);
      if (!/\[\[.+?\]\]/.test(ex.prompt || '')) errors.push(`${where}: prompt sin marcador [[...]] para resaltar`);
    }

    if (ex.type === 'fill-blank' || ex.type === 'translate') {
      if (!ex.answer || !ex.answer.toString().trim()) errors.push(`${where}: falta answer`);
      if (ex.type === 'fill-blank' && (ex.prompt || '').indexOf('___') === -1) warnings.push(`${where}: prompt sin "___" (blank visual)`);
      // Anti-fuga: la respuesta no debe aparecer literal en el enunciado (p.ej. Nominativ con
      // „___ (das Wetter)" cuya respuesta ES „Das Wetter"). Se excluyen los ejercicios de
      // transformación (contienen „→"), donde mostrar la frase origen es el objetivo.
      const promptNorm = normalize(ex.prompt);
      const answerNorm = normalize(ex.answer);
      const isTransformation = (ex.prompt || '').indexOf('→') > -1;
      if (answerNorm && !isTransformation && promptNorm.indexOf(answerNorm) > -1) {
        errors.push(`${where}: la respuesta "${ex.answer}" aparece literal en el enunciado (fuga).`);
      }
    }

    if (ex.type === 'reorder') {
      if (!Array.isArray(ex.words) || ex.words.length < 2) errors.push(`${where}: words insuficientes`);
      if (!ex.answer) { errors.push(`${where}: falta answer`); }
      else if (Array.isArray(ex.words)) {
        const punctuation = ex.punctuation || '.';
        const built = ex.words.join(' ') + punctuation;
        if (normalize(built) !== normalize(ex.answer)) {
          errors.push(`${where}: las words no reconstruyen answer.\n      construido: "${built}"\n      esperado:   "${ex.answer}"`);
        }
      }
    }

    if (ex.type === 'match') {
      if (!Array.isArray(ex.pairs) || ex.pairs.length < 2) {
        errors.push(`${where}: pairs insuficientes (mínimo 2)`);
      } else {
        const bad = ex.pairs.some(p => !Array.isArray(p) || p.length !== 2 || !p[0] || !p[1]);
        if (bad) errors.push(`${where}: cada pair debe ser [izquierda, derecha] con ambos valores`);
        const lefts = ex.pairs.map(p => normalize(p[0]));
        const rights = ex.pairs.map(p => normalize(p[1]));
        if (new Set(lefts).size !== lefts.length) errors.push(`${where}: columna izquierda con duplicados`);
        if (new Set(rights).size !== rights.length) errors.push(`${where}: columna derecha con duplicados`);
      }
    }

    if (ex.type === 'clock') {
      if (!/^\d{1,2}:\d{2}$/.test(ex.time || '')) errors.push(`${where}: time debe ser "H:MM" (ej. "3:30")`);
      if (!Array.isArray(ex.options) || ex.options.length < 2) {
        errors.push(`${where}: options insuficientes`);
      } else {
        const opts = ex.options.map(normalize);
        if (new Set(opts).size !== opts.length) errors.push(`${where}: options con duplicados`);
        if (!opts.includes(normalize(ex.answer))) errors.push(`${where}: answer "${ex.answer}" no está en options`);
      }
    }

    if (ex.type === 'listen') {
      if (!ex.say || !ex.say.toString().trim()) errors.push(`${where}: falta say (texto que se reproduce)`);
      if (!Array.isArray(ex.options) || ex.options.length < 2) {
        errors.push(`${where}: options insuficientes`);
      } else {
        const opts = ex.options.map(normalize);
        if (new Set(opts).size !== opts.length) errors.push(`${where}: options con duplicados`);
        if (!opts.includes(normalize(ex.answer))) errors.push(`${where}: answer "${ex.answer}" no está en options`);
      }
      // Anti-fuga: el enunciado no debe revelar lo que suena.
      if (ex.say && normalize(ex.prompt).indexOf(normalize(ex.say)) > -1) {
        errors.push(`${where}: el texto de say aparece literal en el prompt (fuga).`);
      }
    }

    if (ex.type === 'dictation') {
      if (!ex.say || !ex.say.toString().trim()) errors.push(`${where}: falta say (texto que se reproduce)`);
      if (!ex.answer || !ex.answer.toString().trim()) errors.push(`${where}: falta answer`);
      // Lo que suena debe coincidir con lo que se acepta escrito.
      if (ex.say && ex.answer) {
        const accepted = [ex.answer].concat(ex.acceptable || []).map(normalize);
        if (!accepted.includes(normalize(ex.say))) {
          errors.push(`${where}: say "${ex.say}" no coincide con answer/acceptable (lo que suena debe ser aceptado escrito)`);
        }
      }
      if (ex.say && normalize(ex.prompt).indexOf(normalize(ex.say)) > -1) {
        errors.push(`${where}: el texto de say aparece literal en el prompt (fuga).`);
      }
    }

    if (ex.type === 'buckets') {
      if (!Array.isArray(ex.buckets) || ex.buckets.length < 2) {
        errors.push(`${where}: buckets insuficientes (mínimo 2)`);
      } else if (new Set(ex.buckets.map(normalize)).size !== ex.buckets.length) {
        errors.push(`${where}: buckets con duplicados`);
      }
      if (!Array.isArray(ex.items) || ex.items.length < 3) {
        errors.push(`${where}: items insuficientes (mínimo 3)`);
      } else if (Array.isArray(ex.buckets)) {
        const bucketSet = new Set(ex.buckets.map(normalize));
        ex.items.forEach((it, k) => {
          if (!Array.isArray(it) || it.length !== 2 || !it[0] || !it[1]) errors.push(`${where}: item ${k} debe ser [texto, grupo]`);
          else if (!bucketSet.has(normalize(it[1]))) errors.push(`${where}: item "${it[0]}" apunta a grupo desconocido "${it[1]}"`);
        });
        const texts = ex.items.map(it => normalize(it[0]));
        if (new Set(texts).size !== texts.length) errors.push(`${where}: items con textos duplicados`);
      }
    }

    if (ex.type === 'find-error') {
      if (!Array.isArray(ex.words) || ex.words.length < 3) errors.push(`${where}: words insuficientes (mínimo 3)`);
      else if (!Number.isInteger(ex.wrong) || ex.wrong < 0 || ex.wrong >= ex.words.length) {
        errors.push(`${where}: wrong debe ser un índice válido de words`);
      } else {
        if (!ex.fix || !ex.fix.toString().trim()) errors.push(`${where}: falta fix (la corrección)`);
        else if (normalize(ex.fix) === normalize(ex.words[ex.wrong])) errors.push(`${where}: fix es idéntico a la palabra errónea`);
      }
    }

    const noExplNeeded = ex.type === 'reorder' || ex.type === 'match' || ex.type === 'buckets';
    if (!ex.explanation && !noExplNeeded) warnings.push(`${where}: sin explanation`);
  });
});

console.log(`Módulos registrados: ${moduleIds.length} (${moduleIds.join(', ')})`);
console.log(`Ejercicios totales: ${totalExercises}`);
console.log(`Ejemplos totales en lecciones: ${totalExamples}`);
console.log(`IDs de ejercicio únicos: ${allExerciseIds.size}`);

if (warnings.length) {
  console.log(`\n${warnings.length} avisos (no bloquean):`);
  warnings.forEach(function (w) { console.log('  - ' + w); });
}

if (errors.length) {
  console.log(`\n${errors.length} ERRORES:`);
  errors.forEach(function (e) { console.log('  x ' + e); });
  process.exit(1);
} else {
  console.log('\nOK: todo el contenido pasa la validación estructural.');
  process.exit(0);
}
