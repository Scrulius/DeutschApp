(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>En el café / restaurante</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>Die Speisekarte, bitte.</td><td>La carta, por favor.</td></tr>' +
    '<tr><td>Ich hätte gern… / Ich möchte…</td><td>Quisiera… / Querría…</td></tr>' +
    '<tr><td>Ein Glas Wasser / Eine Tasse Kaffee</td><td>Un vaso de agua / una taza de café</td></tr>' +
    '<tr><td>Die Rechnung, bitte. / Zahlen, bitte.</td><td>La cuenta, por favor.</td></tr>' +
    '<tr><td>Zusammen oder getrennt?</td><td>¿Junto o separado? (al pagar)</td></tr>' +
    '<tr><td>Guten Appetit! / Prost!</td><td>¡Que aproveche! / ¡Salud!</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>De compras</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>Was kostet das? / Wie viel kostet das?</td><td>¿Cuánto cuesta esto?</td></tr>' +
    '<tr><td>Ich suche…</td><td>Busco…</td></tr>' +
    '<tr><td>Welche Größe?</td><td>¿Qué talla?</td></tr>' +
    '<tr><td>Kann ich mit Karte zahlen?</td><td>¿Puedo pagar con tarjeta?</td></tr>' +
    '<tr><td>Nur schauen, danke.</td><td>Solo estoy mirando, gracias.</td></tr>' +
    '</table></div>' +
    '<div class="tip"><strong>Ich hätte gern…</strong> (literalmente "yo tendría con gusto…") es la forma más educada de pedir, más que „Ich will" (quiero, suena brusco) o incluso „Ich möchte". Úsala al pedir en cualquier sitio.</div>';

  registerModule({
    id: 'restaurante',
    category: 'nivel2',
    track: 'Comunicación',
    icon: '🍽️',
    title: 'En el restaurante y de compras',
    desc: 'Pedir con educación, pagar y comprar: las frases exactas para no quedarte en blanco en la caja.',
    lessons: [
      {
        title: 'Pedir en un café o restaurante',
        content: `<p>Para pedir con educación, la fórmula estrella es <strong>Ich hätte gern…</strong> o <strong>Ich möchte…</strong> + lo que quieras + <strong>bitte</strong>. Evita „Ich will…" (quiero), que suena exigente.</p>`,
        examples: [
          { de: '<strong>Die Speisekarte</strong>, bitte.', es: 'La carta, por favor.' },
          { de: '<strong>Ich hätte gern</strong> einen Kaffee, bitte.', es: 'Quisiera un café, por favor.' },
          { de: 'Ich möchte <strong>ein Glas Wasser</strong>.', es: 'Querría un vaso de agua.', note: 'ein Glas Wasser (un vaso de agua), eine Tasse Kaffee (una taza de café).' },
          { de: 'Guten Appetit!', es: '¡Que aproveche!', note: 'Se dice antes de empezar a comer.' }
        ]
      },
      {
        title: 'Pagar',
        content: `<p>Para pedir la cuenta: <strong>Die Rechnung, bitte</strong> o simplemente <strong>Zahlen, bitte</strong>. El camarero suele preguntar <strong>Zusammen oder getrennt?</strong> (¿pagáis junto o por separado?). En muchos sitios aún conviene llevar efectivo, así que pregunta <strong>Kann ich mit Karte zahlen?</strong> si quieres pagar con tarjeta.</p>`,
        examples: [
          { de: '<strong>Die Rechnung, bitte.</strong>', es: 'La cuenta, por favor.' },
          { de: 'Zusammen oder getrennt? — <strong>Getrennt, bitte.</strong>', es: '¿Junto o separado? — Separado, por favor.' },
          { de: '<strong>Kann ich mit Karte zahlen?</strong>', es: '¿Puedo pagar con tarjeta?' }
        ]
      },
      {
        title: 'De compras',
        content: `<p>Lo esencial: preguntar el precio (<strong>Was kostet das?</strong>), decir qué buscas (<strong>Ich suche…</strong>) y la talla (<strong>Welche Größe?</strong>). Si solo miras, di <strong>Nur schauen, danke</strong>.</p>`,
        examples: [
          { de: '<strong>Was kostet das?</strong>', es: '¿Cuánto cuesta esto?' },
          { de: '<strong>Ich suche</strong> eine Jacke.', es: 'Busco una chaqueta.' },
          { de: 'Kann ich helfen? — <strong>Nur schauen</strong>, danke.', es: '¿Le ayudo? — Solo estoy mirando, gracias.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'res-01', type: 'translate', prompt: 'Traduce: Quisiera un café, por favor.', answer: 'Ich möchte einen Kaffee, bitte.', acceptable: ['Ich hätte gern einen Kaffee, bitte.'], explanation: '„Ich möchte" / „Ich hätte gern" = quisiera (educado).' },
      { id: 'res-02', type: 'multiple-choice', prompt: 'Pedir la cuenta:', options: ['Die Rechnung, bitte.', 'Die Speisekarte, bitte.', 'Guten Appetit.', 'Nur schauen, danke.'], answer: 'Die Rechnung, bitte.', explanation: 'die Rechnung = la cuenta. (También „Zahlen, bitte.")' },
      { id: 'res-03', type: 'fill-blank', prompt: 'Ich ___ gern ein Wasser. (forma cortés: „tendría")', answer: 'hätte', explanation: '„Ich hätte gern…" = quisiera (la fórmula más educada para pedir).' },
      { id: 'res-04', type: 'multiple-choice', prompt: '„Zusammen oder getrennt?" pregunta:', options: ['¿Junto o separado (la cuenta)?', '¿Con o sin gas?', '¿Para tomar o llevar?', '¿Frío o caliente?'], answer: '¿Junto o separado (la cuenta)?', explanation: 'Lo pregunta el camarero al pagar en grupo.' },
      { id: 'res-05', type: 'translate', prompt: 'Traduce: ¿Cuánto cuesta esto?', answer: 'Was kostet das?', acceptable: ['Wie viel kostet das?'], explanation: '„Was/Wie viel kostet das?"' },
      { id: 'res-06', type: 'fill-blank', prompt: 'Ich ___ eine Jacke. (buscar)', answer: 'suche', explanation: 'suchen → ich suche (busco).' },
      { id: 'res-07', type: 'multiple-choice', prompt: '„Kann ich mit Karte zahlen?" pregunta si puedes pagar con…', options: ['tarjeta', 'efectivo', 'cheque', 'móvil'], answer: 'tarjeta', explanation: 'die Karte = tarjeta; „bar" sería en efectivo.' },
      { id: 'res-08', type: 'translate', prompt: 'Traduce: La carta, por favor.', answer: 'Die Speisekarte, bitte.', acceptable: ['Die Karte, bitte.'], explanation: 'die Speisekarte = la carta / el menú.' },
      { id: 'res-09', type: 'fill-blank', prompt: 'Ein ___ Wasser, bitte. (un vaso de)', answer: 'Glas', explanation: 'ein Glas Wasser = un vaso de agua.' },
      { id: 'res-10', type: 'fill-blank', prompt: 'Eine ___ Kaffee, bitte. (una taza de)', answer: 'Tasse', explanation: 'eine Tasse Kaffee = una taza de café.' },
      { id: 'res-11', type: 'multiple-choice', prompt: '„Welche Größe?" pregunta por…', options: ['la talla', 'el color', 'el precio', 'la marca'], answer: 'la talla', explanation: 'die Größe = la talla / el tamaño.' },
      { id: 'res-12', type: 'translate', prompt: 'Traduce: ¿Puedo pagar con tarjeta?', answer: 'Kann ich mit Karte zahlen?', explanation: 'mit Karte zahlen = pagar con tarjeta.' },
      { id: 'res-13', type: 'reorder', words: ['Die', 'Rechnung,', 'bitte'], hint: 'La cuenta, por favor.', answer: 'Die Rechnung, bitte.', explanation: 'La frase fija para pedir la cuenta.' },
      { id: 'res-14', type: 'multiple-choice', prompt: 'Antes de empezar a comer se dice:', options: ['Guten Appetit!', 'Prost!', 'Gesundheit!', 'Viel Glück!'], answer: 'Guten Appetit!', explanation: '„Guten Appetit!" = ¡que aproveche! („Prost!" es para brindar, „Gesundheit!" cuando alguien estornuda.)' },
      { id: 'res-15', type: 'multiple-choice', prompt: 'Para brindar se dice:', options: ['Prost!', 'Guten Appetit!', 'Tschüss!', 'Bitte!'], answer: 'Prost!', explanation: '„Prost!" / „Zum Wohl!" = ¡salud! al brindar.' },
      { id: 'res-16', type: 'match', prompt: 'Empareja cada frase con su significado:', pairs: [['Die Rechnung, bitte.', 'La cuenta, por favor.'], ['Was kostet das?', '¿Cuánto cuesta?'], ['Ich hätte gern…', 'Quisiera…'], ['Prost!', '¡Salud!']], explanation: 'Frases clave de restaurante y compras.' },
      { id: 'res-17', type: 'listen', say: 'Zusammen oder getrennt?', prompt: 'Escucha: el camarero te pregunta algo. ¿Qué es?', options: ['¿Pagáis junto o separado?', '¿Para tomar o llevar?', '¿Con o sin gas?', '¿Efectivo o tarjeta?'], answer: '¿Pagáis junto o separado?', explanation: '„Zusammen oder getrennt?" — la pregunta clásica al pedir la cuenta en grupo.' }
      ,
      { id: 'res-18', type: 'multiple-choice', prompt: 'Historia: Für wie viele Personen ist der Tisch reserviert?', options: ['für fünf', 'für vier', 'für sechs', 'für zwei'], answer: 'für fünf', explanation: '„Ein Tisch für fünf Personen, auf den Namen Ruiz."' },
      { id: 'res-19', type: 'multiple-choice', prompt: 'Historia: Was bestellt die Oma?', options: ['das Hähnchen mit Kartoffeln', 'das Schnitzel', 'nur den Kuchen', 'eine Suppe'], answer: 'das Hähnchen mit Kartoffeln', explanation: '„Ich hätte gern das Hähnchen mit Kartoffeln."' },
      { id: 'res-20', type: 'multiple-choice', prompt: 'Historia: „Der Kuchen geht aufs Haus" significa:', options: ['La tarta la invita la casa (gratis)', 'La tarta se ha acabado', 'La tarta se paga aparte', 'La tarta es para llevar'], answer: 'La tarta la invita la casa (gratis)', explanation: '„aufs Haus gehen" = correr a cuenta de la casa. Frase que alegra cualquier cena.' },
      { id: 'res-21', type: 'multiple-choice', prompt: 'Ich bin allergisch ___ Nüsse.', options: ['gegen', 'auf', 'für', 'mit'], answer: 'gegen', explanation: 'allergisch GEGEN + Akkusativ. Frase vital si tienes alergias.' },
      { id: 'res-22', type: 'translate', prompt: 'Traduce: ¿Qué me recomienda? (formal)', answer: 'Was empfehlen Sie mir?', explanation: 'empfehlen + Dativ (mir): la pregunta que todo camarero espera.' },
      { id: 'res-23', type: 'multiple-choice', prompt: 'Al pagar dices „Stimmt so!" — significa:', options: ['Quédese con el cambio', 'La cuenta está mal', 'Cóbreme aparte', 'Todo correcto, deme el cambio'], answer: 'Quédese con el cambio', explanation: 'La fórmula estándar para dejar propina redondeando.' },
      { id: 'res-24', type: 'fill-blank', prompt: '___ es Ihnen? (pregunta del camarero: ¿le gusta / sabe bien?)', answer: 'Schmeckt', explanation: '„Schmeckt es Ihnen?" — schmecken + Dativ, el clásico a mitad de comida.' },
      { id: 'res-25', type: 'multiple-choice', prompt: 'Historia: Was bestellt die Tochter?', options: ['die Gemüselasagne und ein stilles Wasser', 'das Schnitzel', 'Pommes mit Ketchup', 'den Fisch'], answer: 'die Gemüselasagne und ein stilles Wasser', explanation: '„Gibt es auch etwas Vegetarisches?" → la lasaña de verduras. „still" = sin gas.' },
      { id: 'res-26', type: 'multiple-choice', prompt: 'Historia: Was ist das Problem mit dem Essen?', options: ['Der Vater bekommt den Fisch statt des Schnitzels', 'Das Essen ist kalt', 'Die Lasagne ist aus', 'Die Rechnung ist falsch'], answer: 'Der Vater bekommt den Fisch statt des Schnitzels', explanation: '„Ich hatte das Schnitzel bestellt, nicht den Fisch." — así se reclama con educación.' },
      { id: 'res-27', type: 'multiple-choice', prompt: 'Historia: Wer isst am Ende den Fisch?', options: ['die Oma', 'der Vater', 'die Kellnerin', 'niemand'], answer: 'die Oma', explanation: '„Gib mir den Fisch, Junge. Ich esse beides — es ist mein Geburtstag!"' }
    ],
    story: {
      intro: 'La familia Ruiz celebra el cumpleaños de la abuela en un restaurante: reservar, pedir con „Ich hätte gern", el postre recomendado y una sorpresa con la cuenta.',
      lines: [
        { speaker: '', de: 'Familie Ruiz feiert Omas Geburtstag im Restaurant.', es: 'La familia Ruiz celebra el cumpleaños de la abuela en un restaurante.' },
        { speaker: 'Kellnerin', de: 'Guten Abend! Haben Sie reserviert?', es: '¡Buenas noches! ¿Tienen reserva?' },
        { speaker: 'Vater', de: 'Ja, ein Tisch für fünf Personen, auf den Namen Ruiz.', es: 'Sí, una mesa para cinco, a nombre de Ruiz.' },
        { speaker: 'Kellnerin', de: 'Hier entlang, bitte. Die Speisekarte kommt sofort.', es: 'Por aquí, por favor. Ahora mismo traigo la carta.' },
        { speaker: 'Oma', de: 'Ich hätte gern das Hähnchen mit Kartoffeln.', es: 'Yo quisiera el pollo con patatas.' },
        { speaker: 'Vater', de: 'Für mich das Schnitzel, bitte. Und eine große Apfelschorle.', es: 'Para mí el escalope, por favor. Y una Apfelschorle grande.' },
        { speaker: 'Tochter', de: 'Gibt es auch etwas Vegetarisches?', es: '¿Hay también algo vegetariano?' },
        { speaker: 'Kellnerin', de: 'Natürlich! Die Gemüselasagne ist heute besonders gut.', es: '¡Claro! La lasaña de verduras hoy está especialmente buena.' },
        { speaker: 'Tochter', de: 'Dann nehme ich die, bitte. Und ein stilles Wasser.', es: 'Pues esa, por favor. Y un agua sin gas.' },
        { speaker: 'Sohn', de: 'Und für mich Pommes! Nur Pommes. Mit viel Ketchup.', es: '¡Y para mí patatas fritas! Solo patatas. Con mucho kétchup.' },
        { speaker: 'Mutter', de: 'Ein halbes Hähnchen für ihn, bitte. UND die Pommes.', es: 'Medio pollo para él, por favor. Y las patatas también.' },
        { speaker: 'Kellnerin', de: 'Gern! Als Nachtisch empfehle ich unseren Schokoladenkuchen.', es: '¡Con gusto! De postre les recomiendo nuestra tarta de chocolate.' },
        { speaker: 'Oma', de: 'Schokolade? Dann bitte zwei Stück. Es ist mein Geburtstag!', es: '¿Chocolate? Entonces dos trozos. ¡Que es mi cumpleaños!' },
        { speaker: '', de: 'Das Essen kommt. Aber es gibt ein kleines Problem.', es: 'Llega la comida. Pero hay un pequeño problema.' },
        { speaker: 'Vater', de: 'Entschuldigung, ich hatte das Schnitzel bestellt, nicht den Fisch.', es: 'Disculpe, yo había pedido el escalope, no el pescado.' },
        { speaker: 'Kellnerin', de: 'Oh, das tut mir leid! Ich bringe Ihnen sofort das richtige Gericht.', es: '¡Ay, lo siento mucho! Ahora mismo le traigo el plato correcto.' },
        { speaker: 'Oma', de: 'Gib mir den Fisch, Junge. Ich esse beides — es ist mein Geburtstag!', es: 'Dame a mí el pescado, hijo. Yo como de los dos — ¡que es mi cumpleaños!' },
        { speaker: '', de: 'Nach dem Essen bringt die Kellnerin den Kuchen — mit einer Kerze.', es: 'Después de la comida, la camarera trae la tarta — con una vela.' },
        { speaker: 'Alle', de: 'Alles Gute zum Geburtstag!', es: '¡Feliz cumpleaños!' },
        { speaker: 'Vater', de: 'Die Rechnung, bitte. Zusammen.', es: 'La cuenta, por favor. Todo junto.' },
        { speaker: 'Kellnerin', de: 'Gern. Und der Kuchen... geht aufs Haus!', es: 'Con gusto. Y la tarta… ¡invita la casa!' },
        { speaker: 'Vater', de: 'Das macht siebenundachtzig Euro... Hier sind fünfundneunzig. Stimmt so!', es: 'Son ochenta y siete euros… Aquí tiene noventa y cinco. ¡Quédese con el cambio!' },
        { speaker: 'Oma', de: 'Nächstes Jahr feiern wir wieder hier. Das ist ein Befehl!', es: 'El año que viene celebramos aquí otra vez. ¡Es una orden!' }
      ]
    }
  });
})();
