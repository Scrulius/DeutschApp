(function () {
  registerModule({
    id: 'akkusativ',
    category: 'nivel1',
    icon: '🎯',
    title: 'Akkusativ — el objeto directo',
    desc: 'A quién o qué afecta la acción directamente. Solo cambia el masculino: der→den.',
    lessons: [
      {
        title: '¿Qué es el Akkusativ?',
        content: `<p>El Akkusativ es el caso del <strong>objeto directo</strong>: lo que recibe la acción. Responde a <strong>wen/was?</strong> (¿a quién/qué?). La buena noticia: solo el <strong>masculino</strong> cambia de forma (der→den, ein→einen); femenino, neutro y plural son idénticos al Nominativ.</p>
          <div class="tip">En español, el objeto directo de persona lleva "a" ("veo a mi hermano") pero el artículo nunca cambia. En alemán es al revés: no hay preposición extra, pero el artículo masculino SÍ cambia — esa es la única señal visible.</div>`,
        examples: [
          { de: 'Ich sehe <strong>den Mann</strong>.', es: 'Veo al hombre.', note: 'der→den: una sola letra cambia, pero es la señal clave.' },
          { de: 'Ich sehe die Frau.', es: 'Veo a la mujer.', note: 'Femenino: die no cambia.' },
          { de: 'Ich sehe das Kind.', es: 'Veo al niño.', note: 'Neutro: das no cambia.' },
          { de: 'Ich kaufe einen Apfel.', es: 'Compro una manzana.', note: 'ein→einen (masculino).' }
        ]
      },
      {
        title: 'Las preposiciones que SIEMPRE llevan Akkusativ',
        content: `<p>Un grupo pequeño y cerrado de preposiciones exige Akkusativ siempre, sin excepción, sin importar si hay movimiento o no: <strong>durch, für, gegen, ohne, um</strong> (y entlang, que suele ir después del sustantivo).</p>
          <div class="tip">Truco mnemónico: <strong>D</strong>urch <strong>O</strong>hne <strong>F</strong>ür <strong>U</strong>m <strong>G</strong>egen → "DOFUG".</div>`,
        examples: [
          { de: 'Das Geschenk ist für <strong>meinen Vater</strong>.', es: 'El regalo es para mi padre.' },
          { de: 'Wir laufen durch <strong>den Park</strong>.', es: 'Corremos a través del parque.' },
          { de: 'Ohne <strong>meinen Schlüssel</strong> komme ich nicht rein.', es: 'Sin mi llave no puedo entrar.' },
          { de: 'Das Auto fährt gegen <strong>einen Baum</strong>.', es: 'El coche choca contra un árbol.' },
          { de: 'Sie geht um <strong>die Ecke</strong>.', es: 'Ella dobla la esquina.' }
        ]
      },
      {
        title: 'Los verbos transitivos normales: el patrón "fácil"',
        content: `<p>La mayoría de verbos con objeto directo (haben, sehen, kaufen, essen, trinken, lesen, schreiben, brauchen, suchen, finden, lieben, kennen...) simplemente piden Akkusativ, igual que en español. Es el patrón más natural de los 4 casos — si dudas, empieza por asumir Akkusativ y comprueba si el verbo es de la lista especial de Dativ (siguiente módulo).</p>`,
        examples: [
          { de: 'Ich brauche einen Stift.', es: 'Necesito un bolígrafo.' },
          { de: 'Wir suchen einen Parkplatz.', es: 'Buscamos un aparcamiento.' },
          { de: 'Kennst du meinen Bruder?', es: '¿Conoces a mi hermano?' },
          { de: 'Ich liebe diese Stadt.', es: 'Amo esta ciudad.', note: 'die Stadt es femenino: no cambia, pero sigue siendo Akkusativ.' }
        ]
      }
    ],
    cheatsheet: window.SHARED.tables.articlesIndef + window.SHARED.tables.articles + window.SHARED.tables.akkusativPrepList,
    exercises: [
      { id: 'akk-01', type: 'multiple-choice', prompt: 'Ich sehe ___ Mann.', options: ['den', 'der', 'dem', 'des'], answer: 'den', explanation: 'Objeto directo masculino → den.', tip: 'En Akkusativ SOLO cambia el masculino: der→den, ein→einen. Femenino (die), neutro (das) y plural (die) no cambian.' },
      { id: 'akk-02', type: 'multiple-choice', prompt: 'Ich kaufe ___ Apfel.', options: ['einen', 'ein', 'einem', 'eines'], answer: 'einen', explanation: 'Masculino indeterminado en Akkusativ → einen.' },
      { id: 'akk-03', type: 'multiple-choice', prompt: 'Wir suchen ___ Lehrer.', options: ['einen', 'ein', 'eine', 'einem'], answer: 'einen' },
      { id: 'akk-04', type: 'multiple-choice', prompt: 'Ich sehe ___ Frau.', options: ['die', 'der', 'den', 'dem'], answer: 'die', explanation: 'Femenino: no cambia en Akkusativ.' },
      { id: 'akk-05', type: 'multiple-choice', prompt: 'Ich sehe ___ Kind.', options: ['das', 'den', 'dem', 'der'], answer: 'das', explanation: 'Neutro: no cambia en Akkusativ.' },
      { id: 'akk-06', type: 'multiple-choice', prompt: 'Das Geschenk ist für ___ Vater.', options: ['meinen', 'mein', 'meinem', 'meines'], answer: 'meinen', explanation: '„für" siempre pide Akkusativ.' },
      { id: 'akk-07', type: 'multiple-choice', prompt: 'Wir laufen durch ___ Park.', options: ['den', 'dem', 'der', 'des'], answer: 'den', explanation: '„durch" siempre pide Akkusativ.' },
      { id: 'akk-08', type: 'multiple-choice', prompt: 'Ohne ___ Schlüssel komme ich nicht rein.', options: ['meinen', 'mein', 'meinem', 'meiner'], answer: 'meinen', explanation: '„ohne" siempre pide Akkusativ.' },
      { id: 'akk-09', type: 'multiple-choice', prompt: 'Das Auto fährt gegen ___ Baum.', options: ['einen', 'ein', 'einem', 'einer'], answer: 'einen', explanation: '„gegen" siempre pide Akkusativ.' },
      { id: 'akk-10', type: 'select-case', prompt: 'Ich brauche [[einen Regenschirm]].', answer: 'Akkusativ' },
      { id: 'akk-11', type: 'select-case', prompt: 'Kennst du [[meinen Bruder]]?', answer: 'Akkusativ' },
      { id: 'akk-12', type: 'select-case', prompt: '[[Der Hund]] frisst den Knochen.', answer: 'Nominativ', explanation: 'Distractor: „der Hund" es el sujeto (quien come), no lo confundas con el objeto.' },
      { id: 'akk-13', type: 'fill-blank', prompt: 'Ich habe ___ (kein) Hunger.', answer: 'keinen', explanation: '„der Hunger" es masculino y objeto directo → keinen.' },
      { id: 'akk-14', type: 'multiple-choice', prompt: 'Er liest ___ Buch.', options: ['das', 'den', 'dem', 'des'], answer: 'das', explanation: 'Neutro: no cambia.' },
      { id: 'akk-15', type: 'multiple-choice', prompt: 'Wir treffen ___ Freunde heute Abend.', options: ['unsere', 'unseren', 'unserem', 'unseres'], answer: 'unsere', explanation: 'Plural: no cambia respecto al Nominativ.' },
      { id: 'akk-16', type: 'reorder', words: ['Ich', 'sehe', 'den', 'Lehrer'], answer: 'Ich sehe den Lehrer.', explanation: 'Orden simple SVO con Akkusativ marcado en „den".' },
      { id: 'akk-17', type: 'translate', prompt: 'Traduce: Busco un libro.', answer: 'Ich suche ein Buch.', explanation: '„ein Buch" es neutro, no cambia en Akkusativ.' },
      { id: 'akk-18', type: 'translate', prompt: 'Traduce: Veo al hombre.', answer: 'Ich sehe den Mann.', explanation: '„der Mann" → Akkusativ → „den Mann".' },
      { id: 'akk-19', type: 'multiple-choice', prompt: 'Die Party ist für ___ Kinder.', options: ['die', 'den', 'der', 'das'], answer: 'die', explanation: 'Plural: no cambia.' },
      { id: 'akk-20', type: 'select-case', prompt: 'Wir gehen durch [[die Stadt]].', answer: 'Akkusativ', explanation: '„durch" siempre pide Akkusativ, aunque „die" no cambie de forma visible por ser femenino.' },
      { id: 'akk-21', type: 'multiple-choice', prompt: 'Es gibt ___ Supermarkt in der Nähe.', options: ['einen', 'ein', 'einem', 'einer'], answer: 'einen', explanation: '„es gibt" SIEMPRE va con Akkusativ → einen (der Supermarkt).' },
      { id: 'akk-22', type: 'multiple-choice', prompt: 'Wir laufen um ___ See.', options: ['den', 'dem', 'der', 'des'], answer: 'den', explanation: '„um" siempre pide Akkusativ; „der See" → den.' },
      { id: 'akk-23', type: 'multiple-choice', prompt: 'Ich mache das alles für ___ Kinder.', options: ['die', 'den', 'der', 'dem'], answer: 'die', explanation: '„für" + Akkusativ; en plural „die" no cambia.' },
      { id: 'akk-24', type: 'multiple-choice', prompt: 'Die Mannschaft kämpft gegen ___ Gegner.', options: ['ihren', 'ihrem', 'ihr', 'ihres'], answer: 'ihren', explanation: '„gegen" + Akkusativ masculino → ihren (der Gegner).' },
      { id: 'akk-25', type: 'select-case', prompt: 'Ich besuche [[meinen Onkel]] am Wochenende.', answer: 'Akkusativ', explanation: 'besuchen lleva objeto directo → Akkusativ (mein→meinen).' },
      { id: 'akk-26', type: 'select-case', prompt: 'Ohne [[dich]] gehe ich nicht.', answer: 'Akkusativ', explanation: '„ohne" siempre pide Akkusativ; „du" → dich.' },
      { id: 'akk-27', type: 'fill-blank', prompt: 'Ich trinke ___ (ein) Tee.', answer: 'einen', explanation: '„der Tee" como objeto directo → Akkusativ → einen.' },
      { id: 'akk-28', type: 'translate', prompt: 'Traduce: Compro un coche nuevo.', answer: 'Ich kaufe ein neues Auto.', explanation: '„das Auto" es neutro: no cambia en Akkusativ. El adjetivo lleva -es (ein neues Auto).' },
      { id: 'akk-29', type: 'translate', prompt: 'Traduce: El regalo es para ti.', answer: 'Das Geschenk ist für dich.', explanation: '„für" + Akkusativ; el pronombre „du" → dich.' },
      { id: 'akk-30', type: 'multiple-choice', prompt: 'Ich sehe ___ jeden Tag im Bus.', options: ['ihn', 'ihm', 'er', 'sein'], answer: 'ihn', explanation: 'Objeto directo, pronombre masculino → Akkusativ → ihn.' },
      { id: 'akk-31', type: 'reorder', words: ['Ich', 'kaufe', 'einen', 'neuen', 'Computer'], hint: 'Compro un ordenador nuevo.', answer: 'Ich kaufe einen neuen Computer.', explanation: '„einen neuen Computer": Akkusativ masculino (einen + adjetivo -en).' },
      { id: 'akk-32', type: 'multiple-choice', prompt: 'Ich danke dir für ___ Hilfe.', options: ['deine', 'deiner', 'deinem', 'deines'], answer: 'deine', explanation: 'Aunque „danken" es Dativ, el complemento con „für" va en Akkusativ: „für deine Hilfe" (die Hilfe, femenino).' },
      { id: 'akk-33', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Das', 'Geschenk', 'ist', 'für', 'meinem', 'Vater.'], wrong: 4, fix: 'meinen', explanation: '„für" SIEMPRE pide Akkusativ → für meinen Vater (no Dativ).' },
      { id: 'akk-34', type: 'multiple-choice', prompt: 'Es gibt ___ Park in der Stadt.', options: ['einen', 'ein', 'einem', 'einer'], answer: 'einen', explanation: '„es gibt" siempre va con Akkusativ → einen Park (der Park).' }
      ,
      { id: 'akk-35', type: 'multiple-choice', prompt: 'Historia: Was braucht Ben für die Party?', options: ['einen Kuchen, eine Pizza und einen Saft', 'nur einen Kuchen', 'Käse und Brot', 'nichts'], answer: 'einen Kuchen, eine Pizza und einen Saft', explanation: '„Ich brauche einen Kuchen, eine Pizza und einen Saft." — fíjate: einen (masculino, Akkusativ).' },
      { id: 'akk-36', type: 'multiple-choice', prompt: 'Historia: Was vergisst Ben fast?', options: ['den Käse', 'den Saft', 'die Pizza', 'den Kuchen'], answer: 'den Käse', explanation: '„Moment... ich habe keinen Käse!"' },
      { id: 'akk-37', type: 'fill-blank', prompt: 'Historia: Moment... ich habe ___ Käse! (negación, masculino)', answer: 'keinen', explanation: 'der Käse como objeto directo → keinen (Akkusativ masculino).' }
    ],
    story: {
      intro: 'Ben da una fiesta y va al súper con su lista. Cada cosa que necesita, busca o compra va en Akkusativ — cuenta los „einen/den/keinen".',
      lines: [
        { speaker: '', de: 'Ben macht heute eine Party. Er schreibt einen Einkaufszettel.', es: 'Ben da hoy una fiesta. Escribe una lista de la compra.' },
        { speaker: 'Ben', de: 'Ich brauche einen Kuchen, eine Pizza und einen Saft.', es: 'Necesito una tarta, una pizza y un zumo.' },
        { speaker: '', de: 'Im Supermarkt sucht Ben den Kuchen.', es: 'En el súper, Ben busca la tarta.' },
        { speaker: 'Ben', de: 'Entschuldigung, ich finde den Apfelkuchen nicht.', es: 'Perdone, no encuentro la tarta de manzana.' },
        { speaker: 'Verkäuferin', de: 'Kein Problem! Sehen Sie das Regal dort?', es: '¡No hay problema! ¿Ve aquella estantería?' },
        { speaker: 'Ben', de: 'Ah ja, ich sehe es. Danke!', es: 'Ah sí, la veo. ¡Gracias!' },
        { speaker: '', de: 'Ben kauft den Kuchen, die Pizza und den Saft.', es: 'Ben compra la tarta, la pizza y el zumo.' },
        { speaker: 'Ben', de: 'Habe ich alles? Moment... ich habe keinen Käse!', es: '¿Lo tengo todo? Un momento… ¡no tengo queso!' },
        { speaker: '', de: 'Er holt noch einen Käse und geht zur Kasse.', es: 'Coge también un queso y va a la caja.' },
        { speaker: 'Verkäuferin', de: 'Haben Sie eine Kundenkarte?', es: '¿Tiene tarjeta de cliente?' },
        { speaker: 'Ben', de: 'Nein, aber ich habe einen Gutschein!', es: 'No, ¡pero tengo un vale de descuento!' },
        { speaker: '', de: 'Am Abend kommen die Gäste — und essen alles auf.', es: 'Por la noche llegan los invitados — y se lo comen todo.' }
      ]
    }
  });
})();
