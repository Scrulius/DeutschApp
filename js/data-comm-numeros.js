(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Números clave</caption>' +
    '<tr><th>Nº</th><th>Alemán</th><th>Nº</th><th>Alemán</th></tr>' +
    '<tr><td>0</td><td>null</td><td>13</td><td>dreizehn</td></tr>' +
    '<tr><td>1–5</td><td>eins zwei drei vier fünf</td><td>20</td><td>zwanzig</td></tr>' +
    '<tr><td>6–10</td><td>sechs sieben acht neun zehn</td><td>21</td><td class="hl">einundzwanzig</td></tr>' +
    '<tr><td>11</td><td>elf</td><td>30 / 40</td><td>dreißig / vierzig</td></tr>' +
    '<tr><td>12</td><td>zwölf</td><td>100</td><td>(ein)hundert</td></tr>' +
    '</table></div>' +
    '<div class="warn">La trampa nº 1: los números del 21 al 99 se dicen <strong>al revés</strong>: la unidad ANTES que la decena, unidas por „und". 21 = „ein-und-zwanzig" (uno-y-veinte). 47 = „siebenundvierzig" (siete-y-cuarenta).</div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>La hora (reloj informal)</caption>' +
    '<tr><th>Alemán</th><th>Hora</th></tr>' +
    '<tr><td>Es ist drei Uhr.</td><td>3:00</td></tr>' +
    '<tr><td>Viertel nach drei</td><td>3:15</td></tr>' +
    '<tr><td class="hl">halb vier</td><td class="hl">3:30 (¡media PARA las 4!)</td></tr>' +
    '<tr><td>Viertel vor vier</td><td>3:45</td></tr>' +
    '</table></div>' +
    '<div class="warn">La trampa nº 2: <strong>halb vier = 3:30</strong>, no 4:30. „halb" cuenta la media hora que falta PARA la hora siguiente. „halb zehn" = 9:30.</div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Días y meses</caption>' +
    '<tr><th>Días</th><td>Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag</td></tr>' +
    '<tr><th>„el lunes"</th><td>am Montag (am + día)</td></tr>' +
    '<tr><th>„en enero"</th><td>im Januar (im + mes)</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'numeros',
    category: 'nivel1',
    track: 'Comunicación',
    icon: '🕐',
    title: 'Números, la hora y las fechas',
    desc: 'Contar, decir la hora y quedar un día. Con las dos trampas clásicas: números "al revés" y „halb vier" = 3:30.',
    lessons: [
      {
        title: 'Contar: la unidad va primero',
        content: `<p>Hasta el 20 son palabras sueltas que hay que aprender (eins, zwei… zwanzig). A partir del 21, el alemán invierte el orden respecto al español: dice <strong>la unidad y luego la decena</strong>, pegadas con „und". Todo junto, en una sola palabra.</p>`,
        examples: [
          { de: '21 = <strong>einundzwanzig</strong>', es: 'veintiuno', note: 'ein + und + zwanzig (uno-y-veinte).' },
          { de: '47 = <strong>siebenundvierzig</strong>', es: 'cuarenta y siete', note: 'sieben + und + vierzig.' },
          { de: '99 = neunundneunzig', es: 'noventa y nueve' },
          { de: '100 = (ein)hundert', es: 'cien' }
        ]
      },
      {
        title: 'La hora: cuidado con „halb"',
        content: `<p>Para preguntar: <strong>Wie spät ist es?</strong> o <strong>Wie viel Uhr ist es?</strong>. En el reloj informal usas <strong>Viertel nach</strong> (y cuarto), <strong>Viertel vor</strong> (menos cuarto) y <strong>halb</strong>. El truco: „halb" mira hacia la hora SIGUIENTE.</p>
          <div class="warn">„halb drei" NO es las 3 y media, es las <strong>2:30</strong> (media para las 3). Es el error nº 1 de los hispanohablantes con la hora.</div>`,
        examples: [
          { de: 'Es ist <strong>Viertel nach vier</strong>.', es: 'Son las 4:15.' },
          { de: 'Es ist <strong>halb fünf</strong>.', es: 'Son las 4:30.', note: 'Media PARA las cinco = 4:30.' },
          { de: 'Es ist <strong>Viertel vor fünf</strong>.', es: 'Son las 4:45.' },
          { de: 'Um wie viel Uhr? — Um acht Uhr.', es: '¿A qué hora? — A las ocho.', note: '„um" + hora para las citas.' }
        ]
      },
      {
        title: 'Días y fechas',
        content: `<p>Para "el lunes" se usa <strong>am</strong> (am + día): am Montag. Para "en enero", <strong>im</strong> (im + mes): im Januar. La fecha con número usa ordinales: <strong>der erste Mai</strong> (el 1 de mayo), <strong>am ersten Mai</strong> (el 1 de mayo, como complemento).</p>`,
        examples: [
          { de: 'Ich habe <strong>am Montag</strong> Zeit.', es: 'El lunes tengo tiempo.' },
          { de: 'Mein Geburtstag ist <strong>im Juni</strong>.', es: 'Mi cumpleaños es en junio.' },
          { de: 'Heute ist <strong>der erste Mai</strong>.', es: 'Hoy es el uno de mayo.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'num-01', type: 'fill-blank', prompt: '21 = ___ (una sola palabra)', answer: 'einundzwanzig', explanation: 'Unidad + und + decena: ein-und-zwanzig.' },
      { id: 'num-02', type: 'fill-blank', prompt: '35 = ___', answer: 'fünfunddreißig', explanation: 'fünf-und-dreißig (cinco-y-treinta).' },
      { id: 'num-03', type: 'fill-blank', prompt: '12 = ___', answer: 'zwölf' },
      { id: 'num-04', type: 'multiple-choice', prompt: '„halb drei" son las…', options: ['2:30', '3:30', '2:00', '3:15'], answer: '2:30', explanation: '„halb drei" = media para las 3 = 2:30.', tip: '„halb + N" siempre mira a la hora SIGUIENTE: halb drei = 2:30, halb zehn = 9:30. Resta una hora al número que oigas.' },
      { id: 'num-05', type: 'multiple-choice', prompt: '„Viertel nach vier" son las…', options: ['4:15', '3:45', '4:45', '4:30'], answer: '4:15', explanation: 'Viertel nach = y cuarto.' },
      { id: 'num-06', type: 'multiple-choice', prompt: '„Viertel vor vier" son las…', options: ['3:45', '4:15', '4:45', '4:30'], answer: '3:45', explanation: 'Viertel vor = menos cuarto (un cuarto para las 4).' },
      { id: 'num-07', type: 'translate', prompt: 'Traduce: ¿Qué hora es?', answer: 'Wie spät ist es?', acceptable: ['Wie viel Uhr ist es?'], explanation: 'Dos formas: „Wie spät ist es?" / „Wie viel Uhr ist es?"' },
      { id: 'num-08', type: 'fill-blank', prompt: 'Es ist drei ___. (en punto)', answer: 'Uhr', explanation: '„Uhr" para las horas en punto: Es ist drei Uhr = son las 3.' },
      { id: 'num-09', type: 'multiple-choice', prompt: '"el lunes":', options: ['am Montag', 'im Montag', 'um Montag', 'in Montag'], answer: 'am Montag', explanation: 'Con días de la semana se usa „am".' },
      { id: 'num-10', type: 'multiple-choice', prompt: '"en enero":', options: ['im Januar', 'am Januar', 'um Januar', 'in Januar'], answer: 'im Januar', explanation: 'Con meses se usa „im".' },
      { id: 'num-11', type: 'multiple-choice', prompt: '„Mittwoch" es:', options: ['miércoles', 'martes', 'jueves', 'lunes'], answer: 'miércoles' },
      { id: 'num-12', type: 'translate', prompt: 'Traduce: Hoy es martes.', answer: 'Heute ist Dienstag.' },
      { id: 'num-13', type: 'fill-blank', prompt: '100 = ___', answer: 'hundert', acceptable: ['einhundert'], explanation: '„hundert" o „einhundert".' },
      { id: 'num-14', type: 'multiple-choice', prompt: '"el uno de mayo":', options: ['der erste Mai', 'der eins Mai', 'der erster Mai', 'am eins Mai'], answer: 'der erste Mai', explanation: 'Fecha con ordinal: der erste (1º) Mai.' },
      { id: 'num-15', type: 'reorder', words: ['Es', 'ist', 'halb', 'zehn'], hint: 'Son las nueve y media.', answer: 'Es ist halb zehn.', explanation: '„halb zehn" = media para las 10 = 9:30.' },
      { id: 'num-16', type: 'fill-blank', prompt: 'Der Kurs beginnt ___ acht Uhr. (a las → preposición de hora)', answer: 'um', explanation: '„um" + hora para las citas: um acht Uhr.' },
      { id: 'num-17', type: 'clock', time: '3:00', prompt: '¿Qué hora marca el reloj? (en alemán)', options: ['drei Uhr', 'halb drei', 'Viertel nach drei', 'zwölf Uhr'], answer: 'drei Uhr', explanation: 'Las 3 en punto → „drei Uhr".' },
      { id: 'num-18', type: 'clock', time: '3:30', prompt: '¿Qué hora marca el reloj? (en alemán)', options: ['halb vier', 'halb drei', 'Viertel nach drei', 'drei Uhr'], answer: 'halb vier', explanation: '3:30 = media para las 4 = „halb vier".' },
      { id: 'num-19', type: 'clock', time: '4:15', prompt: '¿Qué hora marca el reloj? (en alemán)', options: ['Viertel nach vier', 'Viertel vor vier', 'halb vier', 'vier Uhr'], answer: 'Viertel nach vier', explanation: '4:15 = „Viertel nach vier" (y cuarto).' },
      { id: 'num-20', type: 'clock', time: '9:45', prompt: '¿Qué hora marca el reloj? (en alemán)', options: ['Viertel vor zehn', 'Viertel nach neun', 'halb zehn', 'neun Uhr'], answer: 'Viertel vor zehn', explanation: '9:45 = „Viertel vor zehn" (un cuarto para las 10).' },
      { id: 'num-21', type: 'clock', time: '6:30', prompt: '¿Qué hora marca el reloj? (en alemán)', options: ['halb sieben', 'halb sechs', 'sechs Uhr', 'Viertel vor sieben'], answer: 'halb sieben', explanation: '6:30 = media para las 7 = „halb sieben".' },
      { id: 'num-22', type: 'match', prompt: 'Empareja el número con su palabra:', pairs: [['21', 'einundzwanzig'], ['12', 'zwölf'], ['30', 'dreißig'], ['47', 'siebenundvierzig']], explanation: 'Recuerda: del 21 en adelante, la unidad va primero (ein-und-zwanzig).' },
      { id: 'num-23', type: 'listen', say: 'einundzwanzig', prompt: 'Escucha: ¿qué número oyes?', options: ['21', '12', '32', '23'], answer: '21', explanation: '„ein-und-zwanzig" = uno-y-veinte = 21. El oído español espera „veintiuno" y se lía con la inversión.' },
      { id: 'num-24', type: 'listen', say: 'Es ist halb vier.', prompt: 'Escucha: ¿qué hora es?', options: ['3:30', '4:30', '4:15', '3:45'], answer: '3:30', explanation: '„halb vier" = media PARA las cuatro = 3:30.' },
      { id: 'num-25', type: 'listen', say: 'Es ist Viertel vor acht.', prompt: 'Escucha: ¿qué hora es?', options: ['7:45', '8:15', '7:15', '8:45'], answer: '7:45', explanation: '„Viertel vor acht" = un cuarto para las ocho = 7:45.' },
      { id: 'num-26', type: 'dictation', say: 'dreiundzwanzig', prompt: 'Dictado: escribe el número que oyes (en letras).', answer: 'dreiundzwanzig', explanation: '23 = drei-und-zwanzig (tres-y-veinte): la unidad va primero y todo junto.' }
      ,
      { id: 'num-27', type: 'multiple-choice', prompt: 'Historia: Wann fährt der Zug nach München?', options: ['um Viertel nach drei (3:15)', 'um halb drei (2:30)', 'um drei Uhr (3:00)', 'um Viertel vor drei (2:45)'], answer: 'um Viertel nach drei (3:15)', explanation: '„Um Viertel nach drei, von Gleis sieben."' },
      { id: 'num-28', type: 'multiple-choice', prompt: 'Historia: Wie spät ist es, als Laura fragt?', options: ['halb drei (2:30)', 'halb vier (3:30)', 'drei Uhr (3:00)', 'Viertel nach zwei (2:15)'], answer: 'halb drei (2:30)', explanation: '„Es ist halb drei. Sie haben noch Zeit." — media para las tres = 2:30.' },
      { id: 'num-29', type: 'fill-blank', prompt: 'Historia: Der Zug fährt von Gleis ___. (7, en palabra)', answer: 'sieben', explanation: 'das Gleis sieben = la vía siete.' }
    ],
    story: {
      intro: 'Laura viaja sola a Múnich por primera vez. En la estación todo son números y horas: el andén, el precio del billete, el reloj… y la trampa de „halb drei".',
      lines: [
        { speaker: '', de: 'Laura ist am Bahnhof. Sie fährt zum ersten Mal allein nach München.', es: 'Laura está en la estación. Va por primera vez sola a Múnich.' },
        { speaker: 'Laura', de: 'Entschuldigung, wann fährt der Zug nach München?', es: 'Perdone, ¿cuándo sale el tren a Múnich?' },
        { speaker: 'Mann', de: 'Um Viertel nach drei, von Gleis sieben.', es: 'A las tres y cuarto, de la vía siete.' },
        { speaker: 'Laura', de: 'Und wie spät ist es jetzt?', es: '¿Y qué hora es ahora?' },
        { speaker: 'Mann', de: 'Es ist halb drei. Sie haben noch Zeit.', es: 'Son las dos y media. Aún tiene tiempo.' },
        { speaker: 'Laura', de: 'Was kostet ein Ticket nach München?', es: '¿Cuánto cuesta un billete a Múnich?' },
        { speaker: 'Schalterfrau', de: 'Einundvierzig Euro.', es: 'Cuarenta y un euros.' },
        { speaker: 'Laura', de: 'Einundvierzig?! Puh. Und mit der Bahncard?', es: '¡¿Cuarenta y uno?! Uf. ¿Y con la Bahncard?' },
        { speaker: 'Schalterfrau', de: 'Dreißig Euro fünfzig.', es: 'Treinta euros con cincuenta.' },
        { speaker: '', de: 'Um Viertel nach drei sitzt Laura im Zug — Wagen zwölf, Platz achtundzwanzig.', es: 'A las tres y cuarto, Laura está sentada en el tren — vagón doce, asiento veintiocho.' },
        { speaker: 'Laura', de: 'München, ich komme! In zwei Stunden und fünfzehn Minuten.', es: '¡Múnich, allá voy! En dos horas y quince minutos.' }
      ]
    }
  });
})();
