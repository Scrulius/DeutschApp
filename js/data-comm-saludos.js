(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Saludos y despedidas según el momento y la formalidad</caption>' +
    '<tr><th>Alemán</th><th>Cuándo</th><th>Registro</th></tr>' +
    '<tr><td>Hallo</td><td>a cualquier hora</td><td>informal</td></tr>' +
    '<tr><td>Guten Morgen</td><td>por la mañana</td><td>neutro</td></tr>' +
    '<tr><td>Guten Tag</td><td>durante el día</td><td>neutro/formal</td></tr>' +
    '<tr><td>Guten Abend</td><td>por la tarde-noche</td><td>neutro/formal</td></tr>' +
    '<tr><td>Gute Nacht</td><td>al irse a dormir</td><td>neutro</td></tr>' +
    '<tr><td>Tschüss</td><td>despedida</td><td>informal</td></tr>' +
    '<tr><td>Auf Wiedersehen</td><td>despedida</td><td>formal</td></tr>' +
    '<tr><td>Bis bald / Bis später</td><td>hasta pronto / luego</td><td>informal</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>du vs Sie — el gran par (tú / usted)</caption>' +
    '<tr><th>Informal (du)</th><th>Formal (Sie)</th><th>Español</th></tr>' +
    '<tr><td>Wie heißt du?</td><td>Wie heißen Sie?</td><td>¿Cómo te llamas / se llama?</td></tr>' +
    '<tr><td>Woher kommst du?</td><td>Woher kommen Sie?</td><td>¿De dónde eres / es?</td></tr>' +
    '<tr><td>Wie geht es dir?</td><td>Wie geht es Ihnen?</td><td>¿Cómo estás / está?</td></tr>' +
    '</table></div>' +
    '<div class="tip">Usa <strong>Sie</strong> (con mayúscula siempre) con desconocidos, en tiendas, con jefes o gente mayor; <strong>du</strong> con amigos, familia, niños y compañeros jóvenes. En la duda al conocer a un adulto, empieza por <strong>Sie</strong> — es la opción segura.</div>';

  registerModule({
    id: 'saludos',
    category: 'nivel1',
    track: 'Comunicación',
    icon: '🖐️',
    title: 'Saludos y presentaciones',
    desc: 'Lo primerísimo: saludar, decir tu nombre, de dónde eres y preguntar qué tal — con la clave du/Sie.',
    lessons: [
      {
        title: 'Saludar y despedirse',
        content: `<p>El saludo cambia según la hora del día. <strong>Guten Morgen / Guten Tag / Guten Abend</strong> son "buenos días / buenas / buenas tardes". Ojo con la terminación: van con <strong>Guten</strong> (der Morgen, der Tag, der Abend son masculinos), pero <strong>Gute Nacht</strong> (die Nacht, femenino) — y solo se dice al irse a dormir, no como saludo.</p>
          <div class="tip">„Hallo" vale a cualquier hora y es la opción informal más cómoda. Para despedirte: „Tschüss" (informal) o „Auf Wiedersehen" (formal).</div>`,
        examples: [
          { de: '<strong>Guten Morgen!</strong> Wie geht es dir?', es: '¡Buenos días! ¿Cómo estás?' },
          { de: '<strong>Guten Tag</strong>, Frau Müller.', es: 'Buenas, señora Müller.', note: 'Con „Guten Tag" + apellido suena educado y formal.' },
          { de: '<strong>Gute Nacht!</strong> Schlaf gut.', es: '¡Buenas noches! Que duermas bien.', note: 'Gute (no Guten): die Nacht es femenino.' },
          { de: '<strong>Tschüss!</strong> Bis bald.', es: '¡Adiós! Hasta pronto.' }
        ]
      },
      {
        title: 'Presentarte y preguntar',
        content: `<p>Para decir tu nombre tienes tres opciones equivalentes: <strong>Ich heiße Ana</strong> / <strong>Ich bin Ana</strong> / <strong>Mein Name ist Ana</strong>. Para preguntar, todo depende de si tratas a la persona de <strong>du</strong> (informal) o de <strong>Sie</strong> (formal).</p>
          <div class="warn">Este es EL punto donde el español y el alemán se parecen (tú/usted) pero el alemán lo lleva más lejos: „Sie" se usa mucho más que el "usted" español, y se escribe SIEMPRE con mayúscula.</div>`,
        examples: [
          { de: 'Ich heiße Marco. Und du? Wie <strong>heißt du</strong>?', es: 'Me llamo Marco. ¿Y tú? ¿Cómo te llamas?' },
          { de: 'Woher <strong>kommst du</strong>? — Ich komme aus Spanien.', es: '¿De dónde eres? — Soy de España.' },
          { de: 'Wo wohnst du? — Ich wohne in Berlin.', es: '¿Dónde vives? — Vivo en Berlín.' },
          { de: 'Freut mich!', es: '¡Encantado/a!', note: 'La forma corta de „Es freut mich, Sie kennenzulernen".' }
        ]
      },
      {
        title: '¿Cómo estás? — y cómo responder',
        content: `<p><strong>Wie geht es dir?</strong> (o el coloquial <strong>Wie geht's?</strong>) para amigos; <strong>Wie geht es Ihnen?</strong> para el trato formal. Se responde con „Gut, danke. Und dir/Ihnen?" y se devuelve la pregunta.</p>`,
        examples: [
          { de: 'Wie geht\'s? — <strong>Gut, danke.</strong> Und dir?', es: '¿Qué tal? — Bien, gracias. ¿Y tú?' },
          { de: 'Wie geht es Ihnen? — <strong>Sehr gut</strong>, danke.', es: '¿Cómo está usted? — Muy bien, gracias.' },
          { de: 'Na, wie geht\'s? — <strong>Es geht.</strong>', es: '¿Qué tal? — Voy tirando.', note: '„Es geht" = ni bien ni mal, "así así".' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'sal-01', type: 'fill-blank', prompt: '___ Morgen! (saludo de la mañana)', answer: 'Guten', explanation: 'der Morgen (masculino) → Guten Morgen.' },
      { id: 'sal-02', type: 'fill-blank', prompt: '___ Nacht! (antes de dormir)', answer: 'Gute', explanation: 'die Nacht es femenino → Gute Nacht (no „Guten").' },
      { id: 'sal-03', type: 'multiple-choice', prompt: 'Despedida informal:', options: ['Tschüss', 'Guten Tag', 'Woher', 'Freut mich'], answer: 'Tschüss', explanation: '„Tschüss" = adiós (informal). „Auf Wiedersehen" sería el formal.' },
      { id: 'sal-04', type: 'multiple-choice', prompt: 'Despedida formal:', options: ['Auf Wiedersehen', 'Tschüss', 'Hallo', 'Danke'], answer: 'Auf Wiedersehen' },
      { id: 'sal-05', type: 'translate', prompt: 'Traduce: ¿Cómo te llamas? (informal)', answer: 'Wie heißt du?', explanation: 'Trato informal → du → „Wie heißt du?"' },
      { id: 'sal-06', type: 'translate', prompt: 'Traduce: ¿Cómo se llama usted? (formal)', answer: 'Wie heißen Sie?', explanation: 'Trato formal → Sie (con mayúscula) → „Wie heißen Sie?"' },
      { id: 'sal-07', type: 'translate', prompt: 'Traduce: Me llamo Ana.', answer: 'Ich heiße Ana.', acceptable: ['Ich bin Ana.', 'Mein Name ist Ana.'], explanation: 'Tres formas válidas: „Ich heiße / Ich bin / Mein Name ist Ana."' },
      { id: 'sal-08', type: 'fill-blank', prompt: 'Ich ___ aus Spanien. (venir)', answer: 'komme', explanation: 'kommen → ich komme. „Ich komme aus…" = soy de…' },
      { id: 'sal-09', type: 'translate', prompt: 'Traduce: ¿De dónde eres? (informal)', answer: 'Woher kommst du?', explanation: 'Literalmente „¿de dónde vienes?" — así se pregunta el origen.' },
      { id: 'sal-10', type: 'multiple-choice', prompt: 'Respuesta natural a „Wie geht\'s?":', options: ['Gut, danke.', 'Tschüss.', 'Aus Berlin.', 'Um acht.'], answer: 'Gut, danke.', explanation: '„Wie geht\'s?" pregunta por tu estado → „Gut, danke." (bien, gracias).' },
      { id: 'sal-11', type: 'fill-blank', prompt: 'Wie geht es ___? (a ti, informal)', answer: 'dir', explanation: '„es geht" + Dativ; informal „du" → dir.' },
      { id: 'sal-12', type: 'fill-blank', prompt: 'Wie geht es ___? (a usted, formal)', answer: 'Ihnen', explanation: 'Formal „Sie" → Dativ „Ihnen" (con mayúscula).' },
      { id: 'sal-13', type: 'multiple-choice', prompt: '„Freut mich!" significa:', options: ['¡Encantado/a!', 'De nada', 'Buenas noches', '¿Qué tal?'], answer: '¡Encantado/a!', explanation: 'Se dice al conocer a alguien.' },
      { id: 'sal-14', type: 'reorder', words: ['Wie', 'heißt', 'du'], punctuation: '?', hint: '¿Cómo te llamas?', answer: 'Wie heißt du?', explanation: 'W-Frage: „Wie" + verbo „heißt" en 2ª posición.' },
      { id: 'sal-15', type: 'reorder', words: ['Ich', 'komme', 'aus', 'Deutschland'], hint: 'Vengo de Alemania.', answer: 'Ich komme aus Deutschland.', explanation: '„aus" + país para decir el origen.' },
      { id: 'sal-16', type: 'multiple-choice', prompt: 'A tu jefe, por norma, le hablas de:', options: ['Sie', 'du', 'ihr', 'es'], answer: 'Sie', explanation: 'Con jefes, desconocidos y gente mayor → Sie (formal).' },
      { id: 'sal-17', type: 'match', prompt: 'Empareja cada frase con su significado:', pairs: [['Guten Morgen', 'Buenos días'], ['Tschüss', 'Adiós (informal)'], ['Wie heißt du?', '¿Cómo te llamas?'], ['Woher kommst du?', '¿De dónde eres?']], explanation: 'Frases básicas de saludo y presentación.' },
      { id: 'sal-18', type: 'listen', say: 'Guten Abend', prompt: 'Escucha y elige lo que oyes:', options: ['Guten Abend', 'Guten Morgen', 'Gute Nacht', 'Guten Tag'], answer: 'Guten Abend', explanation: '„Guten Abend" = buenas tardes/noches (saludo de la tarde-noche).' },
      { id: 'sal-19', type: 'listen', say: 'Wie geht es Ihnen?', prompt: 'Escucha: ¿qué pregunta oyes?', options: ['Wie geht es Ihnen?', 'Wie geht es dir?', 'Wie heißt du?', 'Woher kommen Sie?'], answer: 'Wie geht es Ihnen?', explanation: '„Ihnen" (formal) frente a „dir" (informal) — entrena el oído para distinguirlos.' },
      { id: 'sal-20', type: 'dictation', say: 'Guten Morgen', prompt: 'Dictado: escribe lo que oyes.', answer: 'Guten Morgen', explanation: 'El saludo de la mañana: Guten Morgen (der Morgen, masculino → Guten).' }
      ,
      { id: 'sal-21', type: 'multiple-choice', prompt: 'Historia: Woher kommt Yuki?', options: ['aus Japan', 'aus Spanien', 'aus Deutschland', 'aus Sevilla'], answer: 'aus Japan', explanation: '„Aus Japan. Und du?"' },
      { id: 'sal-22', type: 'multiple-choice', prompt: 'Historia: Wie sprechen die Studenten die Lehrerin an?', options: ['mit „Sie"', 'mit „du"', 'mit „ihr"', 'mit ihrem Vornamen'], answer: 'mit „Sie"', explanation: '„Zu ihr sagen wir »Sie«, oder?" — „Genau." A la profesora, trato formal.' },
      { id: 'sal-23', type: 'fill-blank', prompt: 'Historia: Ich ___ aus Spanien, aus Sevilla. (venir)', answer: 'komme', explanation: 'kommen → ich komme. „Ich komme aus…" = soy de…' }
    ],
    story: {
      intro: 'Primer día del curso de alemán: Diego (de Sevilla) y Yuki (de Japón) se conocen — y descubren en vivo la diferencia entre du y Sie.',
      lines: [
        { speaker: '', de: 'Erster Tag im Deutschkurs. Zwei Studenten sitzen nebeneinander.', es: 'Primer día del curso de alemán. Dos estudiantes se sientan juntos.' },
        { speaker: 'Diego', de: 'Hallo! Ich bin Diego. Wie heißt du?', es: '¡Hola! Soy Diego. ¿Cómo te llamas?' },
        { speaker: 'Yuki', de: 'Ich heiße Yuki. Freut mich!', es: 'Me llamo Yuki. ¡Encantada!' },
        { speaker: 'Diego', de: 'Woher kommst du, Yuki?', es: '¿De dónde eres, Yuki?' },
        { speaker: 'Yuki', de: 'Aus Japan. Und du?', es: 'De Japón. ¿Y tú?' },
        { speaker: 'Diego', de: 'Ich komme aus Spanien, aus Sevilla.', es: 'Yo soy de España, de Sevilla.' },
        { speaker: 'Yuki', de: 'Wie geht es dir? Bist du nervös?', es: '¿Qué tal estás? ¿Estás nervioso?' },
        { speaker: 'Diego', de: 'Es geht. Mein Deutsch ist noch nicht so gut.', es: 'Voy tirando. Mi alemán todavía no es muy bueno.' },
        { speaker: '', de: 'Die Lehrerin kommt herein.', es: 'Entra la profesora.' },
        { speaker: 'Lehrerin', de: 'Guten Morgen! Ich bin Frau Weber.', es: '¡Buenos días! Soy la señora Weber.' },
        { speaker: 'Diego', de: 'Zu ihr sagen wir „Sie", oder?', es: 'A ella le hablamos de "Sie", ¿no?' },
        { speaker: 'Yuki', de: 'Genau. Und zu mir sagst du „du".', es: 'Exacto. Y a mí me hablas de "du".' }
      ]
    }
  });
})();
