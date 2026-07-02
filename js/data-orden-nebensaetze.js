(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Conjunciones subordinantes (mandan el verbo al final)</caption>' +
    '<tr><th>Conjunción</th><th>Significado</th></tr>' +
    '<tr><td>weil</td><td>porque</td></tr>' +
    '<tr><td>dass</td><td>que</td></tr>' +
    '<tr><td>wenn</td><td>cuando (repetido) / si (condicional)</td></tr>' +
    '<tr><td>als</td><td>cuando (un momento único y pasado)</td></tr>' +
    '<tr><td>obwohl</td><td>aunque</td></tr>' +
    '<tr><td>während</td><td>mientras, durante</td></tr>' +
    '<tr><td>bevor</td><td>antes de que</td></tr>' +
    '<tr><td>nachdem</td><td>después de que</td></tr>' +
    '<tr><td>damit</td><td>para que</td></tr>' +
    '<tr><td>ob</td><td>si (whether)</td></tr>' +
    '</table></div>' +
    '<div class="tip">Si la subordinada va PRIMERO, cuenta como un único bloque en la posición 1: el verbo de la frase principal aparece justo después de la coma. „Weil ich krank bin, <strong>bleibe</strong> ich zu Hause."</div>';

  registerModule({
    id: 'nebensaetze',
    category: 'nivel3',
    icon: '🪢',
    title: 'Nebensätze — weil, dass, wenn, obwohl...',
    desc: 'Conjunciones que mandan el verbo al final. La estructura que sostiene las preguntas indirectas y mucho más.',
    lessons: [
      {
        title: 'Las conjunciones subordinantes mandan el verbo al final',
        content: `<p>weil, dass, wenn, als, obwohl, während, bevor, nachdem, damit y ob empujan el verbo conjugado hasta el final de su propia cláusula.</p>`,
        examples: [
          { de: 'Ich bleibe zu Hause, weil ich krank <strong>bin</strong>.', es: 'Me quedo en casa porque estoy enfermo.' },
          { de: 'Ich glaube, dass er recht <strong>hat</strong>.', es: 'Creo que él tiene razón.' },
          { de: 'Obwohl es <strong>regnet</strong>, gehen wir spazieren.', es: 'Aunque llueve, salimos a pasear.', note: 'La subordinada „Obwohl es regnet" cuenta como un bloque; el verbo principal „gehen" va justo después de la coma.' }
        ]
      },
      {
        title: 'wenn vs als: dos formas de decir "cuando"',
        content: `<p><strong>wenn</strong> = "cuando" habitual/repetido, o condicional "si". <strong>als</strong> = "cuando" para un momento único y ya cerrado en el pasado. Error típico: usar siempre "wenn" para cualquier "cuando" en pasado.</p>`,
        examples: [
          { de: 'Als ich Kind war, habe ich viel gespielt.', es: 'Cuando era niño, jugaba mucho.', note: 'als: un periodo único y cerrado del pasado.' },
          { de: 'Wenn ich Zeit habe, lese ich.', es: 'Cuando tengo tiempo, leo.', note: 'wenn: hábito repetido, presente.' },
          { de: 'Immer wenn es regnete, blieben wir zu Hause.', es: 'Cada vez que llovía, nos quedábamos en casa.', note: 'wenn: repetido, aunque sea en pasado.' },
          { de: 'Als der Krieg endete, war ich noch klein.', es: 'Cuando terminó la guerra, yo era pequeño.', note: 'als: evento único del pasado.' }
        ]
      },
      {
        title: 'La subordinada puede ir primero',
        content: `<p>Si la Nebensatz va antes que la frase principal, toda ella cuenta como UNA sola posición — así que el verbo de la frase principal aparece inmediatamente después de la coma (la regla V2 se respeta al nivel de toda la frase).</p>`,
        examples: [
          { de: 'Weil ich krank bin, <strong>bleibe</strong> ich zu Hause.', es: 'Porque estoy enfermo, me quedo en casa.' },
          { de: 'Wenn du Zeit hast, <strong>ruf</strong> mich an.', es: 'Si tienes tiempo, llámame.' },
          { de: 'Bevor ich schlafen gehe, <strong>putze</strong> ich mir die Zähne.', es: 'Antes de irme a dormir, me lavo los dientes.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'neb-01', type: 'reorder', words: ['Ich', 'bleibe', 'zu', 'Hause,', 'weil', 'ich', 'krank', 'bin'], answer: 'Ich bleibe zu Hause, weil ich krank bin.', explanation: '„weil" manda el verbo („bin") al final de su cláusula.', tip: 'Conjunciones subordinantes (weil, dass, wenn, obwohl, ob…) empujan el verbo conjugado al FINAL de su cláusula.' },
      { id: 'neb-02', type: 'reorder', words: ['Ich', 'glaube,', 'dass', 'er', 'recht', 'hat'], answer: 'Ich glaube, dass er recht hat.', explanation: '„dass" manda „hat" al final.' },
      { id: 'neb-03', type: 'reorder', words: ['Obwohl', 'es', 'regnet,', 'gehen', 'wir', 'spazieren'], answer: 'Obwohl es regnet, gehen wir spazieren.', explanation: 'La subordinada „Obwohl es regnet" cuenta como UNA posición; el verbo principal „gehen" va justo después de la coma.' },
      { id: 'neb-04', type: 'multiple-choice', prompt: 'Ich bleibe zu Hause, weil ich ___ bin.', options: ['krank', 'kranke', 'krankes', 'kranker'], answer: 'krank', explanation: 'Adjetivo predicativo tras „sein": no lleva terminación.' },
      { id: 'neb-05', type: 'multiple-choice', prompt: '___ ich Kind war, habe ich viel gespielt.', options: ['Als', 'Wenn', 'Ob', 'Dass'], answer: 'Als', explanation: 'Momento único y cerrado del pasado → als.' },
      { id: 'neb-06', type: 'multiple-choice', prompt: '___ ich Zeit habe, lese ich.', options: ['Wenn', 'Als', 'Ob', 'Dass'], answer: 'Wenn', explanation: 'Hábito repetido en presente → wenn.' },
      { id: 'neb-07', type: 'multiple-choice', prompt: 'Immer ___ es regnete, blieben wir zu Hause.', options: ['wenn', 'als', 'ob', 'dass'], answer: 'wenn', explanation: 'Repetido en el pasado ("cada vez que") → wenn; als es solo para un evento único.' },
      { id: 'neb-08', type: 'multiple-choice', prompt: '___ der Krieg endete, war ich noch klein.', options: ['Als', 'Wenn', 'Ob', 'Dass'], answer: 'Als' },
      { id: 'neb-09', type: 'reorder', words: ['Weil', 'ich', 'krank', 'bin,', 'bleibe', 'ich', 'zu', 'Hause'], answer: 'Weil ich krank bin, bleibe ich zu Hause.', explanation: 'Subordinada primero: „bleibe" (verbo principal) va justo tras la coma.' },
      { id: 'neb-10', type: 'reorder', words: ['Wenn', 'du', 'Zeit', 'hast,', 'ruf', 'mich', 'an'], answer: 'Wenn du Zeit hast, ruf mich an.', explanation: 'Subordinada „wenn du Zeit hast" en posición 1; verbo principal „ruf" justo después de la coma.' },
      { id: 'neb-11', type: 'reorder', words: ['Bevor', 'ich', 'schlafen', 'gehe,', 'putze', 'ich', 'mir', 'die', 'Zähne'], answer: 'Bevor ich schlafen gehe, putze ich mir die Zähne.' },
      { id: 'neb-12', type: 'multiple-choice', prompt: 'Ich weiß, ___ du mir helfen kannst.', options: ['dass', 'weil', 'ob', 'wenn'], answer: 'dass', explanation: '„dass" introduce una afirmación (que...), sin matiz condicional ni causal.' },
      { id: 'neb-13', type: 'multiple-choice', prompt: 'Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.', options: ['weil', 'dass', 'ob', 'obwohl'], answer: 'weil', explanation: '„weil" = porque, razón/causa.' },
      { id: 'neb-14', type: 'multiple-choice', prompt: '___ er müde war, hat er weitergearbeitet.', options: ['Obwohl', 'Weil', 'Dass', 'Ob'], answer: 'Obwohl', explanation: '„obwohl" = aunque, contraste.' },
      { id: 'neb-15', type: 'translate', prompt: 'Traduce: Me quedo en casa porque estoy enfermo.', answer: 'Ich bleibe zu Hause, weil ich krank bin.', explanation: 'weil + verbo al final.' },
      { id: 'neb-16', type: 'translate', prompt: 'Traduce: Creo que él tiene razón.', answer: 'Ich glaube, dass er recht hat.', explanation: 'dass + verbo al final.' },
      { id: 'neb-17', type: 'translate', prompt: 'Traduce: Cuando era niño, jugaba mucho. (als)', answer: 'Als ich Kind war, habe ich viel gespielt.', acceptable: ['Als ich ein Kind war, habe ich viel gespielt.'], explanation: 'als = momento único y cerrado del pasado. Con o sin „ein", ambas son correctas.' },
      { id: 'neb-18', type: 'multiple-choice', prompt: 'Ich rufe dich an, ___ ich zu Hause angekommen bin. (después de que haya llegado)', options: ['nachdem', 'bevor', 'während', 'obwohl'], answer: 'nachdem', explanation: '„nachdem" = después de que. Ojo: la cláusula de „nachdem" va un tiempo "por delante" — aquí Perfekt (angekommen bin) con principal en presente.' },
      { id: 'neb-19', type: 'multiple-choice', prompt: 'Ich mache das Licht aus, ___ ich das Haus verlasse. (antes de irme)', options: ['bevor', 'nachdem', 'während', 'obwohl'], answer: 'bevor', explanation: '„bevor" = antes de que.' },
      { id: 'neb-20', type: 'multiple-choice', prompt: 'Er hört Musik, ___ er arbeitet. (mientras trabaja)', options: ['während', 'bevor', 'nachdem', 'damit'], answer: 'während', explanation: '„während" = mientras, durante.' },
      { id: 'neb-21', type: 'multiple-choice', prompt: 'Ich lerne Deutsch, ___ ich in Berlin lebe.', options: ['weil', 'dass', 'ob', 'obwohl'], answer: 'weil', explanation: '„weil" = porque (razón).' },
      { id: 'neb-22', type: 'multiple-choice', prompt: 'Ich weiß, ___ du recht hast.', options: ['dass', 'weil', 'ob', 'wenn'], answer: 'dass', explanation: '„dass" = que (afirmación).' },
      { id: 'neb-23', type: 'reorder', words: ['Ich', 'bleibe', 'hier,', 'obwohl', 'es', 'spät', 'ist'], hint: 'Me quedo aquí aunque es tarde.', answer: 'Ich bleibe hier, obwohl es spät ist.', explanation: '„obwohl" manda el verbo „ist" al final.' },
      { id: 'neb-24', type: 'multiple-choice', prompt: '___ ich gestern nach Hause kam, war niemand da.', options: ['Als', 'Wenn', 'Ob', 'Dass'], answer: 'Als', explanation: 'Momento único y cerrado del pasado → als.' },
      { id: 'neb-25', type: 'multiple-choice', prompt: 'Immer ___ ich ihn sehe, lacht er.', options: ['wenn', 'als', 'ob', 'dass'], answer: 'wenn', explanation: 'Repetido („cada vez que") → wenn.' },
      { id: 'neb-26', type: 'reorder', words: ['Wenn', 'es', 'regnet,', 'bleiben', 'wir', 'zu', 'Hause'], hint: 'Si llueve, nos quedamos en casa.', answer: 'Wenn es regnet, bleiben wir zu Hause.', explanation: 'Subordinada primero → el verbo principal „bleiben" va justo tras la coma.' },
      { id: 'neb-27', type: 'multiple-choice', prompt: 'Er ruft mich an, ___ er angekommen ist. (después de que haya llegado)', options: ['nachdem', 'bevor', 'obwohl', 'damit'], answer: 'nachdem', explanation: '„nachdem" = después de que. La cláusula de „nachdem" va en Perfekt (angekommen ist) cuando la principal está en presente.' },
      { id: 'neb-28', type: 'multiple-choice', prompt: 'Ich frühstücke, ___ ich zur Arbeit gehe. (antes de ir)', options: ['bevor', 'nachdem', 'während', 'weil'], answer: 'bevor', explanation: '„bevor" = antes de que.' },
      { id: 'neb-29', type: 'translate', prompt: 'Traduce: Creo que ella viene mañana.', answer: 'Ich glaube, dass sie morgen kommt.', explanation: 'dass + verbo „kommt" al final.' },
      { id: 'neb-30', type: 'translate', prompt: 'Traduce: No voy porque estoy enfermo.', answer: 'Ich gehe nicht, weil ich krank bin.', explanation: 'weil + verbo „bin" al final.' },
      { id: 'neb-31', type: 'buckets', prompt: '¿Qué hace cada conector con el verbo?', buckets: ['verbo al final', 'inversión'], items: [['weil', 'verbo al final'], ['deshalb', 'inversión'], ['dass', 'verbo al final'], ['trotzdem', 'inversión'], ['obwohl', 'verbo al final'], ['außerdem', 'inversión']], explanation: 'Conjunciones subordinantes (weil/dass/obwohl) → verbo al final; adverbios conectores (deshalb/trotzdem/außerdem) → inversión en frase principal.' },
      { id: 'neb-32', type: 'find-error', prompt: '¿Qué palabra está mal COLOCADA?', words: ['Ich', 'bleibe', 'hier,', 'weil', 'ich', 'bin', 'müde.'], wrong: 5, fix: 'müde bin (el verbo va al final)', explanation: '„weil" manda el verbo conjugado al FINAL: …, weil ich müde bin.' }
      ,
      { id: 'neb-33', type: 'multiple-choice', prompt: 'Historia: Warum lernt Anna Deutsch?', options: ['weil sie in Berlin arbeiten möchte', 'weil ihre Familie deutsch ist', 'weil es leicht ist', 'weil ihr Freund Deutscher ist'], answer: 'weil sie in Berlin arbeiten möchte', explanation: '„Ich lerne Deutsch, weil ich in Berlin arbeiten möchte."' },
      { id: 'neb-34', type: 'multiple-choice', prompt: 'Historia: Was macht Anna, wenn sie einen schlechten Tag hat?', options: ['Sie hört deutsche Musik', 'Sie macht eine Pause', 'Sie ruft ihre Freunde an', 'Sie schläft'], answer: 'Sie hört deutsche Musik', explanation: '„Dann höre ich deutsche Musik, bis ich wieder Lust habe."' },
      { id: 'neb-35', type: 'fill-blank', prompt: 'Historia: Ich lerne Deutsch, ___ ich in Berlin arbeiten möchte. (porque)', answer: 'weil', explanation: '„weil" introduce la causa y manda el verbo („möchte") al final.' }
    ],
    story: {
      intro: 'Los amigos de Anna no entienden por qué estudia alemán cada noche. Su respuesta está hecha de subordinadas: weil, wenn, dass, als, bis, während — verbo al final en todas.',
      lines: [
        { speaker: '', de: 'Annas Freunde fragen oft, warum sie jeden Abend Deutsch lernt.', es: 'Los amigos de Anna preguntan a menudo por qué estudia alemán cada noche.' },
        { speaker: 'Anna', de: 'Ich lerne Deutsch, weil ich in Berlin arbeiten möchte.', es: 'Estudio alemán porque quiero trabajar en Berlín.' },
        { speaker: 'Freund', de: 'Obwohl es so schwer ist?', es: '¿Aunque es tan difícil?' },
        { speaker: 'Anna', de: 'Ja! Wenn ich jeden Tag übe, sehe ich Fortschritte.', es: '¡Sí! Si practico cada día, veo avances.' },
        { speaker: 'Freund', de: 'Und was machst du, wenn du einen schlechten Tag hast?', es: '¿Y qué haces cuando tienes un mal día?' },
        { speaker: 'Anna', de: 'Dann höre ich deutsche Musik, bis ich wieder Lust habe.', es: 'Entonces escucho música alemana hasta que me vuelven las ganas.' },
        { speaker: 'Freund', de: 'Ich glaube, dass du das schaffst.', es: 'Creo que lo vas a conseguir.' },
        { speaker: 'Anna', de: 'Danke! Als ich angefangen habe, konnte ich nur „Hallo" sagen.', es: '¡Gracias! Cuando empecé, solo sabía decir "Hallo".' },
        { speaker: 'Freund', de: 'Und jetzt erklärst du mir Grammatik, während wir Kaffee trinken.', es: 'Y ahora me explicas gramática mientras tomamos café.' },
        { speaker: '', de: 'Nächsten Monat hat Anna ihr erstes Vorstellungsgespräch — auf Deutsch.', es: 'El mes que viene Anna tiene su primera entrevista de trabajo — en alemán.' }
      ]
    }
  });
})();
