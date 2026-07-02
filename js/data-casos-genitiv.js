(function () {
  registerModule({
    id: 'genitiv',
    category: 'nivel4',
    icon: '🏷️',
    title: 'Genitiv — la posesión formal',
    desc: 'De quién es algo. Poco usado al hablar, pero clave para escribir bien y sonar culto.',
    lessons: [
      {
        title: '¿Qué es el Genitiv?',
        content: `<p>El Genitiv expresa <strong>posesión o pertenencia</strong>. Responde a <strong>wessen?</strong> (¿de quién?). En el alemán hablado suele sustituirse por "von + Dativ" ("das Auto von meinem Vater"), pero el Genitiv es la forma correcta y la que se espera en textos escritos a partir de B1.</p>
          <div class="warn">Aquí hay una trampa nueva: en los otros 3 casos solo cambia el ARTÍCULO. En Genitiv, además del artículo, el propio SUSTANTIVO masculino y neutro añade una -s o -es.</div>`,
        examples: [
          { de: 'Das Auto <strong>des Mannes</strong>.', es: 'El coche del hombre.', note: 'des + Mannes (+es).' },
          { de: 'Die Tasche <strong>der Frau</strong>.', es: 'El bolso de la mujer.', note: 'Femenino: el sustantivo no cambia, solo el artículo (der).' },
          { de: 'Das Spielzeug <strong>des Kindes</strong>.', es: 'El juguete del niño.' },
          { de: 'Die Bücher <strong>der Kinder</strong>.', es: 'Los libros de los niños.', note: 'Plural: der, sustantivo sin cambio extra.' }
        ]
      },
      {
        title: 'La regla del -s / -es en el sustantivo',
        content: `<p>Masculino y neutro añaden <strong>-s</strong> (palabras de varias sílabas) o <strong>-es</strong> (palabras de una sílaba, o que terminan en -s/-ß/-z/-x/-sch) en Genitiv. Femenino y plural <strong>nunca</strong> cambian el sustantivo.</p>`,
        examples: [
          { de: 'des Vaters', es: 'del padre', note: 'der Vater → des Vaters (+s, varias sílabas).' },
          { de: 'des Hauses', es: 'de la casa', note: 'das Haus → des Hauses (+es).' },
          { de: 'des Mannes', es: 'del hombre', note: 'der Mann → des Mannes (+es, monosílabo).' },
          { de: 'der Mutter', es: 'de la madre', note: 'die Mutter → der Mutter: femenino, SIN cambio en el sustantivo.' }
        ]
      },
      {
        title: 'Preposiciones que llevan Genitiv',
        content: `<p><strong>während, trotz, wegen, statt/anstatt, innerhalb, außerhalb, aufgrund</strong>.</p>
          <div class="tip">En alemán hablado, "trotz/wegen/während" se oyen cada vez más con Dativ ("wegen dem Wetter"). Por escrito y en el examen, usa siempre Genitiv.</div>`,
        examples: [
          { de: 'Während <strong>des Unterrichts</strong> darf man nicht sprechen.', es: 'Durante la clase no se puede hablar.' },
          { de: 'Trotz <strong>des Regens</strong> gehen wir spazieren.', es: 'A pesar de la lluvia, salimos a pasear.' },
          { de: 'Wegen <strong>der Arbeit</strong> kann ich nicht kommen.', es: 'Por el trabajo no puedo venir.' },
          { de: 'Statt <strong>eines Kaffees</strong> trinke ich Tee.', es: 'En lugar de un café, tomo té.' }
        ]
      }
    ],
    cheatsheet: window.SHARED.tables.articles + window.SHARED.tables.genitivPrepList +
      '<div class="tip">Regla rápida del sustantivo: masculino/neutro → +s (o +es si es monosílabo o termina en s/ß/z/x/sch). Femenino y plural → el sustantivo no cambia nunca.</div>',
    exercises: [
      { id: 'gen-01', type: 'multiple-choice', prompt: 'Das Auto ___ Mannes.', options: ['des', 'dem', 'den', 'der'], answer: 'des' },
      { id: 'gen-02', type: 'multiple-choice', prompt: 'Die Tasche ___ Frau.', options: ['der', 'des', 'dem', 'die'], answer: 'der' },
      { id: 'gen-03', type: 'multiple-choice', prompt: 'Das Spielzeug ___ Kindes.', options: ['des', 'dem', 'den', 'der'], answer: 'des' },
      { id: 'gen-04', type: 'fill-blank', prompt: 'Das Auto meines ___ (Vater).', answer: 'Vaters', explanation: 'der Vater → Genitiv: +s → Vaters.' },
      { id: 'gen-05', type: 'fill-blank', prompt: 'Das Zimmer des ___ (Kind).', answer: 'Kindes', explanation: 'das Kind → Genitiv: +es (palabra corta) → Kindes.' },
      { id: 'gen-06', type: 'multiple-choice', prompt: 'Während ___ Unterrichts darf man nicht telefonieren.', options: ['des', 'dem', 'den', 'der'], answer: 'des' },
      { id: 'gen-07', type: 'multiple-choice', prompt: 'Trotz ___ Regens gehen wir raus.', options: ['des', 'dem', 'den', 'der'], answer: 'des' },
      { id: 'gen-08', type: 'multiple-choice', prompt: 'Wegen ___ Arbeit kann ich nicht kommen.', options: ['der', 'des', 'dem', 'den'], answer: 'der', explanation: 'die Arbeit es femenino: der (sin cambio en el sustantivo).' },
      { id: 'gen-09', type: 'multiple-choice', prompt: 'Statt ___ Kaffees trinke ich Tee.', options: ['eines', 'ein', 'einem', 'einen'], answer: 'eines' },
      { id: 'gen-10', type: 'select-case', prompt: 'Die Bücher [[der Kinder]] liegen auf dem Tisch.', answer: 'Genitiv' },
      { id: 'gen-11', type: 'multiple-choice', prompt: 'Das ist das Haus ___ Familie.', options: ['der', 'des', 'dem', 'den'], answer: 'der', explanation: 'die Familie, femenino → der Familie.' },
      { id: 'gen-12', type: 'multiple-choice', prompt: 'Der Titel ___ Buches ist lang.', options: ['des', 'dem', 'den', 'der'], answer: 'des', explanation: 'das Buch → des Buches.' },
      { id: 'gen-13', type: 'fill-blank', prompt: 'Am Ende ___ (der Film) hat sie geweint.', answer: 'des Films', explanation: 'der Film → des Films en Genitiv.' },
      { id: 'gen-14', type: 'multiple-choice', prompt: 'Innerhalb ___ Woche melde ich mich.', options: ['einer', 'ein', 'eine', 'einen'], answer: 'einer', explanation: 'die Woche, femenino → einer Woche.' },
      { id: 'gen-15', type: 'select-case', prompt: 'Wegen [[des schlechten Wetters]] bleiben wir zu Hause.', answer: 'Genitiv' },
      { id: 'gen-16', type: 'translate', prompt: 'Traduce: El coche de mi padre es nuevo.', answer: 'Das Auto meines Vaters ist neu.', explanation: '„meines Vaters": Genitiv masculino con -s en el sustantivo.' },
      { id: 'gen-17', type: 'multiple-choice', prompt: 'Das ist die Idee ___ Chefs.', options: ['des', 'dem', 'den', 'der'], answer: 'des' },
      { id: 'gen-18', type: 'fill-blank', prompt: 'In der Mitte ___ (die Stadt) steht ein Turm.', answer: 'der Stadt', explanation: 'die Stadt es femenino: der Stadt, el sustantivo NO cambia.' },
      { id: 'gen-19', type: 'multiple-choice', prompt: 'Das ist das Haus ___ Lehrers.', options: ['des', 'dem', 'den', 'der'], answer: 'des', explanation: 'Genitivo masculino → des (+ el sustantivo lleva -s: Lehrers).' },
      { id: 'gen-20', type: 'fill-blank', prompt: 'die Farbe ___ (das Auto)', answer: 'des Autos', explanation: 'Neutro en Genitiv: des + Auto con -s → des Autos.' },
      { id: 'gen-21', type: 'fill-blank', prompt: 'der Name ___ (der Hund)', answer: 'des Hundes', explanation: 'Masculino monosílabo: +es → des Hundes.' },
      { id: 'gen-22', type: 'multiple-choice', prompt: 'Trotz ___ Kälte gehen wir spazieren.', options: ['der', 'des', 'dem', 'den'], answer: 'der', explanation: '„trotz" + Genitiv; „die Kälte" (femenino) → der (sin cambio en el sustantivo).' },
      { id: 'gen-23', type: 'multiple-choice', prompt: 'Während ___ Sommers reisen wir viel.', options: ['des', 'dem', 'den', 'der'], answer: 'des', explanation: '„während" + Genitiv; „der Sommer" → des Sommers.' },
      { id: 'gen-24', type: 'multiple-choice', prompt: 'Wegen ___ Streiks fährt heute kein Bus.', options: ['des', 'dem', 'den', 'der'], answer: 'des', explanation: '„wegen" + Genitiv; „der Streik" → des Streiks.' },
      { id: 'gen-25', type: 'translate', prompt: 'Traduce: El título del libro es largo.', answer: 'Der Titel des Buches ist lang.', explanation: 'Genitivo neutro: des Buches (das Buch + es).' },
      { id: 'gen-26', type: 'fill-blank', prompt: 'Am Ende ___ (die Woche) bin ich müde.', answer: 'der Woche', explanation: 'Femenino: der Woche, el sustantivo no cambia.' },
      { id: 'gen-27', type: 'select-case', prompt: 'Das Dach [[des Hauses]] ist neu.', answer: 'Genitiv', explanation: 'Pertenencia: „el tejado DE la casa" → Genitiv (des Hauses).' },
      { id: 'gen-28', type: 'multiple-choice', prompt: 'Innerhalb ___ Jahres lerne ich Deutsch.', options: ['eines', 'einem', 'einen', 'einer'], answer: 'eines', explanation: '„innerhalb" + Genitiv; „das Jahr" → eines Jahres.' },
      { id: 'gen-29', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Das', 'Auto', 'meines', 'Vater', 'ist', 'neu.'], wrong: 3, fix: 'Vaters', explanation: 'En Genitivo, el sustantivo masculino también cambia: meines Vaters (+s). No basta con cambiar el artículo.' }
      ,
      { id: 'gen-30', type: 'multiple-choice', prompt: 'Historia: Wessen Haus besucht Clara?', options: ['das Haus ihrer Großmutter', 'das Haus ihrer Mutter', 'das Haus ihres Bruders', 'ihr eigenes Haus'], answer: 'das Haus ihrer Großmutter', explanation: '„…besucht Clara das Haus ihrer Großmutter" — Genitiv femenino: ihrer.' },
      { id: 'gen-31', type: 'multiple-choice', prompt: 'Historia: Warum war Clara so lange nicht da?', options: ['wegen der Arbeit', 'wegen einer Krankheit', 'wegen des Wetters', 'wegen ihrer Tochter'], answer: 'wegen der Arbeit', explanation: '„Wegen der Arbeit war ich so lange nicht hier." — wegen + Genitiv.' },
      { id: 'gen-32', type: 'fill-blank', prompt: 'Historia: Der Garten ___ Hauses ist noch genauso schön. (artículo Genitiv)', answer: 'des', explanation: 'das Haus → des Hauses: Genitiv neutro con -es en el sustantivo.' }
    ],
    story: {
      intro: 'Después de muchos años, Clara vuelve a la casa de su abuela. La historia está llena de Genitiv: el jardín DE la casa, los libros DEL abuelo, el regalo DEL año…',
      lines: [
        { speaker: '', de: 'Nach vielen Jahren besucht Clara das Haus ihrer Großmutter.', es: 'Después de muchos años, Clara visita la casa de su abuela.' },
        { speaker: 'Clara', de: 'Der Garten des Hauses ist noch genauso schön wie früher.', es: 'El jardín de la casa sigue igual de bonito que antes.' },
        { speaker: '', de: 'Die Tür des alten Hauses ist offen. Clara geht hinein.', es: 'La puerta de la vieja casa está abierta. Clara entra.' },
        { speaker: 'Clara', de: 'Das ist das Zimmer meiner Mutter! Und dort — die Bücher meines Großvaters.', es: '¡Esta es la habitación de mi madre! Y allí — los libros de mi abuelo.' },
        { speaker: 'Oma', de: 'Clara! Was für eine Überraschung!', es: '¡Clara! ¡Qué sorpresa!' },
        { speaker: 'Clara', de: 'Oma! Wegen der Arbeit war ich so lange nicht hier. Entschuldige!', es: '¡Abuela! Por el trabajo llevaba tanto tiempo sin venir. ¡Perdona!' },
        { speaker: 'Oma', de: 'Trotz der langen Zeit hat sich hier nichts geändert.', es: 'A pesar de tanto tiempo, aquí no ha cambiado nada.' },
        { speaker: 'Clara', de: 'Am Ende des Sommers möchte ich wiederkommen. Mit meiner Tochter.', es: 'Al final del verano quiero volver. Con mi hija.' },
        { speaker: 'Oma', de: 'Die Tochter meiner Enkelin — hier? Das wäre das schönste Geschenk des Jahres!', es: '¿La hija de mi nieta — aquí? ¡Sería el regalo más bonito del año!' },
        { speaker: '', de: 'Während des Nachmittags trinken die beiden Tee und erzählen Geschichten.', es: 'Durante la tarde, las dos toman té y se cuentan historias.' }
      ]
    }
  });
})();
