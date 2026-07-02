(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Verbos separables frecuentes</caption>' +
    '<tr><th>Infinitivo</th><th>Significado</th><th>Partizip II</th></tr>' +
    '<tr><td>aufstehen</td><td>levantarse</td><td>ist aufgestanden</td></tr>' +
    '<tr><td>anrufen</td><td>llamar por teléfono</td><td>hat angerufen</td></tr>' +
    '<tr><td>einkaufen</td><td>hacer la compra</td><td>hat eingekauft</td></tr>' +
    '<tr><td>aufmachen</td><td>abrir</td><td>hat aufgemacht</td></tr>' +
    '<tr><td>zumachen</td><td>cerrar</td><td>hat zugemacht</td></tr>' +
    '<tr><td>fernsehen</td><td>ver la tele</td><td>hat ferngesehen</td></tr>' +
    '<tr><td>abholen</td><td>recoger (a alguien)</td><td>hat abgeholt</td></tr>' +
    '<tr><td>ankommen</td><td>llegar</td><td>ist angekommen</td></tr>' +
    '<tr><td>einsteigen</td><td>subir (a un vehículo)</td><td>ist eingestiegen</td></tr>' +
    '<tr><td>aussteigen</td><td>bajar (de un vehículo)</td><td>ist ausgestiegen</td></tr>' +
    '<tr><td>umsteigen</td><td>hacer trasbordo</td><td>ist umgestiegen</td></tr>' +
    '<tr><td>anfangen</td><td>empezar</td><td>hat angefangen</td></tr>' +
    '<tr><td>aufhören</td><td>terminar, dejar de</td><td>hat aufgehört</td></tr>' +
    '<tr><td>mitnehmen</td><td>llevarse (algo)</td><td>hat mitgenommen</td></tr>' +
    '<tr><td>einladen</td><td>invitar</td><td>hat eingeladen</td></tr>' +
    '<tr><td>vorschlagen</td><td>proponer</td><td>hat vorgeschlagen</td></tr>' +
    '<tr><td>aufräumen</td><td>ordenar, recoger</td><td>hat aufgeräumt</td></tr>' +
    '<tr><td>kennenlernen</td><td>conocer (a alguien)</td><td>hat kennengelernt</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Prefijos NO separables (nunca se van al final, nunca llevan -ge- extra)</caption>' +
    '<tr><th>Prefijo</th><th>Ejemplo</th><th>Partizip II</th></tr>' +
    '<tr><td>be-</td><td>bezahlen (pagar)</td><td>bezahlt</td></tr>' +
    '<tr><td>ge-</td><td>gehören (pertenecer)</td><td>gehört</td></tr>' +
    '<tr><td>er-</td><td>erklären (explicar)</td><td>erklärt</td></tr>' +
    '<tr><td>ver-</td><td>verstehen (entender)</td><td>verstanden</td></tr>' +
    '<tr><td>zer-</td><td>zerstören (destruir)</td><td>zerstört</td></tr>' +
    '<tr><td>ent-</td><td>entschuldigen (disculpar)</td><td>entschuldigt</td></tr>' +
    '<tr><td>emp-</td><td>empfehlen (recomendar)</td><td>empfohlen</td></tr>' +
    '<tr><td>miss-</td><td>misstrauen (desconfiar)</td><td>misstraut</td></tr>' +
    '</table></div>' +
    '<div class="tip">Pista de oído: en los verbos separables, el prefijo se pronuncia con ACENTO fuerte (<strong>AUF</strong>stehen). En los no separables, el acento cae en el verbo (ver<strong>STEH</strong>en). Si al escuchar detectas dónde suena el golpe de voz, sabes si el prefijo se va a separar o no.</div>';

  registerModule({
    id: 'separables',
    category: 'nivel2',
    icon: '✂️',
    title: 'Verbos separables',
    desc: 'aufstehen, anrufen, einkaufen... el prefijo se escapa al final de la frase. El español no tiene nada parecido.',
    lessons: [
      {
        title: '¿Qué es un verbo separable?',
        content: `<p>Muchos verbos alemanes se forman con un <strong>verbo base + un prefijo</strong> (auf-, an-, aus-, ein-, mit-, zu-, weg-, vor-, zurück-, her-, hin-...). En el infinitivo se escriben juntos, como una sola palabra: <strong>aufstehen</strong>. Pero al conjugar el verbo en una frase principal, el prefijo se <strong>separa y vuela al final</strong> de la frase.</p>
          <div class="warn">El español no tiene ningún fenómeno equivalente: aquí no basta con "traducir la regla", hay que instalar un reflejo nuevo. Piensa en el verbo separable como dos piezas: una se queda en la posición 2 (conjugada), la otra viaja sola hasta el final.</div>`,
        examples: [
          { de: 'aufstehen → Ich <strong>stehe</strong> früh <strong>auf</strong>.', es: 'Me levanto temprano.', note: 'Infinitivo: una palabra. En la frase: „stehe" en posición 2, „auf" al final.' },
          { de: 'anrufen → Ich <strong>rufe</strong> dich morgen <strong>an</strong>.', es: 'Te llamo mañana.' },
          { de: 'einkaufen → Wir <strong>kaufen</strong> heute <strong>ein</strong>.', es: 'Hoy hacemos la compra.' },
          { de: 'aufmachen → Mach das Fenster <strong>auf</strong>!', es: '¡Abre la ventana!', note: 'Mismo patrón en imperativo.' }
        ]
      },
      {
        title: 'El prefijo vuelve a pegarse: con verbo modal y con "zu"',
        content: `<p>Cuando aparece un verbo modal (können, müssen, wollen, sollen, dürfen), el verbo separable ya NO se conjuga — el modal ocupa la posición 2, y el separable va <strong>entero, en infinitivo, al final</strong>. Con construcciones de "zu + infinitivo" pasa algo parecido, pero „zu" se cuela DENTRO del verbo, entre el prefijo y la raíz: <strong>auf-zu-stehen</strong>.</p>`,
        examples: [
          { de: 'Ich muss früh <strong>aufstehen</strong>.', es: 'Tengo que levantarme temprano.', note: 'Con modal: el separable va entero al final, sin partirse.' },
          { de: 'Er will mich morgen <strong>anrufen</strong>.', es: 'Él quiere llamarme mañana.' },
          { de: 'Es ist wichtig, das Fenster <strong>aufzumachen</strong>.', es: 'Es importante abrir la ventana.', note: '„zu" se inserta entre „auf" y „machen".' },
          { de: 'Ich habe keine Lust, früh <strong>aufzustehen</strong>.', es: 'No tengo ganas de levantarme temprano.' }
        ]
      },
      {
        title: 'El Perfekt: el -ge- se cuela en medio',
        content: `<p>En Perfekt, el participio inserta <strong>-ge-</strong> entre el prefijo y la raíz, y todo se sigue escribiendo junto: prefijo + ge + participio. <strong>aufstehen → aufgestanden</strong>, <strong>anrufen → angerufen</strong>, <strong>einkaufen → eingekauft</strong>.</p>`,
        examples: [
          { de: 'Ich bin früh <strong>aufgestanden</strong>.', es: 'Me levanté temprano.', note: 'sein, porque aufstehen implica cambio de estado/movimiento.' },
          { de: 'Ich habe dich <strong>angerufen</strong>.', es: 'Te llamé.' },
          { de: 'Wir haben <strong>eingekauft</strong>.', es: 'Hicimos la compra.' },
          { de: 'Hast du das Fenster <strong>aufgemacht</strong>?', es: '¿Has abierto la ventana?' }
        ]
      },
      {
        title: 'Verbos NO separables: be-, ge-, er-, ver-, zer-, ent-, emp-, miss-',
        content: `<p>Un grupo cerrado de prefijos átonos <strong>nunca</strong> se separa y <strong>nunca</strong> añade -ge- extra en el Partizip II: <strong>be-, ge-, er-, ver-, zer-, ent-, emp-, miss-</strong>. Compara el par verstehen (entender, NO separable) / vorstellen (presentar, SÍ separable) para entrenar el oído.</p>`,
        examples: [
          { de: 'Ich verstehe das nicht.', es: 'No entiendo eso.', note: '„ver-" nunca se separa: nunca dirás „Ich stehe das nicht ver".' },
          { de: 'Ich habe das nicht <strong>verstanden</strong>.', es: 'No lo entendí.', note: 'Sin -ge- extra: ver+standen, no „geverstanden".' },
          { de: 'Er bezahlt die Rechnung.', es: 'Él paga la cuenta.' },
          { de: 'Er hat die Rechnung <strong>bezahlt</strong>.', es: 'Pagó la cuenta.', note: 'Sin -ge-: „be-" es inseparable.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'sep-01', type: 'multiple-choice', prompt: 'Ich stehe jeden Tag früh ___.', options: ['auf', 'an', 'aus', 'ein'], answer: 'auf', explanation: 'aufstehen: el prefijo „auf" va al final en la frase principal.' },
      { id: 'sep-02', type: 'multiple-choice', prompt: 'Ich rufe dich morgen ___.', options: ['an', 'auf', 'aus', 'mit'], answer: 'an' },
      { id: 'sep-03', type: 'multiple-choice', prompt: 'Wir kaufen heute ___.', options: ['ein', 'an', 'auf', 'aus'], answer: 'ein' },
      { id: 'sep-04', type: 'fill-blank', prompt: 'Es ist heiß. Mach das Fenster ___! (abrir la ventana)', answer: 'auf', explanation: 'aufmachen = abrir; el prefijo separable „auf" va al final.' },
      { id: 'sep-05', type: 'reorder', words: ['Ich', 'stehe', 'um', 'sieben', 'Uhr', 'auf'], answer: 'Ich stehe um sieben Uhr auf.', explanation: 'Verbo conjugado („stehe") en posición 2, prefijo („auf") al final.' },
      { id: 'sep-06', type: 'reorder', words: ['Er', 'ruft', 'seine', 'Mutter', 'an'], answer: 'Er ruft seine Mutter an.', explanation: 'anrufen: „ruft" en posición 2, „an" al final.' },
      { id: 'sep-07', type: 'reorder', words: ['Wir', 'kaufen', 'am', 'Samstag', 'ein'], answer: 'Wir kaufen am Samstag ein.' },
      { id: 'sep-08', type: 'multiple-choice', prompt: 'Ich muss früh ___.', options: ['aufstehen', 'aufstehe', 'stehe auf', 'auf stehen'], answer: 'aufstehen', explanation: 'Con verbo modal („muss"), el separable va entero e infinitivo al final.' },
      { id: 'sep-09', type: 'multiple-choice', prompt: 'Er will mich morgen ___.', options: ['anrufen', 'ruft an', 'anruft', 'an rufen'], answer: 'anrufen' },
      { id: 'sep-10', type: 'fill-blank', prompt: 'Es ist wichtig, das Fenster ___ (aufmachen + zu).', answer: 'aufzumachen', explanation: '„zu" se cuela entre el prefijo y el verbo: auf-zu-machen.' },
      { id: 'sep-11', type: 'fill-blank', prompt: 'Ich habe keine Lust, früh ___ (aufstehen + zu).', answer: 'aufzustehen' },
      { id: 'sep-12', type: 'multiple-choice', prompt: 'Ich bin früh ___.', options: ['aufgestanden', 'aufgestehen', 'gestandenauf', 'aufstehen'], answer: 'aufgestanden', explanation: 'Perfekt: -ge- se cuela entre el prefijo y el participio.' },
      { id: 'sep-13', type: 'multiple-choice', prompt: 'Ich habe dich gestern ___.', options: ['angerufen', 'gerufen an', 'anrufen', 'aufgerufen'], answer: 'angerufen' },
      { id: 'sep-14', type: 'fill-blank', prompt: 'Wir haben ___ (einkaufen, Perfekt).', answer: 'eingekauft' },
      { id: 'sep-15', type: 'fill-blank', prompt: 'Hast du das Fenster ___ (aufmachen, Perfekt)?', answer: 'aufgemacht' },
      { id: 'sep-16', type: 'multiple-choice', prompt: '„verstehen" (comprender) es un verbo...', options: ['no separable', 'separable'], answer: 'no separable', explanation: 'Empieza con „ver-", uno de los prefijos que nunca se separan.' },
      { id: 'sep-17', type: 'multiple-choice', prompt: 'Ich habe das nicht ___.', options: ['verstanden', 'geverstanden', 'verstehen', 'standenver'], answer: 'verstanden', explanation: 'verstehen es inseparable: Partizip II sin -ge- → verstanden.' },
      { id: 'sep-18', type: 'multiple-choice', prompt: 'Er hat die Rechnung ___.', options: ['bezahlt', 'gebezahlt', 'bezahlen', 'zahltbe'], answer: 'bezahlt', explanation: 'bezahlen (be- inseparable): Partizip II sin -ge- → bezahlt.' },
      { id: 'sep-19', type: 'multiple-choice', prompt: '„aufstehen" es un verbo...', options: ['separable', 'no separable'], answer: 'separable', explanation: 'El prefijo „auf-" sí se separa.' },
      { id: 'sep-20', type: 'reorder', words: ['Wir', 'laden', 'dich', 'zur', 'Party', 'ein'], answer: 'Wir laden dich zur Party ein.', explanation: 'einladen: „laden" en posición 2, „ein" al final.' },
      { id: 'sep-21', type: 'multiple-choice', prompt: 'Wir haben dich zur Party ___.', options: ['eingeladen', 'geladenein', 'einladen', 'ladenein'], answer: 'eingeladen' },
      { id: 'sep-22', type: 'translate', prompt: 'Traduce: Recojo a mi hermana a las cinco. (abholen)', answer: 'Ich hole meine Schwester um fünf Uhr ab.', explanation: 'abholen: „hole" en posición 2, „ab" al final.' },
      { id: 'sep-23', type: 'translate', prompt: 'Traduce: Hemos llamado a la profesora. (anrufen)', answer: 'Wir haben die Lehrerin angerufen.', explanation: 'Perfekt de anrufen: angerufen.' },
      { id: 'sep-24', type: 'reorder', words: ['Der', 'Film', 'fängt', 'um', 'acht', 'Uhr', 'an'], answer: 'Der Film fängt um acht Uhr an.', explanation: 'anfangen: „fängt" (a→ä) en posición 2, „an" al final de la frase.' },
      { id: 'sep-25', type: 'reorder', words: ['Ich', 'räume', 'mein', 'Zimmer', 'auf'], hint: 'Ordeno mi habitación.', answer: 'Ich räume mein Zimmer auf.', explanation: 'aufräumen: „räume" en posición 2, „auf" al final.' },
      { id: 'sep-26', type: 'multiple-choice', prompt: 'Der Zug kommt um 8 Uhr ___.', options: ['an', 'auf', 'aus', 'ein'], answer: 'an', explanation: 'ankommen: el prefijo „an" va al final.' },
      { id: 'sep-27', type: 'multiple-choice', prompt: 'Am Bahnhof steige ich ___.', options: ['aus', 'ein', 'um', 'auf'], answer: 'aus', explanation: 'aussteigen (bajar de un vehículo): prefijo „aus" al final.' },
      { id: 'sep-28', type: 'multiple-choice', prompt: 'Ich möchte dich zum Essen ___.', options: ['einladen', 'lade ein', 'einlade', 'ein laden'], answer: 'einladen', explanation: 'Con modal („möchte"), el separable va entero e infinitivo al final.' },
      { id: 'sep-29', type: 'fill-blank', prompt: 'Der Unterricht hat schon ___ (anfangen, Perfekt).', answer: 'angefangen', explanation: 'Perfekt: -ge- se cuela → an-ge-fangen.' },
      { id: 'sep-30', type: 'fill-blank', prompt: 'Ich habe vor, morgen früher ___ (aufstehen + zu).', answer: 'aufzustehen', explanation: '„zu" se inserta entre el prefijo y el verbo: auf-zu-stehen.' },
      { id: 'sep-31', type: 'multiple-choice', prompt: 'Entschuldigung, ich ___ dich nicht.', options: ['verstehe', 'stehe...ver', 'verstehen', 'stehe ver'], answer: 'verstehe', explanation: 'verstehen es INSEPARABLE (ver-): no se parte nunca.' },
      { id: 'sep-32', type: 'reorder', words: ['Wann', 'stehst', 'du', 'auf'], punctuation: '?', hint: '¿Cuándo te levantas?', answer: 'Wann stehst du auf?', explanation: 'Pregunta con W-Wort: „stehst" en 2ª posición, „auf" al final.' },
      { id: 'sep-33', type: 'multiple-choice', prompt: 'Es ist kalt. Mach bitte das Fenster ___!', options: ['zu', 'auf', 'an', 'ein'], answer: 'zu', explanation: 'zumachen = cerrar; el prefijo „zu" al final (auf = abrir).' },
      { id: 'sep-34', type: 'multiple-choice', prompt: 'Wir sind pünktlich ___.', options: ['angekommen', 'gekommen an', 'ankommen', 'ankamen'], answer: 'angekommen', explanation: 'Perfekt de ankommen con „sein": an-ge-kommen.' },
      { id: 'sep-35', type: 'buckets', prompt: '¿Separable o no separable?', buckets: ['separable', 'no separable'], items: [['aufstehen', 'separable'], ['verstehen', 'no separable'], ['einkaufen', 'separable'], ['bezahlen', 'no separable'], ['anrufen', 'separable'], ['erklären', 'no separable']], explanation: 'auf-/ein-/an- se separan; ver-/be-/er- nunca. Pista de oído: si el acento cae en el prefijo (AUFstehen), es separable.' },
      { id: 'sep-36', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Ich', 'muss', 'früh', 'aufstehe.'], wrong: 3, fix: 'aufstehen', explanation: 'Con un modal („muss"), el verbo separable va ENTERO e infinitivo al final: aufstehen, no conjugado.' }
      ,
      { id: 'sep-37', type: 'multiple-choice', prompt: 'Historia: Wann klingelt der Wecker?', options: ['um sieben Uhr', 'um halb acht', 'um acht Uhr', 'um sechs Uhr'], answer: 'um sieben Uhr', explanation: '„Es ist sieben Uhr. Der Wecker klingelt."' },
      { id: 'sep-38', type: 'multiple-choice', prompt: 'Historia: Warum ist das Meeting am Ende kein Problem?', options: ['Der Chef hat es abgesagt', 'Lea kommt pünktlich', 'Es ist erst morgen', 'Die Kollegin macht es allein'], answer: 'Der Chef hat es abgesagt', explanation: '„Der Chef hat das Meeting abgesagt." — absagen, otro separable (en Perfekt: abgesagt).' },
      { id: 'sep-39', type: 'fill-blank', prompt: 'Historia: Das Meeting fängt um acht ___! (prefijo)', answer: 'an', explanation: 'anfangen: „fängt" en posición 2, „an" al final.' }
    ],
    story: {
      intro: 'La mañana caótica de Lea está contada casi solo con verbos separables: aufstehen, aufwachen, abfahren, anziehen, zumachen, einsteigen, anrufen, anfangen, ankommen, absagen…',
      lines: [
        { speaker: '', de: 'Es ist sieben Uhr. Der Wecker klingelt.', es: 'Son las siete. Suena el despertador.' },
        { speaker: 'Lea', de: 'Ich stehe auf... nur noch fünf Minuten...', es: 'Me levanto… solo cinco minutitos más…' },
        { speaker: '', de: 'Um halb acht wacht Lea wieder auf. Sie ist spät dran!', es: 'A las siete y media Lea se despierta otra vez. ¡Va tarde!' },
        { speaker: 'Lea', de: 'Oh nein! Der Bus fährt gleich ab!', es: '¡Oh no! ¡El bus está a punto de salir!' },
        { speaker: '', de: 'Lea zieht sich an, macht das Fenster zu und läuft los.', es: 'Lea se viste, cierra la ventana y sale corriendo.' },
        { speaker: 'Lea', de: 'Warte! Ich steige noch ein!', es: '¡Espera! ¡Que me subo!' },
        { speaker: '', de: 'Im Bus ruft ihre Kollegin an.', es: 'En el bus, llama su compañera.' },
        { speaker: 'Kollegin', de: 'Lea, wo bist du? Das Meeting fängt um acht an!', es: 'Lea, ¿dónde estás? ¡La reunión empieza a las ocho!' },
        { speaker: 'Lea', de: 'Ich komme gleich an! Fangt schon mal ohne mich an.', es: '¡Estoy a punto de llegar! Empezad sin mí.' },
        { speaker: '', de: 'Um zehn nach acht kommt Lea im Büro an.', es: 'A las ocho y diez, Lea llega a la oficina.' },
        { speaker: 'Kollegin', de: 'Ah, Lea! Der Chef hat das Meeting abgesagt.', es: '¡Ah, Lea! El jefe ha cancelado la reunión.' },
        { speaker: 'Lea', de: 'Was?! Na super. Dann fange ich den Tag eben mit einem Kaffee an.', es: '¡¿Qué?! Genial. Pues entonces empiezo el día con un café.' }
      ]
    }
  });
})();
