(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>sein y haben en Präteritum</caption>' +
    '<tr><th></th><th>sein</th><th>haben</th></tr>' +
    '<tr><td>ich</td><td class="hl">war</td><td class="hl">hatte</td></tr>' +
    '<tr><td>du</td><td>warst</td><td>hattest</td></tr>' +
    '<tr><td>er/sie/es</td><td class="hl">war</td><td class="hl">hatte</td></tr>' +
    '<tr><td>wir</td><td>waren</td><td>hatten</td></tr>' +
    '<tr><td>ihr</td><td>wart</td><td>hattet</td></tr>' +
    '<tr><td>sie/Sie</td><td>waren</td><td>hatten</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Modales en Präteritum (¡sin umlaut!)</caption>' +
    '<tr><th>Presente</th><th>Präteritum</th><th>Ejemplo</th></tr>' +
    '<tr><td>kann</td><td class="hl">konnte</td><td>Ich konnte nicht schlafen.</td></tr>' +
    '<tr><td>muss</td><td class="hl">musste</td><td>Er musste arbeiten.</td></tr>' +
    '<tr><td>darf</td><td class="hl">durfte</td><td>Wir durften nicht ausgehen.</td></tr>' +
    '<tr><td>will</td><td>wollte</td><td>Sie wollte kommen.</td></tr>' +
    '<tr><td>soll</td><td>sollte</td><td>Ich sollte ihn anrufen.</td></tr>' +
    '</table></div>' +
    '<div class="tip">La regla de USO al hablar: el pasado va en <strong>Perfekt</strong> (ich habe gegessen)… SALVO <strong>sein, haben y los modales</strong>, que van en Präteritum aunque hables: <strong>ich war, ich hatte, ich konnte</strong>. „Ich bin gewesen" es correcto pero suena raro en conversación.</div>';

  registerModule({
    id: 'praeteritum',
    category: 'nivel2',
    icon: '📜',
    title: 'Präteritum: war, hatte, konnte…',
    desc: 'El pasado hablado usa Perfekt — EXCEPTO sein, haben y los modales. "Estaba cansado" = Ich war müde, no "bin müde gewesen".',
    lessons: [
      {
        title: 'La excepción que se usa a todas horas',
        content: `<p>Ya sabes que el pasado hablado va en Perfekt. Pero hay tres familias que los alemanes usan en <strong>Präteritum incluso hablando</strong>: <strong>sein</strong> (war), <strong>haben</strong> (hatte) y los <strong>modales</strong> (konnte, musste, wollte…). Decir „ich bin müde gewesen" no es incorrecto — pero nadie habla así.</p>`,
        examples: [
          { de: 'Ich <strong>war</strong> gestern krank.', es: 'Ayer estaba enfermo.', note: 'No „bin krank gewesen" (correcto pero rarísimo hablado).' },
          { de: 'Wir <strong>hatten</strong> keine Zeit.', es: 'No teníamos tiempo.' },
          { de: 'Der Film <strong>war</strong> super!', es: '¡La película estuvo genial!' },
          { de: 'Ich <strong>konnte</strong> nicht schlafen.', es: 'No pude dormir.' }
        ]
      },
      {
        title: 'Las formas: war, hatte y los modales sin umlaut',
        content: `<p>Como en el presente de los modales, <strong>ich</strong> y <strong>er/sie/es</strong> son idénticos: ich war / er war, ich hatte / er hatte, ich konnte / er konnte. Y los modales <strong>pierden el umlaut</strong> en Präteritum: können→konnte (¡no „könnte", que es otra cosa!), müssen→musste, dürfen→durfte.</p>
          <div class="warn">konnte ≠ könnte. „Ich konnte" = pude (pasado). „Ich könnte" = podría (condicional, lo verás en Konjunktiv II). Una diéresis cambia el significado entero.</div>`,
        examples: [
          { de: 'Als Kind <strong>durfte</strong> ich nicht lange fernsehen.', es: 'De niño no me dejaban ver mucho la tele.' },
          { de: 'Er <strong>musste</strong> am Wochenende arbeiten.', es: 'Tuvo que trabajar el fin de semana.' },
          { de: 'Wir <strong>wollten</strong> kommen, aber der Zug <strong>hatte</strong> Verspätung.', es: 'Queríamos ir, pero el tren llevaba retraso.' },
          { de: '<strong>Warst</strong> du schon mal in Berlin?', es: '¿Has estado alguna vez en Berlín?', note: 'Con sein, hasta las preguntas de experiencia suenan mejor así.' }
        ]
      },
      {
        title: 'El Präteritum de los cuentos (solo para reconocerlo)',
        content: `<p>En textos escritos — novelas, cuentos, noticias — TODO va en Präteritum: „Es <strong>war</strong> einmal…", „sie <strong>ging</strong>", „er <strong>sagte</strong>", „es <strong>gab</strong>". A tu nivel basta con <strong>reconocer</strong> esas formas al leer; para producir, tú sigue con Perfekt + war/hatte/modales.</p>`,
        examples: [
          { de: 'Es <strong>war</strong> einmal eine Prinzessin…', es: 'Érase una vez una princesa…', note: 'El comienzo de todos los cuentos.' },
          { de: 'Gestern <strong>gab</strong> es Nudeln.', es: 'Ayer hubo pasta.', note: '„es gab" (de geben) se usa mucho también hablando.' },
          { de: 'Sie <strong>sagte</strong> nichts und <strong>ging</strong>.', es: 'No dijo nada y se fue.', note: 'Típico de narración escrita.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'prt-01', type: 'fill-blank', prompt: 'Ich ___ gestern krank. (sein)', answer: 'war', explanation: 'sein en pasado hablado → Präteritum: war.', tip: 'sein, haben y los modales van en Präteritum incluso al hablar; el resto de verbos, en Perfekt.' },
      { id: 'prt-02', type: 'fill-blank', prompt: 'Wir ___ keine Zeit. (haben)', answer: 'hatten', explanation: 'wir → hatten.' },
      { id: 'prt-03', type: 'multiple-choice', prompt: '¿Cuál suena natural al HABLAR?', options: ['Ich war müde.', 'Ich bin müde gewesen.'], answer: 'Ich war müde.', explanation: 'Ambas son correctas, pero hablando se usa „war". „bin gewesen" suena a redacción forzada.' },
      { id: 'prt-04', type: 'fill-blank', prompt: 'Ich ___ nicht schlafen. (können, pasado)', answer: 'konnte', explanation: 'können → konnte (¡sin umlaut!).' },
      { id: 'prt-05', type: 'multiple-choice', prompt: 'Er ___ am Wochenende arbeiten. (tuvo que)', options: ['musste', 'müsste', 'muss', 'musstet'], answer: 'musste', explanation: 'Pasado de müssen → musste. „müsste" (con umlaut) es condicional.' },
      { id: 'prt-06', type: 'multiple-choice', prompt: '„Ich konnte" frente a „ich könnte":', options: ['konnte = pude (pasado); könnte = podría (condicional)', 'son idénticos', 'konnte = podría; könnte = pude', 'könnte es un error'], answer: 'konnte = pude (pasado); könnte = podría (condicional)', explanation: 'La diéresis separa pasado de condicional.' },
      { id: 'prt-07', type: 'fill-blank', prompt: 'Als Kind ___ ich nicht lange fernsehen. (dürfen, pasado)', answer: 'durfte', explanation: 'dürfen → durfte.' },
      { id: 'prt-08', type: 'find-error', prompt: '¿Dónde está el error? (quiero decir: "ayer estaba enfermo")', words: ['Ich', 'bin', 'gestern', 'krank.'], wrong: 1, fix: 'war', explanation: 'Hablamos del pasado: sein → Präteritum „war". Con „bin" la frase dice que estás enfermo HOY.' },
      { id: 'prt-09', type: 'buckets', prompt: 'Hablando, ¿este verbo va en Präteritum o en Perfekt?', buckets: ['Präteritum', 'Perfekt'], items: [['sein', 'Präteritum'], ['essen', 'Perfekt'], ['haben', 'Präteritum'], ['fahren', 'Perfekt'], ['können', 'Präteritum'], ['spielen', 'Perfekt']], explanation: 'sein/haben/modales → war/hatte/konnte; el resto → Perfekt (gegessen, gefahren, gespielt).' },
      { id: 'prt-10', type: 'translate', prompt: 'Traduce: Estaba cansado.', answer: 'Ich war müde.', explanation: 'sein → war.' },
      { id: 'prt-11', type: 'translate', prompt: 'Traduce: Teníamos hambre.', answer: 'Wir hatten Hunger.', explanation: 'haben → hatten.' },
      { id: 'prt-12', type: 'multiple-choice', prompt: '„Es war einmal…" es:', options: ['el comienzo de los cuentos (érase una vez)', 'una pregunta', 'un saludo antiguo', 'un error'], answer: 'el comienzo de los cuentos (érase una vez)', explanation: 'El Präteritum narrativo — resérvalo para leer.' },
      { id: 'prt-13', type: 'listen', say: 'Ich war gestern krank.', prompt: 'Escucha: ¿qué frase oyes?', options: ['Ich war gestern krank.', 'Ich war gestern müde.', 'Ich hatte gestern Zeit.', 'Er war gestern krank.'], answer: 'Ich war gestern krank.', explanation: 'war + krank — la combinación de excusa más usada del idioma.' },
      { id: 'prt-14', type: 'dictation', say: 'Wir hatten keine Zeit.', prompt: 'Dictado: escribe lo que oyes.', answer: 'Wir hatten keine Zeit.', explanation: 'hatten + keine Zeit.' },
      { id: 'prt-15', type: 'multiple-choice', prompt: 'Historia: Was hatten Oma und ihre Freunde nicht?', options: ['Handy und Computer', 'Bücher', 'Freunde', 'Zeit'], answer: 'Handy und Computer', explanation: '„Wir hatten kein Handy und keinen Computer."' },
      { id: 'prt-16', type: 'multiple-choice', prompt: 'Historia: Wann musste Oma zu Hause sein?', options: ['um zehn', 'um elf', 'um neun', 'um zwölf'], answer: 'um zehn', explanation: '„…aber ich musste um zehn zu Hause sein."' },
      { id: 'prt-17', type: 'fill-blank', prompt: 'Historia: Dann ___ ich zwei Wochen nicht ausgehen. (dürfen, pasado)', answer: 'durfte', explanation: 'El castigo: no tener permiso → durfte … nicht.' }
    ],
    story: {
      intro: 'El nieto le pregunta a la abuela cómo era su vida a los quince. Toda la conversación va en war / hatte / musste / durfte / wollte — el Präteritum que sí se habla.',
      lines: [
        { speaker: 'Enkel', de: 'Oma, wie war dein Leben mit fünfzehn?', es: 'Abuela, ¿cómo era tu vida a los quince?' },
        { speaker: 'Oma', de: 'Ganz anders! Wir hatten kein Handy und keinen Computer.', es: '¡Totalmente distinta! No teníamos móvil ni ordenador.' },
        { speaker: 'Enkel', de: 'Was?! Und was habt ihr am Abend gemacht?', es: '¡¿Qué?! ¿Y qué hacíais por la noche?' },
        { speaker: 'Oma', de: 'Wir waren draußen. Aber zuerst musste ich im Laden meiner Eltern helfen.', es: 'Estábamos fuera. Pero antes tenía que ayudar en la tienda de mis padres.' },
        { speaker: 'Enkel', de: 'Durftest du am Wochenende ausgehen?', es: '¿Te dejaban salir los fines de semana?' },
        { speaker: 'Oma', de: 'Ja, aber ich musste um zehn zu Hause sein.', es: 'Sí, pero tenía que estar en casa a las diez.' },
        { speaker: 'Enkel', de: 'Um zehn! Das ist früh.', es: '¡A las diez! Qué pronto.' },
        { speaker: 'Oma', de: 'Wir wollten natürlich länger bleiben... Einmal war ich erst um elf zu Hause.', es: 'Claro que queríamos quedarnos más… Una vez no llegué a casa hasta las once.' },
        { speaker: 'Enkel', de: 'Und dann?', es: '¿Y entonces?' },
        { speaker: 'Oma', de: 'Dann durfte ich zwei Wochen nicht ausgehen. Aber es hat sich gelohnt!', es: 'Entonces me quedé dos semanas sin salir. ¡Pero mereció la pena!' },
        { speaker: '', de: 'Oma lacht. Manche Dinge ändern sich nie.', es: 'La abuela se ríe. Hay cosas que no cambian nunca.' }
      ]
    }
  });
})();
