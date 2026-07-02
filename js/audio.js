// Sonido sintetizado con la Web Audio API — sin archivos externos, funciona offline.
// Tonos cortos y suaves para no cansar. Preferencia de silencio en localStorage.
(function (root) {
  var MUTE_KEY = 'deutsch_app_muted_v1';
  var ctx = null;
  var muted = false;
  try { muted = localStorage.getItem(MUTE_KEY) === '1'; } catch (e) {}

  function ac() {
    if (muted) return null;
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { return null; }
    }
    if (ctx.state === 'suspended') { try { ctx.resume(); } catch (e) {} }
    return ctx;
  }

  // Un tono: frecuencia, retardo (s), duración (s), forma de onda, ganancia pico.
  function tone(freq, t0, dur, type, peak) {
    var c = ctx;
    if (!c) return;
    var osc = c.createOscillator();
    var g = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    osc.connect(g); g.connect(c.destination);
    var now = c.currentTime + t0;
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(peak || 0.11, now + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    osc.start(now);
    osc.stop(now + dur + 0.03);
  }

  function correct() { if (!ac()) return; tone(659, 0, 0.13, 'sine', 0.13); tone(988, 0.085, 0.20, 'sine', 0.12); }
  function wrong()   { if (!ac()) return; tone(233, 0, 0.16, 'sine', 0.11); tone(196, 0.09, 0.22, 'sine', 0.10); }
  function click()   { if (!ac()) return; tone(880, 0, 0.045, 'triangle', 0.05); }
  function select()  { if (!ac()) return; tone(540, 0, 0.04, 'sine', 0.045); }
  function win()     { if (!ac()) return; [523, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.1, 0.24, 'triangle', 0.11); }); }

  function toggleMute() {
    muted = !muted;
    try { localStorage.setItem(MUTE_KEY, muted ? '1' : '0'); } catch (e) {}
    if (!muted) { ac(); click(); } // pequeño feedback al reactivar
    return muted;
  }
  function isMuted() { return muted; }

  root.Sound = {
    correct: correct, wrong: wrong, click: click, select: select, win: win,
    toggleMute: toggleMute, isMuted: isMuted
  };
})(typeof window !== 'undefined' ? window : globalThis);
