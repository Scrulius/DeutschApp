(function () {
  var vocab = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Vocabulario de la historia</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>das Vorstellungsgespräch</td><td>la entrevista de trabajo</td></tr>' +
    '<tr><td>die Stelle</td><td>el puesto (de trabajo)</td></tr>' +
    '<tr><td>die Firma</td><td>la empresa</td></tr>' +
    '<tr><td>aufsteigen</td><td>ascender</td></tr>' +
    '<tr><td>verlassen (hat verlassen)</td><td>dejar, abandonar</td></tr>' +
    '<tr><td>sich melden</td><td>dar señales, ponerse en contacto</td></tr>' +
    '<tr><td>unbedingt</td><td>sí o sí, a toda costa</td></tr>' +
    '<tr><td>die Möglichkeit</td><td>la posibilidad</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'story-gespraech',
    category: 'historias',
    track: 'Historia',
    icon: '💼',
    title: 'Das Vorstellungsgespräch · B1',
    desc: 'Sara se juega su trabajo soñado en una entrevista en Múnich. Llena de Nebensätze (weil, dass, obwohl, als, ob) — fíjate en dónde van los verbos.',
    story: {
      intro: 'Sara tiene hoy una entrevista de trabajo. Esta historia concentra las subordinadas de B1: cada vez que veas weil/dass/obwohl/als/ob, mira dónde acaba el verbo.',
      lines: [
        { speaker: '', de: 'Sara hat heute ein Vorstellungsgespräch bei einer Firma in München.', es: 'Sara tiene hoy una entrevista de trabajo en una empresa de Múnich.' },
        { speaker: '', de: 'Sie ist nervös, weil sie die Stelle unbedingt will.', es: 'Está nerviosa porque quiere el puesto sí o sí.' },
        { speaker: 'Chef', de: 'Guten Tag, Frau Moreno. Erzählen Sie mir: Warum möchten Sie bei uns arbeiten?', es: 'Buenos días, Sra. Moreno. Cuénteme: ¿por qué quiere trabajar con nosotros?' },
        { speaker: 'Sara', de: 'Ich glaube, dass Ihre Firma sehr innovativ ist. Außerdem spreche ich drei Sprachen.', es: 'Creo que su empresa es muy innovadora. Además, hablo tres idiomas.' },
        { speaker: 'Chef', de: 'Interessant! Wo haben Sie Deutsch gelernt?', es: '¡Interesante! ¿Dónde aprendió alemán?' },
        { speaker: 'Sara', de: 'Ich habe zwei Jahre in Berlin studiert. Als ich dort ankam, konnte ich fast nichts sagen.', es: 'Estudié dos años en Berlín. Cuando llegué allí, casi no sabía decir nada.' },
        { speaker: 'Chef', de: 'Und warum haben Sie Ihre alte Stelle verlassen?', es: '¿Y por qué dejó su antiguo puesto?' },
        { speaker: 'Sara', de: 'Obwohl die Arbeit interessant war, gab es keine Möglichkeit aufzusteigen.', es: 'Aunque el trabajo era interesante, no había posibilidad de ascender.' },
        { speaker: 'Chef', de: 'Verstehe. Wissen Sie schon, ob Sie nach München umziehen werden?', es: 'Entiendo. ¿Sabe ya si se mudará a Múnich?' },
        { speaker: 'Sara', de: 'Ja. Meine Schwester wohnt hier — am Anfang kann ich bei ihr wohnen.', es: 'Sí. Mi hermana vive aquí — al principio puedo vivir en su casa.' },
        { speaker: 'Chef', de: 'Sehr gut. Wir melden uns nächste Woche bei Ihnen.', es: 'Muy bien. La semana que viene nos ponemos en contacto con usted.' },
        { speaker: '', de: 'Drei Tage später bekommt Sara eine E-Mail: Sie hat die Stelle!', es: 'Tres días después, Sara recibe un e-mail: ¡el puesto es suyo!' }
      ]
    },
    cheatsheet: vocab,
    exercises: [
      { id: 'st3-01', type: 'multiple-choice', prompt: 'Warum ist Sara nervös?', options: ['Weil sie die Stelle unbedingt will', 'Weil sie kein Deutsch spricht', 'Weil sie zu spät ist', 'Weil der Chef unfreundlich ist'], answer: 'Weil sie die Stelle unbedingt will', explanation: '„Sie ist nervös, weil sie die Stelle unbedingt will."' },
      { id: 'st3-02', type: 'multiple-choice', prompt: 'Wie lange hat Sara in Berlin studiert?', options: ['zwei Jahre', 'drei Jahre', 'ein Jahr', 'sechs Monate'], answer: 'zwei Jahre', explanation: '„Ich habe zwei Jahre in Berlin studiert."' },
      { id: 'st3-03', type: 'multiple-choice', prompt: 'Warum hat Sara ihre alte Stelle verlassen?', options: ['Es gab keine Möglichkeit aufzusteigen', 'Die Arbeit war langweilig', 'Der Chef war unfreundlich', 'Die Firma hat geschlossen'], answer: 'Es gab keine Möglichkeit aufzusteigen', explanation: '„Obwohl die Arbeit interessant war, gab es keine Möglichkeit aufzusteigen."' },
      { id: 'st3-04', type: 'multiple-choice', prompt: 'Bei wem kann Sara am Anfang wohnen?', options: ['bei ihrer Schwester', 'bei ihren Eltern', 'bei einer Freundin', 'im Hotel'], answer: 'bei ihrer Schwester', explanation: '„Meine Schwester wohnt hier — am Anfang kann ich bei ihr wohnen."' },
      { id: 'st3-05', type: 'multiple-choice', prompt: 'Richtig oder falsch: Sara bekommt die Stelle.', options: ['Richtig', 'Falsch'], answer: 'Richtig', explanation: 'Última línea: „Sie hat die Stelle!"' },
      { id: 'st3-06', type: 'multiple-choice', prompt: '¿Cuántos idiomas habla Sara?', options: ['tres', 'dos', 'cuatro', 'uno'], answer: 'tres', explanation: '„Außerdem spreche ich drei Sprachen."' },
      { id: 'st3-07', type: 'fill-blank', prompt: 'Ich glaube, ___ Ihre Firma sehr innovativ ist. (conjunción)', answer: 'dass', explanation: '„dass" introduce la opinión y manda el verbo („ist") al final.' },
      { id: 'st3-08', type: 'fill-blank', prompt: '___ die Arbeit interessant war, gab es keine Möglichkeit aufzusteigen. (aunque)', answer: 'Obwohl', explanation: '„obwohl" = aunque; subordinada primero → el verbo principal („gab") va justo tras la coma.' },
      { id: 'st3-09', type: 'reorder', words: ['Ich', 'habe', 'zwei', 'Jahre', 'in', 'Berlin', 'studiert'], hint: 'Estudié dos años en Berlín.', answer: 'Ich habe zwei Jahre in Berlin studiert.', explanation: 'Perfekt: „habe" en posición 2, „studiert" (sin ge-, verbo en -ieren) al final.' },
      { id: 'st3-10', type: 'match', prompt: 'Empareja el vocabulario de la historia:', pairs: [['die Stelle', 'el puesto'], ['die Firma', 'la empresa'], ['aufsteigen', 'ascender'], ['sich melden', 'ponerse en contacto']], explanation: 'Vocabulario laboral clave.' },
      { id: 'st3-11', type: 'multiple-choice', prompt: '„Wir melden uns nächste Woche bei Ihnen" significa:', options: ['La semana que viene le contactamos', 'La semana que viene empieza usted', 'Le rechazamos la semana que viene', 'Venga usted la semana que viene'], answer: 'La semana que viene le contactamos', explanation: '„sich bei jemandem melden" = ponerse en contacto con alguien.' },
      { id: 'st3-12', type: 'find-error', prompt: '¿Dónde está el error? (la frase quiere decir "creo que su empresa es innovadora")', words: ['Ich', 'glaube,', 'dass', 'Ihre', 'Firma', 'ist', 'innovativ.'], wrong: 5, fix: 'innovativ ist (el verbo va al final)', explanation: 'Tras „dass", el verbo conjugado se va al FINAL: …, dass Ihre Firma innovativ ist.' },
      { id: 'st3-13', type: 'listen', say: 'Warum möchten Sie bei uns arbeiten?', prompt: 'Escucha: ¿qué pregunta del jefe oyes?', options: ['Warum möchten Sie bei uns arbeiten?', 'Wo haben Sie Deutsch gelernt?', 'Warum haben Sie Ihre alte Stelle verlassen?', 'Wissen Sie schon, ob Sie umziehen werden?'], answer: 'Warum möchten Sie bei uns arbeiten?', explanation: 'La primera pregunta de toda entrevista.' },
      { id: 'st3-14', type: 'translate', prompt: 'Traduce: Creo que la empresa es innovadora.', answer: 'Ich glaube, dass die Firma innovativ ist.', explanation: 'dass + verbo al final: …dass die Firma innovativ ist.' }
    ]
  });
})();
