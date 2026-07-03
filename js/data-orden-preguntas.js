(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Palabras interrogativas (W-Wörter)</caption>' +
    '<tr><th>Palabra</th><th>Significado</th></tr>' +
    '<tr><td>wer</td><td>quién</td></tr>' +
    '<tr><td>was</td><td>qué</td></tr>' +
    '<tr><td>wann</td><td>cuándo</td></tr>' +
    '<tr><td>wo</td><td>dónde</td></tr>' +
    '<tr><td>wohin</td><td>adónde</td></tr>' +
    '<tr><td>woher</td><td>de dónde</td></tr>' +
    '<tr><td>warum</td><td>por qué</td></tr>' +
    '<tr><td>wie</td><td>cómo</td></tr>' +
    '<tr><td>wie viel / wie viele</td><td>cuánto / cuántos</td></tr>' +
    '<tr><td>welche(r/s)</td><td>cuál</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Las dos estructuras</caption>' +
    '<tr><th>Tipo</th><th>Estructura</th><th>Ejemplo</th></tr>' +
    '<tr><td>W-Frage</td><td>W-word + <strong>verbo</strong> + sujeto...</td><td>Wann kommst du?</td></tr>' +
    '<tr><td>Ja/Nein-Frage</td><td><strong>verbo</strong> + sujeto...</td><td>Kommst du morgen?</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'preguntas',
    category: 'nivel1',
    icon: '❓',
    title: 'Preguntas: W-Fragen y Ja/Nein-Fragen',
    desc: 'Dos estructuras, dos posiciones del verbo: con palabra interrogativa, o el verbo al principio.',
    lessons: [
      {
        title: 'W-Fragen: palabra interrogativa + verbo',
        content: `<p>Con una palabra interrogativa (wer, was, wann, wo, warum, wie...), la regla V2 se mantiene: la W-word ocupa la posición 1, y el verbo conjugado va justo después, en la posición 2.</p>`,
        examples: [
          { de: 'Wann kommst du?', es: '¿Cuándo vienes?' },
          { de: 'Wo wohnst du?', es: '¿Dónde vives?' },
          { de: 'Warum lernst du Deutsch?', es: '¿Por qué aprendes alemán?' },
          { de: 'Wie viele Geschwister hast du?', es: '¿Cuántos hermanos tienes?' }
        ]
      },
      {
        title: 'Ja/Nein-Fragen: el verbo salta al principio',
        content: `<p>Para preguntas de sí/no, no hay palabra interrogativa: el verbo conjugado ocupa directamente la <strong>posición 1</strong>, y el sujeto le sigue en la posición 2.</p>`,
        examples: [
          { de: 'Kommst du morgen?', es: '¿Vienes mañana?' },
          { de: 'Hast du Zeit?', es: '¿Tienes tiempo?' },
          { de: 'Ist das dein Auto?', es: '¿Es ese tu coche?' },
          { de: 'Kannst du mir helfen?', es: '¿Puedes ayudarme?' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'preg-01', type: 'reorder', words: ['Wann', 'kommst', 'du'], answer: 'Wann kommst du?', punctuation: '?' },
      { id: 'preg-02', type: 'reorder', words: ['Wo', 'wohnst', 'du'], answer: 'Wo wohnst du?', punctuation: '?' },
      { id: 'preg-03', type: 'reorder', words: ['Warum', 'lernst', 'du', 'Deutsch'], answer: 'Warum lernst du Deutsch?', punctuation: '?' },
      { id: 'preg-04', type: 'reorder', words: ['Kommst', 'du', 'morgen'], answer: 'Kommst du morgen?', punctuation: '?', explanation: 'Sin palabra interrogativa: el verbo salta a la posición 1.' },
      { id: 'preg-05', type: 'reorder', words: ['Hast', 'du', 'Zeit'], answer: 'Hast du Zeit?', punctuation: '?' },
      { id: 'preg-06', type: 'reorder', words: ['Ist', 'das', 'dein', 'Auto'], answer: 'Ist das dein Auto?', punctuation: '?' },
      { id: 'preg-07', type: 'reorder', words: ['Kannst', 'du', 'mir', 'helfen'], answer: 'Kannst du mir helfen?', punctuation: '?' },
      { id: 'preg-08', type: 'multiple-choice', prompt: '___ heißt du?', options: ['Wie', 'Wo', 'Wer', 'Was'], answer: 'Wie', explanation: '„Wie heißt du?" = ¿Cómo te llamas?' },
      { id: 'preg-09', type: 'multiple-choice', prompt: '___ ist deine Telefonnummer?', options: ['Wie', 'Was', 'Wo', 'Wann'], answer: 'Wie', explanation: '„Wie" también se usa para pedir un dato como "cuál es".' },
      { id: 'preg-10', type: 'multiple-choice', prompt: '___ Uhr ist es?', options: ['Wie viel', 'Wie viele', 'Wann', 'Wie'], answer: 'Wie viel', explanation: '„Wie viel Uhr ist es?" = ¿Qué hora es?' },
      { id: 'preg-11', type: 'multiple-choice', prompt: '___ Geschwister hast du?', options: ['Wie viele', 'Wie viel', 'Wie', 'Wann'], answer: 'Wie viele', explanation: '„Geschwister" es contable y plural → wie viele.' },
      { id: 'preg-12', type: 'multiple-choice', prompt: '¿Cuál es la pregunta de sí/no estándar?', options: ['Hast du Hunger?', 'Du hast Hunger?', 'Habst du Hunger?', 'Hunger du hast?'], answer: 'Hast du Hunger?', explanation: 'La forma estándar lleva el verbo en la posición 1. („Du hast Hunger?" existe en el habla coloquial solo con entonación ascendente.)' },
      { id: 'preg-13', type: 'translate', prompt: 'Traduce: ¿Dónde está el baño?', answer: 'Wo ist die Toilette?', acceptable: ['Wo ist das Bad?'], explanation: 'W-Frage: „Wo" + verbo „ist" en 2ª posición.' },
      { id: 'preg-14', type: 'translate', prompt: 'Traduce: ¿Tienes un bolígrafo?', answer: 'Hast du einen Stift?', explanation: 'Pregunta de sí/no: verbo „hast" al principio.' },
      { id: 'preg-15', type: 'multiple-choice', prompt: '___ kostet das?', options: ['Was', 'Wer', 'Wie', 'Wo'], answer: 'Was', explanation: '„Was kostet das?" = ¿Cuánto cuesta eso?' },
      { id: 'preg-16', type: 'multiple-choice', prompt: '___ ist dein Lieblingsessen?', options: ['Was', 'Wer', 'Wie', 'Wann'], answer: 'Was' },
      { id: 'preg-17', type: 'multiple-choice', prompt: '___ kommst du? — Aus Spanien.', options: ['Woher', 'Wohin', 'Wo', 'Wann'], answer: 'Woher', explanation: '„Woher?" = ¿de dónde? (origen).' },
      { id: 'preg-18', type: 'multiple-choice', prompt: '___ gehst du? — Nach Hause.', options: ['Wohin', 'Woher', 'Wo', 'Wann'], answer: 'Wohin', explanation: '„Wohin?" = ¿adónde? (destino/movimiento).' },
      { id: 'preg-19', type: 'multiple-choice', prompt: '___ alt bist du?', options: ['Wie', 'Was', 'Wer', 'Wann'], answer: 'Wie', explanation: '„Wie alt...?" = ¿cuántos años...?' },
      { id: 'preg-20', type: 'reorder', words: ['Sprichst', 'du', 'Deutsch'], punctuation: '?', hint: '¿Hablas alemán?', answer: 'Sprichst du Deutsch?', explanation: 'Pregunta de sí/no: verbo en posición 1.' },
      { id: 'preg-21', type: 'reorder', words: ['Warum', 'bist', 'du', 'müde'], punctuation: '?', hint: '¿Por qué estás cansado?', answer: 'Warum bist du müde?', explanation: 'W-Frage: „Warum" + verbo „bist" en 2ª posición.' },
      { id: 'preg-22', type: 'multiple-choice', prompt: '___ Buch liest du gerade? — Das rote.', options: ['Welches', 'Welcher', 'Welche', 'Wer'], answer: 'Welches', explanation: '„welch-" concuerda con el sustantivo: „das Buch" (neutro) → welches.' },
      { id: 'preg-23', type: 'multiple-choice', prompt: '___ möchtest du trinken?', options: ['Was', 'Wer', 'Wo', 'Wie'], answer: 'Was', explanation: '„Was möchtest du...?" = ¿qué quieres...?' },
      { id: 'preg-24', type: 'translate', prompt: 'Traduce: ¿Cuándo empieza la película?', answer: 'Wann beginnt der Film?', acceptable: ['Wann fängt der Film an?'], explanation: 'W-Frage: „Wann" + verbo en 2ª posición.' },
      { id: 'preg-25', type: 'translate', prompt: 'Traduce: ¿Tienes hermanos?', answer: 'Hast du Geschwister?', explanation: 'Pregunta de sí/no: verbo „Hast" al principio.' },
      { id: 'preg-26', type: 'multiple-choice', prompt: 'Mit ___ fährst du in Urlaub?', options: ['wem', 'wer', 'wen', 'wessen'], answer: 'wem', explanation: '„mit" pide Dativ, y el interrogativo „wer" en Dativ → wem.' },
      { id: 'preg-27', type: 'multiple-choice', prompt: '___ Tag ist heute? — Mittwoch.', options: ['Welcher', 'Welches', 'Welche', 'Wer'], answer: 'Welcher', explanation: '„welch-" concuerda: der Tag (masculino, Nominativ) → welcher.' }
      ,
      { id: 'preg-28', type: 'multiple-choice', prompt: 'Historia: Woher kommt Herr Brandt?', options: ['aus Köln', 'aus Berlin', 'aus München', 'aus Hamburg'], answer: 'aus Köln', explanation: '„Aus Köln. Aber ich wohne jetzt hier."' },
      { id: 'preg-29', type: 'multiple-choice', prompt: 'Historia: Was ist der Lieblingssport des Lehrers?', options: ['Basketball', 'Fußball', 'Tennis', 'Schwimmen'], answer: 'Basketball', explanation: '„Basketball, natürlich!"' },
      { id: 'preg-30', type: 'reorder', words: ['Woher', 'kommen', 'Sie'], punctuation: '?', hint: '¿De dónde es usted? (pregunta de la historia)', answer: 'Woher kommen Sie?', explanation: 'W-Frage formal: Woher + verbo en 2ª posición + Sie.' },
      { id: 'preg-31', type: 'multiple-choice', prompt: 'Historia: Wie heißt der Hund des Lehrers?', options: ['Rex', 'Bruno', 'Rocky', 'Max'], answer: 'Rex', explanation: '„Dann bringe ich ihn morgen mit! Er heißt Rex."' },
      { id: 'preg-32', type: 'multiple-choice', prompt: 'Historia: Warum ist Herr Brandt Lehrer geworden?', options: ['Weil sein Sportlehrer an ihn geglaubt hat', 'Weil er Basketball liebt', 'Weil er Kinder mag', 'Weil der Job sicher ist'], answer: 'Weil sein Sportlehrer an ihn geglaubt hat', explanation: '„Weil mein Sportlehrer damals großartig war. Er hat an mich geglaubt."' },
      { id: 'preg-33', type: 'multiple-choice', prompt: 'Historia: Was ist das Lieblingsessen des Lehrers?', options: ['Spaghetti', 'Salat', 'Schnitzel', 'Pizza'], answer: 'Spaghetti', explanation: '„Spaghetti. Aber das dürfen die Schüler nicht wissen…" — y acabó en el periódico.' }
    ],
    story: {
      intro: 'Emma escribe para el periódico del instituto y hoy entrevista al nuevo profesor de deporte. Una entrevista = una ristra de W-Fragen y preguntas de sí/no.',
      lines: [
        { speaker: '', de: 'Emma schreibt für die Schülerzeitung. Heute interviewt sie den neuen Sportlehrer.', es: 'Emma escribe para el periódico del insti. Hoy entrevista al nuevo profe de deporte.' },
        { speaker: 'Emma', de: 'Guten Tag! Wie heißen Sie?', es: '¡Buenas! ¿Cómo se llama?' },
        { speaker: 'Lehrer', de: 'Ich heiße Herr Brandt.', es: 'Me llamo Brandt.' },
        { speaker: 'Emma', de: 'Woher kommen Sie?', es: '¿De dónde es?' },
        { speaker: 'Lehrer', de: 'Aus Köln. Aber ich wohne jetzt hier.', es: 'De Colonia. Pero ahora vivo aquí.' },
        { speaker: 'Emma', de: 'Was ist Ihr Lieblingssport?', es: '¿Cuál es su deporte favorito?' },
        { speaker: 'Lehrer', de: 'Basketball, natürlich!', es: '¡Baloncesto, claro!' },
        { speaker: 'Emma', de: 'Wann beginnt Ihr Training?', es: '¿Cuándo empieza su entrenamiento?' },
        { speaker: 'Lehrer', de: 'Um vier. Kommst du auch?', es: 'A las cuatro. ¿Te apuntas?' },
        { speaker: 'Emma', de: 'Vielleicht! Letzte Frage: Haben Sie einen Hund?', es: '¡Quizá! Última pregunta: ¿tiene perro?' },
        { speaker: 'Lehrer', de: 'Ja! Warum fragst du?', es: '¡Sí! ¿Por qué lo preguntas?' },
        { speaker: 'Emma', de: 'Alle Leser lieben Hundefotos.', es: 'Todos los lectores adoran las fotos de perros.' },
        { speaker: 'Lehrer', de: 'Dann bringe ich ihn morgen mit! Er heißt Rex.', es: '¡Pues mañana me lo traigo! Se llama Rex.' },
        { speaker: 'Emma', de: 'Super! Noch drei Fragen. Warum sind Sie Lehrer geworden?', es: '¡Genial! Tres preguntas más. ¿Por qué se hizo profesor?' },
        { speaker: 'Lehrer', de: 'Weil mein Sportlehrer damals großartig war. Er hat an mich geglaubt.', es: 'Porque mi profesor de deporte de entonces era genial. Creyó en mí.' },
        { speaker: 'Emma', de: 'Schöne Antwort. Was ist Ihr Lieblingsessen?', es: 'Bonita respuesta. ¿Cuál es su comida favorita?' },
        { speaker: 'Lehrer', de: 'Spaghetti. Aber das dürfen die Schüler nicht wissen — Sportlehrer essen offiziell nur Salat!', es: 'Espaguetis. Pero eso los alumnos no pueden saberlo — ¡oficialmente los profes de deporte solo comen ensalada!' },
        { speaker: 'Emma', de: 'Zu spät, das kommt in die Zeitung! Letzte Frage: Sind Sie glücklich an unserer Schule?', es: '¡Demasiado tarde, eso va al periódico! Última pregunta: ¿está contento en nuestro insti?' },
        { speaker: 'Lehrer', de: 'Sehr! Die Schüler stellen die besten Fragen.', es: '¡Mucho! Los alumnos hacen las mejores preguntas.' },
        { speaker: '', de: 'Am nächsten Tag ist das Interview fertig — mit einem großen Foto von Rex.', es: 'Al día siguiente la entrevista está lista — con una gran foto de Rex.' },
        { speaker: '', de: 'Es ist der beliebteste Artikel des Jahres.', es: 'Es el artículo más leído del año.' }
      ]
    }
  });
})();
