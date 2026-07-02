// Progreso del alumno, persistido en localStorage. Sin dependencias.
(function (root) {
  var STORAGE_KEY = 'deutsch_app_progress_v1';

  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { exercises: {} };
      var parsed = JSON.parse(raw);
      if (!parsed.exercises) parsed.exercises = {};
      return parsed;
    } catch (e) {
      return { exercises: {} };
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) { /* localStorage no disponible: seguimos sin persistir */ }
  }

  var progress = loadProgress();

  function recordResult(exerciseId, correct) {
    var entry = progress.exercises[exerciseId] || { attempts: 0, correctCount: 0, correct: false, lastSeen: 0 };
    entry.attempts += 1;
    if (correct) entry.correctCount += 1;
    entry.correct = correct;
    entry.lastSeen = Date.now();
    progress.exercises[exerciseId] = entry;
    saveProgress(progress);
    return entry;
  }

  function getEntry(exerciseId) {
    return progress.exercises[exerciseId] || null;
  }

  function isSolved(exerciseId) {
    var e = progress.exercises[exerciseId];
    return !!(e && e.correct);
  }

  function wasWrong(exerciseId) {
    var e = progress.exercises[exerciseId];
    return !!(e && !e.correct && e.attempts > 0);
  }

  function statsFor(exerciseIds) {
    var total = exerciseIds.length;
    var solved = 0;
    exerciseIds.forEach(function (id) {
      if (isSolved(id)) solved++;
    });
    return { total: total, solved: solved, pct: total ? Math.round((solved / total) * 100) : 0 };
  }

  function resetAll() {
    progress = { exercises: {} };
    saveProgress(progress);
  }

  root.Storage = {
    recordResult: recordResult,
    getEntry: getEntry,
    isSolved: isSolved,
    wasWrong: wasWrong,
    statsFor: statsFor,
    resetAll: resetAll
  };
})(typeof window !== 'undefined' ? window : globalThis);
