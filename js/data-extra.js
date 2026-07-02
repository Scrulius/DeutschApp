(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Declinación débil — después de der/die/das, dieser, jeder, welcher...</caption>' +
    '<tr><th>Caso</th><th>Masculino</th><th>Femenino</th><th>Neutro</th><th>Plural</th></tr>' +
    '<tr><td>Nominativ</td><td>-e</td><td>-e</td><td>-e</td><td>-en</td></tr>' +
    '<tr><td>Akkusativ</td><td>-en</td><td>-e</td><td>-e</td><td>-en</td></tr>' +
    '<tr><td>Dativ</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>' +
    '<tr><td>Genitiv</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Declinación mixta — después de ein/kein/mein/dein...</caption>' +
    '<tr><th>Caso</th><th>Masculino</th><th>Femenino</th><th>Neutro</th><th>Plural</th></tr>' +
    '<tr><td>Nominativ</td><td>-er</td><td>-e</td><td>-es</td><td>-en</td></tr>' +
    '<tr><td>Akkusativ</td><td>-en</td><td>-e</td><td>-es</td><td>-en</td></tr>' +
    '<tr><td>Dativ</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>' +
    '<tr><td>Genitiv</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Declinación fuerte — sin artículo (el adjetivo hace de artículo)</caption>' +
    '<tr><th>Caso</th><th>Masculino</th><th>Femenino</th><th>Neutro</th><th>Plural</th></tr>' +
    '<tr><td>Nominativ</td><td>-er</td><td>-e</td><td>-es</td><td>-e</td></tr>' +
    '<tr><td>Akkusativ</td><td>-en</td><td>-e</td><td>-es</td><td>-e</td></tr>' +
    '<tr><td>Dativ</td><td>-em</td><td>-er</td><td>-em</td><td>-en</td></tr>' +
    '</table></div>' +
    '<div class="tip">Truco de la débil: solo hay -e en Nominativ (los 3 géneros) y en Akkusativ femenino/neutro — el resto de casillas son -en. Si dudas, responde -en y solo cambia a -e en esas 5 casillas.</div>';

  registerModule({
    id: 'adjektiv',
    category: 'nivel4',
    icon: '🎨',
    title: 'Terminaciones del adjetivo',
    desc: '-e, -en, -er, -es... qué terminación lleva el adjetivo según lo que tenga delante. La tabla que todos temen, simplificada.',
    lessons: [
      {
        title: 'Tres patrones, según lo que precede al adjetivo',
        content: `<p>La terminación del adjetivo depende de si delante hay un artículo determinado (der/die/das → declinación <strong>débil</strong>), un artículo indeterminado o posesivo (ein/mein/kein → declinación <strong>mixta</strong>), o ningún artículo (declinación <strong>fuerte</strong>, el adjetivo hace de artículo).</p>
          <div class="tip">La idea clave: cuanta menos información dé el artículo sobre género/caso, más tiene que compensar el adjetivo. „Der" ya deja claro casi todo → el adjetivo casi no necesita marcar nada (mayormente -e/-en). Sin artículo, el adjetivo tiene que marcarlo TODO él solo.</div>`,
        examples: [
          { de: 'der gute Wein / ein guter Wein / guter Wein', es: 'el buen vino / un buen vino / (el) buen vino', note: 'Mismo significado de fondo, tres terminaciones distintas según el patrón.' }
        ]
      },
      {
        title: 'Declinación débil: casi todo es -en',
        content: `<p>Después de der/die/das (y dieser, jeder, welcher...), solo hay -e en cinco casillas (Nominativ de los tres géneros, y Akkusativ femenino/neutro); todo lo demás es -en.</p>`,
        examples: [
          { de: 'Der <strong>neue</strong> Lehrer kommt heute.', es: 'El profesor nuevo viene hoy.', note: 'Nominativ masculino → -e.' },
          { de: 'Ich kenne den <strong>neuen</strong> Lehrer.', es: 'Conozco al profesor nuevo.', note: 'Akkusativ masculino → -en.' },
          { de: 'Ich helfe der <strong>neuen</strong> Lehrerin.', es: 'Ayudo a la profesora nueva.', note: 'Dativ → siempre -en.' },
          { de: 'Die <strong>neuen</strong> Schüler lernen viel.', es: 'Los alumnos nuevos aprenden mucho.', note: 'Plural → siempre -en.' }
        ]
      },
      {
        title: 'Declinación mixta: el adjetivo compensa lo que "ein" no dice',
        content: `<p>„Ein" no distingue género/caso en tres casillas (Nominativ masculino, Nominativ/Akkusativ neutro) porque no lleva terminación propia ahí — el adjetivo da un paso al frente y toma la terminación que "debería" llevar el artículo (-er, -es). En el resto de casillas, se comporta igual que la declinación débil.</p>`,
        examples: [
          { de: 'Das ist ein <strong>guter</strong> Plan.', es: 'Ese es un buen plan.', note: 'Nominativ masculino: „ein" no marca género, el adjetivo lo hace con -er.' },
          { de: 'Ich habe einen <strong>guten</strong> Plan.', es: 'Tengo un buen plan.', note: 'Akkusativ masculino: „einen" ya marca el caso, el adjetivo vuelve a -en.' },
          { de: 'Das ist ein <strong>gutes</strong> Beispiel.', es: 'Ese es un buen ejemplo.', note: 'Nominativ/Akkusativ neutro → -es.' },
          { de: 'Mit meiner <strong>besten</strong> Freundin.', es: 'Con mi mejor amiga.', note: 'Dativ femenino → -en, igual que en la débil.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'adj-01', type: 'multiple-choice', prompt: 'Der ___ Lehrer kommt heute. (neu)', options: ['neue', 'neuen', 'neuer', 'neues'], answer: 'neue', explanation: 'Nominativ masculino tras „der" (débil) → -e.' },
      { id: 'adj-02', type: 'multiple-choice', prompt: 'Ich kenne den ___ Lehrer. (neu)', options: ['neuen', 'neue', 'neuer', 'neues'], answer: 'neuen', explanation: 'Akkusativ masculino tras „den" (débil) → -en.' },
      { id: 'adj-03', type: 'multiple-choice', prompt: 'Ich helfe der ___ Lehrerin. (neu)', options: ['neuen', 'neue', 'neuer', 'neues'], answer: 'neuen', explanation: 'Dativ tras artículo determinado → siempre -en.' },
      { id: 'adj-04', type: 'multiple-choice', prompt: 'Die ___ Schüler lernen viel. (neu)', options: ['neuen', 'neue', 'neuer', 'neues'], answer: 'neuen', explanation: 'Plural → siempre -en.' },
      { id: 'adj-05', type: 'multiple-choice', prompt: 'Das ist ein ___ Plan. (gut)', options: ['guter', 'gute', 'guten', 'gutes'], answer: 'guter', explanation: 'Nominativ masculino tras „ein" (mixta): el adjetivo compensa con -er.' },
      { id: 'adj-06', type: 'multiple-choice', prompt: 'Ich habe einen ___ Plan. (gut)', options: ['guten', 'gute', 'guter', 'gutes'], answer: 'guten', explanation: 'Akkusativ masculino tras „einen" (mixta) → -en.' },
      { id: 'adj-07', type: 'multiple-choice', prompt: 'Das ist ein ___ Beispiel. (gut)', options: ['gutes', 'guter', 'gute', 'guten'], answer: 'gutes', explanation: 'Nominativ/Akkusativ neutro tras „ein" (mixta) → -es.' },
      { id: 'adj-08', type: 'multiple-choice', prompt: 'Das ist eine ___ Idee. (gut)', options: ['gute', 'guter', 'guten', 'gutes'], answer: 'gute', explanation: 'Nominativ/Akkusativ femenino tras „eine" (mixta) → -e.' },
      { id: 'adj-09', type: 'multiple-choice', prompt: 'Mit meiner ___ Freundin. (best)', options: ['besten', 'beste', 'bester', 'bestes'], answer: 'besten', explanation: 'Dativ femenino tras „meiner" (mixta) → -en.' },
      { id: 'adj-10', type: 'multiple-choice', prompt: 'Sie ist eine ___ Ärztin. (gut)', options: ['gute', 'guten', 'guter', 'gutes'], answer: 'gute' },
      { id: 'adj-11', type: 'multiple-choice', prompt: 'Ich trinke gern ___ Kaffee. (heiß, sin artículo)', options: ['heißen', 'heißer', 'heißes', 'heiße'], answer: 'heißen', explanation: 'Declinación fuerte (sin artículo), masculino Akkusativ → -en, igual que „den".' },
      { id: 'adj-12', type: 'multiple-choice', prompt: '___ Wein schmeckt gut. (gut, sin artículo)', options: ['Guter', 'Gute', 'Guten', 'Gutes'], answer: 'Guter', explanation: 'Declinación fuerte, masculino Nominativ → -er, igual que „der".' },
      { id: 'adj-13', type: 'multiple-choice', prompt: 'Ich trinke gern ___ Milch. (frisch, sin artículo)', options: ['frische', 'frischer', 'frischen', 'frisches'], answer: 'frische', explanation: 'Declinación fuerte, femenino Akkusativ → -e, igual que „die".' },
      { id: 'adj-14', type: 'fill-blank', prompt: 'Der ___ (klein) Hund bellt.', answer: 'kleine', explanation: 'Nominativ masculino, débil → -e.' },
      { id: 'adj-15', type: 'fill-blank', prompt: 'Ich sehe den ___ (klein) Hund.', answer: 'kleinen', explanation: 'Akkusativ masculino, débil → -en.' },
      { id: 'adj-16', type: 'fill-blank', prompt: 'Ein ___ (klein) Hund bellt.', answer: 'kleiner', explanation: 'Nominativ masculino, mixta → -er.' },
      { id: 'adj-17', type: 'translate', prompt: 'Traduce: El coche nuevo es caro. (das Auto, neu, teuer)', answer: 'Das neue Auto ist teuer.', explanation: 'Nominativ neutro tras „das" (débil) → -e.' },
      { id: 'adj-18', type: 'translate', prompt: 'Traduce: Tengo un perro pequeño. (einen, klein)', answer: 'Ich habe einen kleinen Hund.', explanation: 'Akkusativo masculino tras „einen" (mixta) → -en.' },
      { id: 'adj-19', type: 'multiple-choice', prompt: 'Wir haben unsere ___ Nachbarn eingeladen. (nett)', options: ['netten', 'nette', 'netter', 'nettes'], answer: 'netten', explanation: 'Plural tras posesivo (tipo mixta) → -en.' },
      { id: 'adj-20', type: 'multiple-choice', prompt: 'Ich suche eine ___ Wohnung. (billig)', options: ['billige', 'billigen', 'billiger', 'billiges'], answer: 'billige', explanation: 'Akkusativ femenino tras „eine" (mixta) → -e.' },
      { id: 'adj-21', type: 'multiple-choice', prompt: 'Ich trinke einen ___ Kaffee. (stark)', options: ['starken', 'starker', 'starkes', 'starke'], answer: 'starken', explanation: 'Akkusativ masculino tras „einen" (mixta) → -en.' },
      { id: 'adj-22', type: 'multiple-choice', prompt: 'Das ist eine ___ Geschichte. (schön)', options: ['schöne', 'schöner', 'schönes', 'schönen'], answer: 'schöne', explanation: 'Nominativ femenino tras „eine" (mixta) → -e.' },
      { id: 'adj-23', type: 'multiple-choice', prompt: 'Mit dem ___ Auto fahren wir in den Urlaub. (neu)', options: ['neuen', 'neue', 'neues', 'neuer'], answer: 'neuen', explanation: 'Dativ tras „dem" (débil) → siempre -en.' },
      { id: 'adj-24', type: 'multiple-choice', prompt: '___ Kinder spielen im Park. (klein, sin artículo)', options: ['Kleine', 'Kleinen', 'Kleiner', 'Kleines'], answer: 'Kleine', explanation: 'Declinación fuerte, plural Nominativ → -e (igual que „die").' },
      { id: 'adj-25', type: 'multiple-choice', prompt: 'Er kauft ein ___ Fahrrad. (teuer)', options: ['teures', 'teuren', 'teurer', 'teure'], answer: 'teures', explanation: 'Neutro Akkusativ tras „ein" (mixta) → -es. („teuer" pierde la -e- → teures).' },
      { id: 'adj-26', type: 'fill-blank', prompt: 'die ___ (rot) Blume', answer: 'rote', explanation: 'Nominativ femenino tras „die" (débil) → -e.' },
      { id: 'adj-27', type: 'fill-blank', prompt: 'ein ___ (rot) Apfel', answer: 'roter', explanation: 'Nominativ masculino tras „ein" (mixta) → -er.' },
      { id: 'adj-28', type: 'translate', prompt: 'Traduce: El coche viejo es barato. (das Auto, alt, billig)', answer: 'Das alte Auto ist billig.', explanation: 'Nominativ neutro tras „das" (débil) → -e; „billig" es predicativo, sin terminación.' },
      { id: 'adj-29', type: 'multiple-choice', prompt: 'Ich helfe der ___ Frau. (alt)', options: ['alten', 'alte', 'alter', 'altes'], answer: 'alten', explanation: 'Dativ femenino tras „der" (débil) → -en.' },
      { id: 'adj-30', type: 'multiple-choice', prompt: 'Wir haben heute ___ Wetter. (schön, sin artículo)', options: ['schönes', 'schöne', 'schönen', 'schöner'], answer: 'schönes', explanation: 'Declinación fuerte, neutro Akkusativ → -es (igual que „das").' },
      { id: 'adj-31', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Das', 'ist', 'ein', 'gutes', 'Plan.'], wrong: 3, fix: 'guter', explanation: '„der Plan" es masculino: tras „ein" en Nominativ el adjetivo compensa con -er → ein guter Plan.' }
      ,
      { id: 'adj-32', type: 'multiple-choice', prompt: 'Historia: Was möchte Nora auf dem Flohmarkt kaufen?', options: ['eine alte Lampe', 'einen neuen Spiegel', 'ein rustikales Sofa', 'ein kleines Bild'], answer: 'eine alte Lampe', explanation: '„Schau, eine alte Lampe! Die passt perfekt in mein neues Zimmer."' },
      { id: 'adj-33', type: 'multiple-choice', prompt: 'Historia: Was bekommen Nora und Tim am Ende für 25 Euro?', options: ['die Lampe und den Spiegel', 'nur die Lampe', 'nur den Spiegel', 'nichts'], answer: 'die Lampe und den Spiegel', explanation: '„Fünfundzwanzig — und wir nehmen den hässlichen Spiegel auch." — „Einverstanden!"' },
      { id: 'adj-34', type: 'fill-blank', prompt: 'Historia: Die passt perfekt in mein ___ Zimmer. (neu)', answer: 'neues', explanation: 'mein + neutro (das Zimmer) en Akkusativ → declinación mixta: -es.' }
    ],
    story: {
      intro: 'Nora y Tim regatean en el mercadillo. Cada objeto lleva su adjetivo declinado: eine alte Lampe, mein neues Zimmer, den hässlichen Spiegel, rustikaler Charme…',
      lines: [
        { speaker: '', de: 'Sonntagmorgen. Nora und Tim gehen über den großen Flohmarkt.', es: 'Domingo por la mañana. Nora y Tim recorren el gran mercadillo.' },
        { speaker: 'Nora', de: 'Schau, eine alte Lampe! Die passt perfekt in mein neues Zimmer.', es: '¡Mira, una lámpara antigua! Queda perfecta en mi habitación nueva.' },
        { speaker: 'Verkäufer', de: 'Gutes Auge! Das ist eine echte Lampe aus den Sechzigern.', es: '¡Buen ojo! Es una lámpara auténtica de los sesenta.' },
        { speaker: 'Tim', de: 'Und was kostet die schöne Lampe?', es: '¿Y cuánto cuesta la lámpara tan bonita?' },
        { speaker: 'Verkäufer', de: 'Für euch? Vierzig Euro.', es: '¿Para vosotros? Cuarenta euros.' },
        { speaker: 'Nora', de: 'Vierzig?! Für eine kaputte Lampe mit einem alten Kabel?', es: '¡¿Cuarenta?! ¿Por una lámpara rota con un cable viejo?' },
        { speaker: 'Verkäufer', de: 'Kaputt? Das ist... rustikaler Charme!', es: '¿Rota? ¡Eso es… encanto rústico!' },
        { speaker: 'Tim', de: 'Wir geben Ihnen zwanzig.', es: 'Le damos veinte.' },
        { speaker: 'Verkäufer', de: 'Dreißig, und ich lege den kleinen Spiegel dazu.', es: 'Treinta, y les añado el espejito.' },
        { speaker: 'Nora', de: 'Fünfundzwanzig — und wir nehmen den hässlichen Spiegel auch.', es: 'Veinticinco — y nos llevamos también el espejo feo.' },
        { speaker: 'Verkäufer', de: '„Hässlich"! Ihr verhandelt aber hart. Einverstanden!', es: '¡"Feo", dice! Pues sí que regateáis duro. ¡Trato hecho!' },
        { speaker: '', de: 'Zu Hause merkt Nora: Der hässliche Spiegel ist das schönste Stück.', es: 'En casa, Nora se da cuenta: el espejo feo es la pieza más bonita.' }
      ]
    }
  });
})();
