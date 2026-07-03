(function () {
  var vocab = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Vocabulario de la historia</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>der Kellner</td><td>el camarero</td></tr>' +
    '<tr><td>der Kuchen / der Apfelkuchen</td><td>la tarta / la tarta de manzana</td></tr>' +
    '<tr><td>das Stück</td><td>el trozo</td></tr>' +
    '<tr><td>die Zitrone</td><td>el limón</td></tr>' +
    '<tr><td>der Hunger</td><td>el hambre</td></tr>' +
    '<tr><td>lecker aussehen</td><td>tener buena pinta</td></tr>' +
    '<tr><td>zahlen</td><td>pagar</td></tr>' +
    '<tr><td>Typisch!</td><td>¡Típico!</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'story-cafe',
    category: 'historias',
    track: 'Historia',
    icon: '☕',
    title: 'Im Café · A1',
    desc: 'Lena y Tom van a un café. Tom dice que no tiene hambre… hasta que llega la tarta. Lectura fácil con presente y frases de pedir.',
    story: {
      intro: 'Lena y Tom quedan en un café después del trabajo. Lee el diálogo (toca cada línea para ver la traducción) y luego responde a las preguntas.',
      lines: [
        { speaker: '', de: 'Lena und Tom sind im Café. Der Kellner kommt an den Tisch.', es: 'Lena y Tom están en el café. El camarero viene a la mesa.' },
        { speaker: 'Kellner', de: 'Guten Tag! Was möchten Sie trinken?', es: '¡Buenas! ¿Qué quieren beber?' },
        { speaker: 'Lena', de: 'Ich hätte gern einen Kaffee, bitte.', es: 'Quisiera un café, por favor.' },
        { speaker: 'Tom', de: 'Und ich nehme einen Tee mit Zitrone.', es: 'Y yo tomo un té con limón.' },
        { speaker: 'Kellner', de: 'Möchten Sie auch etwas essen?', es: '¿Quieren también algo de comer?' },
        { speaker: 'Lena', de: 'Ja, ein Stück Apfelkuchen, bitte.', es: 'Sí, un trozo de tarta de manzana, por favor.' },
        { speaker: 'Tom', de: 'Für mich nichts, danke. Ich habe keinen Hunger.', es: 'Para mí nada, gracias. No tengo hambre.' },
        { speaker: '', de: 'Der Kellner bringt die Getränke und den Kuchen.', es: 'El camarero trae las bebidas y la tarta.' },
        { speaker: 'Tom', de: 'Der Kuchen sieht aber lecker aus!', es: '¡Pues la tarta tiene buena pinta!' },
        { speaker: 'Lena', de: 'Möchtest du ein Stück probieren?', es: '¿Quieres probar un trozo?' },
        { speaker: 'Tom', de: 'Na gut… vielleicht ein kleines Stück.', es: 'Bueno, vale… quizá un trocito.' },
        { speaker: '', de: 'Da kommt Lenas Freundin Marie ins Café.', es: 'En eso entra en el café Marie, la amiga de Lena.' },
        { speaker: 'Lena', de: 'Marie! Setz dich zu uns! Möchtest du etwas trinken?', es: '¡Marie! ¡Siéntate con nosotros! ¿Quieres beber algo?' },
        { speaker: 'Marie', de: 'Gern! Ich nehme eine heiße Schokolade. Draußen ist es so kalt!', es: '¡Claro! Yo tomo un chocolate caliente. ¡Fuera hace mucho frío!' },
        { speaker: 'Tom', de: 'Und noch ein Stück Apfelkuchen, bitte!', es: '¡Y otro trozo de tarta de manzana, por favor!' },
        { speaker: 'Lena', de: 'Tom! Du hattest doch keinen Hunger!', es: '¡Tom! ¿No decías que no tenías hambre?' },
        { speaker: 'Tom', de: 'Das war vor dreißig Minuten. Jetzt habe ich Hunger.', es: 'Eso era hace treinta minutos. Ahora sí tengo hambre.' },
        { speaker: '', de: 'Eine Stunde später ruft Lena den Kellner.', es: 'Una hora después, Lena llama al camarero.' },
        { speaker: 'Lena', de: 'Typisch Tom! — Zahlen, bitte!', es: '¡Típico de Tom! — ¡La cuenta, por favor!' },
        { speaker: 'Kellner', de: 'Zusammen oder getrennt?', es: '¿Junto o por separado?' },
        { speaker: 'Lena', de: 'Getrennt, bitte. Tom zahlt seinen Kuchen selbst!', es: 'Por separado, por favor. ¡Tom se paga su tarta él solito!' },
        { speaker: 'Tom', de: 'Das ist fair. Aber nächstes Mal lade ich euch ein. Versprochen!', es: 'Es justo. Pero la próxima vez invito yo. ¡Prometido!' }
      ]
    },
    cheatsheet: vocab,
    exercises: [
      { id: 'st1-01', type: 'multiple-choice', prompt: '¿Dónde están Lena y Tom?', options: ['im Café', 'im Kino', 'zu Hause', 'im Park'], answer: 'im Café', explanation: 'Primera línea: „Lena und Tom sind im Café."' },
      { id: 'st1-02', type: 'multiple-choice', prompt: 'Was trinkt Lena?', options: ['einen Kaffee', 'einen Tee', 'ein Wasser', 'eine Limonade'], answer: 'einen Kaffee', explanation: '„Ich hätte gern einen Kaffee, bitte."' },
      { id: 'st1-03', type: 'multiple-choice', prompt: 'Was trinkt Tom?', options: ['einen Tee mit Zitrone', 'einen Kaffee', 'einen Tee mit Milch', 'nichts'], answer: 'einen Tee mit Zitrone', explanation: '„Und ich nehme einen Tee mit Zitrone."' },
      { id: 'st1-04', type: 'multiple-choice', prompt: 'Was isst Lena?', options: ['ein Stück Apfelkuchen', 'nichts', 'ein Brötchen', 'eine Suppe'], answer: 'ein Stück Apfelkuchen', explanation: '„Ja, ein Stück Apfelkuchen, bitte."' },
      { id: 'st1-05', type: 'multiple-choice', prompt: '¿Por qué Tom no pide nada de comer al principio?', options: ['No tiene hambre', 'No tiene dinero', 'No le gusta la tarta', 'Tiene prisa'], answer: 'No tiene hambre', explanation: '„Ich habe keinen Hunger."' },
      { id: 'st1-06', type: 'multiple-choice', prompt: 'Richtig oder falsch: Tom isst am Ende doch etwas Kuchen.', options: ['Richtig', 'Falsch'], answer: 'Richtig', explanation: '„Na gut… vielleicht ein kleines Stück." — al final cae, como siempre.' },
      { id: 'st1-07', type: 'fill-blank', prompt: 'Ich hätte ___ einen Kaffee, bitte. (la palabra de cortesía)', answer: 'gern', explanation: '„Ich hätte gern…" = quisiera. La fórmula educada de pedir.' },
      { id: 'st1-08', type: 'fill-blank', prompt: 'Für mich nichts, danke. Ich habe keinen ___.', answer: 'Hunger', explanation: '„keinen Hunger": der Hunger, masculino, en Akkusativ → keinen.' },
      { id: 'st1-09', type: 'reorder', words: ['Der', 'Kuchen', 'sieht', 'aber', 'lecker', 'aus'], hint: '¡Pues la tarta tiene buena pinta!', answer: 'Der Kuchen sieht aber lecker aus.', explanation: 'aussehen es separable: „sieht" en posición 2, „aus" al final.' },
      { id: 'st1-10', type: 'match', prompt: 'Empareja el vocabulario de la historia:', pairs: [['der Kellner', 'el camarero'], ['der Kuchen', 'la tarta'], ['die Zitrone', 'el limón'], ['zahlen', 'pagar']], explanation: 'Vocabulario clave de la escena del café.' },
      { id: 'st1-11', type: 'multiple-choice', prompt: '„Zahlen, bitte!" significa:', options: ['¡La cuenta, por favor!', '¡Otra ronda, por favor!', '¡Buen provecho!', '¡Hasta luego!'], answer: '¡La cuenta, por favor!', explanation: 'zahlen = pagar; „Zahlen, bitte!" es la forma corta de pedir la cuenta.' },
      { id: 'st1-12', type: 'listen', say: 'Möchten Sie auch etwas essen?', prompt: 'Escucha: ¿qué línea del diálogo oyes?', options: ['Möchten Sie auch etwas essen?', 'Was möchten Sie trinken?', 'Möchtest du ein Stück probieren?', 'Der Kuchen sieht aber lecker aus!'], answer: 'Möchten Sie auch etwas essen?', explanation: 'La pregunta del camarero tras tomar nota de las bebidas.' },
      { id: 'st1-13', type: 'translate', prompt: 'Traduce: No tengo hambre.', answer: 'Ich habe keinen Hunger.', explanation: 'der Hunger → keinen (Akkusativ masculino).' },
      { id: 'st1-14', type: 'multiple-choice', prompt: 'Was trinkt Marie?', options: ['eine heiße Schokolade', 'einen Kaffee', 'einen Tee', 'nichts'], answer: 'eine heiße Schokolade', explanation: '„Ich nehme eine heiße Schokolade. Draußen ist es so kalt!"' },
      { id: 'st1-15', type: 'multiple-choice', prompt: '¿Por qué Tom pide tarta al final, si "no tenía hambre"?', options: ['Eso era hace 30 minutos; ahora sí tiene', 'Marie le invita', 'La tarta es gratis', 'Lena le obliga'], answer: 'Eso era hace 30 minutos; ahora sí tiene', explanation: '„Das war vor dreißig Minuten. Jetzt habe ich Hunger." — la lógica irrefutable de Tom.' },
      { id: 'st1-16', type: 'multiple-choice', prompt: '„Zusammen oder getrennt?" — ¿qué pregunta el camarero?', options: ['Si pagan todo junto o cada uno lo suyo', 'Si quieren sentarse juntos', 'Si quieren la tarta en dos platos', 'Si se van ya'], answer: 'Si pagan todo junto o cada uno lo suyo', explanation: 'La pregunta fija al pedir la cuenta en grupo. Lena elige „getrennt".' },
      { id: 'st1-17', type: 'fill-blank', prompt: 'Nächstes Mal ___ ich euch ein. (invitar, verbo separable: parte conjugada)', answer: 'lade', explanation: 'einladen: „lade" en posición 2 y „ein" al final — Nächstes Mal lade ich euch ein.' }
    ]
  });
})();
