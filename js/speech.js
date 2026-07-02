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
  function say(text, rate) {
    if (!synth || !text) return false;
    try {
      synth.cancel(); // corta cualquier lectura anterior
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE';
      if (!voice) pickVoice();
      if (voice) u.voice = voice;
      u.rate = rate || 0.92;
      synth.speak(u);
      return true;
    } catch (e) {
      return false;
    }
  }

  root.Speech = { say: say, available: available, hasGermanVoice: hasGermanVoice };
})(typeof window !== 'undefined' ? window : globalThis);
