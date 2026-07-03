(function () {
  var vocab = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Vocabulario de la historia</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>der Schlüssel</td><td>la llave</td></tr>' +
    '<tr><td>die Wohnung</td><td>el piso</td></tr>' +
    '<tr><td>die Tasche</td><td>el bolsillo / el bolso</td></tr>' +
    '<tr><td>verlieren (hat verloren)</td><td>perder</td></tr>' +
    '<tr><td>anrufen (hat angerufen)</td><td>llamar por teléfono</td></tr>' +
    '<tr><td>finden (hat gefunden)</td><td>encontrar</td></tr>' +
    '<tr><td>Was ist los?</td><td>¿Qué pasa?</td></tr>' +
    '<tr><td>Gott sei Dank!</td><td>¡Gracias a Dios! / ¡Menos mal!</td></tr>' +
    '<tr><td>vorbeikommen</td><td>pasarse (por un sitio)</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'story-schluessel',
    category: 'historias',
    track: 'Historia',
    icon: '🔑',
    title: 'Der verlorene Schlüssel · A2',
    desc: 'Paul no puede entrar en casa: ha perdido la llave. Historia en Perfekt — reconstruye qué hizo ayer para encontrarla.',
    story: {
      intro: 'Es lunes por la mañana y Paul tiene un problema. Esta historia usa mucho el Perfekt (el pasado hablado) — fíjate en los participios.',
      lines: [
        { speaker: '', de: 'Es ist Montagmorgen. Paul steht vor seiner Tür und sucht in seiner Tasche.', es: 'Es lunes por la mañana. Paul está delante de su puerta y busca en su bolsillo.' },
        { speaker: 'Paul', de: 'Oh nein! Wo ist mein Schlüssel?', es: '¡Oh no! ¿Dónde está mi llave?' },
        { speaker: '', de: 'Der Schlüssel ist nicht da. Paul ruft seine Nachbarin Frau Schmidt an.', es: 'La llave no está. Paul llama a su vecina, la señora Schmidt.' },
        { speaker: 'Frau Schmidt', de: 'Hallo Paul! Was ist los?', es: '¡Hola Paul! ¿Qué pasa?' },
        { speaker: 'Paul', de: 'Ich habe meinen Schlüssel verloren! Ich kann nicht in meine Wohnung.', es: '¡He perdido mi llave! No puedo entrar en mi piso.' },
        { speaker: 'Frau Schmidt', de: 'Wo bist du gestern gewesen?', es: '¿Dónde estuviste ayer?' },
        { speaker: 'Paul', de: 'Ich bin ins Restaurant gegangen und dann mit dem Bus nach Hause gefahren.', es: 'Fui al restaurante y luego volví a casa en bus.' },
        { speaker: 'Frau Schmidt', de: 'Hast du schon im Restaurant angerufen?', es: '¿Has llamado ya al restaurante?' },
        { speaker: '', de: 'Paul ruft im Restaurant an. Der Kellner antwortet sofort.', es: 'Paul llama al restaurante. El camarero responde enseguida.' },
        { speaker: 'Kellner', de: 'Ein Schlüssel? Ja! Wir haben ihn gestern Abend unter Ihrem Tisch gefunden.', es: '¿Una llave? ¡Sí! La encontramos ayer por la noche debajo de su mesa.' },
        { speaker: 'Paul', de: 'Gott sei Dank! Ich komme sofort vorbei. Vielen Dank!', es: '¡Menos mal! Ahora mismo me paso. ¡Muchas gracias!' },
        { speaker: '', de: 'Paul fährt mit dem Fahrrad zum Restaurant.', es: 'Paul va en bici al restaurante.' },
        { speaker: 'Kellner', de: 'Da sind Sie ja! Wir haben Sie gestern noch gesucht, aber Sie waren schon weg.', es: '¡Aquí está! Ayer aún le buscamos, pero ya se había ido.' },
        { speaker: 'Paul', de: 'Wie haben Sie den Schlüssel denn gefunden?', es: '¿Y cómo encontraron la llave?' },
        { speaker: 'Kellner', de: 'Eine Kollegin hat den Tisch sauber gemacht und ihn gesehen. Er ist unter die Serviette gerutscht.', es: 'Una compañera limpió la mesa y la vio. Se había deslizado debajo de la servilleta.' },
        { speaker: 'Paul', de: 'Ich bin so froh! Gestern war wirklich kein guter Tag.', es: '¡Qué alivio! Ayer de verdad que no fue un buen día.' },
        { speaker: 'Kellner', de: 'Warten Sie — Sie haben auch Ihren Regenschirm vergessen!', es: 'Espere — ¡también se olvidó el paraguas!' },
        { speaker: 'Paul', de: 'Meinen Regenschirm?! Oh nein. Was habe ich gestern nur gemacht?', es: '¡¿Mi paraguas?! Ay, no. ¿Pero qué hice yo ayer?' },
        { speaker: '', de: 'Eine Stunde später hat Paul seinen Schlüssel wieder — und ein Stück Kuchen vom Kellner.', es: 'Una hora después Paul tiene de nuevo su llave — y un trozo de tarta de parte del camarero.' },
        { speaker: 'Frau Schmidt', de: 'Na, hast du alles wiederbekommen?', es: '¿Qué, lo has recuperado todo?' },
        { speaker: 'Paul', de: 'Alles! Und ich habe etwas gelernt: Ich lasse ab jetzt einen zweiten Schlüssel bei Ihnen — wenn das okay ist.', es: '¡Todo! Y he aprendido algo: a partir de ahora dejo una segunda llave en su casa — si le parece bien.' },
        { speaker: 'Frau Schmidt', de: 'Natürlich! Dafür sind Nachbarn da.', es: '¡Claro! Para eso están los vecinos.' }
      ]
    },
    cheatsheet: vocab,
    exercises: [
      { id: 'st2-01', type: 'multiple-choice', prompt: 'Was hat Paul verloren?', options: ['seinen Schlüssel', 'sein Handy', 'seine Tasche', 'sein Geld'], answer: 'seinen Schlüssel', explanation: '„Ich habe meinen Schlüssel verloren!"' },
      { id: 'st2-02', type: 'multiple-choice', prompt: 'Wen ruft Paul zuerst an?', options: ['seine Nachbarin', 'das Restaurant', 'seine Mutter', 'die Polizei'], answer: 'seine Nachbarin', explanation: 'Primero llama a Frau Schmidt, su vecina; el restaurante viene después.' },
      { id: 'st2-03', type: 'multiple-choice', prompt: 'Wo ist Paul gestern gewesen?', options: ['im Restaurant', 'im Kino', 'bei Frau Schmidt', 'im Büro'], answer: 'im Restaurant', explanation: '„Ich bin ins Restaurant gegangen…"' },
      { id: 'st2-04', type: 'multiple-choice', prompt: 'Wie ist Paul nach Hause gefahren?', options: ['mit dem Bus', 'mit dem Auto', 'mit dem Fahrrad', 'zu Fuß'], answer: 'mit dem Bus', explanation: '„…und dann mit dem Bus nach Hause gefahren."' },
      { id: 'st2-05', type: 'multiple-choice', prompt: 'Wer hat den Schlüssel gefunden?', options: ['der Kellner', 'Frau Schmidt', 'Paul', 'niemand'], answer: 'der Kellner', explanation: '„Wir haben ihn gestern Abend unter Ihrem Tisch gefunden."' },
      { id: 'st2-06', type: 'multiple-choice', prompt: 'Richtig oder falsch: Paul kann am Anfang in seine Wohnung.', options: ['Falsch', 'Richtig'], answer: 'Falsch', explanation: '„Ich kann nicht in meine Wohnung" — sin llave no entra.' },
      { id: 'st2-07', type: 'fill-blank', prompt: 'Ich habe meinen Schlüssel ___ (verlieren, Partizip II).', answer: 'verloren', explanation: 'verlieren es inseparable (ver-): Partizip II sin ge- → verloren.' },
      { id: 'st2-08', type: 'fill-blank', prompt: 'Ich ___ ins Restaurant gegangen. (auxiliar)', answer: 'bin', explanation: 'gehen = movimiento → Perfekt con „sein": ich bin gegangen.' },
      { id: 'st2-09', type: 'reorder', words: ['Ich', 'bin', 'mit', 'dem', 'Bus', 'nach', 'Hause', 'gefahren'], hint: 'Volví a casa en bus.', answer: 'Ich bin mit dem Bus nach Hause gefahren.', explanation: 'fahren → sein; el participio „gefahren" cierra la frase.' },
      { id: 'st2-10', type: 'match', prompt: 'Empareja el vocabulario de la historia:', pairs: [['der Schlüssel', 'la llave'], ['die Wohnung', 'el piso'], ['verlieren', 'perder'], ['finden', 'encontrar']], explanation: 'Vocabulario clave de la historia.' },
      { id: 'st2-11', type: 'multiple-choice', prompt: '„Gott sei Dank!" significa:', options: ['¡Menos mal!', '¡Dios mío, qué horror!', '¡De nada!', '¡Buena suerte!'], answer: '¡Menos mal!', explanation: 'Expresión de alivio: ¡gracias a Dios! / ¡menos mal!' },
      { id: 'st2-12', type: 'listen', say: 'Ich habe meinen Schlüssel verloren!', prompt: 'Escucha: ¿qué línea del diálogo oyes?', options: ['Ich habe meinen Schlüssel verloren!', 'Wo ist mein Schlüssel?', 'Wir haben ihn gestern gefunden.', 'Ich komme sofort vorbei.'], answer: 'Ich habe meinen Schlüssel verloren!', explanation: 'La frase clave de la historia — Perfekt con „haben" + „verloren" al final.' },
      { id: 'st2-13', type: 'translate', prompt: 'Traduce: He perdido mi llave.', answer: 'Ich habe meinen Schlüssel verloren.', explanation: 'Perfekt: habe (posición 2) + verloren (al final); der Schlüssel → meinen (Akkusativ).' },
      { id: 'st2-14', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Ich', 'habe', 'ins', 'Restaurant', 'gegangen.'], wrong: 1, fix: 'bin', explanation: 'gehen = movimiento → el Perfekt se forma con „sein": Ich bin ins Restaurant gegangen.' },
      { id: 'st2-15', type: 'multiple-choice', prompt: 'Wie ist Paul zum Restaurant gefahren?', options: ['mit dem Fahrrad', 'mit dem Bus', 'mit dem Auto', 'zu Fuß'], answer: 'mit dem Fahrrad', explanation: '„Paul fährt mit dem Fahrrad zum Restaurant." — ayer bus, hoy bici.' },
      { id: 'st2-16', type: 'multiple-choice', prompt: 'Wie hat die Kollegin den Schlüssel gefunden?', options: ['Sie hat den Tisch sauber gemacht und ihn gesehen', 'Sie hat ihn auf dem Boden gehört', 'Ein Gast hat ihn gebracht', 'Paul hat angerufen und es erklärt'], answer: 'Sie hat den Tisch sauber gemacht und ihn gesehen', explanation: '„Er ist unter die Serviette gerutscht." — el gran misterio, resuelto.' },
      { id: 'st2-17', type: 'multiple-choice', prompt: 'Was hat Paul außer dem Schlüssel noch vergessen?', options: ['seinen Regenschirm', 'seine Jacke', 'sein Handy', 'seine Tasche'], answer: 'seinen Regenschirm', explanation: '„Sie haben auch Ihren Regenschirm vergessen!" — vergessen, inseparable: sin ge-.' },
      { id: 'st2-18', type: 'multiple-choice', prompt: 'Was macht Paul am Ende, um das Problem nie wieder zu haben?', options: ['Er lässt einen zweiten Schlüssel bei Frau Schmidt', 'Er kauft eine neue Tasche', 'Er geht nie wieder ins Restaurant', 'Er trägt den Schlüssel am Hals'], answer: 'Er lässt einen zweiten Schlüssel bei Frau Schmidt', explanation: '„Ich lasse ab jetzt einen zweiten Schlüssel bei Ihnen." — Dafür sind Nachbarn da.' }
    ]
  });
})();
