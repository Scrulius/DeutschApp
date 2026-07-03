(function () {
  registerModule({
    id: 'dativ',
    category: 'nivel2',
    icon: '🎁',
    title: 'Dativ — el objeto indirecto',
    desc: 'El caso que más cuesta a hispanohablantes: a quién le pasa algo. Verbos y preposiciones fijas que hay que memorizar sí o sí.',
    lessons: [
      {
        title: '¿Qué es el Dativ?',
        content: `<p>El Dativ es el caso del <strong>objeto indirecto</strong>: la persona que recibe o se beneficia de la acción. Responde a <strong>wem?</strong> (¿a quién le...?). El ejemplo clásico: dar algo A ALGUIEN.</p>`,
        examples: [
          { de: 'Ich gebe <strong>dem Mann</strong> das Buch.', es: 'Le doy el libro al hombre.', note: 'der→dem.' },
          { de: 'Ich gebe <strong>der Frau</strong> die Blumen.', es: 'Le doy las flores a la mujer.', note: 'die→der.' },
          { de: 'Ich gebe <strong>dem Kind</strong> einen Ball.', es: 'Le doy una pelota al niño.', note: 'das→dem.' },
          { de: 'Ich gebe <strong>den Kindern</strong> Süßigkeiten.', es: 'Les doy caramelos a los niños.', note: 'Plural: die→den, y el sustantivo añade -n: Kinder→Kindern.' }
        ]
      },
      {
        title: 'El truco: casi siempre hay DOS objetos',
        content: `<p>Con verbos como <strong>geben, schenken, zeigen, schicken, erklären</strong>, hay dos objetos: a quién (Dativ) y qué (Akkusativ). Orden típico cuando ambos son sustantivos: <strong>Dativ antes que Akkusativ</strong>. Pero si el Akkusativ es un <strong>pronombre</strong>, ese pronombre se adelanta y va antes que el Dativ.</p>
          <div class="tip">Regla práctica: los pronombres se apresuran — van antes que los sustantivos, sea cual sea su caso.</div>`,
        examples: [
          { de: 'Ich schenke meiner Mutter einen Blumenstrauß.', es: 'Le regalo un ramo de flores a mi madre.', note: 'Dativ (sustantivo) antes que Akkusativ (sustantivo).' },
          { de: 'Ich schenke ihr einen Blumenstrauß.', es: 'Le regalo un ramo de flores (a ella).', note: 'El Dativ „ihr" sigue yendo antes, aunque ahora sea pronombre.' },
          { de: 'Ich schenke ihn meiner Mutter.', es: 'Se lo regalo a mi madre.', note: 'El Akkusativ „ihn" es pronombre: se adelanta y va ANTES que el Dativ „meiner Mutter", aunque el Dativ suele ir primero.' },
          { de: 'Ich schenke ihn ihr.', es: 'Se lo regalo a ella.', note: 'Dos pronombres: Akkusativ antes que Dativ → „ihn ihr", no „ihr ihn".' }
        ]
      },
      {
        title: 'Verbos que SOLO piden Dativ',
        content: `<p>Un grupo de verbos frecuentes va con Dativ y nada más — sin Akkusativ de por medio: <strong>helfen, danken, gefallen, gehören, glauben, folgen, gratulieren...</strong></p>
          <div class="warn">Error típico: en español casi todos estos verbos llevan "a + persona" (ayudar A alguien, dar las gracias A alguien), lo que empuja al cerebro hispanohablante a tratarlos como si tuvieran objeto directo y ponerlos en Akkusativ. En alemán son 100% Dativ.</div>`,
        examples: [
          { de: 'Ich helfe <strong>meinem Bruder</strong>.', es: 'Ayudo a mi hermano.', note: '¡No „meinen Bruder"!' },
          { de: 'Das Kleid gefällt <strong>mir</strong>.', es: 'Me gusta el vestido.', note: 'Literalmente "el vestido le gusta A MÍ" — el sujeto gramatical es „das Kleid", no "yo".' },
          { de: 'Ich danke <strong>dir</strong>.', es: 'Te doy las gracias.' },
          { de: 'Das Buch gehört <strong>meiner Schwester</strong>.', es: 'El libro es de mi hermana.', note: 'gehören = pertenecer a alguien, siempre Dativ.' }
        ]
      },
      {
        title: 'Preposiciones que SIEMPRE llevan Dativ',
        content: `<p><strong>aus, bei, mit, nach, seit, von, zu</strong> (y außer, gegenüber) piden Dativ siempre, sin excepción.</p>
          <div class="tip">Truco mnemónico: <strong>A</strong>us <strong>B</strong>ei <strong>M</strong>it <strong>N</strong>ach <strong>S</strong>eit <strong>V</strong>on <strong>Z</strong>u → "ABMNSVZ".</div>`,
        examples: [
          { de: 'Ich komme <strong>aus Spanien</strong>.', es: 'Vengo de España.' },
          { de: 'Ich wohne bei <strong>meinen Eltern</strong>.', es: 'Vivo en casa de mis padres.', note: '„Eltern" ya termina en -n, así que no se añade otra.' },
          { de: 'Ich fahre mit <strong>dem Bus</strong>.', es: 'Voy en autobús.' },
          { de: 'Nach <strong>der Schule</strong> gehe ich nach Hause.', es: 'Después del colegio, me voy a casa.' },
          { de: 'Seit <strong>einem Jahr</strong> lerne ich Deutsch.', es: 'Desde hace un año aprendo alemán.' }
        ]
      }
    ],
    cheatsheet: window.SHARED.tables.articles + window.SHARED.tables.dativVerbList + window.SHARED.tables.dativPrepList + window.SHARED.tables.pronouns,
    exercises: [
      { id: 'dat-01', type: 'multiple-choice', prompt: 'Ich gebe ___ Mann das Buch.', options: ['dem', 'den', 'der', 'des'], answer: 'dem', explanation: 'A quién le das algo va en Dativ. Masculino en Dativ: der → dem.', tip: 'Artículos en Dativ: der→dem, die→der, das→dem, plural→den (+n).' },
      { id: 'dat-02', type: 'multiple-choice', prompt: 'Ich gebe ___ Frau die Blumen.', options: ['der', 'dem', 'die', 'den'], answer: 'der' },
      { id: 'dat-03', type: 'multiple-choice', prompt: 'Ich gebe ___ Kind einen Ball.', options: ['dem', 'den', 'der', 'des'], answer: 'dem' },
      { id: 'dat-04', type: 'multiple-choice', prompt: 'Ich gebe ___ Kindern Süßigkeiten.', options: ['den', 'die', 'der', 'dem'], answer: 'den' },
      { id: 'dat-05', type: 'multiple-choice', prompt: 'Ich helfe ___ Mutter.', options: ['der', 'die', 'den', 'dem'], answer: 'der', explanation: 'helfen pide Dativ; Mutter es femenino → der Mutter.' },
      { id: 'dat-06', type: 'multiple-choice', prompt: 'Ich helfe ___ Bruder.', options: ['meinem', 'meinen', 'mein', 'meines'], answer: 'meinem' },
      { id: 'dat-07', type: 'select-case', prompt: 'Das Kleid gefällt [[mir]] sehr gut.', answer: 'Dativ', explanation: 'gefallen siempre pide Dativ para la persona a quien le gusta algo.' },
      { id: 'dat-08', type: 'multiple-choice', prompt: 'Ich danke ___ sehr.', options: ['dir', 'dich', 'du', 'deiner'], answer: 'dir' },
      { id: 'dat-09', type: 'multiple-choice', prompt: 'Das Buch gehört ___ Schwester.', options: ['meiner', 'meine', 'meinen', 'mein'], answer: 'meiner' },
      { id: 'dat-10', type: 'multiple-choice', prompt: 'Ich komme aus ___ Schweiz.', options: ['der', 'die', 'den', 'dem'], answer: 'der', explanation: '„die Schweiz" es uno de los pocos países con artículo, y „aus" pide Dativ → der Schweiz.' },
      { id: 'dat-11', type: 'multiple-choice', prompt: 'Ich wohne bei ___ Eltern.', options: ['meinen', 'meine', 'mein', 'meiner'], answer: 'meinen', explanation: '„bei" + Dativ plural → meinen Eltern.' },
      { id: 'dat-12', type: 'multiple-choice', prompt: 'Ich fahre mit ___ Bus.', options: ['dem', 'den', 'der', 'des'], answer: 'dem' },
      { id: 'dat-13', type: 'multiple-choice', prompt: 'Nach ___ Schule gehe ich nach Hause.', options: ['der', 'die', 'den', 'dem'], answer: 'der' },
      { id: 'dat-14', type: 'multiple-choice', prompt: 'Seit ___ Jahr lerne ich Deutsch.', options: ['einem', 'ein', 'einen', 'eines'], answer: 'einem' },
      { id: 'dat-15', type: 'fill-blank', prompt: 'Ich schenke ___ (mein Vater) ein Buch.', answer: 'meinem Vater', explanation: 'Dativo tras „schenken": mein→meinem.' },
      { id: 'dat-16', type: 'select-case', prompt: 'Ich vertraue [[meinem besten Freund]].', answer: 'Dativ' },
      { id: 'dat-17', type: 'multiple-choice', prompt: 'Wir gratulieren ___ Chef zum Geburtstag.', options: ['dem', 'den', 'der', 'des'], answer: 'dem', explanation: 'gratulieren + Dativ.' },
      { id: 'dat-18', type: 'select-case', prompt: '[[Der Kuchen]] schmeckt mir nicht.', answer: 'Nominativ', explanation: 'Aquí „der Kuchen" es el SUJETO (lo que sabe mal), y „mir" es el Dativ (a quién le sabe mal). El sujeto gramatical no siempre es la persona.' },
      { id: 'dat-19', type: 'multiple-choice', prompt: 'Ich glaube ___ nicht.', options: ['ihm', 'ihn', 'er', 'ihnen'], answer: 'ihm', explanation: 'glauben + persona = Dativ. „Ich glaube ihm" (le creo a él).' },
      { id: 'dat-20', type: 'reorder', words: ['Ich', 'gebe', 'meiner', 'Schwester', 'das', 'Geschenk'], answer: 'Ich gebe meiner Schwester das Geschenk.', explanation: 'Orden típico: Dativ (a quién) antes que Akkusativ (qué), cuando ambos son sustantivos.' },
      { id: 'dat-21', type: 'reorder', words: ['Ich', 'schenke', 'es', 'meiner', 'Mutter'], answer: 'Ich schenke es meiner Mutter.', explanation: '„es" es un pronombre en Akkusativ: los pronombres se adelantan, van antes que el Dativ con sustantivo.' },
      { id: 'dat-22', type: 'translate', prompt: 'Traduce: Le ayudo a mi madre.', answer: 'Ich helfe meiner Mutter.', explanation: 'helfen + Dativ, nunca Akkusativ, aunque en español lleve "a".' },
      { id: 'dat-23', type: 'multiple-choice', prompt: 'Das gehört ___ nicht.', options: ['mir', 'mich', 'ich', 'meiner'], answer: 'mir' },
      { id: 'dat-24', type: 'select-case', prompt: 'Er antwortet [[dem Lehrer]] nicht.', answer: 'Dativ', explanation: 'antworten pide Dativ para la persona a la que respondes.' },
      { id: 'dat-25', type: 'multiple-choice', prompt: 'Kannst du ___ bitte helfen?', options: ['mir', 'mich', 'ich', 'meiner'], answer: 'mir', explanation: 'helfen + Dativ → mir (nunca „mich").', tip: 'Verbos que engañan (en español llevan "a"): helfen, danken, gefallen, gehören, antworten, glauben → SIEMPRE Dativ.' },
      { id: 'dat-26', type: 'multiple-choice', prompt: 'Das Fahrrad gehört ___ Nachbarn.', options: ['dem', 'den', 'der', 'des'], answer: 'dem', explanation: 'gehören + Dativ; „der Nachbar" en Dativ → dem Nachbarn.' },
      { id: 'dat-27', type: 'multiple-choice', prompt: 'Wie geht es ___?', options: ['dir', 'dich', 'du', 'deiner'], answer: 'dir', explanation: 'La expresión „es geht ___" siempre lleva Dativ: „Wie geht es dir?"' },
      { id: 'dat-28', type: 'multiple-choice', prompt: 'Ich fahre mit ___ Fahrrad zur Arbeit.', options: ['dem', 'den', 'der', 'des'], answer: 'dem', explanation: '„mit" + Dativ; „das Fahrrad" → dem.' },
      { id: 'dat-29', type: 'multiple-choice', prompt: 'Ich gehe zu ___ Freundin.', options: ['meiner', 'meine', 'meinen', 'meines'], answer: 'meiner', explanation: '„zu" + Dativ; „die Freundin" (femenino) → meiner Freundin.' },
      { id: 'dat-30', type: 'multiple-choice', prompt: 'Nach ___ Essen machen wir einen Spaziergang.', options: ['dem', 'den', 'der', 'des'], answer: 'dem', explanation: '„nach" + Dativ; „das Essen" → dem.' },
      { id: 'dat-31', type: 'multiple-choice', prompt: 'Der Film hat ___ sehr gut gefallen.', options: ['mir', 'mich', 'ich', 'meiner'], answer: 'mir', explanation: 'gefallen + Dativ: a quien le gusta va en Dativ.' },
      { id: 'dat-32', type: 'multiple-choice', prompt: 'Das Essen schmeckt ___ nicht.', options: ['ihm', 'ihn', 'er', 'seiner'], answer: 'ihm', explanation: 'schmecken + Dativ para la persona: „ihm" (a él).' },
      { id: 'dat-33', type: 'select-case', prompt: 'Ich gratuliere [[dir]] zum Geburtstag.', answer: 'Dativ', explanation: 'gratulieren + Dativ.' },
      { id: 'dat-34', type: 'select-case', prompt: '[[Der Kaffee]] schmeckt mir gut.', answer: 'Nominativ', explanation: 'El café es el SUJETO (lo que sabe bien) → Nominativ; „mir" es el Dativ. No confundas la cosa con la persona.' },
      { id: 'dat-35', type: 'multiple-choice', prompt: 'Ich glaube ___ kein Wort.', options: ['dir', 'dich', 'du', 'deiner'], answer: 'dir', explanation: 'glauben + persona = Dativ → dir.' },
      { id: 'dat-36', type: 'translate', prompt: 'Traduce: Le pertenece a mi hermana.', answer: 'Es gehört meiner Schwester.', acceptable: ['Das gehört meiner Schwester.'], explanation: 'gehören + Dativ; „die Schwester" → meiner Schwester.' },
      { id: 'dat-37', type: 'translate', prompt: 'Traduce: Voy en autobús.', answer: 'Ich fahre mit dem Bus.', explanation: '„mit" + Dativ; „der Bus" → dem Bus.' },
      { id: 'dat-38', type: 'reorder', words: ['Ich', 'helfe', 'meinem', 'Vater', 'im', 'Garten'], hint: 'Ayudo a mi padre en el jardín.', answer: 'Ich helfe meinem Vater im Garten.', explanation: 'helfen + Dativ → meinem Vater.' },
      { id: 'dat-39', type: 'multiple-choice', prompt: 'Bei ___ Wetter bleibe ich zu Hause.', options: ['diesem', 'diesen', 'dieser', 'dieses'], answer: 'diesem', explanation: '„bei" + Dativ; „das Wetter" → diesem Wetter.' },
      { id: 'dat-40', type: 'reorder', words: ['Ich', 'zeige', 'dir', 'die', 'Fotos'], hint: 'Te enseño las fotos.', answer: 'Ich zeige dir die Fotos.', explanation: 'Orden Dativ (dir, pronombre) antes que Akkusativ (die Fotos).' },
      { id: 'dat-41', type: 'match', prompt: 'Empareja el pronombre con su forma en Dativo:', pairs: [['ich', 'mir'], ['du', 'dir'], ['er', 'ihm'], ['wir', 'uns']], explanation: 'Pronombres personales en Dativo: ich→mir, du→dir, er→ihm, wir→uns.' },
      { id: 'dat-42', type: 'listen', say: 'Ich helfe dir.', prompt: 'Escucha con atención: ¿qué frase oyes?', options: ['Ich helfe dir.', 'Ich helfe dich.', 'Ich liebe dich.', 'Ich helfe ihm.'], answer: 'Ich helfe dir.', explanation: 'helfen + Dativ → „dir". La opción „Ich helfe dich" es gramaticalmente IMPOSIBLE — si la elegiste, tu oído aún espera Akkusativ.' },
      { id: 'dat-43', type: 'buckets', prompt: '¿Qué caso pide cada preposición?', buckets: ['Dativ', 'Akkusativ'], items: [['mit', 'Dativ'], ['für', 'Akkusativ'], ['aus', 'Dativ'], ['gegen', 'Akkusativ'], ['von', 'Dativ'], ['ohne', 'Akkusativ']], explanation: 'Dativ fijas: aus, bei, mit, nach, seit, von, zu. Akkusativ fijas: durch, für, gegen, ohne, um.' },
      { id: 'dat-44', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Ich', 'helfe', 'dich', 'gern.'], wrong: 2, fix: 'dir', explanation: 'helfen pide Dativ SIEMPRE → Ich helfe dir. El "a ti" español te empuja al Akkusativ, pero aquí no aplica.' },
      { id: 'dat-45', type: 'dictation', say: 'Ich danke dir.', prompt: 'Dictado: escribe exactamente lo que oyes.', answer: 'Ich danke dir.', explanation: 'danken + Dativ → dir.' }
      ,
      { id: 'dat-46', type: 'multiple-choice', prompt: 'Historia: Was schenkt Lisa ihrem Vater?', options: ['ein Buch', 'einen Schal', 'ein Computerspiel', 'eine Stoffmaus'], answer: 'ein Buch', explanation: '„Meinem Vater schenke ich ein Buch. Er liest so gern."' },
      { id: 'dat-47', type: 'multiple-choice', prompt: 'Historia: Wem schenkt Lisa die Stoffmaus?', options: ['ihrer Katze', 'ihrem Bruder', 'ihrer Mutter', 'dem Verkäufer'], answer: 'ihrer Katze', explanation: '„Und dir, Mimi? Dir schenke ich eine Maus aus Stoff!"' },
      { id: 'dat-48', type: 'fill-blank', prompt: 'Historia: Computerspiele gefallen ___ sehr. (a él)', answer: 'ihm', explanation: 'gefallen + Dativ: al hermano le gustan → ihm.' },
      { id: 'dat-49', type: 'multiple-choice', prompt: 'Historia: Was kauft Lisa ihrer Oma?', options: ['einen warmen Pullover', 'Blumen', 'einen Schal', 'ein Buch'], answer: 'einen warmen Pullover', explanation: '„Ich kaufe ihr einen warmen Pullover." — ihr = a ella (Dativ).' },
      { id: 'dat-50', type: 'fill-blank', prompt: 'Historia: Soll ich ___ die Geschenke einpacken? (a usted)', answer: 'Ihnen', explanation: 'El Dativ de cortesía: Sie → Ihnen. „¿Le envuelvo los regalos (a usted)?"' },
      { id: 'dat-51', type: 'multiple-choice', prompt: 'Historia: Was bekommt Lisa von ihrer Familie?', options: ['ein Konzertticket', 'einen Pullover', 'eine Maus aus Stoff', 'nichts'], answer: 'ein Konzertticket', explanation: '„Für mich? Ein Konzertticket!" — la que regala también recibe.' }
    ],
    story: {
      intro: 'Es diciembre y Lisa compra regalos para toda la familia. Cada persona que RECIBE algo va en Dativ — meinem Vater, meiner Mutter, ihm, dir…',
      lines: [
        { speaker: '', de: 'Es ist Dezember. Lisa kauft Geschenke für ihre Familie.', es: 'Es diciembre. Lisa compra regalos para su familia.' },
        { speaker: 'Lisa', de: 'Meinem Vater schenke ich ein Buch. Er liest so gern.', es: 'A mi padre le regalo un libro. Le encanta leer.' },
        { speaker: 'Lisa', de: 'Und meiner Mutter? Vielleicht einen Schal.', es: '¿Y a mi madre? Quizá una bufanda.' },
        { speaker: '', de: 'Im Kaufhaus ist viel los. Lisa schaut auf ihre Liste.', es: 'En los grandes almacenes hay mucho jaleo. Lisa mira su lista.' },
        { speaker: 'Lisa', de: 'Und was schenke ich meiner Oma? Ihr gefallen Blumen — aber Blumen sind kein Weihnachtsgeschenk.', es: '¿Y qué le regalo a mi abuela? Le gustan las flores — pero unas flores no son regalo de Navidad.' },
        { speaker: 'Lisa', de: 'Ich weiß! Ich kaufe ihr einen warmen Pullover.', es: '¡Ya lo sé! Le compro un jersey calentito.' },
        { speaker: 'Verkäufer', de: 'Kann ich Ihnen helfen?', es: '¿Puedo ayudarle?' },
        { speaker: 'Lisa', de: 'Ja, ich suche ein Geschenk für meinen Bruder.', es: 'Sí, busco un regalo para mi hermano.' },
        { speaker: 'Verkäufer', de: 'Wie alt ist er denn?', es: '¿Y cuántos años tiene?' },
        { speaker: 'Lisa', de: 'Sechzehn. Computerspiele gefallen ihm sehr.', es: 'Dieciséis. Le gustan mucho los videojuegos.' },
        { speaker: 'Verkäufer', de: 'Dann empfehle ich Ihnen dieses Spiel hier.', es: 'Entonces le recomiendo este juego de aquí.' },
        { speaker: 'Lisa', de: 'Perfekt! Das gehört ab morgen meinem Bruder.', es: '¡Perfecto! Desde mañana esto es de mi hermano.' },
        { speaker: 'Verkäufer', de: 'Soll ich Ihnen die Geschenke einpacken?', es: '¿Le envuelvo los regalos?' },
        { speaker: 'Lisa', de: 'Oh ja, bitte! Das hilft mir sehr.', es: '¡Uy, sí, por favor! Eso me ayuda mucho.' },
        { speaker: '', de: 'Zu Hause zeigt Lisa ihrer Katze Mimi die Geschenke.', es: 'En casa, Lisa le enseña los regalos a su gata Mimi.' },
        { speaker: 'Lisa', de: 'Und dir, Mimi? Dir schenke ich eine Maus aus Stoff!', es: '¿Y a ti, Mimi? ¡A ti te regalo un ratón de tela!' },
        { speaker: '', de: 'Der Katze gefällt die Maus — ein bisschen.', es: 'A la gata el ratón le gusta — un poco.' },
        { speaker: '', de: 'Am Weihnachtsabend gibt Lisa allen ihre Geschenke.', es: 'En Nochebuena, Lisa les da a todos sus regalos.' },
        { speaker: 'Vater', de: 'Ein Buch über Vulkane! Das wollte ich schon lange. Danke, Lisa!', es: '¡Un libro sobre volcanes! Hacía tiempo que lo quería. ¡Gracias, Lisa!' },
        { speaker: '', de: 'Der Mutter gefällt der Schal, und der Bruder spielt sofort das neue Spiel.', es: 'A la madre le encanta la bufanda, y el hermano se pone enseguida a jugar al juego nuevo.' },
        { speaker: 'Mutter', de: 'Und das hier ist für dich, Lisa. Von uns allen.', es: 'Y esto de aquí es para ti, Lisa. De parte de todos.' },
        { speaker: 'Lisa', de: 'Für mich? Ein Konzertticket! Ihr seid die Besten!', es: '¿Para mí? ¡Una entrada de concierto! ¡Sois los mejores!' },
        { speaker: '', de: 'Und Mimi? Mimi schläft — auf dem neuen Schal der Mutter.', es: '¿Y Mimi? Mimi duerme — encima de la bufanda nueva de la madre.' }
      ]
    }
  });
})();
