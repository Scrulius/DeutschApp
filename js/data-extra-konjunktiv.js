(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Las formas que hay que saber</caption>' +
    '<tr><th>Verbo</th><th>Konjunktiv II</th><th>Ejemplo</th></tr>' +
    '<tr><td>(casi todos)</td><td class="hl">würde + infinitivo</td><td>Ich würde mehr reisen.</td></tr>' +
    '<tr><td>sein</td><td class="hl">wäre</td><td>Das wäre schön!</td></tr>' +
    '<tr><td>haben</td><td class="hl">hätte</td><td>Ich hätte gern mehr Zeit.</td></tr>' +
    '<tr><td>können</td><td class="hl">könnte</td><td>Könnten Sie mir helfen?</td></tr>' +
    '<tr><td>müssen</td><td>müsste</td><td>Du müsstest mehr schlafen.</td></tr>' +
    '<tr><td>sollen</td><td>sollte</td><td>Du solltest zum Arzt gehen.</td></tr>' +
    '<tr><td>dürfen</td><td>dürfte</td><td>Dürfte ich kurz stören?</td></tr>' +
    '</table></div>' +
    '<div class="tip">Regla práctica: usa <strong>würde + infinitivo</strong> para todo, SALVO con sein, haben y los modales — ahí se usan las formas propias (wäre, hätte, könnte…), nunca „würde sein/haben".</div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Para qué sirve</caption>' +
    '<tr><th>Uso</th><th>Ejemplo</th></tr>' +
    '<tr><td>Cortesía</td><td>Könnten Sie…? / Würden Sie…? / Ich hätte gern…</td></tr>' +
    '<tr><td>Deseos</td><td>Ich wäre jetzt gern am Strand.</td></tr>' +
    '<tr><td>Consejos</td><td>Du solltest mehr Wasser trinken.</td></tr>' +
    '<tr><td>Irreal</td><td>Wenn ich reich wäre, würde ich nicht arbeiten.</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'konjunktiv',
    category: 'nivel3',
    icon: '💭',
    title: 'Konjunktiv II — würde, hätte, wäre',
    desc: 'El modo de la cortesía, los deseos y lo hipotético. La pieza que convierte tu alemán de "correcto" a "educado y natural".',
    lessons: [
      {
        title: 'Para qué sirve: cortesía, deseos, consejos, hipótesis',
        content: `<p>El Konjunktiv II es el "condicional" alemán, y en B1 es obligatorio porque cubre cuatro cosas cotidianas: pedir con <strong>cortesía</strong> (Könnten Sie…?), expresar <strong>deseos</strong> (Ich hätte gern…), dar <strong>consejos</strong> (Du solltest…) y hablar de lo <strong>irreal</strong> (Wenn ich reich wäre…).</p>
          <div class="tip">Ya lo llevas usando desde el nivel 1 sin saberlo: „Ich <strong>hätte</strong> gern einen Kaffee" y „Ich <strong>möchte</strong>…" son Konjunktiv II. Ahora le pones nombre.</div>`,
        examples: [
          { de: '<strong>Könnten</strong> Sie mir bitte helfen?', es: '¿Podría ayudarme, por favor?', note: 'Muchísimo más suave que „Können Sie…?"' },
          { de: 'Ich <strong>wäre</strong> jetzt gern am Strand.', es: 'Ahora mismo me gustaría estar en la playa.' },
          { de: 'Du <strong>solltest</strong> mehr schlafen.', es: 'Deberías dormir más.' },
          { de: 'Das <strong>wäre</strong> schön!', es: '¡Eso estaría bien!', note: 'Frase comodín para reaccionar a planes.' }
        ]
      },
      {
        title: 'Las formas: würde para todo, salvo los especiales',
        content: `<p>La receta es simple: <strong>würde + infinitivo</strong> („Ich würde mehr reisen"). Pero <strong>sein, haben y los modales</strong> usan sus formas propias — <strong>wäre, hätte, könnte, müsste, sollte, dürfte</strong> — y con ellos „würde" suena mal: no digas „ich würde haben", di „ich hätte".</p>
          <div class="warn">Ojo con el umlaut: <strong>konnte</strong> (pude, pasado) ≠ <strong>könnte</strong> (podría, condicional). Ya viste el par en el módulo de Präteritum — aquí está la otra mitad.</div>`,
        examples: [
          { de: 'Ich <strong>würde</strong> gern in Wien <strong>wohnen</strong>.', es: 'Me gustaría vivir en Viena.', note: 'würde en posición 2, infinitivo al final — la pinza de siempre.' },
          { de: 'Ich <strong>hätte</strong> gern mehr Zeit.', es: 'Me gustaría tener más tiempo.', note: 'No „würde haben".' },
          { de: 'Das <strong>könnte</strong> ein Problem sein.', es: 'Eso podría ser un problema.' },
          { de: 'An deiner Stelle <strong>würde</strong> ich das nicht <strong>machen</strong>.', es: 'Yo en tu lugar no lo haría.', note: 'Fórmula de consejo estrella.' }
        ]
      },
      {
        title: 'Las frases con wenn irreal',
        content: `<p>Para hipótesis: <strong>Wenn + Konjunktiv II (verbo al final), Konjunktiv II…</strong> La subordinada con „wenn" manda el verbo al final (como toda Nebensatz), y tras la coma viene la inversión: „<strong>Wenn ich Zeit hätte, würde ich</strong> mehr lesen."</p>`,
        examples: [
          { de: '<strong>Wenn</strong> ich reich <strong>wäre</strong>, <strong>würde</strong> ich nicht arbeiten.', es: 'Si fuera rico, no trabajaría.' },
          { de: '<strong>Wenn</strong> ich Zeit <strong>hätte</strong>, <strong>würde</strong> ich dir helfen.', es: 'Si tuviera tiempo, te ayudaría.' },
          { de: 'Was <strong>würdest</strong> du <strong>machen</strong>, wenn du eine Million <strong>hättest</strong>?', es: '¿Qué harías si tuvieras un millón?' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'kj2-01', type: 'fill-blank', prompt: 'Wenn ich Zeit ___, würde ich mehr lesen. (haben)', answer: 'hätte', explanation: 'haben en Konjunktiv II → hätte (no „würde haben").', tip: 'würde + infinitivo para casi todo; sein/haben/modales usan sus formas propias: wäre, hätte, könnte, müsste, sollte.' },
      { id: 'kj2-02', type: 'fill-blank', prompt: 'Das ___ schön! (sein)', answer: 'wäre', explanation: 'sein → wäre.' },
      { id: 'kj2-03', type: 'fill-blank', prompt: '___ Sie mir bitte helfen? (poder, cortesía)', answer: 'Könnten', explanation: 'Petición cortés → Könnten Sie…?' },
      { id: 'kj2-04', type: 'multiple-choice', prompt: 'Du ___ mehr schlafen. (consejo)', options: ['solltest', 'sollst', 'solltest du', 'würdest'], answer: 'solltest', explanation: 'Consejo → solltest (Konjunktiv II de sollen).' },
      { id: 'kj2-05', type: 'multiple-choice', prompt: '¿Cuál es la forma correcta para "yo tendría"?', options: ['ich hätte', 'ich würde haben', 'ich hatte', 'ich habe'], answer: 'ich hätte', explanation: 'haben no usa würde: hätte. („hatte" sin umlaut es pasado real.)' },
      { id: 'kj2-06', type: 'translate', prompt: 'Traduce: ¿Podría ayudarme? (formal)', answer: 'Könnten Sie mir helfen?', explanation: 'Könnten Sie + Dativ mir + infinitivo al final.' },
      { id: 'kj2-07', type: 'reorder', words: ['Wenn', 'ich', 'reich', 'wäre,', 'würde', 'ich', 'nicht', 'arbeiten'], hint: 'Si fuera rico, no trabajaría.', answer: 'Wenn ich reich wäre, würde ich nicht arbeiten.', explanation: 'wenn manda „wäre" al final; tras la coma, inversión: würde ich.' },
      { id: 'kj2-08', type: 'find-error', prompt: '¿Dónde está el error? (el orden tras la coma)', words: ['Wenn', 'ich', 'Zeit', 'hätte,', 'ich', 'würde', 'mehr', 'lesen.'], wrong: 4, fix: 'würde ich (inversión tras la coma)', explanation: 'La subordinada con wenn ocupa la posición 1 → el verbo va justo después de la coma: …, würde ich mehr lesen.' },
      { id: 'kj2-09', type: 'match', prompt: 'Empareja cada verbo con su Konjunktiv II:', pairs: [['sein', 'wäre'], ['haben', 'hätte'], ['können', 'könnte'], ['müssen', 'müsste']], explanation: 'Los cuatro especiales que no usan würde.' },
      { id: 'kj2-10', type: 'multiple-choice', prompt: '¿Cuál es la petición MÁS educada?', options: ['Könnten Sie das Fenster öffnen?', 'Öffnen Sie das Fenster!', 'Sie müssen das Fenster öffnen.', 'Fenster auf!'], answer: 'Könnten Sie das Fenster öffnen?', explanation: 'Konjunktiv II = el registro cortés por excelencia.' },
      { id: 'kj2-11', type: 'multiple-choice', prompt: '„An deiner Stelle würde ich…" significa:', options: ['Yo en tu lugar…', 'En mi opinión…', 'Por tu culpa…', 'A tu lado…'], answer: 'Yo en tu lugar…', explanation: 'La fórmula fija para aconsejar.' },
      { id: 'kj2-12', type: 'listen', say: 'Was würdest du machen?', prompt: 'Escucha: ¿qué pregunta oyes?', options: ['Was würdest du machen?', 'Was wirst du machen?', 'Was hast du gemacht?', 'Was musst du machen?'], answer: 'Was würdest du machen?', explanation: '„würdest" (hipotético) frente a „wirst" (futuro real) — se distinguen por una sílaba.' },
      { id: 'kj2-13', type: 'dictation', say: 'Das wäre schön.', prompt: 'Dictado: escribe lo que oyes.', answer: 'Das wäre schön.', explanation: 'La reacción comodín a cualquier plan bonito.' },
      { id: 'kj2-14', type: 'multiple-choice', prompt: 'Historia: Was würde Nina machen, wenn sie gewinnen würde?', options: ['kündigen und ein Jahr reisen', 'ein Haus am Meer kaufen', 'weiterarbeiten', 'nichts'], answer: 'kündigen und ein Jahr reisen', explanation: '„Ich würde sofort kündigen und ein Jahr reisen."' },
      { id: 'kj2-15', type: 'multiple-choice', prompt: 'Historia: Was hätte Omar gern?', options: ['ein Haus am Meer', 'ein neues Auto', 'mehr Urlaub', 'einen Lottoschein'], answer: 'ein Haus am Meer', explanation: '„Ich hätte gern ein Haus am Meer."' },
      { id: 'kj2-16', type: 'multiple-choice', prompt: 'Historia: Warum können die drei eigentlich gar nicht gewinnen?', options: ['Sie spielen gar kein Lotto', 'Sie haben kein Glück', 'Der Jackpot ist zu klein', 'Sie sind zu jung'], answer: 'Sie spielen gar kein Lotto', explanation: '„Wir sollten erst mal einen Lottoschein kaufen. Wir spielen ja gar nicht."' },
      { id: 'kj2-17', type: 'multiple-choice', prompt: 'Historia: Wohin würde Jule als Erstes reisen?', options: ['nach Japan', 'ans Meer', 'nach Hamburg', 'nirgendwohin'], answer: 'nach Japan', explanation: '„Nach Japan. Ich würde dort ein ganzes Jahr bleiben, wenn ich könnte."' },
      { id: 'kj2-18', type: 'multiple-choice', prompt: 'Historia: Wie viel gewinnen die drei am Ende wirklich?', options: ['zwölf Euro fünfzig', 'zwanzig Millionen', 'tausend Euro', 'gar nichts'], answer: 'zwölf Euro fünfzig', explanation: '„Zwölf Euro fünfzig. Wir sind reich!" — la realidad frente al Konjunktiv.' },
      { id: 'kj2-19', type: 'fill-blank', prompt: 'Historia: Damit ___ wir drei Eiskugeln pro Person kaufen. (poder, Konjunktiv II)', answer: 'könnten', explanation: 'können → könnten: lo que PODRÍAN comprar con su fortuna de 12,50 €.' }
    ],
    story: {
      intro: 'Viernes por la noche: en la radio anuncian un bote de veinte millones y tres amigos se ponen a fantasear. Puro Konjunktiv II — würde, hätte, könnte, sollte.',
      lines: [
        { speaker: '', de: 'Freitagabend auf dem Balkon. Im Radio: Der Jackpot liegt bei zwanzig Millionen.', es: 'Viernes por la noche en el balcón. En la radio: el bote está en veinte millones.' },
        { speaker: 'Omar', de: 'Was würdet ihr machen, wenn ihr den Jackpot gewinnen würdet?', es: '¿Qué haríais si os tocara el bote?' },
        { speaker: 'Nina', de: 'Ich würde sofort kündigen und ein Jahr reisen.', es: 'Yo dimitiría al instante y viajaría un año.' },
        { speaker: 'Jule', de: 'Ich nicht. Ich würde weiterarbeiten, aber nur drei Tage pro Woche.', es: 'Yo no. Yo seguiría trabajando, pero solo tres días a la semana.' },
        { speaker: 'Omar', de: 'Ich hätte gern ein Haus am Meer. Und ihr könntet mich jeden Sommer besuchen.', es: 'A mí me gustaría tener una casa junto al mar. Y vosotras podríais visitarme cada verano.' },
        { speaker: 'Nina', de: 'Wie großzügig! Und wenn du nur tausend Euro gewinnen würdest?', es: '¡Qué generoso! ¿Y si solo ganaras mil euros?' },
        { speaker: 'Omar', de: 'Dann würde ich euch zum Essen einladen.', es: 'Entonces os invitaría a cenar.' },
        { speaker: 'Jule', de: 'Und wenn du gar nichts gewinnen würdest?', es: '¿Y si no ganaras nada de nada?' },
        { speaker: 'Omar', de: 'Dann wäre ich trotzdem glücklich. Balkon, Freunde, Sommerabend — was will man mehr?', es: 'Aun así sería feliz. Balcón, amigos, una noche de verano — ¿qué más se puede pedir?' },
        { speaker: 'Nina', de: 'Wie tief! Aber mal ehrlich: Wohin würdet ihr als Erstes reisen?', es: '¡Qué profundo! Pero en serio: ¿adónde viajaríais primero?' },
        { speaker: 'Jule', de: 'Nach Japan. Ich würde dort ein ganzes Jahr bleiben, wenn ich könnte.', es: 'A Japón. Me quedaría allí un año entero si pudiera.' },
        { speaker: 'Omar', de: 'Siehst du! Du würdest also DOCH kündigen.', es: '¡Lo ves! O sea que SÍ dimitirías.' },
        { speaker: 'Jule', de: 'Niemals! Ich hätte einfach sehr, sehr langen Urlaub.', es: '¡Jamás! Simplemente tendría unas vacaciones muy, muy largas.' },
        { speaker: 'Jule', de: 'Wir sollten erst mal einen Lottoschein kaufen. Wir spielen ja gar nicht.', es: 'Primero deberíamos comprar un boleto. Si es que ni jugamos.' },
        { speaker: '', de: 'Fünf Minuten später stehen die drei am Kiosk und kaufen einen Schein.', es: 'Cinco minutos después, los tres están en el quiosco comprando un boleto.' },
        { speaker: 'Omar', de: 'Wenn wir gewinnen, teilen wir durch drei. Versprochen?', es: 'Si ganamos, dividimos entre tres. ¿Prometido?' },
        { speaker: '', de: 'Am Samstag sitzen sie wieder auf dem Balkon. Die Ziehung beginnt.', es: 'El sábado están otra vez en el balcón. Empieza el sorteo.' },
        { speaker: 'Nina', de: 'Die Sieben! Wir haben die Sieben! Und... das war es.', es: '¡El siete! ¡Tenemos el siete! Y… hasta ahí.' },
        { speaker: 'Jule', de: 'Zwölf Euro fünfzig. Wir sind reich!', es: 'Doce euros con cincuenta. ¡Somos ricos!' },
        { speaker: 'Omar', de: 'Damit könnten wir... drei Eiskugeln pro Person kaufen.', es: 'Con eso podríamos comprar… tres bolas de helado por cabeza.' },
        { speaker: '', de: 'Alle lachen. Träumen kostet nichts.', es: 'Todos se ríen. Soñar es gratis.' }
      ]
    }
  });
})();
