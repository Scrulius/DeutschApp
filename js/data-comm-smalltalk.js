(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Abridores de conversación</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>Schönes Wetter heute, oder?</td><td>Buen tiempo hoy, ¿eh?</td></tr>' +
    '<tr><td>Wie war dein Wochenende?</td><td>¿Qué tal tu fin de semana?</td></tr>' +
    '<tr><td>Was machst du am Wochenende?</td><td>¿Qué haces este finde?</td></tr>' +
    '<tr><td>Was machst du gern in deiner Freizeit?</td><td>¿Qué te gusta hacer en tu tiempo libre?</td></tr>' +
    '<tr><td>Hast du schöne Pläne?</td><td>¿Tienes planes chulos?</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Reaccionar (interjecciones que suenan nativas)</caption>' +
    '<tr><th>Alemán</th><th>Sirve para</th></tr>' +
    '<tr><td>Wirklich? / Echt?</td><td>¿En serio? (sorpresa)</td></tr>' +
    '<tr><td>Ach so!</td><td>¡Ah, ya! (ahora lo entiendo)</td></tr>' +
    '<tr><td>Toll! / Super!</td><td>¡Genial!</td></tr>' +
    '<tr><td>Schade!</td><td>¡Qué pena!</td></tr>' +
    '<tr><td>Stimmt.</td><td>Cierto / tienes razón</td></tr>' +
    '</table></div>' +
    '<div class="tip">Truco para sonar fluido: <strong>gern</strong> (= "con gusto") convierte cualquier verbo en "me gusta + verbo": „Ich koche <strong>gern</strong>" = me gusta cocinar. „Ich spiele gern Fußball" = me gusta jugar al fútbol.</div>';

  registerModule({
    id: 'smalltalk',
    category: 'nivel2',
    track: 'Comunicación',
    icon: '💬',
    title: 'Small talk cotidiano',
    desc: 'El tiempo, el finde, los hobbies y las reacciones que mantienen viva una charla informal.',
    lessons: [
      {
        title: 'Los tres temas seguros: tiempo, finde, hobbies',
        content: `<p>El small talk alemán gira sobre temas neutros: el <strong>tiempo</strong>, el <strong>fin de semana</strong> y los <strong>hobbies</strong>. Con tres o cuatro frases hechas ya puedes abrir y sostener una charla.</p>
          <div class="tip">Culturalmente: el tiempo, los viajes y el ocio son temas seguros. Evita preguntar por el sueldo, la religión o la política con desconocidos — se considera indiscreto.</div>`,
        examples: [
          { de: '<strong>Schönes Wetter heute</strong>, oder?', es: 'Buen tiempo hoy, ¿eh?', note: '„oder?" al final = "¿verdad?", invita a responder.' },
          { de: 'Es ist ganz schön <strong>kalt</strong> heute.', es: 'Hace bastante frío hoy.' },
          { de: '<strong>Wie war dein Wochenende?</strong>', es: '¿Qué tal tu fin de semana?' },
          { de: 'Was machst du <strong>gern</strong> in deiner Freizeit?', es: '¿Qué te gusta hacer en tu tiempo libre?' }
        ]
      },
      {
        title: '„gern": tu palabra mágica para los gustos',
        content: `<p>Para decir que algo te gusta hacer, no traduzcas "me gusta" literalmente: usa el verbo normal + <strong>gern</strong>. Es la forma más natural y frecuente.</p>`,
        examples: [
          { de: 'Ich <strong>koche gern</strong>.', es: 'Me gusta cocinar.' },
          { de: 'Ich <strong>spiele gern</strong> Fußball.', es: 'Me gusta jugar al fútbol.' },
          { de: 'Ich <strong>höre gern</strong> Musik.', es: 'Me gusta escuchar música.' },
          { de: 'Liest du gern? — Ja, sehr gern!', es: '¿Te gusta leer? — ¡Sí, mucho!' }
        ]
      },
      {
        title: 'Reaccionar para que la charla fluya',
        content: `<p>Una conversación viva necesita reacciones. Interjecciones cortas como <strong>Wirklich? / Echt?</strong> (¿en serio?), <strong>Ach so!</strong> (¡ah, ya!), <strong>Toll!</strong> (¡genial!) o <strong>Schade!</strong> (¡qué pena!) muestran que estás escuchando.</p>`,
        examples: [
          { de: 'Ich fahre morgen nach Rom. — <strong>Wirklich? Toll!</strong>', es: 'Mañana me voy a Roma. — ¿En serio? ¡Genial!' },
          { de: 'Das Konzert ist leider abgesagt. — <strong>Oh, schade!</strong>', es: 'El concierto se ha cancelado. — Oh, ¡qué pena!' },
          { de: 'Ich arbeite jetzt in Wien. — <strong>Ach so!</strong>', es: 'Ahora trabajo en Viena. — ¡Ah, ya!' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'smt-01', type: 'translate', prompt: 'Traduce: ¡Qué buen tiempo hace hoy!', answer: 'Schönes Wetter heute!', acceptable: ['Das Wetter ist heute schön!', 'Schönes Wetter heute.'], explanation: 'Frase hecha de small talk sobre el tiempo.' },
      { id: 'smt-02', type: 'fill-blank', prompt: 'Es ___ heute. (llover)', answer: 'regnet', explanation: 'regnen → es regnet (llueve).' },
      { id: 'smt-03', type: 'multiple-choice', prompt: '„Wie war dein Wochenende?" pregunta por…', options: ['tu fin de semana', 'tu trabajo', 'tu edad', 'la hora'], answer: 'tu fin de semana', explanation: 'das Wochenende = el fin de semana.' },
      { id: 'smt-04', type: 'translate', prompt: 'Traduce: ¿Qué te gusta hacer en tu tiempo libre?', answer: 'Was machst du gern in deiner Freizeit?', acceptable: ['Was machst du gern?'], explanation: '„gern" + verbo = lo que te gusta hacer.' },
      { id: 'smt-05', type: 'fill-blank', prompt: 'Ich spiele ___ Fußball. (me gusta / con gusto)', answer: 'gern', explanation: 'verbo + „gern" = me gusta + verbo.' },
      { id: 'smt-06', type: 'multiple-choice', prompt: 'Reacción de sorpresa:', options: ['Wirklich?', 'Bitte schön', 'Guten Tag', 'Bis später'], answer: 'Wirklich?', explanation: '„Wirklich?" / „Echt?" = ¿en serio?' },
      { id: 'smt-07', type: 'multiple-choice', prompt: '„Schade!" expresa…', options: ['pena / lástima', 'alegría', 'sorpresa', 'acuerdo'], answer: 'pena / lástima', explanation: '„Schade!" = ¡qué pena!' },
      { id: 'smt-08', type: 'translate', prompt: 'Traduce: ¿Qué haces este fin de semana?', answer: 'Was machst du am Wochenende?', explanation: '„am Wochenende" = el/este fin de semana.' },
      { id: 'smt-09', type: 'fill-blank', prompt: 'Ich höre ___ Musik. (me gusta)', answer: 'gern', explanation: '„Ich höre gern Musik" = me gusta escuchar música.' },
      { id: 'smt-10', type: 'multiple-choice', prompt: 'Tema de small talk seguro con un desconocido:', options: ['el tiempo', 'el sueldo', 'la religión', 'la política'], answer: 'el tiempo', explanation: 'Tiempo, viajes y ocio = seguros; sueldo/religión/política = indiscretos.' },
      { id: 'smt-11', type: 'translate', prompt: 'Traduce: Hoy hace frío.', answer: 'Es ist heute kalt.', acceptable: ['Heute ist es kalt.', 'Es ist kalt heute.'], explanation: '„Es ist kalt" = hace frío.' },
      { id: 'smt-12', type: 'reorder', words: ['Was', 'machst', 'du', 'gern'], punctuation: '?', hint: '¿Qué te gusta hacer?', answer: 'Was machst du gern?', explanation: '„gern" cierra la pregunta sobre gustos.' },
      { id: 'smt-13', type: 'multiple-choice', prompt: '„Ach so!" significa aprox.:', options: ['¡Ah, ya (lo entiendo)!', '¡Qué pena!', '¡Hasta luego!', '¡De nada!'], answer: '¡Ah, ya (lo entiendo)!' },
      { id: 'smt-14', type: 'fill-blank', prompt: 'In meiner ___ lese ich viel. (tiempo libre)', answer: 'Freizeit', explanation: 'die Freizeit = el tiempo libre.' },
      { id: 'smt-15', type: 'translate', prompt: 'Traduce: Me gusta cocinar.', answer: 'Ich koche gern.', acceptable: ['Ich mag kochen.'], explanation: 'verbo (koche) + gern (o gerne, ambas valen). „Ich mag kochen" también es correcto.' },
      { id: 'smt-16', type: 'match', prompt: 'Empareja cada reacción con su significado:', pairs: [['Wirklich?', '¿En serio?'], ['Schade!', '¡Qué pena!'], ['Toll!', '¡Genial!'], ['Ach so!', '¡Ah, ya!']], explanation: 'Interjecciones que mantienen viva la charla.' },
      { id: 'smt-17', type: 'listen', say: 'Wie war dein Wochenende?', prompt: 'Escucha: ¿qué te están preguntando?', options: ['Qué tal tu fin de semana', 'Qué haces este finde', 'Qué tiempo hace hoy', 'Qué te gusta hacer'], answer: 'Qué tal tu fin de semana', explanation: '„Wie war…?" (pasado, con „war") pregunta cómo FUE; „Was machst du…?" preguntaría por planes.' },
      { id: 'smt-18', type: 'dictation', say: 'Schönes Wetter heute', prompt: 'Dictado: escribe lo que oyes.', answer: 'Schönes Wetter heute', explanation: 'El abridor de small talk más clásico que existe.' }
      ,
      { id: 'smt-19', type: 'multiple-choice', prompt: 'Historia: Wo war Herr Meyer am Wochenende?', options: ['am See', 'zu Hause', 'in den Bergen', 'bei der Arbeit'], answer: 'am See', explanation: '„Sehr schön, danke. Wir waren am See."' },
      { id: 'smt-20', type: 'multiple-choice', prompt: 'Historia: Was macht Frau López gern in ihrer Freizeit?', options: ['wandern', 'kochen', 'schwimmen', 'lesen'], answer: 'wandern', explanation: '„Ich wandere gern. Und Sie?"' },
      { id: 'smt-21', type: 'multiple-choice', prompt: 'Historia: Was hat Herr Meyer am Samstag gekocht?', options: ['Paella', 'Pizza', 'Schnitzel', 'Fisch'], answer: 'Paella', explanation: '„Am Samstag habe ich Paella gemacht!" — y a Frau López eso hay que hablarlo.' },
      { id: 'smt-22', type: 'find-error', prompt: '¿Dónde está el error? (quiero decir: "tengo frío")', words: ['Ich', 'bin', 'kalt.'], wrong: 1, fix: 'Mir ist', explanation: '„Ich bin kalt" = soy frío (de carácter). La sensación se dice con Dativ: Mir ist kalt.' },
      { id: 'smt-23', type: 'translate', prompt: 'Traduce: Tengo calor.', answer: 'Mir ist warm.', acceptable: ['Mir ist heiß.'], explanation: 'Igual que el frío: sensación → Mir ist warm/heiß (nunca „Ich bin heiß", que significa otra cosa…).' },
      { id: 'smt-24', type: 'multiple-choice', prompt: '„Wie läuft’s?" significa aproximadamente:', options: ['¿Cómo va todo?', '¿A dónde corres?', '¿Qué haces?', '¿Cómo te llamas?'], answer: '¿Cómo va todo?', explanation: 'laufen = correr/marchar → „Wie läuft’s?" = ¿qué tal va la cosa? (coloquial).' },
      { id: 'smt-25', type: 'fill-blank', prompt: 'Es ___ heute. (nevar)', answer: 'schneit', explanation: 'schneien → es schneit. Con „es": es regnet, es schneit, es ist kalt.' },
      { id: 'smt-26', type: 'multiple-choice', prompt: 'Historia: Wie war Herrn Meyers Paella wirklich?', options: ['Der Reis war etwas zu weich', 'Sie war perfekt', 'Sie war zu salzig', 'Er hat sie nie gemacht'], answer: 'Der Reis war etwas zu weich', explanation: '„Ehrlich gesagt war der Reis etwas zu weich." — ehrlich gesagt = sinceramente.' },
      { id: 'smt-27', type: 'multiple-choice', prompt: 'Historia: Was machen die beiden am Sonntag?', options: ['Sie kochen zusammen Paella', 'Sie fahren an den See', 'Sie gehen wandern', 'Sie essen im Restaurant'], answer: 'Sie kochen zusammen Paella', explanation: '„Ich zeige Ihnen am Sonntag, wie meine Großmutter sie macht." — del small talk a la amistad.' },
      { id: 'smt-28', type: 'multiple-choice', prompt: 'Historia: Was bringt Herr Meyer am Sonntag mit?', options: ['den Nachtisch', 'den Reis', 'den Safran', 'nichts'], answer: 'den Nachtisch', explanation: '„Ich bringe den Nachtisch mit." — mitbringen, separable.' }
    ],
    story: {
      intro: 'Lunes por la mañana, dos vecinos coinciden en el ascensor: el pequeño ritual del small talk alemán en su hábitat natural — tiempo, finde y hobbies.',
      lines: [
        { speaker: '', de: 'Montagmorgen. Frau López und Herr Meyer treffen sich im Aufzug.', es: 'Lunes por la mañana. La Sra. López y el Sr. Meyer coinciden en el ascensor.' },
        { speaker: 'Herr Meyer', de: 'Guten Morgen! Schönes Wetter heute, oder?', es: '¡Buenos días! Buen tiempo hoy, ¿verdad?' },
        { speaker: 'Frau López', de: 'Ja, endlich Sonne! Wie war Ihr Wochenende?', es: '¡Sí, por fin sol! ¿Qué tal su fin de semana?' },
        { speaker: 'Herr Meyer', de: 'Sehr schön, danke. Wir waren am See. Und Ihres?', es: 'Muy bien, gracias. Estuvimos en el lago. ¿Y el suyo?' },
        { speaker: 'Frau López', de: 'Es geht. Ich habe die ganze Zeit gearbeitet.', es: 'Regular. Estuve todo el tiempo trabajando.' },
        { speaker: 'Herr Meyer', de: 'Oh, schade! Was machen Sie gern, wenn Sie frei haben?', es: '¡Vaya, qué pena! ¿Qué le gusta hacer cuando libra?' },
        { speaker: 'Frau López', de: 'Ich wandere gern. Und Sie?', es: 'Me gusta el senderismo. ¿Y a usted?' },
        { speaker: 'Herr Meyer', de: 'Ich koche gern. Am Samstag habe ich Paella gemacht!', es: 'Me gusta cocinar. ¡El sábado hice paella!' },
        { speaker: 'Frau López', de: 'Paella? Wirklich? Da müssen wir mal reden...', es: '¿Paella? ¿En serio? Eso lo tenemos que hablar…' },
        { speaker: '', de: 'Der Aufzug hält. Beide lachen.', es: 'El ascensor se detiene. Los dos ríen.' },
        { speaker: 'Herr Meyer', de: 'Bis später, Frau López! Schönen Tag noch!', es: '¡Hasta luego, Sra. López! ¡Que tenga buen día!' },
        { speaker: '', de: 'Am Freitag treffen sie sich wieder — diesmal am Briefkasten.', es: 'El viernes se vuelven a encontrar — esta vez en los buzones.' },
        { speaker: 'Frau López', de: 'Na, Herr Meyer! Was für ein Wetter, dieser Regen!', es: '¡Vaya, Sr. Meyer! ¡Menudo tiempo, qué manera de llover!' },
        { speaker: 'Herr Meyer', de: 'Furchtbar! Und am Wochenende soll es noch schlimmer werden.', es: '¡Horrible! Y el fin de semana dicen que irá a peor.' },
        { speaker: 'Frau López', de: 'Perfektes Wetter zum Kochen, oder? Wie war noch mal Ihre Paella?', es: 'Tiempo perfecto para cocinar, ¿no? ¿Cómo era eso de su paella?' },
        { speaker: 'Herr Meyer', de: 'Na ja... ehrlich gesagt war der Reis etwas zu weich.', es: 'Bueno… sinceramente, el arroz quedó algo pasado.' },
        { speaker: 'Frau López', de: 'Das dachte ich mir! Wissen Sie was? Ich zeige Ihnen am Sonntag, wie meine Großmutter sie macht.', es: '¡Me lo imaginaba! ¿Sabe qué? El domingo le enseño cómo la hace mi abuela.' },
        { speaker: 'Herr Meyer', de: 'Wirklich? Das wäre wunderbar! Ich bringe den Nachtisch mit.', es: '¿En serio? ¡Sería estupendo! Yo llevo el postre.' },
        { speaker: '', de: 'Am Sonntag riecht das ganze Haus nach Safran. Und zwei Nachbarn sind jetzt Freunde.', es: 'El domingo, todo el edificio huele a azafrán. Y dos vecinos ahora son amigos.' }
      ]
    }
  });
})();
