(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Expresar tu opinión</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>Ich finde, dass… / Ich denke, dass…</td><td>Creo que… / Pienso que…</td></tr>' +
    '<tr><td>Ich glaube, dass…</td><td>Creo que…</td></tr>' +
    '<tr><td>Meiner Meinung nach…</td><td>En mi opinión…</td></tr>' +
    '<tr><td>Ich bin der Meinung, dass…</td><td>Soy de la opinión de que…</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Acuerdo y desacuerdo</caption>' +
    '<tr><th>De acuerdo</th><th>En desacuerdo</th></tr>' +
    '<tr><td>Das stimmt. / Genau.</td><td>Das stimmt nicht.</td></tr>' +
    '<tr><td>Da hast du recht.</td><td>Das sehe ich anders.</td></tr>' +
    '<tr><td>Ganz meiner Meinung.</td><td>Ich bin nicht einverstanden.</td></tr>' +
    '</table></div>' +
    '<div class="tip">Dos construcciones, dos órdenes de palabras: „Ich finde, <strong>dass</strong> das gut <strong>ist</strong>" manda el verbo al FINAL (es Nebensatz). „<strong>Meiner Meinung nach ist</strong> das gut" pone el verbo en 2ª posición (regla V2). Repasa los módulos de Nebensätze y de orden si te lías.</div>';

  registerModule({
    id: 'opinion',
    category: 'nivel3',
    track: 'Comunicación',
    icon: '🗣️',
    title: 'Dar tu opinión: acuerdo y desacuerdo',
    desc: 'Decir lo que piensas, mostrar acuerdo o discrepar con educación, y matizar. Une lo comunicativo con la gramática B1.',
    lessons: [
      {
        title: 'Introducir tu opinión',
        content: `<p>Las fórmulas más útiles: <strong>Ich finde/denke/glaube, dass…</strong> (creo que…) y <strong>Meiner Meinung nach…</strong> (en mi opinión…). Cuidado con el orden: „dass" manda el verbo al final; „Meiner Meinung nach" ocupa la posición 1 y el verbo va justo después.</p>`,
        examples: [
          { de: '<strong>Ich finde, dass</strong> Deutsch nützlich <strong>ist</strong>.', es: 'Creo que el alemán es útil.', note: 'dass → verbo „ist" al final.' },
          { de: '<strong>Meiner Meinung nach ist</strong> das eine gute Idee.', es: 'En mi opinión, es una buena idea.', note: 'Verbo „ist" en 2ª posición tras el bloque inicial.' },
          { de: 'Ich glaube, dass du recht hast.', es: 'Creo que tienes razón.' }
        ]
      },
      {
        title: 'Mostrar acuerdo',
        content: `<p>Para decir que estás de acuerdo: <strong>Das stimmt</strong> (es cierto), <strong>Genau</strong> (exacto), <strong>Da hast du recht</strong> (tienes razón), <strong>Ganz meiner Meinung</strong> (totalmente de acuerdo).</p>`,
        examples: [
          { de: 'Deutsch ist schwer. — <strong>Da hast du recht.</strong>', es: 'El alemán es difícil. — Tienes razón.' },
          { de: 'Das Essen war super. — <strong>Genau!</strong>', es: 'La comida estaba genial. — ¡Exacto!' },
          { de: '<strong>Ich bin ganz deiner Meinung.</strong>', es: 'Estoy totalmente de acuerdo contigo.' }
        ]
      },
      {
        title: 'Discrepar con educación, y matizar',
        content: `<p>Para discrepar sin sonar agresivo: <strong>Das sehe ich anders</strong> (yo lo veo de otra manera), <strong>Das stimmt nicht ganz</strong> (no es del todo cierto), <strong>Ich bin nicht einverstanden</strong> (no estoy de acuerdo). Para matizar los dos lados: <strong>einerseits… andererseits</strong> (por un lado… por otro) o <strong>Es kommt darauf an</strong> (depende).</p>`,
        examples: [
          { de: 'Fußball ist langweilig. — <strong>Das sehe ich anders.</strong>', es: 'El fútbol es aburrido. — Yo lo veo de otra manera.' },
          { de: '<strong>Einerseits</strong> ist es teuer, <strong>andererseits</strong> ist es praktisch.', es: 'Por un lado es caro, por otro es práctico.' },
          { de: 'Ist das gut? — <strong>Es kommt darauf an.</strong>', es: '¿Eso es bueno? — Depende.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'opi-01', type: 'fill-blank', prompt: 'Ich finde, ___ das gut ist. (conjunción "que")', answer: 'dass', explanation: '„dass" introduce la opinión y manda el verbo al final.' },
      { id: 'opi-02', type: 'multiple-choice', prompt: '„Meiner Meinung nach" =', options: ['En mi opinión', 'En serio', 'Por desgracia', 'Sin embargo'], answer: 'En mi opinión' },
      { id: 'opi-03', type: 'translate', prompt: 'Traduce: Creo que tienes razón.', answer: 'Ich glaube, dass du recht hast.', acceptable: ['Ich denke, dass du recht hast.', 'Ich finde, dass du recht hast.'], explanation: 'Ich glaube/denke/finde, dass + verbo al final.' },
      { id: 'opi-04', type: 'multiple-choice', prompt: 'Expresar ACUERDO:', options: ['Da hast du recht.', 'Das sehe ich anders.', 'Das stimmt nicht.', 'Im Gegenteil.'], answer: 'Da hast du recht.', explanation: '„Da hast du recht" = tienes razón.' },
      { id: 'opi-05', type: 'multiple-choice', prompt: 'Expresar DESACUERDO:', options: ['Das sehe ich anders.', 'Genau.', 'Das stimmt.', 'Ganz meiner Meinung.'], answer: 'Das sehe ich anders.', explanation: '„Das sehe ich anders" = yo lo veo distinto (discrepar con tacto).' },
      { id: 'opi-06', type: 'fill-blank', prompt: 'Meiner Meinung ___ ist das falsch. (expresión: "en mi opinión")', answer: 'nach', explanation: 'La expresión fija es „Meiner Meinung nach".' },
      { id: 'opi-07', type: 'multiple-choice', prompt: '„Das stimmt." significa:', options: ['Es cierto / correcto', 'No estoy de acuerdo', 'No lo sé', 'Depende'], answer: 'Es cierto / correcto' },
      { id: 'opi-08', type: 'fill-blank', prompt: 'Ich ___, dass Deutsch schön ist. (opinar: encontrar/pensar)', answer: 'finde', acceptable: ['denke', 'glaube'], explanation: 'Ich finde/denke/glaube, dass…' },
      { id: 'opi-09', type: 'multiple-choice', prompt: '„Es kommt darauf an" =', options: ['Depende', 'Estoy de acuerdo', 'Es verdad', 'Da igual'], answer: 'Depende' },
      { id: 'opi-10', type: 'translate', prompt: 'Traduce: En mi opinión, eso es importante.', answer: 'Meiner Meinung nach ist das wichtig.', explanation: '„Meiner Meinung nach" en posición 1 → verbo „ist" en 2ª (regla V2).' },
      { id: 'opi-11', type: 'reorder', words: ['Ich', 'finde,', 'dass', 'er', 'recht', 'hat'], hint: 'Creo que él tiene razón.', answer: 'Ich finde, dass er recht hat.', explanation: 'dass + verbo „hat" al final.' },
      { id: 'opi-12', type: 'multiple-choice', prompt: 'Para matizar los dos lados de algo:', options: ['einerseits … andererseits', 'immer wieder', 'hin und her', 'nach und nach'], answer: 'einerseits … andererseits', explanation: '„einerseits… andererseits" = por un lado… por otro.' },
      { id: 'opi-13', type: 'multiple-choice', prompt: '„Ich bin nicht einverstanden." =', options: ['No estoy de acuerdo', 'Estoy de acuerdo', 'No entiendo', 'Me da igual'], answer: 'No estoy de acuerdo' },
      { id: 'opi-14', type: 'fill-blank', prompt: 'Ich bin ___ deiner Meinung. (totalmente / del todo)', answer: 'ganz', explanation: '„Ich bin ganz deiner Meinung" = estoy totalmente de acuerdo.' },
      { id: 'opi-15', type: 'multiple-choice', prompt: '„Genau!" en una charla significa:', options: ['¡Exacto! (acuerdo)', '¡Qué pena!', 'No estoy seguro', '¡Adiós!'], answer: '¡Exacto! (acuerdo)' },
      { id: 'opi-16', type: 'multiple-choice', prompt: '„Das stimmt nicht ganz." =', options: ['No es del todo cierto', 'Es totalmente cierto', 'No lo entiendo', 'Me da igual'], answer: 'No es del todo cierto', explanation: 'Discrepancia suave: „nicht ganz" = no del todo.' },
      { id: 'opi-17', type: 'translate', prompt: 'Traduce: Yo lo veo de otra manera.', answer: 'Das sehe ich anders.', explanation: 'La fórmula educada para discrepar.' },
      { id: 'opi-18', type: 'fill-blank', prompt: 'Ich bin der ___, dass wir warten sollten. (opinión)', answer: 'Meinung', explanation: '„Ich bin der Meinung, dass…" = soy de la opinión de que…' },
      { id: 'opi-19', type: 'reorder', words: ['Meiner', 'Meinung', 'nach', 'ist', 'das', 'falsch'], hint: 'En mi opinión, eso es falso.', answer: 'Meiner Meinung nach ist das falsch.', explanation: '„Meiner Meinung nach" ocupa la posición 1 → el verbo „ist" va justo después (V2), no „das".' }
      ,
      { id: 'opi-20', type: 'multiple-choice', prompt: 'Historia: Welches Haustier möchte Leo?', options: ['einen Hund', 'eine Katze', 'ein Meerschweinchen', 'einen Vogel'], answer: 'einen Hund', explanation: '„Ich finde, dass ein Hund perfekt für uns ist."' },
      { id: 'opi-21', type: 'multiple-choice', prompt: 'Historia: Warum findet Carla eine Katze praktischer?', options: ['Sie ist gern allein', 'Sie ist billiger', 'Sie ist leiser', 'Sie braucht kein Futter'], answer: 'Sie ist gern allein', explanation: '„Meiner Meinung nach ist eine Katze praktischer. Sie ist gern allein."' },
      { id: 'opi-22', type: 'multiple-choice', prompt: 'Historia: Welches Haustier haben sie am Ende?', options: ['zwei Meerschweinchen', 'einen Hund', 'eine Katze', 'gar keins'], answer: 'zwei Meerschweinchen', explanation: 'El compromiso: „Eine Woche später wohnen im WG-Zimmer zwei Meerschweinchen."' }
    ],
    story: {
      intro: 'Leo y Carla comparten piso y quieren una mascota — pero no la misma. Un debate de manual: opinar, dar la razón, discrepar con tacto y llegar a un compromiso.',
      lines: [
        { speaker: '', de: 'Die Mitbewohner Leo und Carla wollen ein Haustier. Es gibt nur ein Problem...', es: 'Los compañeros de piso Leo y Carla quieren una mascota. Solo hay un problema…' },
        { speaker: 'Leo', de: 'Ich finde, dass ein Hund perfekt für uns ist.', es: 'Creo que un perro es perfecto para nosotros.' },
        { speaker: 'Carla', de: 'Das sehe ich anders. Ein Hund braucht zu viel Zeit.', es: 'Yo lo veo de otra forma. Un perro necesita demasiado tiempo.' },
        { speaker: 'Leo', de: 'Da hast du recht, aber ein Hund ist ein echter Freund!', es: 'En eso tienes razón, ¡pero un perro es un amigo de verdad!' },
        { speaker: 'Carla', de: 'Meiner Meinung nach ist eine Katze praktischer. Sie ist gern allein.', es: 'En mi opinión, un gato es más práctico. Le gusta estar solo.' },
        { speaker: 'Leo', de: 'Stimmt. Einerseits ist ein Hund treuer, andererseits ist eine Katze einfacher.', es: 'Cierto. Por un lado el perro es más fiel, por otro el gato es más fácil.' },
        { speaker: 'Carla', de: 'Es kommt darauf an, wie viel Zeit wir wirklich haben.', es: 'Depende de cuánto tiempo tengamos de verdad.' },
        { speaker: 'Leo', de: 'Okay... und was hältst du von einem Kompromiss?', es: 'Vale… ¿y qué te parece un compromiso?' },
        { speaker: 'Carla', de: 'Ich bin ganz deiner Meinung. Aber welcher Kompromiss?', es: 'Estoy totalmente de acuerdo. Pero ¿qué compromiso?' },
        { speaker: '', de: 'Eine Woche später wohnen in der WG zwei Meerschweinchen.', es: 'Una semana después, en el piso compartido viven dos cobayas.' },
        { speaker: 'Leo', de: 'Sie sind perfekt. Und sie brauchen wenig Zeit!', es: 'Son perfectas. ¡Y necesitan poco tiempo!' }
      ]
    }
  });
})();
