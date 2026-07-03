// Voz alemana con la SpeechSynthesis API del navegador — sin archivos, sin servicios externos.
// Selección inteligente: prioriza voces neurales/premium de cada navegador y SO.
(function (root) {
  var synth = (typeof window !== 'undefined' && window.speechSynthesis) ? window.speechSynthesis : null;
  var voice = null;

  // Palabras clave que identifican voces de alta calidad en distintos navegadores/SO.
  // Chrome/Edge: "Natural", "Online", "Neural" — voces cloud de alta calidad.
  // macOS/iOS: las voces "Enhanced" o "Premium" suenan mucho mejor que las estándar.
  // Android: "Network" indica voz descargada de mejor calidad.
  // Windows: las voces SAPI "Katja" o "Hedda" son las más decentes; las MSFT Online son neurales.
  var PREMIUM_PATTERNS = [
    /neural/i,        // Edge neural voices (Microsoft ... Neural)
    /natural/i,       // Chrome natural voices
    /online/i,        // Chrome/Edge online voices
    /enhanced/i,      // macOS/iOS enhanced voices
    /premium/i,       // macOS/iOS premium voices
    /network/i,       // Android network-streamed
    /wavenet/i,       // Google WaveNet
    /studio/i         // Google Studio voices
  ];

  // Voces alemanas conocidas que suenan bien, en orden de preferencia.
  var PREFERRED_NAMES = [
    'Google Deutsch',           // Chrome: la voz online de Google, bastante natural
    'Microsoft Katja Online',   // Edge: voz neural de alta calidad
    'Microsoft ConradNeural',   // Edge: voz neural masculina
    'Microsoft KatjaNeural',    // Edge: voz neural femenina
    'Anna',                     // macOS: voz alemana Enhanced de Apple
    'Petra',                    // macOS: otra voz alemana de Apple
    'Yannick'                   // macOS: voz masculina alemana
  ];

  function scoreVoice(v) {
    var score = 0;
    var name = v.name || '';

    // Bonus grande si es una voz preferida conocida
    for (var i = 0; i < PREFERRED_NAMES.length; i++) {
      if (name.indexOf(PREFERRED_NAMES[i]) !== -1) {
        score += 100 - i; // las primeras de la lista puntúan más
        break;
      }
    }

    // Bonus por patrones de calidad
    for (var j = 0; j < PREMIUM_PATTERNS.length; j++) {
      if (PREMIUM_PATTERNS[j].test(name)) {
        score += 50;
        break;
      }
    }

    // Bonus menor si es localDefault (el SO la marca como preferida)
    if (v.localService === false) score += 10; // voz remota/cloud → mejor calidad
    if (v.default) score += 5;

    return score;
  }

  function pickVoice() {
    if (!synth) return;
    var voices = synth.getVoices() || [];
    var german = voices.filter(function (v) { return /^de([-_]|$)/i.test(v.lang); });
    if (!german.length) { voice = null; return; }

    // Ordenar por puntuación descendente y quedarnos con la mejor
    german.sort(function (a, b) { return scoreVoice(b) - scoreVoice(a); });
    voice = german[0];
  }

  if (synth) {
    pickVoice();
    if ('onvoiceschanged' in synth) {
      synth.addEventListener('voiceschanged', pickVoice);
    }
  }

  function available() { return !!synth; }

  // ¿Hay una voz alemana de verdad? (sin ella, el navegador lee el alemán con su voz
  // por defecto — se entiende, pero la pronunciación no es fiel).
  function hasGermanVoice() {
    if (!synth) return false;
    if (!voice) pickVoice();
    return !!voice;
  }

  // Lee un texto en alemán. rate opcional (default 0.92: un pelín lento, mejor para aprender).
  // onEnd opcional: se llama UNA vez cuando la lectura termina o falla — permite encadenar
  // lecturas (modo "reproducir historia"). Ojo: cancel() también dispara end/error de la
  // utterance anterior; quien encadena debe protegerse con su propio token de sesión.
  function say(text, rate, onEnd) {
    if (!synth || !text) { if (onEnd) onEnd(); return false; }
    try {
      synth.cancel(); // corta cualquier lectura anterior
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE';
      if (!voice) pickVoice();
      if (voice) u.voice = voice;
      u.rate = rate || 0.92;
      u.pitch = 1.0;
      if (onEnd) {
        var fired = false;
        var fire = function () { if (!fired) { fired = true; onEnd(); } };
        u.onend = fire;
        u.onerror = fire;
      }
      synth.speak(u);
      return true;
    } catch (e) {
      if (onEnd) onEnd();
      return false;
    }
  }

  // Corta cualquier lectura en curso (y la cola).
  function stop() {
    if (synth) { try { synth.cancel(); } catch (e) {} }
  }

  // Devuelve el nombre de la voz seleccionada (para debug/info).
  function currentVoiceName() {
    return voice ? voice.name : '(ninguna)';
  }

  root.Speech = { say: say, stop: stop, available: available, hasGermanVoice: hasGermanVoice, currentVoiceName: currentVoiceName };
})(typeof window !== 'undefined' ? window : globalThis);
