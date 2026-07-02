(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Formación: -er / am -sten</caption>' +
    '<tr><th>Base</th><th>Comparativo</th><th>Superlativo</th></tr>' +
    '<tr><td>schnell</td><td>schneller</td><td>am schnellsten</td></tr>' +
    '<tr><td>alt</td><td class="hl">älter</td><td class="hl">am ältesten</td></tr>' +
    '<tr><td>groß</td><td class="hl">größer</td><td class="hl">am größten</td></tr>' +
    '<tr><td>jung</td><td class="hl">jünger</td><td class="hl">am jüngsten</td></tr>' +
    '<tr><td>gut</td><td class="hl">besser</td><td class="hl">am besten</td></tr>' +
    '<tr><td>viel</td><td class="hl">mehr</td><td class="hl">am meisten</td></tr>' +
    '<tr><td>gern</td><td class="hl">lieber</td><td class="hl">am liebsten</td></tr>' +
    '<tr><td>hoch</td><td class="hl">höher</td><td class="hl">am höchsten</td></tr>' +
    '</table></div>' +
    '<div class="warn"><strong>NUNCA „mehr + adjetivo".</strong> El español dice "más rápido" con dos palabras; el alemán lo hace con la terminación: schnell<strong>er</strong>. „mehr schnell" ✗ es EL calco a evitar.</div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>als vs. wie</caption>' +
    '<tr><th>Estructura</th><th>Ejemplo</th><th>Español</th></tr>' +
    '<tr><td>Komparativ + <strong>als</strong></td><td>Er ist größer <strong>als</strong> ich.</td><td>más alto QUE yo</td></tr>' +
    '<tr><td>(genau)so … <strong>wie</strong></td><td>Er ist so groß <strong>wie</strong> ich.</td><td>tan alto COMO yo</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'komparativ',
    category: 'nivel2',
    icon: '⚖️',
    title: 'Komparativ y Superlativ',
    desc: 'größer als, am besten, lieber… Comparar sin caer en el calco "mehr schnell" — el alemán compara con terminaciones.',
    lessons: [
      {
        title: 'Se compara con -er, nunca con „mehr"',
        content: `<p>El alemán forma el comparativo añadiendo <strong>-er</strong> al adjetivo (schnell → schneller) y el superlativo con <strong>am -sten</strong> (am schnellsten). Muchos adjetivos cortos con a/o/u cogen además <strong>umlaut</strong>: alt→älter, groß→größer, jung→jünger.</p>
          <div class="warn">El error de manual del hispanohablante: traducir "más rápido" como „mehr schnell". NUNCA. La comparación vive en la terminación: schnell<strong>er</strong>.</div>`,
        examples: [
          { de: 'Mein Bruder ist <strong>älter</strong> als ich.', es: 'Mi hermano es mayor que yo.', note: 'alt → älter (con umlaut).' },
          { de: 'Dieses Auto ist <strong>schneller</strong>.', es: 'Este coche es más rápido.', note: 'NO „mehr schnell".' },
          { de: 'Der Mount Everest ist <strong>am höchsten</strong>.', es: 'El Everest es el más alto.', note: 'hoch → höher → am höchsten.' },
          { de: 'Im Winter sind die Tage <strong>am kürzesten</strong>.', es: 'En invierno los días son los más cortos.' }
        ]
      },
      {
        title: 'Los irregulares que más se usan',
        content: `<p>Cuatro joyas que salen en cualquier conversación: <strong>gut → besser → am besten</strong>, <strong>viel → mehr → am meisten</strong>, <strong>gern → lieber → am liebsten</strong> (¡para preferencias!) y <strong>hoch → höher</strong>.</p>
          <div class="tip">La escalera de los gustos: „Ich trinke <strong>gern</strong> Tee" (me gusta) → „Ich trinke <strong>lieber</strong> Kaffee" (prefiero) → „<strong>Am liebsten</strong> trinke ich Kakao" (lo que más).</div>`,
        examples: [
          { de: 'Dein Deutsch wird immer <strong>besser</strong>!', es: '¡Tu alemán es cada vez mejor!' },
          { de: 'Ich trinke <strong>lieber</strong> Tee als Kaffee.', es: 'Prefiero el té al café.' },
          { de: '<strong>Am liebsten</strong> schlafe ich lange.', es: 'Lo que más me gusta es dormir hasta tarde.' },
          { de: 'Wer hat <strong>am meisten</strong> gegessen?', es: '¿Quién ha comido más?' }
        ]
      },
      {
        title: 'als vs. wie: "que" no siempre es lo mismo',
        content: `<p>Con comparativo se usa <strong>als</strong> (größer <strong>als</strong> ich = más alto QUE yo). Para igualdad se usa <strong>(genau)so … wie</strong> (so groß <strong>wie</strong> ich = tan alto COMO yo). Mezclarlos („größer wie ich") se oye en la calle, pero es incorrecto — y en el examen, error seguro.</p>`,
        examples: [
          { de: 'Berlin ist größer <strong>als</strong> München.', es: 'Berlín es más grande que Múnich.' },
          { de: 'Mein Hund ist genauso alt <strong>wie</strong> deiner.', es: 'Mi perro tiene exactamente la misma edad que el tuyo.' },
          { de: 'Heute ist es kälter <strong>als</strong> gestern.', es: 'Hoy hace más frío que ayer.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'kmp-01', type: 'fill-blank', prompt: 'Mein Bruder ist ___ als ich. (alt)', answer: 'älter', explanation: 'alt → älter, con umlaut.', tip: 'El comparativo es -er en la terminación (y umlaut en muchos cortos): alt→älter, groß→größer. Nunca „mehr + adjetivo".' },
      { id: 'kmp-02', type: 'fill-blank', prompt: 'Dein Deutsch wird immer ___. (gut)', answer: 'besser', explanation: 'gut → besser (irregular).' },
      { id: 'kmp-03', type: 'fill-blank', prompt: 'Ich trinke ___ Tee als Kaffee. (preferir: gern en comparativo)', answer: 'lieber', explanation: 'gern → lieber = preferir.' },
      { id: 'kmp-04', type: 'multiple-choice', prompt: 'Er ist so groß ___ ich.', options: ['wie', 'als', 'dass', 'denn'], answer: 'wie', explanation: 'Igualdad: so … wie (tan … como).' },
      { id: 'kmp-05', type: 'multiple-choice', prompt: 'Er ist größer ___ ich.', options: ['als', 'wie', 'dass', 'denn'], answer: 'als', explanation: 'Comparativo + als (más … que).' },
      { id: 'kmp-06', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Das', 'Auto', 'ist', 'mehr', 'schnell', 'als', 'meins.'], wrong: 3, fix: 'schneller (sin „mehr")', explanation: 'El calco del español: "más rápido" NO es „mehr schnell" — la comparación va en la terminación: schneller.' },
      { id: 'kmp-07', type: 'match', prompt: 'Empareja cada adjetivo con su comparativo:', pairs: [['gut', 'besser'], ['viel', 'mehr'], ['gern', 'lieber'], ['hoch', 'höher']], explanation: 'Los cuatro irregulares imprescindibles.' },
      { id: 'kmp-08', type: 'translate', prompt: 'Traduce: Mi hermana es mayor que yo.', answer: 'Meine Schwester ist älter als ich.', explanation: 'älter + als.' },
      { id: 'kmp-09', type: 'multiple-choice', prompt: 'Der Mount Everest ist ___ höchste Berg der Welt.', options: ['der', 'die', 'das', 'den'], answer: 'der', explanation: 'Superlativo con sustantivo → artículo + -ste: der höchste Berg (der Berg, masculino, Nominativ).' },
      { id: 'kmp-10', type: 'multiple-choice', prompt: 'Was machst du ___? (lo que MÁS te gusta)', options: ['am liebsten', 'lieber', 'gern', 'am meisten'], answer: 'am liebsten', explanation: 'gern → lieber → am liebsten: el tercer peldaño.' },
      { id: 'kmp-11', type: 'listen', say: 'Ich trinke lieber Tee als Kaffee.', prompt: 'Escucha: ¿qué frase oyes?', options: ['Ich trinke lieber Tee als Kaffee.', 'Ich trinke lieber Kaffee als Tee.', 'Ich trinke gern Tee und Kaffee.', 'Am liebsten trinke ich Kakao.'], answer: 'Ich trinke lieber Tee als Kaffee.', explanation: 'Atento al orden: lo preferido va primero.' },
      { id: 'kmp-12', type: 'multiple-choice', prompt: '„größer wie ich" es…', options: ['incorrecto (debe ser „größer als ich")', 'correcto siempre', 'más formal', 'un regionalismo aceptado en examen'], answer: 'incorrecto (debe ser „größer als ich")', explanation: 'Se oye coloquialmente, pero comparativo + als es la norma.' },
      { id: 'kmp-13', type: 'multiple-choice', prompt: 'Historia: Warum hat Mia ihr Handy gekauft?', options: ['Es war billiger als Bens Handy', 'Es hat die beste Kamera', 'Es ist am größten', 'Es war ein Geschenk'], answer: 'Es war billiger als Bens Handy', explanation: '„Es war billiger als deins."' },
      { id: 'kmp-14', type: 'multiple-choice', prompt: 'Historia: Was ist an Bens Handy besser?', options: ['die Kamera und der Bildschirm', 'der Akku', 'der Preis', 'nichts'], answer: 'die Kamera und der Bildschirm', explanation: '„Aber meins hat die bessere Kamera. Und einen größeren Bildschirm."' },
      { id: 'kmp-15', type: 'fill-blank', prompt: 'Historia: Meins ist leichter und der Akku hält ___. (lang, comparativo)', answer: 'länger', explanation: 'lang → länger (umlaut): el argumento ganador de Mia.' }
    ],
    story: {
      intro: 'Mia estrena móvil y Ben defiende el suyo. Una batalla entera de comparativos: billiger, besser, größer, leichter, am wichtigsten…',
      lines: [
        { speaker: 'Mia', de: 'Schau mal, mein neues Handy! Es war billiger als deins.', es: '¡Mira, mi móvil nuevo! Fue más barato que el tuyo.' },
        { speaker: 'Ben', de: 'Aber meins hat die bessere Kamera. Und einen größeren Bildschirm.', es: 'Pero el mío tiene mejor cámara. Y una pantalla más grande.' },
        { speaker: 'Mia', de: 'Größer ist nicht immer besser. Meins ist leichter und der Akku hält länger.', es: 'Más grande no siempre es mejor. El mío es más ligero y la batería dura más.' },
        { speaker: 'Ben', de: 'Hm. Welches Handy ist denn am beliebtesten?', es: 'Mmm. ¿Y cuál es el móvil más popular?' },
        { speaker: 'Mia', de: 'Keine Ahnung. Aber meins war am billigsten!', es: 'Ni idea. ¡Pero el mío fue el más barato!' },
        { speaker: 'Ben', de: 'Du bist genauso sparsam wie dein Vater.', es: 'Eres igual de ahorradora que tu padre.' },
        { speaker: 'Mia', de: 'Lieber sparsam als pleite! Am wichtigsten ist: Es funktioniert.', es: '¡Mejor ahorradora que arruinada! Lo más importante es que funciona.' },
        { speaker: '', de: 'Am Ende spielen beide auf Mias Handy — weil Bens Akku leer ist.', es: 'Al final los dos juegan en el móvil de Mia — porque a Ben se le ha acabado la batería.' }
      ]
    }
  });
})();
