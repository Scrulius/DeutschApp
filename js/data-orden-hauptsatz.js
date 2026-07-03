(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>TeKaMoLo: orden de los complementos cuando se acumulan varios</caption>' +
    '<tr><th>Te</th><th>Ka</th><th>Mo</th><th>Lo</th></tr>' +
    '<tr><td>Temporal (¿cuándo?)</td><td>Kausal (¿por qué?)</td><td>Modal (¿cómo?)</td><td>Lokal (¿dónde/adónde?)</td></tr>' +
    '<tr><td>morgen</td><td>wegen der Arbeit</td><td>mit dem Auto</td><td>nach Berlin</td></tr>' +
    '</table></div>' +
    '<div class="tip">nicht niega toda la frase y suele ir hacia el final (pero antes de participios, prefijos separables o complementos de lugar). kein sustituye directamente a "ein/–" delante de un sustantivo: nunca digas "nicht ein".</div>';

  registerModule({
    id: 'hauptsatz',
    category: 'nivel1',
    icon: '🧱',
    title: 'Orden en la frase principal — la regla V2',
    desc: 'El verbo conjugado SIEMPRE en segunda posición. Lo primero de la frase no tiene por qué ser el sujeto.',
    lessons: [
      {
        title: 'La regla V2: el verbo va SIEMPRE en segundo lugar',
        content: `<p>En una frase principal alemana, el verbo conjugado ocupa <strong>siempre la posición 2</strong> — no la segunda palabra, sino el segundo bloque. La posición 1 puede llevar el sujeto, pero también una expresión de tiempo, un lugar, un objeto o casi cualquier otra cosa, siempre que sea UN solo bloque.</p>
          <div class="warn">En español el orden es flexible pero no obedece a esta regla rígida. No puedes intuir el orden alemán desde tus hábitos en español: aquí la posición del verbo es casi sagrada.</div>`,
        examples: [
          { de: 'Ich gehe heute ins Kino.', es: 'Hoy voy al cine.', note: 'Sujeto-Verbo-...: el orden "por defecto".' },
          { de: 'Heute gehe ich ins Kino.', es: 'Hoy voy al cine.', note: 'Mismo significado: „Heute" ocupa la posición 1, el verbo „gehe" sigue en la 2ª, y el sujeto „ich" pasa a la 3ª.' },
          { de: 'Ins Kino gehe ich heute.', es: 'Al cine voy hoy.', note: 'Ahora el objeto va primero, para darle énfasis — el verbo sigue firme en la posición 2.' }
        ]
      },
      {
        title: 'TeKaMoLo: el orden cuando hay varios complementos',
        content: `<p>Cuando se acumulan varios complementos después del verbo, siguen (de forma orientativa) el orden <strong>Te</strong>mporal → <strong>Ka</strong>usal → <strong>Mo</strong>dal → <strong>Lo</strong>kal: primero cuándo, luego por qué, luego cómo, y por último dónde/adónde.</p>`,
        examples: [
          { de: 'Ich fahre <strong>morgen</strong> <strong>wegen der Arbeit</strong> <strong>mit dem Auto</strong> <strong>nach Berlin</strong>.', es: 'Mañana voy a Berlín en coche por trabajo.' },
          { de: 'Wir gehen <strong>heute</strong> <strong>aus Langeweile</strong> <strong>zu Fuß</strong> <strong>ins Kino</strong>.', es: 'Hoy vamos andando al cine por aburrimiento.' },
          { de: 'Ich bin <strong>gestern</strong> <strong>mit dem Zug</strong> gefahren.', es: 'Ayer fui en tren.', note: 'Si faltan Ka o Lo, el orden entre los presentes se mantiene igual.' }
        ]
      },
      {
        title: 'nicht y kein: cómo negar',
        content: `<p><strong>nicht</strong> niega la frase en general (o una parte concreta si se coloca justo delante). <strong>kein</strong> sustituye a "ein/–" delante de un sustantivo — nunca se usa "nicht" pegado a un artículo indeterminado.</p>`,
        examples: [
          { de: 'Ich komme heute nicht.', es: 'Hoy no vengo.', note: 'nicht al final, niega toda la frase.' },
          { de: 'Ich komme nicht heute, sondern morgen.', es: 'No vengo hoy, sino mañana.', note: 'nicht justo antes de lo que niega específicamente.' },
          { de: 'Ich habe kein Auto.', es: 'No tengo coche.', note: 'kein sustituye a "ein" — nunca "nicht ein Auto".' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'hs-01', type: 'reorder', words: ['Ich', 'gehe', 'heute', 'ins', 'Kino'], answer: 'Ich gehe heute ins Kino.', explanation: 'SVO simple, verbo en posición 2.' },
      { id: 'hs-02', type: 'reorder', words: ['Heute', 'gehe', 'ich', 'ins', 'Kino'], answer: 'Heute gehe ich ins Kino.', explanation: '„Heute" ocupa la posición 1; el verbo („gehe") sigue en la 2ª; el sujeto („ich") pasa a la 3ª.' },
      { id: 'hs-03', type: 'multiple-choice', prompt: '¿Cuál es correcto?', options: ['Heute gehe ich ins Kino.', 'Heute ich gehe ins Kino.', 'Heute geht ich ins Kino.', 'Gehe heute ich ins Kino.'], answer: 'Heute gehe ich ins Kino.', explanation: 'El verbo debe ir en 2ª posición; si „Heute" ocupa la 1ª, el sujeto „ich" pasa a la 3ª.' },
      { id: 'hs-04', type: 'multiple-choice', prompt: '¿Cuál es correcto?', options: ['Ins Kino gehe ich heute.', 'Ins Kino ich gehe heute.', 'Ich ins Kino gehe heute.', 'Gehe ins Kino ich heute.'], answer: 'Ins Kino gehe ich heute.' },
      { id: 'hs-05', type: 'reorder', words: ['Morgen', 'fahre', 'ich', 'nach', 'Berlin'], answer: 'Morgen fahre ich nach Berlin.' },
      { id: 'hs-06', type: 'reorder', words: ['Am Wochenende', 'besuchen', 'wir', 'unsere', 'Großeltern'], answer: 'Am Wochenende besuchen wir unsere Großeltern.', explanation: '„Am Wochenende" ocupa la posición 1 como bloque; el verbo sigue en la 2ª.' },
      { id: 'hs-07', type: 'reorder', words: ['Ich', 'fahre', 'morgen', 'wegen der Arbeit', 'mit dem Auto', 'nach Berlin'], answer: 'Ich fahre morgen wegen der Arbeit mit dem Auto nach Berlin.', explanation: 'Orden TeKaMoLo: Temporal (morgen) → Kausal (wegen der Arbeit) → Modal (mit dem Auto) → Lokal (nach Berlin).' },
      { id: 'hs-08', type: 'reorder', words: ['Wir', 'gehen', 'heute', 'aus Langeweile', 'zu Fuß', 'ins Kino'], answer: 'Wir gehen heute aus Langeweile zu Fuß ins Kino.', explanation: 'TeKaMoLo: heute (T) - aus Langeweile (K) - zu Fuß (M) - ins Kino (L).' },
      { id: 'hs-09', type: 'multiple-choice', prompt: '¿Cuál sigue el orden correcto?', options: ['Ich bin gestern mit dem Zug gefahren.', 'Ich bin mit dem Zug gestern gefahren.', 'Ich bin gefahren gestern mit dem Zug.', 'Gestern bin gefahren ich mit dem Zug.'], answer: 'Ich bin gestern mit dem Zug gefahren.', explanation: 'Temporal (gestern) antes que Modal (mit dem Zug); el participio „gefahren" cierra la frase.' },
      { id: 'hs-10', type: 'multiple-choice', prompt: 'Ich komme heute ___.', options: ['nicht', 'kein', 'keine', 'nichts'], answer: 'nicht', explanation: 'Negación general de la frase → nicht.' },
      { id: 'hs-11', type: 'multiple-choice', prompt: 'Ich habe ___ Auto.', options: ['kein', 'nicht', 'keine', 'nichts'], answer: 'kein', explanation: 'Sustantivo con artículo indeterminado → se niega con kein, no con nicht.' },
      { id: 'hs-12', type: 'multiple-choice', prompt: 'Das Auto fährt ___.', options: ['nicht', 'kein', 'keine', 'niemand'], answer: 'nicht' },
      { id: 'hs-13', type: 'multiple-choice', prompt: 'Ich trinke ___ Kaffee, sondern Tee.', options: ['keinen', 'nicht', 'kein', 'nichts'], answer: 'keinen', explanation: '„Kaffee" (der Kaffee) sin artículo definido en este contexto negado → keinen, Akkusativ masculino.' },
      { id: 'hs-14', type: 'reorder', words: ['Wir', 'haben', 'leider', 'keine', 'Zeit'], answer: 'Wir haben leider keine Zeit.', explanation: '„keine" niega „Zeit" directamente (die Zeit, femenino, sin artículo definido).' },
      { id: 'hs-15', type: 'translate', prompt: 'Traduce: Mañana voy al cine. (empieza con "Morgen")', answer: 'Morgen gehe ich ins Kino.', explanation: '„Morgen" en posición 1, verbo „gehe" en posición 2, sujeto „ich" en posición 3.' },
      { id: 'hs-16', type: 'translate', prompt: 'Traduce: No tengo tiempo.', answer: 'Ich habe keine Zeit.', explanation: '„Zeit" sin artículo definido → se niega con keine (die Zeit, femenino).' },
      { id: 'hs-17', type: 'multiple-choice', prompt: '¿Cuál es correcto?', options: ['Wegen des Regens bleiben wir zu Hause.', 'Wegen des Regens wir bleiben zu Hause.', 'Wir wegen des Regens bleiben zu Hause.', 'Bleiben wegen des Regens wir zu Hause.'], answer: 'Wegen des Regens bleiben wir zu Hause.', explanation: 'El bloque „Wegen des Regens" ocupa la posición 1; el verbo „bleiben" va en la 2ª.' },
      { id: 'hs-18', type: 'reorder', words: ['Nach der Arbeit', 'trinke', 'ich', 'gern', 'einen Kaffee'], answer: 'Nach der Arbeit trinke ich gern einen Kaffee.', explanation: 'Bloque inicial + verbo en 2ª posición + sujeto en 3ª.' },
      { id: 'hs-19', type: 'reorder', words: ['Am Montag', 'habe', 'ich', 'keine', 'Zeit'], hint: 'El lunes no tengo tiempo.', answer: 'Am Montag habe ich keine Zeit.', explanation: '„Am Montag" ocupa la posición 1; el verbo „habe" en la 2ª.' },
      { id: 'hs-20', type: 'multiple-choice', prompt: '¿Cuál es correcto?', options: ['Deshalb bleibe ich zu Hause.', 'Deshalb ich bleibe zu Hause.', 'Deshalb zu Hause ich bleibe.', 'Ich deshalb bleibe zu Hause.'], answer: 'Deshalb bleibe ich zu Hause.', explanation: '„Deshalb" ocupa la posición 1; el verbo debe ir en la 2ª, el sujeto pasa a la 3ª.' },
      { id: 'hs-21', type: 'reorder', words: ['Ich', 'gehe', 'heute', 'mit dir', 'ins Kino'], hint: 'Hoy voy contigo al cine.', answer: 'Ich gehe heute mit dir ins Kino.', explanation: 'TeKaMoLo: heute (T) - mit dir (M) - ins Kino (L).' },
      { id: 'hs-22', type: 'multiple-choice', prompt: 'Ich mag ___ Gemüse.', options: ['kein', 'nicht', 'keine', 'nichts'], answer: 'kein', explanation: 'Sustantivo sin artículo definido → negación con kein (das Gemüse).' },
      { id: 'hs-23', type: 'multiple-choice', prompt: 'Er kommt heute ___ zur Arbeit.', options: ['nicht', 'kein', 'keine', 'nichts'], answer: 'nicht', explanation: 'Negación general de la acción → nicht.' },
      { id: 'hs-24', type: 'reorder', words: ['Trotzdem', 'gehen', 'wir', 'spazieren'], hint: 'Aun así salimos a pasear.', answer: 'Trotzdem gehen wir spazieren.', explanation: '„Trotzdem" en posición 1 → verbo en 2ª (regla V2).' },
      { id: 'hs-25', type: 'multiple-choice', prompt: 'Ich habe ___ Geld dabei.', options: ['kein', 'nicht', 'keine', 'nichts'], answer: 'kein', explanation: '„das Geld" sin artículo → kein.' },
      { id: 'hs-26', type: 'multiple-choice', prompt: '¿Cuál es correcto?', options: ['Ich muss heute arbeiten.', 'Ich heute muss arbeiten.', 'Ich muss arbeiten heute.', 'Muss ich heute arbeiten.'], answer: 'Ich muss heute arbeiten.', explanation: 'Modal „muss" en posición 2, infinitivo „arbeiten" al final.' },
      { id: 'hs-27', type: 'reorder', words: ['Nächstes Jahr', 'fahren', 'wir', 'nach Italien'], hint: 'El año que viene vamos a Italia.', answer: 'Nächstes Jahr fahren wir nach Italien.', explanation: 'Bloque temporal en posición 1, verbo en 2ª.' },
      { id: 'hs-28', type: 'multiple-choice', prompt: 'Ich kenne ihn ___.', options: ['nicht', 'kein', 'keine', 'nichts'], answer: 'nicht', explanation: 'Se niega el verbo (conocer) → nicht (va al final).' },
      { id: 'hs-29', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Ich', 'habe', 'kein', 'Zeit.'], wrong: 2, fix: 'keine', explanation: '„die Zeit" es femenino → keine Zeit.' }
      ,
      { id: 'hs-30', type: 'multiple-choice', prompt: 'Historia: Womit fährt Ben zur Arbeit?', options: ['mit dem Bus', 'mit dem Auto', 'mit dem Fahrrad', 'zu Fuß'], answer: 'mit dem Bus', explanation: '„Um acht fahre ich mit dem Bus zur Arbeit."' },
      { id: 'hs-31', type: 'multiple-choice', prompt: 'Historia: Richtig oder falsch — Ben geht nie ins Fitnessstudio.', options: ['Falsch', 'Richtig'], answer: 'Falsch', explanation: '„Nach der Arbeit gehe ich ins Fitnessstudio... Dann gehe ich trotzdem."' },
      { id: 'hs-32', type: 'reorder', words: ['Dann', 'trinke', 'ich', 'einen', 'Kaffee'], hint: 'Luego me tomo un café. (frase de la historia)', answer: 'Dann trinke ich einen Kaffee.', explanation: '„Dann" ocupa la posición 1 → verbo „trinke" en la 2ª, sujeto „ich" en la 3ª.' },
      { id: 'hs-33', type: 'multiple-choice', prompt: 'Historia: Was will Rocky am Samstag um sechs Uhr?', options: ['in den Park gehen', 'schlafen', 'fressen', 'fernsehen'], answer: 'in den Park gehen', explanation: 'La correa en la boca lo dice todo. Los planes de Ben no cuentan.' },
      { id: 'hs-34', type: 'multiple-choice', prompt: 'Historia: Wie oft wirft Ben den Ball im Park?', options: ['vierzigmal', 'viermal', 'vierzehnmal', 'zweimal'], answer: 'vierzigmal', explanation: '„Im Park wirft Ben den Ball. Vierzigmal." — fíjate: „Im Park" en posición 1, „wirft" en la 2.' },
      { id: 'hs-35', type: 'reorder', words: ['Zuerst', 'gehen', 'wir', 'in', 'den', 'Park'], hint: 'Primero vamos al parque. (frase de la historia)', answer: 'Zuerst gehen wir in den Park.', explanation: '„Zuerst" en posición 1 → verbo „gehen" en la 2ª, sujeto „wir" en la 3ª.' }
    ],
    story: {
      intro: 'Ben cuenta su día. Fíjate en cómo casi ninguna frase empieza por el sujeto — Um sieben Uhr…, Dann…, Mittags…, Nach der Arbeit… — y el verbo aguanta SIEMPRE en la posición 2.',
      lines: [
        { speaker: '', de: 'Ben erzählt von seinem Tag.', es: 'Ben cuenta su día.' },
        { speaker: 'Ben', de: 'Um sieben Uhr stehe ich auf.', es: 'A las siete me levanto.' },
        { speaker: 'Ben', de: 'Dann trinke ich einen Kaffee.', es: 'Luego me tomo un café.' },
        { speaker: 'Ben', de: 'Um acht fahre ich mit dem Bus zur Arbeit.', es: 'A las ocho voy en bus al trabajo.' },
        { speaker: 'Ben', de: 'Mittags esse ich mit meinen Kollegen.', es: 'A mediodía como con mis compañeros.' },
        { speaker: 'Ben', de: 'Am Nachmittag habe ich viele Meetings. Leider.', es: 'Por la tarde tengo muchas reuniones. Por desgracia.' },
        { speaker: 'Ben', de: 'Nach der Arbeit gehe ich ins Fitnessstudio.', es: 'Después del trabajo voy al gimnasio.' },
        { speaker: 'Ben', de: 'Manchmal habe ich keine Lust. Dann gehe ich trotzdem.', es: 'A veces no tengo ganas. Entonces voy igualmente.' },
        { speaker: 'Ben', de: 'Abends koche ich und sehe eine Serie.', es: 'Por la noche cocino y veo una serie.' },
        { speaker: 'Ben', de: 'Am Wochenende schlafe ich lange. Das ist der Plan.', es: 'El fin de semana duermo hasta tarde. Ese es el plan.' },
        { speaker: '', de: 'Samstagmorgen, sechs Uhr.', es: 'Sábado por la mañana, seis en punto.' },
        { speaker: '', de: 'Der Hund steht neben dem Bett. Im Maul: die Leine.', es: 'El perro está junto a la cama. En la boca: la correa.' },
        { speaker: 'Ben', de: 'Rocky, es ist sechs Uhr! Am Samstag schlafen wir lange!', es: '¡Rocky, son las seis! ¡Los sábados dormimos hasta tarde!' },
        { speaker: '', de: 'Rocky bellt. Einmal. Zweimal.', es: 'Rocky ladra. Una vez. Dos veces.' },
        { speaker: 'Ben', de: 'Na gut. Zuerst gehen wir in den Park, dann trinke ich einen doppelten Kaffee.', es: 'Está bien. Primero vamos al parque, luego me tomo un café doble.' },
        { speaker: '', de: 'Im Park wirft Ben den Ball. Vierzigmal.', es: 'En el parque, Ben lanza la pelota. Cuarenta veces.' },
        { speaker: 'Ben', de: 'Danach schlafe ich weiter. Vielleicht.', es: 'Después sigo durmiendo. Quizá.' },
        { speaker: '', de: 'Sein Hund hat jeden Morgen einen anderen Plan.', es: 'Su perro tiene cada mañana otro plan.' }
      ]
    }
  });
})();
