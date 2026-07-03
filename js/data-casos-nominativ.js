(function () {
  registerModule({
    id: 'nominativ',
    category: 'nivel1',
    icon: '🧍',
    title: 'Nominativ — el sujeto',
    desc: 'El caso base: quién hace la acción. Tu punto de partida — ya lo conoces sin saberlo.',
    lessons: [
      {
        title: '¿Qué es el Nominativ?',
        content: `<p>El Nominativ es el caso del <strong>sujeto</strong>: quien realiza la acción. Responde a la pregunta <strong>wer/was?</strong> (¿quién/qué?). Es la forma "de diccionario" que ya usas: <strong>der, die, das</strong>.</p>
          <div class="tip">En español los artículos nunca cambian de forma según su función en la frase ("el hombre" es sujeto u objeto, siempre "el hombre"). En alemán el artículo SÍ cambia según el caso — el Nominativ es la única forma que ya dominas porque es la que aparece en el diccionario.</div>`,
        examples: [
          { de: '<strong>Der Mann</strong> liest ein Buch.', es: 'El hombre lee un libro.', note: '„Der Mann" es el sujeto: ¿quién lee? → el hombre.' },
          { de: '<strong>Die Frau</strong> arbeitet hier.', es: 'La mujer trabaja aquí.' },
          { de: '<strong>Das Kind</strong> spielt im Garten.', es: 'El niño juega en el jardín.' },
          { de: '<strong>Die Kinder</strong> schlafen schon.', es: 'Los niños ya duermen.', note: 'Plural: siempre die, sea cual sea el género en singular.' },
          { de: 'Morgen kommt <strong>der Zug</strong> an.', es: 'Mañana llega el tren.', note: 'Aunque no está al principio de la frase, „der Zug" sigue siendo el sujeto. El orden de palabras no indica el caso — el artículo sí.' }
        ]
      },
      {
        title: 'sein / werden / bleiben también piden Nominativ',
        content: `<p>Después de <strong>sein</strong> (ser/estar), <strong>werden</strong> (convertirse en) y <strong>bleiben</strong> (seguir siendo), el sustantivo que sigue NO es un objeto — vuelve a describir al sujeto. Por eso se queda en Nominativ, no pasa a Akkusativ.</p>
          <div class="warn">Error típico: como en español muchos verbos van seguidos directamente de un sustantivo ("veo un coche", "tengo un perro"), el cerebro hispanohablante trata cualquier sustantivo después del verbo como un objeto directo. Pero „sein/werden/bleiben" no introducen un objeto — son casi un signo "=".</div>`,
        examples: [
          { de: 'Er ist <strong>der Lehrer</strong>.', es: 'Él es el profesor.', note: 'No „den Lehrer" — sein no pide Akkusativ.' },
          { de: 'Sie wird <strong>eine gute Ärztin</strong>.', es: 'Ella se convertirá en una buena médica.' },
          { de: 'Das bleibt <strong>ein Geheimnis</strong>.', es: 'Eso sigue siendo un secreto.' },
          { de: 'Das ist <strong>mein Bruder</strong>.', es: 'Ese es mi hermano.', note: '„mein", no „meinen".' }
        ]
      },
      {
        title: 'El orden de palabras no marca el caso — el artículo sí',
        content: `<p>En español, el orden de la frase suele indicar quién hace qué (el sujeto casi siempre va primero). En alemán el orden es mucho más flexible: cualquier elemento puede ir en primera posición para darle énfasis, y el verbo casi siempre queda en la posición 2. Esto significa que <strong>el primer sustantivo de una frase alemana NO tiene por qué ser el sujeto</strong>.</p>
          <div class="tip">La única forma fiable de saber quién hace qué es mirar el CASO del artículo, no la posición en la frase.</div>`,
        examples: [
          { de: '<strong>Den Apfel</strong> isst das Kind.', es: 'El niño se come la manzana.', note: 'Literalmente "la manzana come el niño" en orden, pero „den" delata que la manzana es el objeto — el sujeto real es „das Kind".' },
          { de: '<strong>Der Hund</strong> beißt den Mann.', es: 'El perro muerde al hombre.' },
          { de: '<strong>Den Mann</strong> beißt der Hund.', es: 'Al hombre lo muerde el perro.', note: 'Mismo significado que la frase anterior, solo cambia el énfasis — el caso, no el orden, dice quién muerde a quién.' }
        ]
      }
    ],
    cheatsheet: window.SHARED.tables.articles + window.SHARED.tables.articlesIndef + window.SHARED.tables.possessive,
    exercises: [
      { id: 'nom-01', type: 'select-case', prompt: '[[Der Lehrer]] erklärt die Grammatik.', answer: 'Nominativ', explanation: '„Der Lehrer" es quien realiza la acción de explicar → sujeto → Nominativ.' },
      { id: 'nom-02', type: 'select-case', prompt: 'Ich sehe [[den Lehrer]] auf der Straße.', answer: 'Akkusativ', explanation: 'Aquí „der Lehrer" no actúa, es a quien VEO → objeto directo → Akkusativ (der→den). El primer sustantivo de la frase no siempre es el sujeto.' },
      { id: 'nom-03', type: 'multiple-choice', prompt: '___ Mann trinkt Kaffee.', options: ['Der', 'Den', 'Dem', 'Des'], answer: 'Der', explanation: 'Sujeto masculino en Nominativ → der.' },
      { id: 'nom-04', type: 'multiple-choice', prompt: '___ Frau kommt aus Madrid.', options: ['Die', 'Der', 'Das', 'Dem'], answer: 'Die', explanation: 'Sujeto femenino en Nominativ → die.' },
      { id: 'nom-05', type: 'multiple-choice', prompt: '___ Kind spielt im Garten.', options: ['Das', 'Der', 'Die', 'Den'], answer: 'Das', explanation: 'Sujeto neutro en Nominativ → das.' },
      { id: 'nom-06', type: 'multiple-choice', prompt: '___ Kinder schlafen schon.', options: ['Die', 'Der', 'Das', 'Den'], answer: 'Die', explanation: 'Plural en Nominativ siempre → die, sea cual sea el género en singular.' },
      { id: 'nom-07', type: 'multiple-choice', prompt: '___ Zug kommt pünktlich an.', options: ['Der', 'Die', 'Den', 'Dem'], answer: 'Der', explanation: 'Sujeto masculino → Nominativ → der (der Zug).' },
      { id: 'nom-08', type: 'multiple-choice', prompt: 'Er ist ___ Arzt.', options: ['ein', 'einen', 'einem', 'eines'], answer: 'ein', explanation: 'Tras „sein" el sustantivo no es un objeto, sigue describiendo al sujeto → Nominativ, no Akkusativ.' },
      { id: 'nom-09', type: 'multiple-choice', prompt: 'Das ist ___ gute Idee.', options: ['eine', 'einen', 'einer', 'eines'], answer: 'eine', explanation: 'Predicado nominal femenino tras „sein" → Nominativ → eine.' },
      { id: 'nom-10', type: 'select-case', prompt: 'Das bleibt [[unser Geheimnis]].', answer: 'Nominativ', explanation: '„bleiben" funciona como „sein": no introduce un objeto, redefine al sujeto → Nominativ.' },
      { id: 'nom-11', type: 'select-case', prompt: '[[Meine Schwester]] wird Ärztin.', answer: 'Nominativ', explanation: 'Sujeto de „werden".' },
      { id: 'nom-12', type: 'multiple-choice', prompt: '___ Hund bellt laut.', options: ['Der', 'Den', 'Dem', 'Des'], answer: 'Der', explanation: 'Sujeto masculino → der.' },
      { id: 'nom-13', type: 'multiple-choice', prompt: '___ Sonne scheint heute.', options: ['Die', 'Der', 'Das', 'Den'], answer: 'Die', explanation: 'Sujeto femenino → Nominativ → die (die Sonne).' },
      { id: 'nom-14', type: 'reorder', words: ['Den', 'Kuchen', 'isst', 'der', 'Junge'], answer: 'Den Kuchen isst der Junge.', explanation: 'Aunque „Den Kuchen" va primero, sigue siendo el objeto (Akkusativ); el sujeto real es „der Junge" — lo sabes por el artículo, no por el orden.' },
      { id: 'nom-15', type: 'select-case', prompt: 'Morgen kommt [[der Zug]] an.', answer: 'Nominativ', explanation: 'El sujeto puede aparecer después del verbo si otra cosa (aquí „morgen") ocupa la primera posición.' },
      { id: 'nom-16', type: 'multiple-choice', prompt: 'Das sind ___ Freunde.', options: ['meine', 'meinen', 'meinem', 'meiner'], answer: 'meine', explanation: 'Posesivo plural en Nominativ → meine (igual que „die").' },
      { id: 'nom-17', type: 'multiple-choice', prompt: '___ Studenten lernen für die Prüfung.', options: ['Die', 'Der', 'Den', 'Dem'], answer: 'Die', explanation: 'Sujeto en plural → Nominativ → die.' },
      { id: 'nom-18', type: 'multiple-choice', prompt: 'Das ist ___ Kollege von mir.', options: ['ein', 'einen', 'einem', 'eines'], answer: 'ein', explanation: 'Tras „sein" el sustantivo describe al sujeto → Nominativ, no Akkusativ. Sería „einen" solo si fuera objeto directo.' },
      { id: 'nom-19', type: 'select-case', prompt: '[[Der neue Film]] gefällt allen.', answer: 'Nominativ', explanation: 'Con „gefallen", lo que gusta es el SUJETO (Nominativ); „allen" es el Dativ (a quienes les gusta).' },
      { id: 'nom-20', type: 'select-case', prompt: 'Nächstes Jahr wird [[mein Bruder]] Lehrer.', answer: 'Nominativ', explanation: 'Sujeto de „werden"; „Lehrer" es predicado nominal, también en Nominativ.' },
      { id: 'nom-21', type: 'multiple-choice', prompt: 'Am Sonntag spielt ___ Mannschaft zu Hause.', options: ['die', 'der', 'den', 'dem'], answer: 'die', explanation: '„die Mannschaft" es el sujeto femenino, aunque vaya tras el verbo por estar „Am Sonntag" en posición 1.' },
      { id: 'nom-22', type: 'multiple-choice', prompt: '___ Wetter ist heute wunderschön.', options: ['Das', 'Der', 'Die', 'Den'], answer: 'Das', explanation: 'Sujeto neutro → Nominativ → das (das Wetter).' },
      { id: 'nom-23', type: 'multiple-choice', prompt: 'Wie heißt ___ Hauptstadt von Österreich?', options: ['die', 'der', 'das', 'den'], answer: 'die', explanation: '„die Hauptstadt" es el sujeto femenino → Nominativ.' },
      { id: 'nom-24', type: 'select-case', prompt: 'Im Sommer sind [[die Tage]] lang.', answer: 'Nominativ', explanation: 'Sujeto plural de „sein".' },
      { id: 'nom-25', type: 'translate', prompt: 'Traduce: El profesor es simpático.', answer: 'Der Lehrer ist nett.', acceptable: ['Der Lehrer ist sympathisch.'], explanation: 'Sujeto en Nominativ + adjetivo predicativo sin terminación tras „sein".' },
      { id: 'nom-26', type: 'translate', prompt: 'Traduce: Mi madre es médica.', answer: 'Meine Mutter ist Ärztin.', explanation: 'Las profesiones tras „sein" van SIN artículo y en Nominativ: „ist Ärztin".' },
      { id: 'nom-27', type: 'reorder', words: ['Morgen', 'kommt', 'mein', 'Vater'], hint: 'Mañana viene mi padre.', answer: 'Morgen kommt mein Vater.', explanation: '„Morgen" en posición 1, verbo en 2ª, y el sujeto „mein Vater" (Nominativ) en 3ª.' },
      { id: 'nom-28', type: 'multiple-choice', prompt: '___ Suppe schmeckt sehr gut.', options: ['Die', 'Der', 'Den', 'Dem'], answer: 'Die', explanation: '„die Suppe" es el sujeto (lo que sabe bien) → Nominativ.' },
      { id: 'nom-29', type: 'buckets', prompt: 'Cada sustantivo a su género:', buckets: ['der', 'die', 'das'], items: [['Tisch', 'der'], ['Lampe', 'die'], ['Buch', 'das'], ['Stuhl', 'der'], ['Tür', 'die'], ['Auto', 'das']], explanation: 'der Tisch, der Stuhl · die Lampe, die Tür · das Buch, das Auto. El género hay que aprenderlo CON el sustantivo, siempre.' },
      { id: 'nom-30', type: 'buckets', prompt: 'Más géneros — ¿der, die o das?', buckets: ['der', 'die', 'das'], items: [['Schlüssel', 'der'], ['Zeitung', 'die'], ['Fenster', 'das'], ['Computer', 'der'], ['Blume', 'die'], ['Wasser', 'das']], explanation: 'der Schlüssel, der Computer · die Zeitung, die Blume · das Fenster, das Wasser. Pista: -ung casi siempre es „die" (die Zeitung).' }
      ,
      { id: 'nom-31', type: 'multiple-choice', prompt: 'Historia: Was ist Emmas Vater von Beruf?', options: ['Koch', 'Lehrer', 'Arzt', 'Polizist'], answer: 'Koch', explanation: '„Das ist mein Vater. Er ist Koch."' },
      { id: 'nom-32', type: 'multiple-choice', prompt: 'Historia: Wer ist „der Chef im Haus"?', options: ['der Hund Bruno', 'der Vater', 'die Oma', 'Max'], answer: 'der Hund Bruno', explanation: '„Der Hund ist der Chef im Haus!" — Bruno manda.' },
      { id: 'nom-33', type: 'fill-blank', prompt: 'Historia: Das ist ___ Mutter. Sie ist Ärztin. (mi)', answer: 'meine', explanation: 'die Mutter (femenino) en Nominativ → meine Mutter.' },
      { id: 'nom-34', type: 'multiple-choice', prompt: 'Historia: Was ist Onkel Karl von Beruf?', options: ['Musiker', 'Koch', 'Fotograf', 'Lehrer'], answer: 'Musiker', explanation: '„Das ist mein Onkel Karl. Er ist Musiker." — profesión tras sein: sin artículo, Nominativ.' },
      { id: 'nom-35', type: 'multiple-choice', prompt: 'Historia: Warum lachen alle auf dem Foto?', options: ['Der Hund hat die Wurst gestohlen', 'Onkel Karl hat Musik gemacht', 'Das Baby hat geweint', 'Der Fotograf ist gefallen'], answer: 'Der Hund hat die Wurst gestohlen', explanation: '„Der Hund war schneller als der Fotograf. Die Wurst war weg!"' },
      { id: 'nom-36', type: 'fill-blank', prompt: 'Historia: Meine Mutter ist ___ Einzige mit Geduld. (artículo)', answer: 'die', explanation: 'Predicado con sein → Nominativ: die Einzige (femenino).' }
    ],
    story: {
      intro: 'Emma le enseña a su amiga Julia una foto de familia. Fíjate: todos los que se presentan van en Nominativ — la forma de diccionario.',
      lines: [
        { speaker: '', de: 'Emma zeigt Julia ein Familienfoto.', es: 'Emma le enseña a Julia una foto de familia.' },
        { speaker: 'Julia', de: 'Wer ist das?', es: '¿Quién es este?' },
        { speaker: 'Emma', de: 'Das ist mein Vater. Er ist Koch.', es: 'Este es mi padre. Es cocinero.' },
        { speaker: 'Julia', de: 'Und die Frau hier?', es: '¿Y esta mujer de aquí?' },
        { speaker: 'Emma', de: 'Das ist meine Mutter. Sie ist Ärztin.', es: 'Esta es mi madre. Es médica.' },
        { speaker: 'Julia', de: 'Ist das dein Bruder?', es: '¿Es este tu hermano?' },
        { speaker: 'Emma', de: 'Ja, das ist Max. Er ist erst sechs.', es: 'Sí, es Max. Solo tiene seis años.' },
        { speaker: 'Julia', de: 'Und der Hund? Der Hund ist süß!', es: '¿Y el perro? ¡El perro es una monada!' },
        { speaker: 'Emma', de: 'Das ist Bruno. Der Hund ist der Chef im Haus!', es: 'Es Bruno. ¡El perro es el jefe de la casa!' },
        { speaker: 'Julia', de: 'Und wer ist die Frau mit dem Hut?', es: '¿Y quién es la mujer del sombrero?' },
        { speaker: 'Emma', de: 'Meine Oma. Sie ist achtzig und sehr lustig.', es: 'Mi abuela. Tiene ochenta años y es muy divertida.' },
        { speaker: 'Julia', de: 'Und der Mann mit der Gitarre?', es: '¿Y el hombre de la guitarra?' },
        { speaker: 'Emma', de: 'Das ist mein Onkel Karl. Er ist Musiker. Seine Band ist... na ja, laut.', es: 'Es mi tío Karl. Es músico. Su grupo es… bueno, ruidoso.' },
        { speaker: 'Julia', de: 'Und wer ist das Baby da auf dem Arm?', es: '¿Y quién es el bebé ese en brazos?' },
        { speaker: 'Emma', de: 'Das ist meine Cousine Ana. Sie ist jetzt schon zehn.', es: 'Es mi prima Ana. Ya tiene diez años.' },
        { speaker: 'Julia', de: 'Warum lachen denn alle so?', es: '¿Y por qué se ríen todos así?' },
        { speaker: 'Emma', de: 'Eine Sekunde vor dem Foto war der Tisch noch voll. Dann kam Bruno...', es: 'Un segundo antes de la foto, la mesa aún estaba llena. Entonces llegó Bruno…' },
        { speaker: 'Emma', de: 'Der Hund war schneller als der Fotograf. Die Wurst war weg!', es: 'El perro fue más rápido que el fotógrafo. ¡La salchicha desapareció!' },
        { speaker: 'Julia', de: 'Deine Familie ist wirklich lustig! Wer macht das Foto dieses Jahr?', es: '¡Tu familia es divertidísima! ¿Quién hace la foto este año?' },
        { speaker: 'Emma', de: 'Meine Mutter. Sie ist die Einzige mit Geduld.', es: 'Mi madre. Es la única con paciencia.' },
        { speaker: '', de: 'Die ganze Familie ist auf dem Foto — und alle lachen.', es: 'Toda la familia está en la foto — y todos ríen.' }
      ]
    }
  });
})();
