(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Conjugación de los modales (presente)</caption>' +
    '<tr><th></th><th>können</th><th>müssen</th><th>dürfen</th><th>wollen</th><th>sollen</th><th>möchten</th></tr>' +
    '<tr><td>ich</td><td class="hl">kann</td><td class="hl">muss</td><td class="hl">darf</td><td class="hl">will</td><td>soll</td><td>möchte</td></tr>' +
    '<tr><td>du</td><td>kannst</td><td>musst</td><td>darfst</td><td>willst</td><td>sollst</td><td>möchtest</td></tr>' +
    '<tr><td>er/sie/es</td><td class="hl">kann</td><td class="hl">muss</td><td class="hl">darf</td><td class="hl">will</td><td>soll</td><td>möchte</td></tr>' +
    '<tr><td>wir</td><td>können</td><td>müssen</td><td>dürfen</td><td>wollen</td><td>sollen</td><td>möchten</td></tr>' +
    '<tr><td>ihr</td><td>könnt</td><td>müsst</td><td>dürft</td><td>wollt</td><td>sollt</td><td>möchtet</td></tr>' +
    '<tr><td>sie/Sie</td><td>können</td><td>müssen</td><td>dürfen</td><td>wollen</td><td>sollen</td><td>möchten</td></tr>' +
    '</table></div>' +
    '<div class="tip">Fíjate: <strong>ich</strong> y <strong>er/sie/es</strong> son IGUALES y sin terminación (ich kann, er kann). En singular cambia la vocal (können→kann, müssen→muss, dürfen→darf).</div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Qué significa cada uno</caption>' +
    '<tr><th>Modal</th><th>Significado</th><th>Ejemplo</th></tr>' +
    '<tr><td>können</td><td>poder (capacidad/posibilidad)</td><td>Ich kann schwimmen.</td></tr>' +
    '<tr><td>müssen</td><td>tener que (obligación)</td><td>Ich muss arbeiten.</td></tr>' +
    '<tr><td>dürfen</td><td>tener permiso</td><td>Hier darf man parken.</td></tr>' +
    '<tr><td>wollen</td><td>querer (intención fuerte)</td><td>Er will Arzt werden.</td></tr>' +
    '<tr><td>sollen</td><td>deber (encargo/consejo de otro)</td><td>Du sollst Oma anrufen.</td></tr>' +
    '<tr><td>möchten</td><td>querría (educado)</td><td>Ich möchte einen Tee.</td></tr>' +
    '</table></div>' +
    '<div class="warn"><strong>nicht müssen ≠ nicht dürfen.</strong> „Du musst nicht kommen" = no hace falta que vengas. „Du darfst nicht kommen" = tienes PROHIBIDO venir. El español "no debes" es ambiguo — el alemán no.</div>';

  registerModule({
    id: 'modal',
    category: 'nivel1',
    icon: '🔑',
    title: 'Los verbos modales',
    desc: 'können, müssen, dürfen, wollen… El modal se conjuga en posición 2 y el otro verbo se va, en infinitivo, al final.',
    lessons: [
      {
        title: 'La pinza: modal en posición 2, infinitivo al final',
        content: `<p>En español, "puedo venir" va junto. En alemán, el modal y el verbo se separan y forman una <strong>pinza</strong> (Satzklammer): el modal conjugado en la posición 2, y el otro verbo <strong>en infinitivo al FINAL</strong> de la frase. Todo lo demás queda dentro de la pinza.</p>
          <div class="warn">El error nº 1: conjugar los dos verbos ("Ich kann spreche Deutsch" ✗). El segundo verbo va SIEMPRE en infinitivo y al final: „Ich kann Deutsch sprechen".</div>`,
        examples: [
          { de: 'Ich <strong>kann</strong> heute nicht <strong>kommen</strong>.', es: 'Hoy no puedo venir.', note: 'kann (pos. 2) … kommen (final): la pinza.' },
          { de: '<strong>Musst</strong> du morgen <strong>arbeiten</strong>?', es: '¿Tienes que trabajar mañana?' },
          { de: 'Wir <strong>wollen</strong> im Sommer nach Österreich <strong>fahren</strong>.', es: 'Queremos ir a Austria en verano.' },
          { de: 'Ich <strong>möchte</strong> einen Kaffee, bitte.', es: 'Querría un café, por favor.', note: 'Con möchten a veces ni hace falta segundo verbo.' }
        ]
      },
      {
        title: 'Conjugación: ich y er/sie/es son gemelos',
        content: `<p>Los modales se conjugan raro a propósito: en singular <strong>cambia la vocal</strong> (können→kann, müssen→muss, dürfen→darf) y las formas de <strong>ich</strong> y <strong>er/sie/es</strong> son idénticas y SIN terminación: ich kann, er kann (nunca „er kannt").</p>`,
        examples: [
          { de: 'Ich kann schwimmen. Er kann auch schwimmen.', es: 'Yo sé nadar. Él también sabe nadar.', note: 'können también cubre el "saber hacer algo" español.' },
          { de: 'Du musst jetzt gehen.', es: 'Tienes que irte ya.' },
          { de: 'Ihr dürft hier spielen.', es: 'Podéis (tenéis permiso de) jugar aquí.' },
          { de: 'Sie will Ärztin werden.', es: 'Ella quiere ser médica.' }
        ]
      },
      {
        title: 'Los matices que el español no marca',
        content: `<p>Tres pares que conviene separar bien: <strong>dürfen</strong> (permiso) frente a <strong>können</strong> (capacidad); <strong>möchten</strong> (querría, educado) frente a <strong>wollen</strong> (quiero, directo); y el crucial <strong>nicht müssen</strong> (no hace falta) frente a <strong>nicht dürfen</strong> (prohibido).</p>`,
        examples: [
          { de: 'Hier <strong>darf</strong> man nicht rauchen.', es: 'Aquí está prohibido fumar.', note: 'Prohibición → nicht dürfen.' },
          { de: 'Du <strong>musst nicht</strong> kommen — nur wenn du willst.', es: 'No hace falta que vengas — solo si quieres.', note: '¡No significa prohibido!' },
          { de: 'Ich <strong>möchte</strong> zahlen, bitte.', es: 'Querría pagar, por favor.', note: 'möchten en tiendas y restaurantes; wollen sonaría brusco.' },
          { de: 'Der Chef sagt, ich <strong>soll</strong> ihn anrufen.', es: 'El jefe dice que le llame.', note: 'sollen = encargo/deseo de OTRA persona.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'mv-01', type: 'multiple-choice', prompt: 'Ich ___ heute nicht kommen.', options: ['kann', 'können', 'kannst', 'könnt'], answer: 'kann', explanation: 'ich + modal sin terminación → kann.', tip: 'La pinza modal: modal conjugado en posición 2 + el otro verbo en INFINITIVO al final. Ich kann … kommen.' },
      { id: 'mv-02', type: 'multiple-choice', prompt: '___ du morgen arbeiten?', options: ['Musst', 'Muss', 'Müsst', 'Müssen'], answer: 'Musst', explanation: 'du → musst (müssen pierde el umlaut en singular).' },
      { id: 'mv-03', type: 'multiple-choice', prompt: 'Hier ___ man nicht rauchen. (prohibición)', options: ['darf', 'dürfen', 'darfst', 'dürft'], answer: 'darf', explanation: 'man = 3ª persona singular → darf. Prohibición → nicht dürfen.' },
      { id: 'mv-04', type: 'fill-blank', prompt: 'Er ___ Arzt werden. (querer)', answer: 'will', explanation: 'er + wollen → will (idéntico a ich will).' },
      { id: 'mv-05', type: 'multiple-choice', prompt: '„Du darfst nicht kommen" significa:', options: ['Tienes prohibido venir', 'No hace falta que vengas', 'No puedes físicamente', 'No quieres venir'], answer: 'Tienes prohibido venir', explanation: 'nicht dürfen = prohibición.', tip: 'nicht müssen = no hace falta · nicht dürfen = prohibido. El "no debes" español es ambiguo; el alemán no.' },
      { id: 'mv-06', type: 'multiple-choice', prompt: 'Du ___ nicht kommen — es ist freiwillig. (no hace falta)', options: ['musst', 'darfst', 'willst', 'kannst'], answer: 'musst', explanation: '„nicht müssen" = no hace falta. „nicht dürfen" sería prohibido.' },
      { id: 'mv-07', type: 'reorder', words: ['Ich', 'kann', 'heute', 'leider', 'nicht', 'kommen'], hint: 'Hoy por desgracia no puedo venir.', answer: 'Ich kann heute leider nicht kommen.', explanation: 'Modal en posición 2, infinitivo „kommen" al final.' },
      { id: 'mv-08', type: 'reorder', words: ['Wir', 'müssen', 'am', 'Montag', 'früh', 'aufstehen'], hint: 'El lunes tenemos que madrugar.', answer: 'Wir müssen am Montag früh aufstehen.', explanation: 'Con modal, el separable va ENTERO al final: aufstehen.' },
      { id: 'mv-09', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Ich', 'kann', 'spreche', 'ein', 'bisschen', 'Deutsch.'], wrong: 2, fix: 'sprechen (infinitivo al final)', explanation: 'Con un modal, el segundo verbo NUNCA se conjuga: Ich kann … sprechen.' },
      { id: 'mv-10', type: 'fill-blank', prompt: 'Ihr ___ jetzt nach Hause gehen. (sollen)', answer: 'sollt', explanation: 'ihr → sollt.' },
      { id: 'mv-11', type: 'multiple-choice', prompt: 'En una cafetería, lo educado es decir:', options: ['Ich möchte einen Kaffee.', 'Ich will einen Kaffee.', 'Gib mir einen Kaffee.', 'Kaffee!'], answer: 'Ich möchte einen Kaffee.', explanation: 'möchten = querría (cortés); wollen suena exigente en ese contexto.' },
      { id: 'mv-12', type: 'match', prompt: 'Empareja cada modal con su significado:', pairs: [['können', 'poder / saber hacer'], ['müssen', 'tener que'], ['dürfen', 'tener permiso'], ['wollen', 'querer (intención)']], explanation: 'Los cuatro grandes. sollen = encargo de otro; möchten = querría.' },
      { id: 'mv-13', type: 'translate', prompt: 'Traduce: Hoy no puedo venir.', answer: 'Ich kann heute nicht kommen.', acceptable: ['Heute kann ich nicht kommen.'], explanation: 'kann en posición 2, kommen al final.' },
      { id: 'mv-14', type: 'listen', say: 'Hier darf man nicht rauchen.', prompt: 'Escucha: ¿qué frase oyes?', options: ['Hier darf man nicht rauchen.', 'Hier kann man nicht parken.', 'Hier muss man leise sein.', 'Hier darf man rauchen.'], answer: 'Hier darf man nicht rauchen.', explanation: 'El cartel clásico de prohibición, con „man".' },
      { id: 'mv-15', type: 'dictation', say: 'Ich möchte einen Kaffee.', prompt: 'Dictado: escribe lo que oyes.', answer: 'Ich möchte einen Kaffee.', explanation: 'La frase de cortesía número uno.' },
      { id: 'mv-16', type: 'multiple-choice', prompt: 'Historia: Was will Leo heute machen?', options: ['Fußball spielen', 'sein Zimmer aufräumen', 'Oma anrufen', 'Pfannkuchen essen'], answer: 'Fußball spielen', explanation: '„Mama, ich will heute Fußball spielen!"' },
      { id: 'mv-17', type: 'multiple-choice', prompt: 'Historia: Was muss Leo zuerst machen?', options: ['sein Zimmer aufräumen', 'zu Max gehen', 'Fußball spielen', 'Pfannkuchen machen'], answer: 'sein Zimmer aufräumen', explanation: '„…aber zuerst musst du dein Zimmer aufräumen."' },
      { id: 'mv-18', type: 'fill-blank', prompt: 'Historia: ___ ich danach zu Max gehen? (pedir permiso)', answer: 'Darf', explanation: 'Pedir permiso → dürfen: „Darf ich…?"' },
      { id: 'mv-19', type: 'multiple-choice', prompt: 'Historia: Bis wann dürfen Leo und Max auf dem Platz bleiben?', options: ['bis sechs', 'bis fünf', 'bis vier', 'bis zum Abendessen'], answer: 'bis sechs', explanation: '„Wir dürfen bis sechs auf dem Platz bleiben." — dürfen = permiso.' },
      { id: 'mv-20', type: 'multiple-choice', prompt: 'Historia: Wie viele Tore will Leo schießen — und wie viele schießt er?', options: ['Er will drei schießen und schießt zwei', 'Er will zwei schießen und schießt drei', 'Er will drei schießen und schießt drei', 'Er schießt keins'], answer: 'Er will drei schießen und schießt zwei', explanation: '„Heute will ich drei Tore schießen!" … „Er schießt zwei." — wollen = intención, no garantía.' },
      { id: 'mv-21', type: 'fill-blank', prompt: 'Historia: Am Sonntag ___ du mir alles über das Spiel erzählen! (obligación)', answer: 'musst', explanation: 'müssen: la abuela lo convierte en obligación — musst … erzählen (infinitivo al final).' }
    ],
    story: {
      intro: 'Sábado por la mañana en casa de los Vega: Leo quiere jugar, mamá tiene otros planes. Una negociación entera a base de modales — will, musst, darfst, soll, möchte.',
      lines: [
        { speaker: '', de: 'Samstagmorgen. Leo kommt in die Küche.', es: 'Sábado por la mañana. Leo entra en la cocina.' },
        { speaker: 'Leo', de: 'Mama, ich will heute Fußball spielen!', es: '¡Mamá, hoy quiero jugar al fútbol!' },
        { speaker: 'Mama', de: 'Du kannst gern spielen, aber zuerst musst du dein Zimmer aufräumen.', es: 'Puedes jugar, claro, pero primero tienes que ordenar tu habitación.' },
        { speaker: 'Leo', de: 'Muss das sein? Ich kann das doch morgen machen.', es: '¿Es necesario? Eso lo puedo hacer mañana.' },
        { speaker: 'Mama', de: 'Nein. Und du sollst auch Oma anrufen. Sie wartet.', es: 'No. Y además tienes que llamar a la abuela (lo ha pedido ella). Está esperando.' },
        { speaker: 'Leo', de: 'Okay, okay... Darf ich danach zu Max gehen?', es: 'Vale, vale… ¿Puedo ir después a casa de Max?' },
        { speaker: 'Mama', de: 'Ja, aber ihr dürft nicht wieder im Wohnzimmer Fußball spielen!', es: 'Sí, ¡pero no podéis volver a jugar al fútbol en el salón!' },
        { speaker: 'Leo', de: 'Das war nur einmal!', es: '¡Eso fue solo una vez!' },
        { speaker: 'Papa', de: 'Ich möchte auch etwas sagen: Wer will Pfannkuchen?', es: 'Yo también querría decir algo: ¿quién quiere tortitas?' },
        { speaker: 'Leo', de: 'Ich! Ich kann sofort das Zimmer aufräumen!', es: '¡Yo! ¡Puedo ordenar la habitación ahora mismo!' },
        { speaker: '', de: 'Plötzlich kann Leo sehr schnell arbeiten.', es: 'De repente, Leo puede trabajar rapidísimo.' },
        { speaker: '', de: 'Nach dem Frühstück räumt Leo sein Zimmer auf. In Rekordzeit.', es: 'Después del desayuno, Leo ordena su habitación. En tiempo récord.' },
        { speaker: 'Leo', de: 'Fertig! Jetzt muss ich nur noch Oma anrufen.', es: '¡Listo! Ahora solo me queda llamar a la abuela.' },
        { speaker: '', de: 'Er ruft Oma an. Sie erzählt. Und erzählt. Und erzählt.', es: 'Llama a la abuela. Ella habla. Y habla. Y habla.' },
        { speaker: 'Oma', de: 'Und deine Tante will im August kommen, und der Nachbar soll ein neues Auto haben...', es: 'Y tu tía quiere venir en agosto, y el vecino dicen que tiene coche nuevo…' },
        { speaker: 'Leo', de: 'Oma, ich muss jetzt leider los! Ich soll... äh... ich will Fußball spielen!', es: '¡Abuela, por desgracia me tengo que ir ya! Tengo que… eh… ¡quiero jugar al fútbol!' },
        { speaker: 'Oma', de: 'Dann lauf, mein Junge. Aber am Sonntag musst du mir alles über das Spiel erzählen!', es: 'Pues corre, hijo. ¡Pero el domingo me lo tienes que contar todo sobre el partido!' },
        { speaker: '', de: 'Um drei Uhr steht Leo endlich auf dem Fußballplatz.', es: 'A las tres, Leo por fin está en el campo de fútbol.' },
        { speaker: 'Max', de: 'Da bist du ja! Wir dürfen bis sechs auf dem Platz bleiben.', es: '¡Por fin llegas! Podemos quedarnos en el campo hasta las seis.' },
        { speaker: 'Leo', de: 'Perfekt. Heute will ich drei Tore schießen!', es: 'Perfecto. ¡Hoy quiero marcar tres goles!' },
        { speaker: '', de: 'Er schießt zwei. Aber das erzählt er Oma am Sonntag ein bisschen anders.', es: 'Marca dos. Pero eso el domingo se lo cuenta a la abuela un poco diferente.' }
      ]
    }
  });
})();
