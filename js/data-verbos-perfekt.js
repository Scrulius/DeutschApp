(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Partizip II — regulares e irregulares frecuentes</caption>' +
    '<tr><th>Infinitivo</th><th>Partizip II</th><th>Auxiliar</th></tr>' +
    '<tr><td>machen</td><td>gemacht</td><td>haben</td></tr>' +
    '<tr><td>spielen</td><td>gespielt</td><td>haben</td></tr>' +
    '<tr><td>kaufen</td><td>gekauft</td><td>haben</td></tr>' +
    '<tr><td>essen</td><td>gegessen</td><td>haben</td></tr>' +
    '<tr><td>trinken</td><td>getrunken</td><td>haben</td></tr>' +
    '<tr><td>sehen</td><td>gesehen</td><td>haben</td></tr>' +
    '<tr><td>lesen</td><td>gelesen</td><td>haben</td></tr>' +
    '<tr><td>schreiben</td><td>geschrieben</td><td>haben</td></tr>' +
    '<tr><td>gehen</td><td>gegangen</td><td class="hl">sein</td></tr>' +
    '<tr><td>fahren</td><td>gefahren</td><td class="hl">sein</td></tr>' +
    '<tr><td>kommen</td><td>gekommen</td><td class="hl">sein</td></tr>' +
    '<tr><td>bleiben</td><td>geblieben</td><td class="hl">sein</td></tr>' +
    '<tr><td>studieren</td><td>studiert <em>(sin ge-)</em></td><td>haben</td></tr>' +
    '<tr><td>verstehen</td><td>verstanden <em>(sin ge-)</em></td><td>haben</td></tr>' +
    '<tr><td>einkaufen</td><td>eingekauft</td><td>haben</td></tr>' +
    '</table></div>' +
    '<div class="tip">Reglas del Partizip II: regulares <strong>ge-…-t</strong> (gemacht), irregulares <strong>ge-…-en</strong> con cambio de raíz (gegessen); verbos en <strong>-ieren</strong> y los inseparables (be-, ver-, ent-…) van <strong>SIN ge-</strong> (studiert, bezahlt); los separables meten el -ge- en medio (ein<strong>ge</strong>kauft).</div>';

  registerModule({
    id: 'perfekt',
    category: 'nivel2',
    icon: '⏪',
    title: 'El Perfekt — hablar del pasado',
    desc: 'Ich habe gegessen, ich bin gegangen. El pasado que de verdad se usa al hablar: haben/sein + participio al final.',
    lessons: [
      {
        title: 'Cómo se forma: auxiliar + participio al final',
        content: `<p>Para contar algo en pasado hablado, el alemán usa el <strong>Perfekt</strong>: un auxiliar conjugado (<strong>haben</strong> o <strong>sein</strong>) en posición 2, y el <strong>Partizip II</strong> (participio) al FINAL de la frase.</p>
          <div class="tip">Es el equivalente de uso al pretérito perfecto/indefinido español: "he comido / comí" → „ich habe gegessen". En conversación se usa muchísimo más que el Präteritum (el otro pasado, más de textos escritos).</div>`,
        examples: [
          { de: 'Ich <strong>habe</strong> Pizza <strong>gegessen</strong>.', es: 'He comido pizza / Comí pizza.', note: 'habe en posición 2, gegessen al final.' },
          { de: 'Wir <strong>haben</strong> einen Film <strong>gesehen</strong>.', es: 'Vimos una película.' },
          { de: 'Gestern <strong>bin</strong> ich ins Kino <strong>gegangen</strong>.', es: 'Ayer fui al cine.', note: 'gehen usa „sein"; el auxiliar sigue en posición 2 aunque „Gestern" abra la frase.' }
        ]
      },
      {
        title: 'Formar el Partizip II',
        content: `<p>Tres patrones básicos: <strong>regulares</strong> ge-…-t (machen → gemacht), <strong>irregulares</strong> ge-…-en con cambio de vocal (trinken → getrunken), y los que van <strong>sin ge-</strong>: verbos en -ieren (studieren → studiert) e inseparables (verstehen → verstanden, bezahlen → bezahlt). Los separables insertan el -ge-: einkaufen → eingekauft.</p>`,
        examples: [
          { de: 'machen → <strong>gemacht</strong>', es: 'hacer → hecho', note: 'Regular: ge-…-t.' },
          { de: 'trinken → <strong>getrunken</strong>', es: 'beber → bebido', note: 'Irregular: ge-…-en + cambio de raíz.' },
          { de: 'studieren → <strong>studiert</strong>', es: 'estudiar → estudiado', note: 'Verbos en -ieren: SIN ge-.' },
          { de: 'einkaufen → <strong>eingekauft</strong>', es: 'hacer la compra', note: 'Separable: el -ge- va en medio.' }
        ]
      },
      {
        title: '¿haben o sein?',
        content: `<p>La mayoría de verbos usan <strong>haben</strong>. Usan <strong>sein</strong> los verbos de <strong>movimiento de un sitio a otro</strong> (gehen, fahren, kommen, fliegen, laufen) y de <strong>cambio de estado</strong> (aufstehen, einschlafen, werden), más los especiales <strong>sein</strong> y <strong>bleiben</strong>.</p>
          <div class="warn">En español TODO el pretérito perfecto va con "haber" (he ido, he comido). En alemán, "he ido" es „ich <strong>bin</strong> gegangen" (sein), no „habe". Es un fallo clásico del hispanohablante.</div>`,
        examples: [
          { de: 'Ich <strong>habe</strong> das Buch gelesen.', es: 'He leído el libro.', note: 'lesen → haben.' },
          { de: 'Ich <strong>bin</strong> nach Berlin gefahren.', es: 'Fui a Berlín.', note: 'fahren (movimiento) → sein.' },
          { de: 'Er <strong>ist</strong> früh aufgestanden.', es: 'Se levantó temprano.', note: 'aufstehen (cambio de estado) → sein.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'prf-01', type: 'fill-blank', prompt: 'Ich habe einen Kuchen ___ (machen, Partizip II).', answer: 'gemacht', explanation: 'Regular: ge-mach-t → gemacht.' },
      { id: 'prf-02', type: 'fill-blank', prompt: 'Wir haben Pizza ___ (essen, Partizip II).', answer: 'gegessen', explanation: 'Irregular: essen → gegessen.' },
      { id: 'prf-03', type: 'fill-blank', prompt: 'Sie hat einen Brief ___ (schreiben, Partizip II).', answer: 'geschrieben', explanation: 'schreiben → geschrieben.' },
      { id: 'prf-04', type: 'multiple-choice', prompt: 'Ich ___ nach Berlin gefahren.', options: ['bin', 'habe', 'hat', 'ist'], answer: 'bin', explanation: 'fahren = movimiento → auxiliar „sein" → ich bin.', tip: 'Perfekt con „sein": verbos de movimiento (gehen, fahren, kommen, fliegen) y de cambio de estado (aufstehen, werden), más sein y bleiben. El resto, „haben".' },
      { id: 'prf-05', type: 'multiple-choice', prompt: 'Sie ___ das Buch gelesen.', options: ['hat', 'ist', 'haben', 'bin'], answer: 'hat', explanation: 'lesen → „haben"; sie hat gelesen.' },
      { id: 'prf-06', type: 'multiple-choice', prompt: 'Gestern ___ ich ins Kino gegangen.', options: ['bin', 'habe', 'hat', 'ist'], answer: 'bin', explanation: 'gehen → „sein" → ich bin gegangen.' },
      { id: 'prf-07', type: 'multiple-choice', prompt: 'Wir ___ einen Film gesehen.', options: ['haben', 'sind', 'ist', 'seid'], answer: 'haben', explanation: 'sehen → „haben".' },
      { id: 'prf-08', type: 'translate', prompt: 'Traduce: He comido pizza.', answer: 'Ich habe Pizza gegessen.', explanation: 'haben + gegessen (al final).' },
      { id: 'prf-09', type: 'translate', prompt: 'Traduce: Ayer fui al cine. (empieza con "Gestern")', answer: 'Gestern bin ich ins Kino gegangen.', explanation: 'gehen → sein; „Gestern" en posición 1, „bin" en 2ª, participio al final.' },
      { id: 'prf-10', type: 'reorder', words: ['Ich', 'habe', 'einen', 'Film', 'gesehen'], hint: 'He visto una película.', answer: 'Ich habe einen Film gesehen.', explanation: 'Auxiliar „habe" en 2ª posición, „gesehen" al final.' },
      { id: 'prf-11', type: 'fill-blank', prompt: 'Ich habe in Berlin ___ (studieren, Partizip II).', answer: 'studiert', explanation: 'Verbos en -ieren: sin ge- → studiert.' },
      { id: 'prf-12', type: 'fill-blank', prompt: 'Wir haben schon ___ (einkaufen, Partizip II).', answer: 'eingekauft', explanation: 'Separable: el -ge- va en medio → ein-ge-kauft.' },
      { id: 'prf-13', type: 'multiple-choice', prompt: '¿Qué verbo forma el Perfekt con „sein"?', options: ['kommen', 'essen', 'machen', 'kaufen'], answer: 'kommen', explanation: 'kommen = movimiento → sein (ich bin gekommen). Los otros van con haben.' },
      { id: 'prf-14', type: 'match', prompt: 'Empareja cada infinitivo con su Partizip II:', pairs: [['essen', 'gegessen'], ['gehen', 'gegangen'], ['machen', 'gemacht'], ['trinken', 'getrunken']], explanation: 'Los irregulares (essen, gehen, trinken) llevan ge-…-en; los regulares (machen) ge-…-t.' },
      { id: 'prf-15', type: 'match', prompt: 'Empareja el infinitivo con su Partizip II (verbos con „sein"):', pairs: [['fahren', 'gefahren'], ['kommen', 'gekommen'], ['bleiben', 'geblieben'], ['aufstehen', 'aufgestanden']], explanation: 'Estos verbos de movimiento/estado forman el Perfekt con „sein": ich bin gefahren/gekommen/geblieben/aufgestanden.' },
      { id: 'prf-16', type: 'multiple-choice', prompt: 'Er ___ früh aufgestanden.', options: ['ist', 'hat', 'bin', 'haben'], answer: 'ist', explanation: 'aufstehen = cambio de estado → sein → er ist aufgestanden.' },
      { id: 'prf-17', type: 'listen', say: 'Ich bin nach Hause gegangen.', prompt: 'Escucha: ¿qué frase oyes?', options: ['Ich bin nach Hause gegangen.', 'Ich bin nach Hause gefahren.', 'Ich habe zu Hause gegessen.', 'Ich bin zu Hause geblieben.'], answer: 'Ich bin nach Hause gegangen.', explanation: 'gegangen (ir a pie) / gefahren (en vehículo) / geblieben (quedarse) — participios que suenan parecido.' },
      { id: 'prf-18', type: 'buckets', prompt: '¿Este verbo forma el Perfekt con haben o con sein?', buckets: ['haben', 'sein'], items: [['essen', 'haben'], ['fahren', 'sein'], ['kaufen', 'haben'], ['kommen', 'sein'], ['lesen', 'haben'], ['bleiben', 'sein']], explanation: 'Movimiento (fahren, kommen) y estado (bleiben) → sein; el resto → haben. El fallo típico español: "he ido" NO es „habe", es „bin gegangen".' },
      { id: 'prf-19', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Ich', 'habe', 'nach', 'Hause', 'gegangen.'], wrong: 1, fix: 'bin', explanation: 'gehen = movimiento → el auxiliar es SEIN: Ich bin nach Hause gegangen.' }
      ,
      { id: 'prf-20', type: 'multiple-choice', prompt: 'Historia: Wohin ist Anna am Samstag gefahren?', options: ['nach Hamburg', 'nach Berlin', 'an den See', 'zu Tom'], answer: 'nach Hamburg', explanation: '„Am Samstag bin ich nach Hamburg gefahren."' },
      { id: 'prf-21', type: 'multiple-choice', prompt: 'Historia: Was hat Tom am Wochenende gemacht?', options: ['Er ist zu Hause geblieben', 'Er ist nach Hamburg gefahren', 'Er hat gearbeitet', 'Er hat Fisch gekocht'], answer: 'Er ist zu Hause geblieben', explanation: '„Ich bin zu Hause geblieben. Ich habe ferngesehen und Pizza bestellt."' },
      { id: 'prf-22', type: 'fill-blank', prompt: 'Historia: Ich ___ zu Hause geblieben. (auxiliar)', answer: 'bin', explanation: 'bleiben forma el Perfekt con „sein": ich bin geblieben.' }
    ],
    story: {
      intro: 'Lunes en la oficina: Anna cuenta su fin de semana y Tom el suyo. Todo en Perfekt — fíjate en quién lleva haben y quién lleva sein.',
      lines: [
        { speaker: 'Tom', de: 'Na, was hast du am Wochenende gemacht?', es: 'Bueno, ¿qué hiciste el fin de semana?' },
        { speaker: 'Anna', de: 'Am Samstag bin ich nach Hamburg gefahren.', es: 'El sábado fui a Hamburgo.' },
        { speaker: 'Tom', de: 'Cool! Was hast du dort gemacht?', es: '¡Qué bien! ¿Qué hiciste allí?' },
        { speaker: 'Anna', de: 'Ich habe meine Tante besucht. Wir sind zum Hafen gegangen.', es: 'Visité a mi tía. Fuimos al puerto.' },
        { speaker: 'Tom', de: 'Habt ihr Fisch gegessen?', es: '¿Comisteis pescado?' },
        { speaker: 'Anna', de: 'Natürlich! Danach haben wir ein riesiges Schiff gesehen. Und du?', es: '¡Claro! Después vimos un barco gigante. ¿Y tú?' },
        { speaker: 'Tom', de: 'Ich bin zu Hause geblieben. Ich habe ferngesehen und Pizza bestellt.', es: 'Yo me quedé en casa. Vi la tele y pedí pizza.' },
        { speaker: 'Anna', de: 'Das ganze Wochenende?!', es: '¡¿Todo el fin de semana?!' },
        { speaker: 'Tom', de: 'Na ja... am Sonntag habe ich auch viel geschlafen.', es: 'Bueno… el domingo también dormí mucho.' },
        { speaker: 'Anna', de: 'Typisch! Nächstes Mal kommst du einfach mit.', es: '¡Típico! La próxima vez te vienes conmigo y punto.' },
        { speaker: '', de: 'Tom sagt Ja — aber nur, wenn sie wieder Fisch essen.', es: 'Tom dice que sí — pero solo si vuelven a comer pescado.' }
      ]
    }
  });
})();
