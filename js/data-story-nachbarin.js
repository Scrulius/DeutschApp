(function () {
  var vocab = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Vocabulario de la historia</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>das Geräusch</td><td>el ruido</td></tr>' +
    '<tr><td>das Klopfen</td><td>los golpes (el golpeteo)</td></tr>' +
    '<tr><td>der Lärm</td><td>el ruido (molesto)</td></tr>' +
    '<tr><td>die Möbel (pl.)</td><td>los muebles</td></tr>' +
    '<tr><td>die Tischlerin / der Tischler</td><td>la carpintera / el carpintero</td></tr>' +
    '<tr><td>klingeln</td><td>llamar al timbre</td></tr>' +
    '<tr><td>tagsüber</td><td>durante el día</td></tr>' +
    '<tr><td>Bescheid sagen</td><td>avisar</td></tr>' +
    '<tr><td>seltsam</td><td>raro, extraño</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'story-nachbarin',
    category: 'historias',
    track: 'Historia',
    icon: '🔨',
    title: 'Die neue Nachbarin · B1–B2',
    desc: 'Ruidos extraños cada noche en el piso de la nueva vecina… Historia con Genitiv (trotz, wegen), conectores y un pequeño misterio.',
    story: {
      intro: 'En el edificio hay una vecina nueva que nadie conoce — y cada noche se oyen ruidos raros. Fíjate en los Genitiv (trotz des Lärms, wegen des Lärms) y en los conectores (deshalb, trotzdem).',
      lines: [
        { speaker: '', de: 'Seit einer Woche wohnt eine neue Nachbarin im Haus. Niemand kennt sie.', es: 'Desde hace una semana vive una vecina nueva en el edificio. Nadie la conoce.' },
        { speaker: 'Herr Weber', de: 'Haben Sie die neue Nachbarin schon gesehen?', es: '¿Ha visto ya a la nueva vecina?' },
        { speaker: 'Frau Klein', de: 'Nein, aber ich höre jede Nacht seltsame Geräusche aus ihrer Wohnung.', es: 'No, pero cada noche oigo ruidos raros que salen de su piso.' },
        { speaker: 'Herr Weber', de: 'Wirklich? Was für Geräusche?', es: '¿En serio? ¿Qué clase de ruidos?' },
        { speaker: 'Frau Klein', de: 'Ein lautes Klopfen. Trotz des Lärms kann ich meistens schlafen, aber gestern war es schlimm.', es: 'Unos golpes fuertes. A pesar del ruido casi siempre puedo dormir, pero ayer fue horrible.' },
        { speaker: 'Herr Weber', de: 'Vielleicht sollten wir mit ihr sprechen. Meiner Meinung nach gibt es sicher eine einfache Erklärung.', es: 'Quizá deberíamos hablar con ella. En mi opinión, seguro que hay una explicación sencilla.' },
        { speaker: '', de: 'Am Abend klingeln die beiden an der Tür der neuen Nachbarin.', es: 'Por la tarde-noche, los dos llaman al timbre de la nueva vecina.' },
        { speaker: 'Nachbarin', de: 'Oh, hallo! Sie müssen die Nachbarn sein. Entschuldigung wegen des Lärms!', es: '¡Oh, hola! Ustedes deben de ser los vecinos. ¡Perdón por el ruido!' },
        { speaker: 'Nachbarin', de: 'Ich bin Tischlerin und baue gerade meine Möbel. Tagsüber arbeite ich, deshalb bleibt mir nur der Abend.', es: 'Soy carpintera y estoy montando mis muebles. De día trabajo, por eso solo me queda la tarde-noche.' },
        { speaker: 'Frau Klein', de: 'Ach so! Das erklärt alles.', es: '¡Ah, ya! Eso lo explica todo.' },
        { speaker: 'Herr Weber', de: 'Willkommen im Haus! Wenn Sie Hilfe brauchen, sagen Sie einfach Bescheid.', es: '¡Bienvenida al edificio! Si necesita ayuda, avísenos sin más.' },
        { speaker: '', de: 'Am Ende des Monats sind die Möbel fertig — und die drei sind Freunde geworden.', es: 'A final de mes los muebles están terminados — y los tres se han hecho amigos.' },
        { speaker: '', de: 'Ein paar Wochen später klopft es bei Frau Klein an der Tür.', es: 'Unas semanas después, llaman a la puerta de la Sra. Klein.' },
        { speaker: 'Nachbarin', de: 'Ich habe etwas für Sie. Wegen des Lärms der letzten Wochen — als kleine Entschuldigung.', es: 'Tengo algo para usted. Por el ruido de las últimas semanas — como pequeña disculpa.' },
        { speaker: '', de: 'Es ist ein kleines Bücherregal aus hellem Holz. Handgemacht.', es: 'Es una pequeña estantería de madera clara. Hecha a mano.' },
        { speaker: 'Frau Klein', de: 'Das ist ja wunderschön! Das wäre doch nicht nötig gewesen!', es: '¡Pero qué preciosidad! ¡No hacía ninguna falta!' },
        { speaker: 'Nachbarin', de: 'Doch. Gute Nachbarn sind mehr wert als guter Schlaf.', es: 'Sí que la hacía. Unos buenos vecinos valen más que el buen dormir.' },
        { speaker: '', de: 'Im Sommer organisieren die drei ein Fest im Hof des Hauses.', es: 'En verano, los tres organizan una fiesta en el patio del edificio.' },
        { speaker: 'Herr Weber', de: 'Wissen Sie noch? Am Anfang hatten wir fast Angst vor Ihnen!', es: '¿Se acuerda? ¡Al principio casi le teníamos miedo!' },
        { speaker: 'Nachbarin', de: 'Und jetzt sitzen Sie auf Stühlen, die ich gebaut habe. Das Leben ist schon lustig.', es: 'Y ahora están sentados en sillas que he hecho yo. La vida tiene su gracia.' }
      ]
    },
    cheatsheet: vocab,
    exercises: [
      { id: 'st4-01', type: 'multiple-choice', prompt: 'Seit wann wohnt die neue Nachbarin im Haus?', options: ['seit einer Woche', 'seit einem Monat', 'seit gestern', 'seit einem Jahr'], answer: 'seit einer Woche', explanation: '„Seit einer Woche wohnt eine neue Nachbarin im Haus."' },
      { id: 'st4-02', type: 'multiple-choice', prompt: 'Was hört Frau Klein jede Nacht?', options: ['ein lautes Klopfen', 'laute Musik', 'einen Hund', 'ein Telefon'], answer: 'ein lautes Klopfen', explanation: '„Ein lautes Klopfen" — golpes fuertes.' },
      { id: 'st4-03', type: 'multiple-choice', prompt: 'Warum macht die Nachbarin nachts Lärm?', options: ['Sie baut ihre Möbel', 'Sie hört Musik', 'Sie hat Besuch', 'Sie renoviert das Bad'], answer: 'Sie baut ihre Möbel', explanation: '„Ich bin Tischlerin und baue gerade meine Möbel."' },
      { id: 'st4-04', type: 'multiple-choice', prompt: 'Was ist die Nachbarin von Beruf?', options: ['Tischlerin', 'Ärztin', 'Lehrerin', 'Musikerin'], answer: 'Tischlerin', explanation: 'Tischlerin = carpintera.' },
      { id: 'st4-05', type: 'multiple-choice', prompt: 'Richtig oder falsch: Die Nachbarn rufen die Polizei.', options: ['Falsch', 'Richtig'], answer: 'Falsch', explanation: 'Hablan con ella directamente — „Vielleicht sollten wir mit ihr sprechen."' },
      { id: 'st4-06', type: 'multiple-choice', prompt: '¿Por qué solo puede trabajar en sus muebles por la noche?', options: ['Porque de día trabaja', 'Porque de noche hay más luz', 'Porque los vecinos duermen de día', 'Porque le gusta la noche'], answer: 'Porque de día trabaja', explanation: '„Tagsüber arbeite ich, deshalb bleibt mir nur der Abend."' },
      { id: 'st4-07', type: 'fill-blank', prompt: 'Trotz ___ Lärms kann ich meistens schlafen. (artículo en Genitiv)', answer: 'des', explanation: '„trotz" + Genitiv; der Lärm → des Lärms.' },
      { id: 'st4-08', type: 'fill-blank', prompt: 'Tagsüber arbeite ich, ___ bleibt mir nur der Abend. (por eso)', answer: 'deshalb', explanation: '„deshalb" = por eso, con inversión: deshalb bleibt mir…' },
      { id: 'st4-09', type: 'select-case', prompt: 'Entschuldigung wegen [[des Lärms]]!', answer: 'Genitiv', explanation: '„wegen" pide Genitiv: wegen des Lärms.' },
      { id: 'st4-10', type: 'reorder', words: ['Wenn', 'Sie', 'Hilfe', 'brauchen,', 'sagen', 'Sie', 'einfach', 'Bescheid'], hint: 'Si necesita ayuda, avísenos sin más.', answer: 'Wenn Sie Hilfe brauchen, sagen Sie einfach Bescheid.', explanation: 'Subordinada con „wenn" primero → el verbo principal („sagen") va justo tras la coma.' },
      { id: 'st4-11', type: 'match', prompt: 'Empareja el vocabulario de la historia:', pairs: [['das Geräusch', 'el ruido'], ['die Möbel', 'los muebles'], ['klingeln', 'llamar al timbre'], ['tagsüber', 'durante el día']], explanation: 'Vocabulario clave de la historia.' },
      { id: 'st4-12', type: 'multiple-choice', prompt: '„Bescheid sagen" significa:', options: ['avisar', 'despedirse', 'quejarse', 'agradecer'], answer: 'avisar', explanation: '„Sag mir Bescheid" = avísame. Expresión frecuentísima.' },
      { id: 'st4-13', type: 'listen', say: 'Entschuldigung wegen des Lärms!', prompt: 'Escucha: ¿qué línea del diálogo oyes?', options: ['Entschuldigung wegen des Lärms!', 'Was für Geräusche?', 'Das erklärt alles.', 'Willkommen im Haus!'], answer: 'Entschuldigung wegen des Lärms!', explanation: 'La disculpa de la vecina — con su Genitiv (wegen des Lärms).' },
      { id: 'st4-14', type: 'find-error', prompt: '¿Dónde está el error? (a pesar del ruido…)', words: ['Trotz', 'dem', 'Lärm', 'kann', 'ich', 'schlafen.'], wrong: 1, fix: 'des (…Lärms)', explanation: 'Por escrito, „trotz" pide Genitiv: trotz des Lärms. El Dativ („trotz dem Lärm") se oye en la calle, pero no en el examen.' },
      { id: 'st4-15', type: 'translate', prompt: 'Traduce: Eso lo explica todo.', answer: 'Das erklärt alles.', explanation: 'La frase de Frau Klein al descubrir el misterio.' },
      { id: 'st4-16', type: 'multiple-choice', prompt: 'Was schenkt die Nachbarin Frau Klein?', options: ['ein handgemachtes Bücherregal', 'einen Stuhl', 'einen Tisch', 'Blumen'], answer: 'ein handgemachtes Bücherregal', explanation: '„Es ist ein kleines Bücherregal aus hellem Holz. Handgemacht."' },
      { id: 'st4-17', type: 'multiple-choice', prompt: 'Was organisieren die drei im Sommer?', options: ['ein Fest im Hof des Hauses', 'einen Flohmarkt', 'eine Reise', 'einen Möbel-Workshop'], answer: 'ein Fest im Hof des Hauses', explanation: '„Im Sommer organisieren die drei ein Fest im Hof des Hauses." — Genitiv: im Hof DES HAUSES.' },
      { id: 'st4-18', type: 'multiple-choice', prompt: 'Worauf sitzen die Nachbarn beim Fest?', options: ['auf Stühlen, die die Nachbarin gebaut hat', 'auf alten Kisten', 'auf dem Boden', 'auf gekauften Stühlen'], answer: 'auf Stühlen, die die Nachbarin gebaut hat', explanation: '„Und jetzt sitzen Sie auf Stühlen, die ich gebaut habe." — con oración de relativo, verbo al final.' }
    ]
  });
})();
