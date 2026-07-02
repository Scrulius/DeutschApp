(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Verbos con preposición fija más frecuentes</caption>' +
    '<tr><th>Verbo + preposición</th><th>Caso</th><th>Significado</th></tr>' +
    '<tr><td>warten auf</td><td>Akkusativ</td><td>esperar (algo/a alguien)</td></tr>' +
    '<tr><td>sich freuen auf</td><td>Akkusativ</td><td>alegrarse de algo futuro</td></tr>' +
    '<tr><td>sich freuen über</td><td>Akkusativ</td><td>alegrarse de algo ya ocurrido</td></tr>' +
    '<tr><td>denken an</td><td>Akkusativ</td><td>pensar en</td></tr>' +
    '<tr><td>sich erinnern an</td><td>Akkusativ</td><td>acordarse de</td></tr>' +
    '<tr><td>sich interessieren für</td><td>Akkusativ</td><td>interesarse por</td></tr>' +
    '<tr><td>sich kümmern um</td><td>Akkusativ</td><td>ocuparse de</td></tr>' +
    '<tr><td>sich verlieben in</td><td>Akkusativ</td><td>enamorarse de</td></tr>' +
    '<tr><td>bitten um</td><td>Akkusativ</td><td>pedir</td></tr>' +
    '<tr><td>sich bedanken für</td><td>Akkusativ</td><td>agradecer por</td></tr>' +
    '<tr><td>diskutieren über / sprechen über</td><td>Akkusativ</td><td>discutir/hablar sobre</td></tr>' +
    '<tr><td>träumen von</td><td>Dativ</td><td>soñar con</td></tr>' +
    '<tr><td>Angst haben vor</td><td>Dativ</td><td>tener miedo de</td></tr>' +
    '<tr><td>abhängen von</td><td>Dativ</td><td>depender de</td></tr>' +
    '<tr><td>teilnehmen an</td><td>Dativ</td><td>participar en</td></tr>' +
    '<tr><td>sich beschäftigen mit</td><td>Dativ</td><td>ocuparse / estar liado con</td></tr>' +
    '<tr><td>gratulieren zu</td><td>Dativ</td><td>felicitar por</td></tr>' +
    '<tr><td>helfen bei</td><td>Dativ</td><td>ayudar con/en</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'verbpraep',
    category: 'nivel3',
    icon: '🔗',
    title: 'Verbos con preposición fija',
    desc: 'warten AUF, sich freuen ÜBER, denken AN... combinaciones que se memorizan como una unidad, con su caso fijo.',
    lessons: [
      {
        title: '¿Por qué hay que memorizarlos en pareja?',
        content: `<p>Muchos verbos alemanes van pegados a una preposición fija cuyo significado no siempre se traduce literalmente, y esa preposición exige un caso fijo que no siempre es "el lógico". Hay que aprender <strong>verbo + preposición + caso</strong> como un bloque único — igual que en español fijamos "pensar EN" o "soñar CON", pero en alemán se añade además la capa del caso.</p>`,
        examples: [
          { de: 'Ich warte auf <strong>den Bus</strong>.', es: 'Espero el autobús.', note: 'En español "esperar" no necesita preposición; en alemán „auf" es obligatorio aunque no lo "traduzcas".' },
          { de: 'Ich denke oft an <strong>dich</strong>.', es: 'Pienso a menudo en ti.', note: 'Aquí sí coincide con el "en" español — pero el caso (Akkusativ) hay que aprenderlo igual.' },
          { de: 'Er freut sich auf <strong>die Ferien</strong>.', es: 'Tiene ganas de las vacaciones.', note: 'sich freuen AUF = algo que todavía no ha pasado.' },
          { de: 'Er freut sich über <strong>das Geschenk</strong>.', es: 'Se alegra del regalo.', note: 'sich freuen ÜBER = algo que ya ha pasado.' }
        ]
      },
      {
        title: 'La preposición cambia el significado del verbo',
        content: `<p>El ejemplo más claro es <strong>sich freuen auf</strong> (ilusión por algo futuro) frente a <strong>sich freuen über</strong> (alegría por algo que ya ha ocurrido). Otro par útil: <strong>denken an</strong> (pensar en alguien, recordar) frente a <strong>denken über</strong> (opinar sobre algo).</p>`,
        examples: [
          { de: 'Ich freue mich auf das Wochenende.', es: 'Tengo ganas del fin de semana.' },
          { de: 'Ich freue mich über deine Nachricht.', es: 'Me alegro de tu mensaje.' },
          { de: 'Was denkst du über den Film?', es: '¿Qué opinas de la película?', note: 'Pedir una opinión → über.' },
          { de: 'Ich denke oft an meine Oma.', es: 'Pienso a menudo en mi abuela.', note: 'Recordar a alguien → an.' }
        ]
      },
      {
        title: 'Más combinaciones frecuentes',
        content: `<p>Cuantas más veces las oigas/uses, antes se automatizan. La chuleta de este módulo reúne las combinaciones más frecuentes con su caso — apréndelas por parejas, no por separado.</p>`,
        examples: [
          { de: 'Ich interessiere mich für Musik.', es: 'Me interesa la música.' },
          { de: 'Wir kümmern uns um die Kinder.', es: 'Nos ocupamos de los niños.' },
          { de: 'Ich habe Angst vor Spinnen.', es: 'Tengo miedo a las arañas.' },
          { de: 'Das hängt von deiner Entscheidung ab.', es: 'Eso depende de tu decisión.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'vpr-01', type: 'multiple-choice', prompt: 'Ich warte ___ den Bus.', options: ['auf', 'für', 'an', 'um'], answer: 'auf' },
      { id: 'vpr-02', type: 'multiple-choice', prompt: 'Ich denke oft ___ dich.', options: ['an', 'auf', 'für', 'von'], answer: 'an' },
      { id: 'vpr-03', type: 'multiple-choice', prompt: 'Er freut sich ___ die Ferien.', options: ['auf', 'über', 'für', 'an'], answer: 'auf', explanation: 'Algo que aún no ha pasado (futuro) → sich freuen AUF.' },
      { id: 'vpr-04', type: 'multiple-choice', prompt: 'Er freut sich ___ das Geschenk.', options: ['über', 'auf', 'für', 'an'], answer: 'über', explanation: 'Algo que ya ha pasado (ya lo recibió) → sich freuen ÜBER.' },
      { id: 'vpr-05', type: 'multiple-choice', prompt: 'Ich interessiere mich ___ Musik.', options: ['für', 'an', 'auf', 'von'], answer: 'für' },
      { id: 'vpr-06', type: 'multiple-choice', prompt: 'Wir kümmern uns ___ die Kinder.', options: ['um', 'für', 'an', 'auf'], answer: 'um' },
      { id: 'vpr-07', type: 'multiple-choice', prompt: 'Ich habe Angst ___ Spinnen.', options: ['vor', 'für', 'an', 'auf'], answer: 'vor' },
      { id: 'vpr-08', type: 'multiple-choice', prompt: 'Das hängt ___ deiner Entscheidung ab.', options: ['von', 'für', 'an', 'auf'], answer: 'von' },
      { id: 'vpr-09', type: 'fill-blank', prompt: 'Ich warte auf ___ (mein) Freund.', answer: 'meinen', explanation: 'warten auf + Akkusativ masculino → meinen.' },
      { id: 'vpr-10', type: 'multiple-choice', prompt: 'Was denkst du ___ den Film?', options: ['über', 'an', 'auf', 'von'], answer: 'über', explanation: 'Pedir opinión → denken ÜBER (distinto de „denken an" = pensar en, recordar).' },
      { id: 'vpr-11', type: 'multiple-choice', prompt: 'Wir sprechen oft ___ Politik.', options: ['über', 'an', 'für', 'von'], answer: 'über' },
      { id: 'vpr-12', type: 'multiple-choice', prompt: 'Ich erinnere mich gut ___ meine Kindheit.', options: ['an', 'für', 'auf', 'von'], answer: 'an' },
      { id: 'vpr-13', type: 'multiple-choice', prompt: 'Ich träume oft ___ meinem Urlaub.', options: ['von', 'für', 'an', 'auf'], answer: 'von' },
      { id: 'vpr-14', type: 'multiple-choice', prompt: 'Wir nehmen ___ dem Kurs teil.', options: ['an', 'für', 'auf', 'von'], answer: 'an', explanation: 'teilnehmen AN + Dativ.' },
      { id: 'vpr-15', type: 'multiple-choice', prompt: 'Ich beschäftige mich ___ dem Thema.', options: ['mit', 'für', 'an', 'um'], answer: 'mit' },
      { id: 'vpr-16', type: 'multiple-choice', prompt: 'Wir gratulieren dir ___ deinem Erfolg.', options: ['zu', 'für', 'an', 'auf'], answer: 'zu' },
      { id: 'vpr-17', type: 'multiple-choice', prompt: 'Er hilft mir ___ den Hausaufgaben.', options: ['bei', 'für', 'an', 'mit'], answer: 'bei', explanation: 'helfen bei = ayudar CON algo.' },
      { id: 'vpr-18', type: 'multiple-choice', prompt: 'Ich bedanke mich ___ das Geschenk.', options: ['für', 'an', 'auf', 'von'], answer: 'für' },
      { id: 'vpr-19', type: 'translate', prompt: 'Traduce: Me alegro de tu mensaje.', answer: 'Ich freue mich über deine Nachricht.', explanation: 'Mensaje ya recibido → sich freuen ÜBER.' },
      { id: 'vpr-20', type: 'translate', prompt: 'Traduce: Tengo ganas del fin de semana.', answer: 'Ich freue mich auf das Wochenende.', explanation: 'Algo futuro → sich freuen AUF.' },
      { id: 'vpr-21', type: 'multiple-choice', prompt: 'Ich denke oft ___ meine Zukunft.', options: ['an', 'auf', 'über', 'von'], answer: 'an', explanation: 'denken AN + Akkusativ.' },
      { id: 'vpr-22', type: 'multiple-choice', prompt: 'Sie hofft ___ besseres Wetter.', options: ['auf', 'an', 'über', 'für'], answer: 'auf', explanation: 'hoffen AUF + Akkusativ.' },
      { id: 'vpr-23', type: 'multiple-choice', prompt: 'Wir müssen ___ das Problem sprechen.', options: ['über', 'von', 'an', 'auf'], answer: 'über', explanation: 'sprechen ÜBER + Akkusativ (hablar sobre un tema).' },
      { id: 'vpr-24', type: 'multiple-choice', prompt: 'Er leidet ___ einer Allergie.', options: ['an', 'über', 'von', 'für'], answer: 'an', explanation: 'leiden AN + Dativ para una enfermedad concreta. (Con cargas o situaciones se usa „leiden unter": unter Stress.)' },
      { id: 'vpr-25', type: 'multiple-choice', prompt: 'Ich bin sehr stolz ___ dich.', options: ['auf', 'über', 'für', 'an'], answer: 'auf', explanation: 'stolz sein AUF + Akkusativ.' },
      { id: 'vpr-26', type: 'multiple-choice', prompt: 'Das erinnert mich ___ meine Kindheit.', options: ['an', 'auf', 'über', 'von'], answer: 'an', explanation: 'erinnern AN + Akkusativ.' },
      { id: 'vpr-27', type: 'multiple-choice', prompt: 'Ich ärgere mich ___ den Lärm.', options: ['über', 'auf', 'an', 'für'], answer: 'über', explanation: 'sich ärgern ÜBER + Akkusativ (algo que ya molesta).' },
      { id: 'vpr-28', type: 'translate', prompt: 'Traduce: Pienso en ti.', answer: 'Ich denke an dich.', explanation: 'denken AN + Akkusativ → an dich.' },
      { id: 'vpr-29', type: 'translate', prompt: 'Traduce: Tengo miedo del examen.', answer: 'Ich habe Angst vor der Prüfung.', explanation: 'Angst haben VOR + Dativ → vor der Prüfung.' },
      { id: 'vpr-30', type: 'multiple-choice', prompt: 'Alles hängt ___ dir ab.', options: ['von', 'an', 'auf', 'für'], answer: 'von', explanation: 'abhängen VON + Dativ.' }
      ,
      { id: 'vpr-31', type: 'multiple-choice', prompt: 'Historia: Auf wessen Nachricht wartet Mia?', options: ['auf eine Nachricht von Daniel', 'auf eine Nachricht von Sofia', 'auf einen Anruf ihrer Mutter', 'auf eine E-Mail der Firma'], answer: 'auf eine Nachricht von Daniel', explanation: '„Wartest du auf eine Nachricht?" — „Ja. Von Daniel."' },
      { id: 'vpr-32', type: 'multiple-choice', prompt: 'Historia: Wovon träumt Mia manchmal?', options: ['von Daniel', 'von Playlists', 'von einer Wette', 'vom Essen'], answer: 'von Daniel', explanation: '„Ich träume sogar manchmal von ihm." — träumen VON + Dativ.' },
      { id: 'vpr-33', type: 'fill-blank', prompt: 'Historia: Wartest du ___ eine Nachricht? (preposición)', answer: 'auf', explanation: 'warten AUF + Akkusativ.' }
    ],
    story: {
      intro: 'Mia mira el móvil cada dos minutos y su amiga Sofia la cala al instante. La historia encadena verbos con preposición: warten auf, denken an, sich interessieren für, sich freuen über/auf, träumen von, sich erinnern an…',
      lines: [
        { speaker: '', de: 'Mia schaut alle zwei Minuten auf ihr Handy. Ihre Freundin Sofia merkt das.', es: 'Mia mira el móvil cada dos minutos. Su amiga Sofia se da cuenta.' },
        { speaker: 'Sofia', de: 'Wartest du auf eine Nachricht?', es: '¿Estás esperando un mensaje?' },
        { speaker: 'Mia', de: 'Nein... na ja... ja. Von Daniel.', es: 'No… bueno… sí. De Daniel.' },
        { speaker: 'Sofia', de: 'Ich wusste es! Du denkst die ganze Zeit an ihn!', es: '¡Lo sabía! ¡Estás todo el día pensando en él!' },
        { speaker: 'Mia', de: 'Quatsch! Ich interessiere mich nur für... seine Playlists.', es: '¡Tonterías! Solo me intereso por… sus playlists.' },
        { speaker: 'Sofia', de: 'Klar. Und deshalb freust du dich so über jede Nachricht von ihm.', es: 'Claro. Y por eso te alegras tanto con cada mensaje suyo.' },
        { speaker: 'Mia', de: 'Okay, okay. Ich träume sogar manchmal von ihm. Bin ich verrückt?', es: 'Vale, vale. Hasta sueño con él a veces. ¿Estoy loca?' },
        { speaker: 'Sofia', de: 'Nein, verliebt! Erinnerst du dich an unsere Wette?', es: '¡No, enamorada! ¿Te acuerdas de nuestra apuesta?' },
        { speaker: 'Mia', de: 'Oh nein. Ich lade dich zum Essen ein...', es: 'Oh no. Te invito a cenar…' },
        { speaker: '', de: 'Das Handy klingelt. Eine Nachricht von Daniel: „Freust du dich auf morgen?"', es: 'Suena el móvil. Un mensaje de Daniel: "¿Tienes ganas de lo de mañana?"' },
        { speaker: 'Sofia', de: 'Na? Worauf wartest du noch? Antworte!', es: '¿Y bien? ¿A qué esperas? ¡Contesta!' }
      ]
    }
  });
})();
