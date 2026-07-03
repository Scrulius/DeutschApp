// Router y motor de vistas. Depende de: Storage, SHARED, MODULES (data-*.js), ExerciseEngine.
(function () {
  'use strict';

  var state = {
    view: 'home', moduleId: null, tab: 'leccion',
    queue: [], qIndex: 0,
    sessionCorrect: 0, sessionTotal: 0, streak: 0, bestStreak: 0
  };

  // Niveles: progresión de dificultad (A1 → B2). El color sube de "frío" a "caliente".
  // Las historias van al final: lectura + preguntas, con una historia por nivel.
  var CATEGORY_ORDER = [
    { id: 'nivel1', label: 'Nivel 1 · Primeros pasos',      color: 'var(--green)', kicker: 'A1' },
    { id: 'nivel2', label: 'Nivel 2 · Empiezas a soltarte', color: 'var(--blue)',  kicker: 'A2' },
    { id: 'nivel3', label: 'Nivel 3 · Frases de verdad',    color: 'var(--gold)',  kicker: 'B1' },
    { id: 'nivel4', label: 'Nivel 4 · El salto final',      color: 'var(--red)',   kicker: 'B1–B2' },
    { id: 'historias', label: 'Historias · Comprensión lectora', color: 'var(--ink)', kicker: '★' }
  ];

  var main = document.getElementById('main-content');

  function allModules() {
    return Object.keys(window.MODULES).map(function (k) { return window.MODULES[k]; });
  }

  // Ejercicios usables de un módulo: si el navegador no tiene síntesis de voz,
  // los de audio (listen/dictation) se excluyen de colas y contadores (no penalizan el progreso).
  function moduleExercises(m) {
    var speechOk = window.Speech && window.Speech.available();
    if (speechOk) return m.exercises;
    return m.exercises.filter(function (ex) { return ex.type !== 'listen' && ex.type !== 'dictation'; });
  }

  // Numeración global 01..NN, en el orden del temario (categoría + registro).
  function orderedModules() {
    var out = [], n = 0;
    CATEGORY_ORDER.forEach(function (cat) {
      allModules().filter(function (m) { return m.category === cat.id; }).forEach(function (m) {
        n++;
        out.push({ mod: m, num: n, cat: cat });
      });
    });
    return out;
  }
  function metaFor(moduleId) {
    var list = orderedModules();
    for (var i = 0; i < list.length; i++) if (list[i].mod.id === moduleId) return list[i];
    return null;
  }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function allExerciseIds() {
    var ids = [];
    allModules().forEach(function (m) { moduleExercises(m).forEach(function (ex) { ids.push(ex.id); }); });
    return ids;
  }

  function updateGlobalProgress() {
    var stats = Storage.statsFor(allExerciseIds());
    var bar = document.getElementById('global-progress-bar');
    var txt = document.getElementById('global-progress-text');
    if (bar) bar.style.width = stats.pct + '%';
    if (txt) txt.textContent = stats.pct + '%';
  }

  function setNavActive(navId) {
    document.querySelectorAll('.navlink').forEach(function (b) {
      b.classList.toggle('active', b.dataset.nav === navId);
    });
  }

  // Token de sesión del "▶ Reproducir historia": cambiarlo invalida cualquier cadena
  // de lectura en curso (parar, rearrancar, o navegar a otra vista).
  var storyPlayToken = 0;

  function go(view, opts) {
    opts = opts || {};
    storyPlayToken++;
    if (window.Speech && window.Speech.available()) window.Speech.stop();
    state.view = view;
    state.moduleId = opts.moduleId || null;
    state.tab = opts.tab || 'leccion';
    render();
    window.scrollTo(0, 0);
  }

  function render() {
    updateGlobalProgress();
    setNavActive(state.view === 'module' ? null : state.view);
    if (state.view === 'module') return renderModuleView();
    if (state.view === 'mixed') return renderMixedView();
    if (state.view === 'reference') return renderReferenceView();
    return renderHome();
  }

  // ---------- PORTADA / TEMARIO ----------
  function renderHome() {
    var totals = Storage.statsFor(allExerciseIds());
    var modCount = orderedModules().length;
    var html = '';
    html += '<div class="masthead-hero">' +
      '<p class="kicker">Alemán para hispanohablantes · gramática y comunicación · A1 → B2</p>' +
      '<h1 class="hero-title">El alemán, por fin con <span class="u">sentido</span>.</h1>' +
      '<p class="hero-lede">' + modCount + ' módulos de A1 a B2, en el orden en que conviene aprenderlos: ' +
      'la gramática que sostiene el idioma y el alemán que se usa en la calle. Cada tema explica su <em>porqué</em> ' +
      'pensando en quien viene del español, se entrena con ' + totals.total + ' ejercicios de once tipos y tiene ' +
      'su propia historia para leer y escuchar. Llevas <strong>' + totals.solved + '</strong> resueltos.</p></div>';

    CATEGORY_ORDER.forEach(function (cat) {
      var mods = orderedModules().filter(function (o) { return o.cat.id === cat.id; });
      if (!mods.length) return;
      html += '<section class="cat-block">';
      html += '<div class="cat-head" style="--cat:' + cat.color + '">' +
        '<span class="cat-idx">' + cat.kicker + '</span>' +
        '<h2 class="cat-title">' + cat.label + '</h2>' +
        '<span class="cat-count">' + mods.length + (mods.length === 1 ? ' módulo' : ' módulos') + '</span></div>';
      html += '<div class="mod-grid">';
      mods.forEach(function (o) {
        html += moduleCardHtml(o.mod, o.num, cat.color);
      });
      html += '</div></section>';
    });

    main.innerHTML = html;
    main.querySelectorAll('.mod-card').forEach(function (card) {
      card.addEventListener('click', function () { go('module', { moduleId: card.dataset.id, tab: 'leccion' }); });
    });
  }

  function moduleCardHtml(m, num, color) {
    var stats = Storage.statsFor(moduleExercises(m).map(function (e) { return e.id; }));
    var done = stats.pct === 100;
    return '' +
      '<article class="mod-card' + (done ? ' done' : '') + '" data-id="' + m.id + '" style="--cat:' + color + '">' +
      '<span class="mod-tick">✓ hecho</span>' +
      '<div class="mod-num">' + pad2(num) + '</div>' +
      '<div class="mod-main">' +
        '<span class="mod-track ' + (m.track ? 'comm' : 'gram') + '">' + (m.track || 'Gramática') + '</span>' +
        '<h3 class="mod-title">' + m.title + '</h3>' +
        '<p class="mod-desc">' + m.desc + '</p>' +
        '<div class="mod-foot">' +
          '<span class="mod-bar"><span class="mod-bar-fill" style="width:' + stats.pct + '%"></span></span>' +
          '<span class="mod-count">' + stats.solved + '/' + stats.total + '</span>' +
        '</div>' +
      '</div></article>';
  }

  // ---------- VISTA DE MÓDULO ----------
  function renderModuleView() {
    var meta = metaFor(state.moduleId);
    if (!meta) return go('home');
    var m = meta.mod;
    var color = meta.cat.color;
    var stats = Storage.statsFor(moduleExercises(m).map(function (e) { return e.id; }));

    var html = '';
    html += '<div class="mod-header" style="--cat:' + color + '">' +
      '<button class="crumb" id="back-home">‹ Índice · ' + meta.cat.label + '</button>' +
      '<div class="mod-header-row">' +
        '<span class="mod-header-num">' + pad2(meta.num) + '</span>' +
        '<h1>' + m.title + '</h1>' +
      '</div></div>';
    // Dos sabores: módulos temáticos con lecciones (que ADEMÁS pueden traer su historia,
    // en pestaña propia) y módulos que SON una historia (categoría Historias).
    var storyOnly = !!m.story && !m.lessons;
    var hasStoryTab = !!m.story && !!m.lessons;
    html += '<div class="tabs">' +
      tabBtn('leccion', storyOnly ? 'Historia' : 'Lección') +
      (hasStoryTab ? tabBtn('historia', 'Historia') : '') +
      tabBtn('chuleta', storyOnly ? 'Vocabulario' : 'Chuleta') +
      tabBtn('ejercicios', (storyOnly ? 'Preguntas' : 'Ejercicios') + ' · ' + stats.solved + '/' + stats.total) +
      '</div>';
    html += '<div id="tab-content"></div>';
    main.innerHTML = html;

    document.getElementById('back-home').addEventListener('click', function () { go('home'); });
    main.querySelectorAll('.tab-btn').forEach(function (b) {
      b.addEventListener('click', function () { go('module', { moduleId: m.id, tab: b.dataset.tab }); });
    });

    var content = document.getElementById('tab-content');
    if (state.tab === 'chuleta') content.innerHTML = '<div class="lesson">' + (m.cheatsheet || '<p>Sin chuleta.</p>') + '</div>';
    else if (state.tab === 'ejercicios') startExerciseSession([m], content);
    else if (state.tab === 'historia' && m.story) renderStoryView(m, content);
    else if (storyOnly) renderStoryView(m, content);
    else {
      content.innerHTML = renderLessonHtml(m);
      attachSpeakButtons(content);
    }
  }

  // Añade un botón 🔉 a cada texto alemán (si el navegador tiene voz).
  function attachSpeakButtons(rootEl, selector) {
    if (!window.Speech || !window.Speech.available()) return;
    rootEl.querySelectorAll(selector || '.example .de').forEach(function (deEl) {
      var text = deEl.textContent; // capturado ANTES de añadir el botón
      var b = document.createElement('button');
      b.className = 'say-btn';
      b.type = 'button';
      b.title = 'Escuchar en alemán';
      b.setAttribute('aria-label', 'Escuchar en alemán');
      b.textContent = '🔉';
      b.addEventListener('click', function (e) {
        e.stopPropagation(); // en las historias, el clic en la línea abre la traducción — este no
        window.Speech.say(text);
      });
      deEl.appendChild(b);
    });
  }

  // ---------- HISTORIAS (comprensión lectora) ----------
  // Diálogo interactivo estilo Duolingo: toca una línea para ver su traducción, 🔉 para oírla.
  function renderStoryView(m, content) {
    var s = m.story;
    var speakers = [];
    var html = '<div class="story" id="story-root">';
    if (s.intro) html += '<p class="story-intro">' + s.intro + '</p>';
    html += '<p class="story-help">Toca una línea para ver su traducción.' +
      (window.Speech && window.Speech.available() ? ' Con 🔉 la escuchas en alemán.' : '') + '</p>';
    s.lines.forEach(function (ln) {
      var narr = !ln.speaker;
      var si = -1;
      if (!narr) {
        si = speakers.indexOf(ln.speaker);
        if (si === -1) { speakers.push(ln.speaker); si = speakers.length - 1; }
      }
      html += '<div class="story-line' + (narr ? ' narr' : '') + '">' +
        (narr ? '' : '<span class="story-speaker sp-' + (si % 3) + '">' + ln.speaker + '</span>') +
        '<span class="story-de">' + ln.de + '</span>' +
        '<span class="story-es">' + ln.es + '</span></div>';
    });
    var canPlay = window.Speech && window.Speech.available();
    html += '<div class="story-actions">' +
      (canPlay ? '<button class="btn accent" id="story-play">▶ Reproducir historia</button>' : '') +
      '<button class="btn secondary" id="story-toggle-all">Mostrar todas las traducciones</button>' +
      '<button class="btn accent" id="story-to-questions">Ir a las preguntas ›</button>' +
      '</div></div>';
    content.innerHTML = html;

    var lineEls = content.querySelectorAll('.story-line');
    lineEls.forEach(function (line) {
      line.addEventListener('click', function () { line.classList.toggle('open'); });
    });
    attachSpeakButtons(content, '.story-line .story-de');

    var root = document.getElementById('story-root');
    var toggleBtn = document.getElementById('story-toggle-all');
    toggleBtn.addEventListener('click', function () {
      var open = root.classList.toggle('all-open');
      toggleBtn.textContent = open ? 'Ocultar las traducciones' : 'Mostrar todas las traducciones';
    });
    document.getElementById('story-to-questions').addEventListener('click', function () {
      go('module', { moduleId: m.id, tab: 'ejercicios' });
    });

    // ▶ Reproducir historia: lee las líneas encadenadas con TTS, resaltando la actual.
    // Speech.say con onEnd encadena; playToken invalida la cadena si el usuario para,
    // rearranca o navega (cancel() dispararía el onEnd de la línea cortada).
    if (canPlay) {
      var playBtn = document.getElementById('story-play');
      var texts = s.lines.map(function (ln) { return ln.de.replace(/<[^>]*>/g, ''); });

      function clearPlaying() {
        lineEls.forEach(function (el) { el.classList.remove('playing'); });
      }
      function stopPlayback() {
        storyPlayToken++;
        window.Speech.stop();
        clearPlaying();
        if (document.contains(playBtn)) playBtn.textContent = '▶ Reproducir historia';
      }

      playBtn.addEventListener('click', function () {
        if (playBtn.textContent.indexOf('▶') === -1) { stopPlayback(); return; }
        var token = ++storyPlayToken;
        playBtn.textContent = '⏹ Detener';
        (function playLine(i) {
          if (token !== storyPlayToken || !document.contains(root)) return;
          if (i >= texts.length) { stopPlayback(); return; }
          clearPlaying();
          lineEls[i].classList.add('playing');
          lineEls[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          window.Speech.say(texts[i], 0.92, function () {
            // pequeña pausa entre líneas: respiración natural del diálogo
            setTimeout(function () { if (token === storyPlayToken) playLine(i + 1); }, 350);
          });
        })(0);
      });
    }
  }

  function tabBtn(id, label) {
    return '<button class="tab-btn' + (state.tab === id ? ' active' : '') + '" data-tab="' + id + '">' + label + '</button>';
  }

  function renderLessonHtml(m) {
    var html = '';
    m.lessons.forEach(function (l, i) {
      html += '<div class="lesson"><h2 class="lesson-title"><span class="l-num">' + pad2(i + 1) + '</span>' + l.title + '</h2>' + l.content;
      if (l.examples && l.examples.length) {
        html += '<div class="example-list">';
        l.examples.forEach(function (ex) {
          html += '<div class="example"><div class="de">' + ex.de + '</div><div class="es">' + ex.es + '</div>' +
            (ex.note ? '<div class="note">' + ex.note + '</div>' : '') + '</div>';
        });
        html += '</div>';
      }
      html += '</div>';
    });
    return html;
  }

  // ---------- TABLAS ----------
  function renderReferenceView() {
    var T = window.SHARED.tables;
    var html = '<div class="masthead-hero"><p class="kicker">Referencia rápida</p>' +
      '<h1 class="hero-title">Tablas</h1>' +
      '<p class="hero-lede">Todo lo que necesitas mirar de reojo mientras hablas, en una sola página.</p></div>';
    html += '<div class="ref-section"><h2 class="lesson-title">Artículos</h2>' + T.articles + T.articlesIndef + T.possessive + '</div>';
    html += '<div class="ref-section"><h2 class="lesson-title">Pronombres personales</h2>' + T.pronouns + '</div>';
    html += '<div class="ref-section"><h2 class="lesson-title">Preposiciones por caso</h2>' + T.wechselList + T.dativPrepList + T.akkusativPrepList + T.genitivPrepList + '</div>';
    html += '<div class="ref-section"><h2 class="lesson-title">Verbos con Dativ</h2>' + T.dativVerbList + '</div>';
    main.innerHTML = html;
  }

  // ---------- REPASO MIXTO ----------
  function renderMixedView() {
    main.innerHTML = '<div class="masthead-hero"><p class="kicker">Todos los módulos</p>' +
      '<h1 class="hero-title">Repaso mixto</h1>' +
      '<p class="hero-lede">Ejercicios de todo el temario mezclados, priorizando lo que fallaste o aún no has probado.</p></div>' +
      '<div id="tab-content"></div>';
    startExerciseSession(allModules(), document.getElementById('tab-content'), 40);
  }

  // ---------- SESIÓN DE EJERCICIOS ----------
  function buildQueue(modules, cap) {
    var exList = [];
    modules.forEach(function (m) {
      moduleExercises(m).forEach(function (ex) { exList.push({ ex: ex, moduleId: m.id }); });
    });
    var unseen = [], wrong = [], done = [];
    exList.forEach(function (item) {
      var entry = Storage.getEntry(item.ex.id);
      if (!entry) unseen.push(item);
      else if (!entry.correct) wrong.push(item);
      else done.push(item);
    });
    var queue = ExerciseEngine.shuffle(wrong).concat(ExerciseEngine.shuffle(unseen)).concat(ExerciseEngine.shuffle(done));
    if (cap) queue = queue.slice(0, cap);
    return queue;
  }

  function startExerciseSession(modules, container, cap) {
    state.queue = buildQueue(modules, cap);
    state.qIndex = 0;
    state.sessionCorrect = 0; state.sessionTotal = 0; state.streak = 0; state.bestStreak = 0;
    renderExerciseStep(container, modules, cap);
  }

  var TYPE_LABEL = {
    'multiple-choice': 'Opción múltiple',
    'select-case': '¿Qué caso es?',
    'fill-blank': 'Completa',
    'translate': 'Traduce',
    'reorder': 'Ordena la frase',
    'match': 'Empareja',
    'clock': '¿Qué hora es?',
    'listen': 'Escucha',
    'dictation': 'Dictado',
    'buckets': 'Clasifica',
    'find-error': 'Caza el error'
  };

  function escapeHtml(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  function contrastRow(labelA, valA, labelB, valB) {
    return '<div class="fb-contrast">' +
      '<span class="fb-chip wrong"><span class="fb-chip-label">' + labelA + '</span><span class="fb-chip-val">' + escapeHtml(valA) + '</span></span>' +
      '<span class="fb-arrow">→</span>' +
      '<span class="fb-chip right"><span class="fb-chip-label">' + labelB + '</span><span class="fb-chip-val">' + escapeHtml(valB) + '</span></span>' +
      '</div>';
  }

  // Feedback completo: contraste (tu respuesta vs la correcta), variantes válidas, el porqué,
  // regla breve opcional y (en repaso mixto) de qué tema es, para poder repasarlo.
  function buildFeedback(ex, correct, userAnswer, moduleId, showModule) {
    var out = '<div class="fb-title">' + (correct ? '✓ Correcto' : '✗ No es eso') + '</div>';
    var TYPED = { 'fill-blank': 1, 'translate': 1, 'dictation': 1 };

    if (!correct) {
      if (ex.type === 'find-error') {
        out += contrastRow('Estaba mal', ex.words[ex.wrong], 'Debe ser', ex.fix);
      } else if (ex.type === 'match' || ex.type === 'buckets') {
        out += '<div class="fb-body">Fallaste alguna por el camino. Vuelve a intentarlo para dominarlo.</div>';
      } else if (ex.answer) {
        out += contrastRow('Tu respuesta', (userAnswer != null && ('' + userAnswer).trim()) ? userAnswer : '—', 'Correcta', ex.answer);
      }
      // Otras formas también válidas (traduce/completa/dictado).
      if (TYPED[ex.type] && ex.acceptable && ex.acceptable.length) {
        out += '<div class="fb-alt"><strong>También vale:</strong> ' + ex.acceptable.map(escapeHtml).join(' · ') + '</div>';
      }
    }

    // El porqué (siempre que exista).
    var explain = ex.explanation || '';
    if (!explain && correct) explain = ex.answer ? ('Respuesta correcta: <strong>' + escapeHtml(ex.answer) + '</strong>.') : '¡Bien!';
    if (explain) out += '<div class="fb-body">' + explain + '</div>';

    // Regla breve opcional.
    if (ex.tip) out += '<div class="fb-tip">' + ex.tip + '</div>';

    // En repaso mixto, recordar el tema por si quiere repasarlo.
    if (!correct && showModule && window.MODULES[moduleId]) {
      out += '<div class="fb-topic">Tema: <strong>' + window.MODULES[moduleId].title + '</strong></div>';
    }
    return out;
  }

  function promptHtml(ex) {
    return escapeHtml(ex.prompt || '')
      .replace(/___/g, '<span class="blank">___</span>')
      .replace(/\[\[(.+?)\]\]/g, '<strong class="hl-target">$1</strong>');
  }

  function renderExerciseStep(container, modules, cap) {
    if (state.qIndex >= state.queue.length) return renderSessionSummary(container, modules, cap);

    var item = state.queue[state.qIndex];
    var ex = item.ex;
    var showMod = modules.length > 1 && window.MODULES[item.moduleId];
    var kicker = TYPE_LABEL[ex.type] || ex.type;
    if (showMod) kicker += ' · ' + window.MODULES[item.moduleId].title;

    var html = '<section class="ex">';
    html += '<div class="ex-top"><span class="ex-kicker">' + kicker + '</span>' +
      '<span class="ex-count">' + (state.qIndex + 1) + ' / ' + state.queue.length + '</span></div>';
    html += '<div class="ex-rule"><span class="ex-rule-fill" style="width:' + (state.qIndex / state.queue.length * 100) + '%"></span></div>';
    var promptBody;
    if (ex.type === 'reorder') {
      promptBody = ex.hint
        ? 'Construye en alemán: <em>«' + escapeHtml(ex.hint) + '»</em>'
        : 'Ordena las palabras para formar la frase correcta.';
    } else {
      promptBody = promptHtml(ex);
    }
    html += '<div class="ex-prompt">' + promptBody + '</div>';
    html += '<div id="exercise-input"></div>';
    html += '<div class="ex-feedback" id="exercise-feedback"></div>';
    html += '<div class="ex-foot"><span class="ex-streak' + (state.streak >= 3 ? ' hot' : '') + '">' +
      (state.streak >= 3 ? '🔥 ' : '') + 'Racha ' + state.streak + '</span>' +
      '<button class="btn" id="next-btn" style="display:none">Siguiente ›</button></div>';
    html += '</section>';
    container.innerHTML = html;

    var inputEl = document.getElementById('exercise-input');
    if (ex.type === 'select-case') inputEl.classList.add('case-mode');
    var feedbackEl = document.getElementById('exercise-feedback');
    var nextBtn = document.getElementById('next-btn');

    ExerciseEngine.renderInput(ex, inputEl, function (correct, userAnswer) {
      Storage.recordResult(ex.id, correct);
      state.sessionTotal++;
      if (correct) { state.sessionCorrect++; state.streak++; state.bestStreak = Math.max(state.bestStreak, state.streak); }
      else state.streak = 0;

      if (window.Sound) { correct ? window.Sound.correct() : window.Sound.wrong(); }

      feedbackEl.classList.add('show', correct ? 'correct' : 'incorrect');
      feedbackEl.innerHTML = buildFeedback(ex, correct, userAnswer, item.moduleId, modules.length > 1);
      nextBtn.style.display = 'inline-block';
      nextBtn.focus();
      updateGlobalProgress();
    });

    nextBtn.addEventListener('click', function () {
      if (window.Sound) window.Sound.click();
      state.qIndex++;
      renderExerciseStep(container, modules, cap);
    });
  }

  function renderSessionSummary(container, modules, cap) {
    var pct = state.sessionTotal ? Math.round(state.sessionCorrect / state.sessionTotal * 100) : 0;
    var html = '<div class="summary">';
    if (state.sessionTotal === 0) {
      html += '<p class="kicker">Nada pendiente</p><h2>Has dominado todo lo de aquí.</h2>' +
        '<p class="summary-sub">No quedan ejercicios sin resolver en esta selección. Prueba el repaso mixto o vuelve más tarde.</p>';
    } else {
      html += '<p class="kicker">Ronda terminada</p>' +
        '<div class="summary-score">' + state.sessionCorrect + '/' + state.sessionTotal + '</div>' +
        '<p class="summary-sub">' + pct + '% de aciertos · racha máxima ' + state.bestStreak + '</p>';
      if (window.Sound && pct >= 60) window.Sound.win();
    }
    html += '<div class="summary-actions"><button class="btn accent" id="again-btn">Otra ronda</button>' +
      '<button class="btn secondary" id="home-btn">Volver al índice</button></div></div>';
    container.innerHTML = html;
    document.getElementById('again-btn').addEventListener('click', function () { startExerciseSession(modules, container, cap); });
    document.getElementById('home-btn').addEventListener('click', function () { go('home'); });
    updateGlobalProgress();
  }

  // ---------- WIRING GLOBAL ----------
  document.querySelectorAll('.navlink').forEach(function (b) {
    b.addEventListener('click', function () { go(b.dataset.nav); });
  });
  var wm = document.querySelector('.wordmark');
  wm.addEventListener('click', function () { go('home'); });
  wm.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go('home'); } });

  document.getElementById('reset-progress-btn').addEventListener('click', function () {
    if (confirm('¿Borrar todo tu progreso guardado? No se puede deshacer.')) {
      Storage.resetAll();
      render();
      showToast('Progreso borrado.');
    }
  });

  // Botón de silencio.
  var muteBtn = document.getElementById('mute-btn');
  function refreshMuteBtn() {
    if (!muteBtn || !window.Sound) return;
    var m = window.Sound.isMuted();
    muteBtn.textContent = m ? '🔇' : '🔊';
    muteBtn.classList.toggle('muted', m);
    muteBtn.setAttribute('aria-pressed', m ? 'true' : 'false');
  }
  if (muteBtn && window.Sound) {
    refreshMuteBtn();
    muteBtn.addEventListener('click', function () {
      window.Sound.toggleMute();
      refreshMuteBtn();
      showToast(window.Sound.isMuted() ? 'Sonido silenciado.' : 'Sonido activado.');
    });
  }

  function showToast(msg) {
    var node = document.getElementById('tpl-toast').content.cloneNode(true);
    node.querySelector('.toast').textContent = msg;
    document.body.appendChild(node);
    setTimeout(function () { var t = document.querySelector('.toast'); if (t) t.remove(); }, 2500);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    // Un Enter dentro de un campo de texto es para COMPROBAR (lo gestiona el propio input),
    // nunca para avanzar — si no, corrige y salta en el mismo golpe de tecla.
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    var nextBtn = document.getElementById('next-btn');
    if (nextBtn && nextBtn.style.display !== 'none') { e.preventDefault(); nextBtn.click(); }
  });

  go('home');
})();
