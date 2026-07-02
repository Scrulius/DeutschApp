// Motor de renderizado/corrección de ejercicios. No sabe nada de módulos ni de progreso;
// solo sabe pintar un input para un ejercicio y avisar si la respuesta es correcta.
(function (root) {
  // Normalización tolerante: al comparar respuestas ignoramos mayúsculas y puntuación,
  // aceptamos la transliteración estándar de umlauts (ü=ue, ö=oe, ä=ae — pero NO "u" a secas:
  // schon ≠ schön debe seguir fallando) y tratamos gern/gerne como la variante libre que es.
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

  function answerMatches(exercise, raw) {
    var candidates = [];
    if (exercise.answer) candidates.push(exercise.answer);
    if (exercise.acceptable) candidates = candidates.concat(exercise.acceptable);
    var norm = normalize(raw);
    return candidates.some(function (c) { return normalize(c) === norm; });
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function renderInput(exercise, container, done) {
    container.innerHTML = '';
    var type = exercise.type;
    if (type === 'multiple-choice') return renderChoice(exercise, container, done, exercise.options);
    if (type === 'select-case') return renderChoice(exercise, container, done, exercise.options || ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv']);
    if (type === 'fill-blank' || type === 'translate') return renderFillBlank(exercise, container, done);
    if (type === 'reorder') return renderReorder(exercise, container, done);
    if (type === 'match') return renderMatch(exercise, container, done);
    if (type === 'clock') return renderClock(exercise, container, done);
    if (type === 'listen') return renderListen(exercise, container, done);
    if (type === 'dictation') return renderDictation(exercise, container, done);
    if (type === 'buckets') return renderBuckets(exercise, container, done);
    if (type === 'find-error') return renderFindError(exercise, container, done);
    container.appendChild(el('p', null, 'Tipo de ejercicio desconocido: ' + type));
  }

  // Botón "▶ Escuchar" compartido por listen y dictation: autoplay al aparecer + aviso
  // si el navegador no tiene voz alemana de verdad.
  function addListenControls(exercise, container) {
    var box = el('div', 'listen-box');
    var play = el('button', 'btn listen-btn', '▶ Escuchar');
    play.type = 'button';
    play.addEventListener('click', function () {
      if (root.Speech && root.Speech.say(exercise.say)) play.textContent = '↻ Escuchar otra vez';
    });
    box.appendChild(play);
    container.appendChild(box);
    setTimeout(function () {
      if (root.Speech && root.Speech.say(exercise.say)) play.textContent = '↻ Escuchar otra vez';
      if (root.Speech && root.Speech.hasGermanVoice && !root.Speech.hasGermanVoice()) {
        var warn = el('p', 'input-hint', '⚠ Tu navegador no tiene voz alemana instalada — la pronunciación puede no ser fiel.');
        container.insertBefore(warn, box.nextSibling);
      }
    }, 300);
    return box;
  }

  // Escucha: reproduce el texto alemán (TTS) y el alumno elige qué ha oído.
  function renderListen(exercise, container, done) {
    addListenControls(exercise, container);
    var optWrap = el('div');
    container.appendChild(optWrap);
    renderChoice(exercise, optWrap, done, exercise.options);
  }

  // Dictado: oye la frase y la ESCRIBE (sin opciones).
  function renderDictation(exercise, container, done) {
    if (!exercise.placeholder) exercise.placeholder = 'Escribe exactamente lo que oyes…';
    addListenControls(exercise, container);
    renderFillBlank(exercise, container, done);
  }

  // Clasifica: van saliendo palabras una a una y las mandas a su grupo (der/die/das,
  // haben/sein…). Termina bien solo si no fallaste ninguna.
  function renderBuckets(exercise, container, done) {
    var items = shuffle(exercise.items.map(function (p) { return { t: p[0], b: p[1] }; }));
    var idx = 0, mistakes = 0, finished = false, locked = false;

    var hint = el('p', 'reorder-hint', 'Clasifica cada palabra en su grupo. Sale bien solo si aciertas todas.');
    var word = el('div', 'bucket-word');
    var meta = el('p', 'input-hint');
    var row = el('div', 'bucket-row');

    function show() {
      word.textContent = items[idx].t;
      meta.textContent = (idx + 1) + ' de ' + items.length + (mistakes ? ' · fallos: ' + mistakes : '');
    }

    exercise.buckets.forEach(function (b) {
      var btn = el('button', 'option-btn bucket-btn', b);
      btn.type = 'button';
      btn.addEventListener('click', function () {
        if (finished || locked) return;
        locked = true;
        var item = items[idx];
        var ok = normalize(b) === normalize(item.b);
        if (!ok) { mistakes++; word.textContent = item.t + '  →  ' + item.b; }
        word.classList.add(ok ? 'ok' : 'ko');
        if (root.Sound) { if (ok) root.Sound.select(); else root.Sound.click(); }
        setTimeout(function () {
          word.classList.remove('ok', 'ko');
          idx++;
          if (idx >= items.length) {
            finished = true;
            row.querySelectorAll('button').forEach(function (x) { x.disabled = true; });
            meta.textContent = mistakes ? ('Terminado con ' + mistakes + (mistakes === 1 ? ' fallo.' : ' fallos.')) : 'Terminado sin fallos.';
            done(mistakes === 0);
          } else { show(); locked = false; }
        }, ok ? 240 : 950);
      });
      row.appendChild(btn);
    });

    show();
    container.appendChild(hint);
    container.appendChild(word);
    container.appendChild(meta);
    container.appendChild(row);
  }

  // Caza el error: una palabra de la frase está MAL — hay que tocarla.
  function renderFindError(exercise, container, done) {
    var hint = el('p', 'reorder-hint', 'Una palabra de esta frase está mal. Tócala.');
    var box = el('div', 'error-sentence');
    var committed = false;
    exercise.words.forEach(function (w, i) {
      var chip = el('button', 'word-chip error-word', w);
      chip.type = 'button';
      chip.addEventListener('click', function () {
        if (committed) return;
        committed = true;
        var correct = i === exercise.wrong;
        var chips = box.querySelectorAll('.error-word');
        for (var j = 0; j < chips.length; j++) {
          chips[j].disabled = true;
          if (j === exercise.wrong) chips[j].classList.add('hit');
        }
        if (!correct) chip.classList.add('miss');
        done(correct, w);
      });
      box.appendChild(chip);
    });
    container.appendChild(hint);
    container.appendChild(box);
  }

  // Empareja: dos columnas; se elige un elemento de la izquierda y luego su pareja de la derecha.
  function renderMatch(exercise, container, done) {
    var pairs = exercise.pairs;
    var lefts = pairs.map(function (p, i) { return { t: p[0], i: i }; });
    var rights = shuffle(pairs.map(function (p, i) { return { t: p[1], i: i }; }));
    var grid = el('div', 'match-grid');
    var lcol = el('div', 'match-col');
    var rcol = el('div', 'match-col');
    var selLeft = null, matched = 0, finished = false;

    function tile(item, side) {
      var b = el('button', 'match-tile match-' + side, item.t);
      b.type = 'button';
      b.setAttribute('data-i', item.i);
      b.addEventListener('click', function () {
        if (finished || b.classList.contains('matched') || b.classList.contains('bad')) return;
        if (side === 'l') {
          lcol.querySelectorAll('.match-tile').forEach(function (x) { x.classList.remove('sel'); });
          b.classList.add('sel');
          selLeft = b;
          if (root.Sound) root.Sound.select();
        } else {
          if (!selLeft) return;
          var li = +selLeft.getAttribute('data-i'), ri = +b.getAttribute('data-i');
          if (li === ri) {
            var a = selLeft;
            a.classList.remove('sel'); a.classList.add('matched'); b.classList.add('matched');
            a.disabled = true; b.disabled = true; selLeft = null; matched++;
            if (matched === pairs.length) { finished = true; done(true); }
          } else {
            var l = selLeft;
            l.classList.add('bad'); b.classList.add('bad');
            if (root.Sound) root.Sound.click();
            selLeft = null;
            setTimeout(function () { l.classList.remove('bad', 'sel'); b.classList.remove('bad'); }, 450);
          }
        }
      });
      return b;
    }

    lefts.forEach(function (it) { lcol.appendChild(tile(it, 'l')); });
    rights.forEach(function (it) { rcol.appendChild(tile(it, 'r')); });
    grid.appendChild(lcol); grid.appendChild(rcol);
    var hint = el('p', 'reorder-hint', 'Toca un elemento de la izquierda y luego su pareja de la derecha.');
    container.appendChild(hint);
    container.appendChild(grid);
  }

  // Reloj: dibuja un reloj analógico (SVG) y ofrece opciones de la hora en alemán.
  function clockSvg(h, m) {
    function pt(angleDeg, len) {
      var a = angleDeg * Math.PI / 180;
      return [(60 + len * Math.sin(a)).toFixed(1), (60 - len * Math.cos(a)).toFixed(1)];
    }
    var ticks = '';
    for (var i = 0; i < 12; i++) {
      var p1 = pt(i * 30, 46), p2 = pt(i * 30, 53);
      ticks += '<line x1="' + p1[0] + '" y1="' + p1[1] + '" x2="' + p2[0] + '" y2="' + p2[1] +
        '" stroke="var(--ink)" stroke-width="' + (i % 3 === 0 ? 2.6 : 1) + '"/>';
    }
    var hp = pt(((h % 12) + m / 60) * 30, 30);
    var mp = pt(m * 6, 44);
    return '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="reloj">' +
      '<circle cx="60" cy="60" r="55" fill="var(--card)" stroke="var(--ink)" stroke-width="2.6"/>' +
      ticks +
      '<line x1="60" y1="60" x2="' + hp[0] + '" y2="' + hp[1] + '" stroke="var(--ink)" stroke-width="4.5" stroke-linecap="round"/>' +
      '<line x1="60" y1="60" x2="' + mp[0] + '" y2="' + mp[1] + '" stroke="var(--red)" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="60" cy="60" r="3.2" fill="var(--ink)"/></svg>';
  }

  function renderClock(exercise, container, done) {
    var parts = (exercise.time || '0:00').split(':');
    var h = parseInt(parts[0], 10) || 0;
    var m = parseInt(parts[1], 10) || 0;
    var wrap = el('div', 'clock-wrap');
    wrap.innerHTML = clockSvg(h, m);
    container.appendChild(wrap);
    var optWrap = el('div');
    container.appendChild(optWrap);
    renderChoice(exercise, optWrap, done, exercise.options);
  }

  function renderChoice(exercise, container, done, options) {
    // Barajar SIEMPRE al pintar (los datos llevan la correcta la primera → sesgo hacia la A).
    // Excepción: select-case mantiene el orden canónico N/A/D/G (posiciones estables ayudan,
    // y ahí la respuesta ya varía de ejercicio a ejercicio).
    if (exercise.type !== 'select-case') options = shuffle(options);
    var grid = el('div', 'options-grid');
    var committed = false;
    var LETTERS = 'ABCDEFGH';

    // Atajos de teclado: A–D (o 1–4) responden sin ratón.
    function keyHandler(e) {
      if (!document.contains(grid)) { document.removeEventListener('keydown', keyHandler); return; }
      if (committed) return;
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      var idx = LETTERS.toLowerCase().indexOf((e.key || '').toLowerCase());
      if (idx === -1) {
        var n = parseInt(e.key, 10);
        if (isNaN(n) || n < 1 || n > options.length) return;
        idx = n - 1;
      }
      if (idx >= options.length) return;
      var btns = grid.querySelectorAll('.option-btn');
      if (btns[idx]) { e.preventDefault(); btns[idx].click(); }
    }
    document.addEventListener('keydown', keyHandler);

    options.forEach(function (opt, idx) {
      var btn = el('button', 'option-btn', opt);
      btn.type = 'button';
      btn.setAttribute('data-key', LETTERS[idx] || '·');
      btn.addEventListener('click', function () {
        if (committed) return;
        committed = true;
        document.removeEventListener('keydown', keyHandler);
        var correct = answerMatches(exercise, opt);
        var buttons = grid.querySelectorAll('.option-btn');
        buttons.forEach(function (b) {
          b.disabled = true;
          if (normalize(b.textContent) === normalize(exercise.answer)) b.classList.add('correct');
          else if (b === btn) b.classList.add('incorrect');
        });
        done(correct, opt);
      });
      grid.appendChild(btn);
    });
    container.appendChild(grid);
    var kbHint = el('p', 'input-hint', 'Atajo: teclas A–D (o 1–4).');
    container.appendChild(kbHint);
  }

  function renderFillBlank(exercise, container, done) {
    var row = el('div', 'text-input-row');
    var input = el('input', 'text-input');
    input.type = 'text';
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.placeholder = exercise.placeholder || 'Escribe tu respuesta...';
    var btn = el('button', 'btn', 'Comprobar');
    btn.type = 'button';
    var committed = false;
    function commit() {
      if (committed) return;
      var val = input.value;
      if (!val.trim()) { input.focus(); return; }
      committed = true;
      var correct = answerMatches(exercise, val);
      input.disabled = true;
      btn.disabled = true;
      input.classList.add(correct ? 'correct' : 'incorrect');
      done(correct, val);
    }
    input.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter') return;
      // Cortar la propagación: sin esto, el MISMO Enter que corrige sube hasta el atajo
      // global "Enter = siguiente" y salta el ejercicio antes de que veas el feedback.
      e.stopPropagation();
      commit();
    });
    btn.addEventListener('click', commit);
    row.appendChild(input);
    row.appendChild(btn);
    var hint = el('p', 'input-hint', 'Pulsa Enter para comprobar. No importan mayúsculas ni puntuación; vale escribir ss por ß y ue/oe/ae por ü/ö/ä.');
    container.appendChild(row);
    container.appendChild(hint);
    setTimeout(function () { input.focus(); }, 30);
  }

  function renderReorder(exercise, container, done) {
    var words = exercise.words;
    var pool = el('div', 'reorder-pool');
    var answerBox = el('div', 'reorder-answer');
    var placed = [];
    var committed = false;
    var shuffled = shuffle(words.map(function (w, i) { return { w: w, id: i }; }));

    function chipButton(item, fromAnswer) {
      var chip = el('button', 'word-chip', item.w);
      chip.type = 'button';
      chip.addEventListener('click', function () {
        if (committed) return;
        if (fromAnswer) placed = placed.filter(function (x) { return x.id !== item.id; });
        else placed.push(item);
        renderState();
      });
      return chip;
    }

    function renderState() {
      pool.innerHTML = '';
      answerBox.innerHTML = '';
      var placedIds = placed.map(function (p) { return p.id; });
      shuffled.forEach(function (item) {
        if (placedIds.indexOf(item.id) === -1) pool.appendChild(chipButton(item, false));
      });
      if (placed.length === 0) {
        answerBox.appendChild(el('span', 'ph', 'Toca las palabras de abajo en el orden correcto…'));
      } else {
        placed.forEach(function (item) { answerBox.appendChild(chipButton(item, true)); });
      }
    }
    renderState();

    var btn = el('button', 'btn', 'Comprobar');
    btn.type = 'button';
    btn.addEventListener('click', function () {
      if (committed) return;
      if (placed.length !== words.length) return;
      committed = true;
      var punctuation = exercise.punctuation || '.';
      var built = placed.map(function (p) { return p.w; }).join(' ') + punctuation;
      var correct = normalize(built) === normalize(exercise.answer);
      answerBox.querySelectorAll('.word-chip').forEach(function (c) { c.disabled = true; });
      pool.querySelectorAll('.word-chip').forEach(function (c) { c.disabled = true; });
      answerBox.classList.add(correct ? 'correct' : 'incorrect');
      done(correct, built);
    });

    var hint = el('p', 'reorder-hint', 'Toca las palabras en orden. Vuelve a tocar una colocada para devolverla.');

    container.appendChild(hint);
    container.appendChild(answerBox);
    container.appendChild(pool);
    container.appendChild(btn);
  }

  root.ExerciseEngine = {
    normalize: normalize,
    answerMatches: answerMatches,
    renderInput: renderInput,
    shuffle: shuffle
  };
})(typeof window !== 'undefined' ? window : globalThis);
