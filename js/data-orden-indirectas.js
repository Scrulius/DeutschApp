(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>De pregunta directa a pregunta indirecta</caption>' +
    '<tr><th>Directa</th><th>Indirecta</th></tr>' +
    '<tr><td>Wann kommt er?</td><td>Ich weiß nicht, wann er kommt.</td></tr>' +
    '<tr><td>Wo wohnst du?</td><td>Sag mir, wo du wohnst.</td></tr>' +
    '<tr><td>Kommt er morgen? <em>(sí/no)</em></td><td>Ich weiß nicht, <strong>ob</strong> er morgen kommt.</td></tr>' +
    '<tr><td>Hast du Zeit? <em>(sí/no)</em></td><td>Sie fragt, <strong>ob</strong> du Zeit hast.</td></tr>' +
    '</table></div>' +
    '<div class="warn"><strong>ob ≠ wenn.</strong> El español "si" es ambiguo (puede significar "whether" o condición "if"), pero el alemán distingue: <strong>ob</strong> solo para preguntas indirectas de sí/no; <strong>wenn</strong> solo para condiciones reales. „Ich weiß nicht, ob er kommt" (no sé SI viene) vs „Wenn er kommt, freue ich mich" (SI viene, me alegro).</div>';

  registerModule({
    id: 'indirectas',
    category: 'nivel3',
    icon: '💭',
    title: 'Preguntas indirectas',
    desc: '"No sé cuándo viene" → "Ich weiß nicht, wann er kommt." El verbo se esconde al final, y "si" no siempre es "wenn".',
    lessons: [
      {
        title: '¿Qué es una pregunta indirecta?',
        content: `<p>Una pregunta indirecta "envuelve" una pregunta dentro de otra frase ("No sé...", "¿Puedes decirme...?", "Me pregunto..."). Dos cambios importantes respecto a la pregunta directa: <strong>(1)</strong> el verbo se mueve al final de la cláusula incrustada, como en cualquier subordinada; <strong>(2)</strong> si la pregunta original era de sí/no (sin W-word), hay que insertar <strong>ob</strong>.</p>`,
        examples: [
          { de: 'Wann kommt er? → Ich weiß nicht, <strong>wann er kommt</strong>.', es: 'No sé cuándo viene.', note: '„kommt" se mueve al final.' },
          { de: 'Wo wohnst du? → Kannst du mir sagen, <strong>wo du wohnst</strong>?', es: '¿Puedes decirme dónde vives?' },
          { de: 'Kommt er morgen? → Ich weiß nicht, <strong>ob er morgen kommt</strong>.', es: 'No sé si viene mañana.', note: 'Sin W-word en el original → se inserta „ob".' },
          { de: 'Hast du Zeit? → Sie fragt, <strong>ob du Zeit hast</strong>.', es: 'Ella pregunta si tienes tiempo.' }
        ]
      },
      {
        title: 'La trampa del "si": ob ≠ wenn',
        content: `<p>En español, "si" sirve tanto para preguntas indirectas ("no sé <em>si</em> viene" = whether) como para condiciones ("<em>si</em> llueve, me quedo" = if). En alemán son dos palabras distintas: <strong>ob</strong> solo para el primer caso, <strong>wenn</strong> solo para el segundo. Traducir siempre "si" por "wenn" es el error más común de hispanohablantes en este punto.</p>`,
        examples: [
          { de: 'No sé si viene. → Ich weiß nicht, <strong>ob</strong> er kommt.', es: '(whether = pregunta indirecta)' },
          { de: 'Si llueve, me quedo en casa. → <strong>Wenn</strong> es regnet, bleibe ich zu Hause.', es: '(condición real)' },
          { de: 'Ich weiß nicht, ob es regnet.', es: 'No sé si llueve.', note: 'Pregunta indirecta.' },
          { de: 'Wenn es regnet, nehme ich einen Schirm.', es: 'Si llueve, cojo un paraguas.', note: 'Condición.' }
        ]
      },
      {
        title: 'El verbo va al final, siempre — incluso con Perfekt o modales',
        content: `<p>La regla de verbo-al-final no tiene excepciones dentro de la subordinada: con Perfekt, el auxiliar (haben/sein) se coloca al final, después del participio; con un verbo modal, el modal conjugado cierra la frase, justo después del infinitivo.</p>`,
        examples: [
          { de: 'Ich weiß nicht, was er <strong>gesagt hat</strong>.', es: 'No sé qué ha dicho.', note: 'Perfekt: „hat" al final, tras el participio „gesagt".' },
          { de: 'Ich frage mich, ob ich das <strong>schaffen kann</strong>.', es: 'Me pregunto si puedo con esto.', note: 'Modal „kann" al final, tras el infinitivo „schaffen".' },
          { de: 'Erzähl mir, warum du traurig <strong>bist</strong>.', es: 'Cuéntame por qué estás triste.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'ind-01', type: 'fill-blank', prompt: 'Wann kommt er? → Ich weiß nicht, wann er ___.', answer: 'kommt', explanation: 'El verbo se mueve al final de la frase subordinada.' },
      { id: 'ind-02', type: 'reorder', words: ['Ich', 'weiß', 'nicht,', 'wann', 'er', 'kommt'], answer: 'Ich weiß nicht, wann er kommt.', explanation: 'Verbo „kommt" al final de la subordinada.' },
      { id: 'ind-03', type: 'reorder', words: ['Kannst', 'du', 'mir', 'sagen,', 'wo', 'du', 'wohnst'], answer: 'Kannst du mir sagen, wo du wohnst?', punctuation: '?', explanation: '„wohnst" es el verbo de la subordinada „wo du wohnst" y se coloca al final de esa subordinada.' },
      { id: 'ind-04', type: 'multiple-choice', prompt: 'Ich weiß nicht, ___ er kommt. (no sé SI viene)', options: ['ob', 'wenn', 'wann', 'dass'], answer: 'ob', explanation: 'Pregunta indirecta de sí/no (sin W-word) → se inserta „ob".' },
      { id: 'ind-05', type: 'multiple-choice', prompt: '"Si llueve, me quedo en casa" (condición) empieza con...', options: ['Wenn', 'Ob', 'Als', 'Dass'], answer: 'Wenn', explanation: 'Condición real → wenn (no ob, que es solo para preguntas indirectas de sí/no).' },
      { id: 'ind-06', type: 'multiple-choice', prompt: '"No sé si viene" (pregunta indirecta) empieza la subordinada con...', options: ['ob', 'wenn', 'als', 'dass'], answer: 'ob' },
      { id: 'ind-07', type: 'translate', prompt: 'Traduce: No sé si viene mañana.', answer: 'Ich weiß nicht, ob er morgen kommt.', explanation: 'Sí/no sin W-word → ob; verbo „kommt" al final.' },
      { id: 'ind-08', type: 'translate', prompt: 'Traduce: Ella pregunta si tienes tiempo.', answer: 'Sie fragt, ob du Zeit hast.', explanation: 'ob + verbo „hast" al final.' },
      { id: 'ind-09', type: 'translate', prompt: 'Traduce: No sé qué ha dicho.', answer: 'Ich weiß nicht, was er gesagt hat.', explanation: 'Perfekt en subordinada: el auxiliar „hat" se va al final, después del participio.' },
      { id: 'ind-10', type: 'fill-blank', prompt: 'Ich frage mich, ob ich das ___ (schaffen + können, presente).', answer: 'schaffen kann', explanation: 'Con modal, el infinitivo (schaffen) precede al modal conjugado (kann), y ambos van al final.' },
      { id: 'ind-11', type: 'reorder', words: ['Erzähl', 'mir,', 'warum', 'du', 'traurig', 'bist'], answer: 'Erzähl mir, warum du traurig bist.', explanation: '„bist" (verbo) al final de la subordinada „warum du traurig bist".' },
      { id: 'ind-12', type: 'multiple-choice', prompt: 'Kommt er morgen? (directa, sí/no) → indirecta:', options: ['Ich weiß nicht, ob er morgen kommt.', 'Ich weiß nicht, wenn er morgen kommt.', 'Ich weiß nicht, kommt er morgen.', 'Ich weiß nicht, ob kommt er morgen.'], answer: 'Ich weiß nicht, ob er morgen kommt.' },
      { id: 'ind-13', type: 'multiple-choice', prompt: 'Wo wohnst du? (directa) → indirecta:', options: ['Sag mir, wo du wohnst.', 'Sag mir, wo wohnst du.', 'Sag mir, du wo wohnst.', 'Sag mir, wohnst du wo.'], answer: 'Sag mir, wo du wohnst.' },
      { id: 'ind-14', type: 'multiple-choice', prompt: 'Hast du Hunger? (directa, sí/no) → indirecta:', options: ['Ich möchte wissen, ob du Hunger hast.', 'Ich möchte wissen, wenn du Hunger hast.', 'Ich möchte wissen, hast du Hunger.', 'Ich möchte wissen, ob hast du Hunger.'], answer: 'Ich möchte wissen, ob du Hunger hast.' },
      { id: 'ind-15', type: 'fill-blank', prompt: 'Was machst du? → Er fragt, was du ___.', answer: 'machst', explanation: 'Verbo al final de la subordinada.' },
      { id: 'ind-16', type: 'multiple-choice', prompt: '"Si tengo tiempo, te ayudo" (condición) empieza con...', options: ['Wenn', 'Ob'], answer: 'Wenn' },
      { id: 'ind-17', type: 'multiple-choice', prompt: '"No sé si tengo tiempo" (indirecta sí/no) empieza la subordinada con...', options: ['ob', 'wenn'], answer: 'ob' },
      { id: 'ind-18', type: 'translate', prompt: 'Traduce: Me pregunto si puedo con esto. (schaffen)', answer: 'Ich frage mich, ob ich das schaffen kann.', explanation: 'ob + modal „kann" al final, con el infinitivo „schaffen" justo antes.' },
      { id: 'ind-19', type: 'reorder', words: ['Ich', 'weiß', 'nicht,', 'was', 'er', 'gesagt', 'hat'], answer: 'Ich weiß nicht, was er gesagt hat.', explanation: 'Perfekt en subordinada: „hat" (auxiliar) va al final, tras el participio „gesagt".' },
      { id: 'ind-20', type: 'multiple-choice', prompt: 'Warum lernst du Deutsch? (directa) → indirecta:', options: ['Ich frage mich, warum ich Deutsch lerne.', 'Ich frage mich, warum lerne ich Deutsch.', 'Ich frage mich, ich warum Deutsch lerne.', 'Ich frage mich, Deutsch warum ich lerne.'], answer: 'Ich frage mich, warum ich Deutsch lerne.' },
      { id: 'ind-21', type: 'multiple-choice', prompt: 'Weißt du, ___ der Zug fährt? (¿a qué hora?)', options: ['wann', 'ob', 'dass', 'wenn'], answer: 'wann', explanation: 'La pregunta original lleva „wann" (W-word), que se conserva; el verbo va al final.' },
      { id: 'ind-22', type: 'multiple-choice', prompt: 'Ich frage mich, ___ das wirklich stimmt.', options: ['ob', 'wenn', 'wann', 'dass'], answer: 'ob', explanation: 'Pregunta indirecta de sí/no → ob.' },
      { id: 'ind-23', type: 'reorder', words: ['Ich', 'weiß', 'nicht,', 'wo', 'er', 'wohnt'], hint: 'No sé dónde vive.', answer: 'Ich weiß nicht, wo er wohnt.', explanation: 'El verbo „wohnt" va al final de la subordinada.' },
      { id: 'ind-24', type: 'multiple-choice', prompt: 'Sag mir, ___ du gestern gemacht hast.', options: ['was', 'dass', 'ob', 'wenn'], answer: 'was', explanation: 'La pregunta original es „Was hast du gemacht?" → se conserva „was".' },
      { id: 'ind-25', type: 'translate', prompt: 'Traduce: No sé si tengo tiempo.', answer: 'Ich weiß nicht, ob ich Zeit habe.', explanation: 'Sí/no → ob; verbo „habe" al final.' },
      { id: 'ind-26', type: 'multiple-choice', prompt: '___ du willst, können wir jetzt gehen. (condición: si quieres)', options: ['Wenn', 'Ob', 'Als', 'Dass'], answer: 'Wenn', explanation: 'Condición real → wenn (ob es solo para preguntas indirectas de sí/no).' },
      { id: 'ind-27', type: 'multiple-choice', prompt: 'Können Sie mir sagen, ___ die Post ist?', options: ['wo', 'ob', 'dass', 'wenn'], answer: 'wo', explanation: 'La pregunta es „Wo ist die Post?" → se conserva „wo".' },
      { id: 'ind-28', type: 'reorder', words: ['Er', 'fragt,', 'ob', 'ich', 'komme'], hint: 'Él pregunta si vengo.', answer: 'Er fragt, ob ich komme.', explanation: 'ob + verbo „komme" al final.' },
      { id: 'ind-29', type: 'translate', prompt: 'Traduce: ¿Puedes decirme dónde está la estación?', answer: 'Kannst du mir sagen, wo der Bahnhof ist?', explanation: 'Pregunta indirecta con „wo"; „ist" al final de la subordinada.' },
      { id: 'ind-30', type: 'multiple-choice', prompt: 'Ich möchte wissen, ___ das kostet.', options: ['wie viel', 'ob', 'dass', 'wenn'], answer: 'wie viel', explanation: 'La pregunta es „Wie viel kostet das?" → se conserva „wie viel".' },
      { id: 'ind-31', type: 'find-error', prompt: '¿Dónde está el error? (quiero decir: "no sé SI viene")', words: ['Ich', 'weiß', 'nicht,', 'wenn', 'er', 'kommt.'], wrong: 3, fix: 'ob', explanation: 'Pregunta indirecta de sí/no → ob. „wenn" sería una condición ("cuando/si ocurre X").' },
      { id: 'ind-32', type: 'fill-blank', prompt: 'Weißt du, wo er ___? (wohnen)', answer: 'wohnt', explanation: 'El verbo conjugado va al final de la subordinada: wo er wohnt.' }
      ,
      { id: 'ind-33', type: 'multiple-choice', prompt: 'Historia: Was weiß Marc über den neuen Kollegen?', options: ['dass er aus Wien kommt', 'wie er heißt', 'wo er vorher gearbeitet hat', 'ob er Kaffee trinkt'], answer: 'dass er aus Wien kommt', explanation: '„Ich weiß nur, dass er aus Wien kommt."' },
      { id: 'ind-34', type: 'multiple-choice', prompt: 'Historia: Was möchte der neue Kollege wissen?', options: ['wo die Tassen sind', 'wie Julia heißt', 'ob es Kaffee gibt', 'wann das Meeting beginnt'], answer: 'wo die Tassen sind', explanation: '„Könnt ihr mir sagen, wo die Tassen sind?" — pregunta indirecta con „wo" y el verbo al final.' },
      { id: 'ind-35', type: 'fill-blank', prompt: 'Historia: Ich frage mich, ___ er nett ist. (si)', answer: 'ob', explanation: 'Pregunta indirecta de sí/no → ob (nunca „wenn").' }
    ],
    story: {
      intro: 'En la cocina de la oficina, Julia y Marc cotillean sobre el compañero nuevo — sin saber que está a punto de entrar. Cotillear = hablar en preguntas indirectas.',
      lines: [
        { speaker: '', de: 'In der Kaffeeküche. Ein neuer Kollege hat heute angefangen.', es: 'En la cocina de la oficina. Hoy ha empezado un compañero nuevo.' },
        { speaker: 'Julia', de: 'Weißt du, wie der Neue heißt?', es: '¿Sabes cómo se llama el nuevo?' },
        { speaker: 'Marc', de: 'Keine Ahnung. Ich weiß nur, dass er aus Wien kommt.', es: 'Ni idea. Solo sé que viene de Viena.' },
        { speaker: 'Julia', de: 'Ich frage mich, ob er nett ist.', es: 'Me pregunto si será majo.' },
        { speaker: 'Marc', de: 'Frag ihn doch einfach, wo er vorher gearbeitet hat!', es: '¡Pues pregúntale directamente dónde trabajaba antes!' },
        { speaker: 'Julia', de: 'Ich? Nein! Ich weiß nicht mal, ob er Kaffee trinkt.', es: '¿Yo? ¡No! Ni siquiera sé si toma café.' },
        { speaker: '', de: 'Da kommt der neue Kollege in die Küche.', es: 'En eso, el compañero nuevo entra en la cocina.' },
        { speaker: 'David', de: 'Hallo! Könnt ihr mir sagen, wo die Tassen sind?', es: '¡Hola! ¿Me podéis decir dónde están las tazas?' },
        { speaker: 'Julia', de: 'Klar, hier! Ähm... wir wollten wissen, wie du heißt.', es: '¡Claro, aquí! Ehm… queríamos saber cómo te llamas.' },
        { speaker: 'David', de: 'David. Und ja — ich trinke sehr viel Kaffee.', es: 'David. Y sí — tomo muchísimo café.' },
        { speaker: 'Marc', de: 'Woher weißt du, dass wir... egal. Willkommen, David!', es: '¿Cómo sabes que…? Da igual. ¡Bienvenido, David!' }
      ]
    }
  });
})();
