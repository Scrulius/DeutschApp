// Voz alemana con la SpeechSynthesis API del navegador — sin archivos, sin servicios externos.
// Elige la mejor voz de-DE disponible (las voces cargan async → se reintenta en voiceschanged).
(function (root) {
  var synth = (typeof window !== 'undefined' && window.speechSynthesis) ? window.speechSynthesis : null;
  var voice = null;

  function pickVoice() {
    if (!synth) return;
    var voices = synth.getVoices() || [];
    var german = voices.filter(function (v) { return /^de([-_]|$)/i.test(v.lang); });
    // Preferir voces "naturales/online" si las hay (suelen sonar mejor); si no, la primera de-DE.
    voice = german.filter(function (v) { return /natural|online/i.test(v.name); })[0] || german[0] || null;
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

  root.Speech = { say: say, stop: stop, available: available, hasGermanVoice: hasGermanVoice };
})(typeof window !== 'undefined' ? window : globalThis);
