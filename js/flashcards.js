// Motor de tarjetas tipo Anki. Sistema de repetición espaciada con 5 cajas (Leitner).
// Depende de: Storage (para persistencia), Speech (TTS opcional).
(function (root) {
  'use strict';

  // ---- Leitner boxes ----
  // Caja 0: nueva/fallada → se repite ahora
  // Caja 1: acertada 1 vez → se repite pronto
  // Caja 2: acertada 2 veces seguidas → se repite después
  // Caja 3: acertada 3 → más tarde
  // Caja 4: dominada → solo repaso lejano
  var STORAGE_KEY = 'deutsch_anki_v1';

  function loadDeck() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }
  function saveDeck(deck) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(deck)); } catch (e) {}
  }

  var deck = loadDeck();

  // Intervalos de repaso en ms por caja (0=ahora, 1=10min, 2=1d, 3=3d, 4=7d)
  var INTERVALS = [0, 10*60*1000, 24*3600*1000, 3*24*3600*1000, 7*24*3600*1000];
  var BOX_LABELS = ['Nueva', 'Aprendiendo', 'Revisión', 'Conocida', 'Dominada'];
  var BOX_COLORS = ['var(--red)', 'var(--gold)', 'var(--blue)', 'var(--green)', 'var(--green-deep)'];

  function getCard(cardId) {
    return deck[cardId] || { box: 0, lastSeen: 0, streak: 0 };
  }

  function recordAnswer(cardId, correct) {
    var c = getCard(cardId);
    if (correct) {
      c.box = Math.min(c.box + 1, 4);
      c.streak++;
    } else {
      c.box = 0;
      c.streak = 0;
    }
    c.lastSeen = Date.now();
    deck[cardId] = c;
    saveDeck(deck);
    return c;
  }

  // ¿Está lista para repasar?
  function isDue(cardId) {
    var c = getCard(cardId);
    if (c.box === 0 && c.lastSeen === 0) return true; // nueva
    var elapsed = Date.now() - c.lastSeen;
    return elapsed >= INTERVALS[c.box];
  }

  // Construir cola de estudio: primero nuevas+falladas, luego pendientes de repaso
  function buildStudyQueue(cards) {
    var newCards = [], due = [], notDue = [];
    cards.forEach(function (card) {
      var state = getCard(card.id);
      if (state.box === 0 && state.lastSeen === 0) newCards.push(card);
      else if (isDue(card.id)) due.push(card);
      else notDue.push(card);
    });
    // Barajar cada grupo
    return shuffle(newCards).concat(shuffle(due)).concat(shuffle(notDue));
  }

  // Stats del mazo
  function deckStats(cards) {
    var counts = [0,0,0,0,0];
    var dueCount = 0;
    cards.forEach(function (card) {
      var state = getCard(card.id);
      counts[state.box]++;
      if (isDue(card.id)) dueCount++;
    });
    return { counts: counts, due: dueCount, total: cards.length };
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  // ---- Renderizado del sistema Anki ----
  function renderAnkiSession(cards, container) {
    var stats = deckStats(cards);
    var queue = buildStudyQueue(cards);
    var idx = 0;
    var sessionCorrect = 0, sessionTotal = 0;

    function renderDashboard() {
      var stats = deckStats(cards);
      var html = '<div class="anki-dashboard">';
      html += '<div class="anki-stats-grid">';
      for (var i = 0; i < 5; i++) {
        html += '<div class="anki-box-stat" style="--box-color:' + BOX_COLORS[i] + '">' +
          '<span class="anki-box-count">' + stats.counts[i] + '</span>' +
          '<span class="anki-box-label">' + BOX_LABELS[i] + '</span></div>';
      }
      html += '</div>';
      html += '<div class="anki-due-info">' +
        '<span class="anki-due-num">' + stats.due + '</span> tarjetas pendientes de ' + stats.total +
        '</div>';
      html += '<div class="anki-actions">';
      if (stats.due > 0) {
        html += '<button class="btn accent" id="anki-start">Estudiar ' + stats.due + ' tarjetas</button>';
      } else {
        html += '<p class="anki-done-msg">🎉 ¡Todo repasado! Vuelve más tarde para reforzar.</p>';
      }
      html += '<button class="btn secondary" id="anki-study-all">Repasar todo el mazo (' + stats.total + ')</button>';
      html += '</div></div>';
      container.innerHTML = html;

      var startBtn = document.getElementById('anki-start');
      if (startBtn) {
        startBtn.addEventListener('click', function () {
          var dueCards = cards.filter(function (c) { return isDue(c.id); });
          queue = shuffle(dueCards);
          idx = 0; sessionCorrect = 0; sessionTotal = 0;
          renderCard();
        });
      }
      document.getElementById('anki-study-all').addEventListener('click', function () {
        queue = shuffle(cards.slice());
        idx = 0; sessionCorrect = 0; sessionTotal = 0;
        renderCard();
      });
    }

    function renderCard() {
      if (idx >= queue.length) { renderSummary(); return; }

      var card = queue[idx];
      var state = getCard(card.id);
      var total = queue.length;

      var html = '<div class="anki-session">';
      // Barra de progreso
      html += '<div class="anki-progress">' +
        '<div class="anki-progress-bar"><span class="anki-progress-fill" style="width:' + (idx / total * 100) + '%"></span></div>' +
        '<span class="anki-progress-text">' + (idx + 1) + ' / ' + total + '</span></div>';
      // Estado de la caja
      html += '<div class="anki-box-indicator" style="--box-color:' + BOX_COLORS[state.box] + '">' + BOX_LABELS[state.box] + '</div>';
      // Tarjeta
      html += '<div class="anki-card" id="anki-card">';
      html += '<div class="anki-card-inner" id="anki-card-inner">';
      // Frente
      html += '<div class="anki-front">';
      html += '<span class="anki-word">' + card.de + '</span>';
      if (card.example) html += '<span class="anki-example">' + card.example + '</span>';
      html += '</div>';
      // Reverso
      html += '<div class="anki-back">';
      html += '<span class="anki-word">' + card.de + '</span>';
      html += '<span class="anki-translation">' + card.es + '</span>';
      if (card.example) html += '<span class="anki-example">' + card.example + '</span>';
      if (card.exampleEs) html += '<span class="anki-example-es">' + card.exampleEs + '</span>';
      html += '</div>';
      html += '</div></div>';
      // Instrucción
      html += '<p class="anki-hint" id="anki-hint">Toca la tarjeta para ver la traducción</p>';
      // Botones de respuesta (ocultos hasta flip)
      html += '<div class="anki-buttons" id="anki-buttons" style="display:none">';
      html += '<button class="anki-btn anki-btn-fail" id="anki-fail">✗ No la sabía</button>';
      html += '<button class="anki-btn anki-btn-ok" id="anki-ok">✓ La sabía</button>';
      html += '</div>';
      html += '</div>';

      container.innerHTML = html;

      var cardEl = document.getElementById('anki-card');
      var innerEl = document.getElementById('anki-card-inner');
      var hintEl = document.getElementById('anki-hint');
      var btnsEl = document.getElementById('anki-buttons');
      var flipped = false;

      // TTS al mostrar
      if (root.Speech && root.Speech.available()) {
        setTimeout(function () { root.Speech.say(card.de); }, 200);
      }

      cardEl.addEventListener('click', function () {
        if (flipped) return;
        flipped = true;
        innerEl.classList.add('flipped');
        hintEl.textContent = '¿La sabías?';
        btnsEl.style.display = '';
        if (root.Speech && root.Speech.available()) {
          root.Speech.say(card.de);
        }
      });

      // Atajos de teclado
      function keyHandler(e) {
        if (!document.contains(cardEl)) { document.removeEventListener('keydown', keyHandler); return; }
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          if (!flipped) { cardEl.click(); }
        }
        if (flipped) {
          if (e.key === '1' || e.key === 'ArrowLeft') { e.preventDefault(); document.getElementById('anki-fail').click(); }
          if (e.key === '2' || e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); document.getElementById('anki-ok').click(); }
        }
      }
      document.addEventListener('keydown', keyHandler);

      document.getElementById('anki-fail').addEventListener('click', function () {
        document.removeEventListener('keydown', keyHandler);
        recordAnswer(card.id, false);
        sessionTotal++;
        if (root.Sound) root.Sound.wrong();
        innerEl.classList.add('anki-shake');
        setTimeout(function () { idx++; renderCard(); }, 350);
      });
      document.getElementById('anki-ok').addEventListener('click', function () {
        document.removeEventListener('keydown', keyHandler);
        recordAnswer(card.id, true);
        sessionCorrect++; sessionTotal++;
        if (root.Sound) root.Sound.correct();
        innerEl.classList.add('anki-success');
        setTimeout(function () { idx++; renderCard(); }, 300);
      });
    }

    function renderSummary() {
      var pct = sessionTotal ? Math.round(sessionCorrect / sessionTotal * 100) : 0;
      var html = '<div class="summary">';
      if (sessionTotal === 0) {
        html += '<p class="kicker">Sin tarjetas</p><h2>No hay tarjetas pendientes.</h2>' +
          '<p class="summary-sub">Vuelve más tarde o repasa todo el mazo.</p>';
      } else {
        html += '<p class="kicker">Sesión terminada</p>' +
          '<div class="summary-score">' + sessionCorrect + '/' + sessionTotal + '</div>' +
          '<p class="summary-sub">' + pct + '% de aciertos</p>';
        if (root.Sound && pct >= 60) root.Sound.win();
      }
      html += '<div class="summary-actions">' +
        '<button class="btn accent" id="anki-again">Otra ronda</button>' +
        '<button class="btn secondary" id="anki-back">Volver al mazo</button></div></div>';
      container.innerHTML = html;
      document.getElementById('anki-again').addEventListener('click', function () {
        var dueCards = cards.filter(function (c) { return isDue(c.id); });
        if (!dueCards.length) dueCards = cards.slice();
        queue = shuffle(dueCards);
        idx = 0; sessionCorrect = 0; sessionTotal = 0;
        renderCard();
      });
      document.getElementById('anki-back').addEventListener('click', function () { renderDashboard(); });
    }

    renderDashboard();
  }

  // Reset del progreso Anki
  function resetAnki() {
    deck = {};
    saveDeck(deck);
  }

  root.Flashcards = {
    renderAnkiSession: renderAnkiSession,
    deckStats: deckStats,
    getCard: getCard,
    isDue: isDue,
    resetAnki: resetAnki,
    BOX_LABELS: BOX_LABELS,
    BOX_COLORS: BOX_COLORS
  };
})(typeof window !== 'undefined' ? window : globalThis);
