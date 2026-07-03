(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>En la recepción</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>Ich habe ein Zimmer reserviert.</td><td>He reservado una habitación.</td></tr>' +
    '<tr><td>ein Einzelzimmer / ein Doppelzimmer</td><td>una individual / una doble</td></tr>' +
    '<tr><td>mit Frühstück</td><td>con desayuno</td></tr>' +
    '<tr><td>Wie lange bleiben Sie?</td><td>¿Cuánto tiempo se queda?</td></tr>' +
    '<tr><td>die Schlüsselkarte</td><td>la tarjeta de la habitación</td></tr>' +
    '<tr><td>Wann gibt es Frühstück?</td><td>¿A qué hora hay desayuno?</td></tr>' +
    '<tr><td>einchecken / auschecken</td><td>hacer el check-in / el check-out</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Problemas y peticiones</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>Die Heizung funktioniert nicht.</td><td>La calefacción no funciona.</td></tr>' +
    '<tr><td>Könnten Sie jemanden schicken?</td><td>¿Podrían mandar a alguien?</td></tr>' +
    '<tr><td>Ich brauche noch ein Handtuch.</td><td>Necesito otra toalla.</td></tr>' +
    '<tr><td>Wie ist das WLAN-Passwort?</td><td>¿Cuál es la contraseña del wifi?</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>De viaje</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>der Koffer / das Gepäck</td><td>la maleta / el equipaje</td></tr>' +
    '<tr><td>den Koffer packen</td><td>hacer la maleta</td></tr>' +
    '<tr><td>der Flug / die Verspätung</td><td>el vuelo / el retraso</td></tr>' +
    '<tr><td>Gute Reise!</td><td>¡Buen viaje!</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'hotel',
    category: 'nivel2',
    track: 'Comunicación',
    icon: '🧳',
    title: 'Hotel y viajes',
    desc: 'Reservar, hacer el check-in, quejarte de la calefacción y pedir la contraseña del wifi — el kit de supervivencia del viajero.',
    lessons: [
      {
        title: 'El check-in',
        content: `<p>Al llegar: <strong>Ich habe ein Zimmer reserviert</strong> (+ „auf den Namen…"). Te preguntarán <strong>Wie lange bleiben Sie?</strong> (¿cuánto se queda?) y te darán <strong>die Schlüsselkarte</strong>. Pregunta clave: <strong>Wann gibt es Frühstück?</strong></p>`,
        examples: [
          { de: 'Ich habe ein <strong>Doppelzimmer</strong> reserviert, auf den Namen Ortiz.', es: 'He reservado una habitación doble a nombre de Ortiz.' },
          { de: '<strong>Wie lange bleiben Sie?</strong> — Drei Nächte.', es: '¿Cuánto tiempo se quedan? — Tres noches.' },
          { de: 'Ist das Frühstück <strong>inklusive</strong>?', es: '¿El desayuno está incluido?' },
          { de: 'Wie ist das <strong>WLAN-Passwort</strong>?', es: '¿Cuál es la contraseña del wifi?', note: 'WLAN se pronuncia „ve-lan" — di „wifi" y te mirarán raro.' }
        ]
      },
      {
        title: 'Cuando algo no funciona',
        content: `<p>Aquí brilla el Konjunktiv II de cortesía: describe el problema (<strong>… funktioniert nicht</strong>) y pide con <strong>Könnten Sie…?</strong>. Reclamar con educación abre más puertas que exigir.</p>`,
        examples: [
          { de: 'Die <strong>Heizung</strong> funktioniert nicht.', es: 'La calefacción no funciona.' },
          { de: '<strong>Könnten Sie</strong> jemanden schicken?', es: '¿Podrían mandar a alguien?' },
          { de: 'Ich brauche noch ein <strong>Handtuch</strong>, bitte.', es: 'Necesito otra toalla, por favor.' },
          { de: 'Der <strong>Aufzug</strong> ist kaputt.', es: 'El ascensor está estropeado.' }
        ]
      },
      {
        title: 'El viaje en sí',
        content: `<p>Vocabulario de trayecto: <strong>den Koffer packen</strong> (hacer la maleta), <strong>das Gepäck</strong> (el equipaje), <strong>der Flug</strong> (el vuelo) y la temida <strong>Verspätung</strong> (el retraso). Y para despedir a alguien que se va: <strong>Gute Reise!</strong></p>`,
        examples: [
          { de: 'Ich muss noch den <strong>Koffer packen</strong>.', es: 'Todavía tengo que hacer la maleta.' },
          { de: 'Der Flug hat zwei Stunden <strong>Verspätung</strong>.', es: 'El vuelo lleva dos horas de retraso.' },
          { de: '<strong>Gute Reise!</strong>', es: '¡Buen viaje!' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'hot-01', type: 'translate', prompt: 'Traduce: He reservado una habitación.', answer: 'Ich habe ein Zimmer reserviert.', explanation: 'reservieren → reserviert (verbo en -ieren: participio sin ge-).' },
      { id: 'hot-02', type: 'multiple-choice', prompt: '„das Einzelzimmer" es…', options: ['la habitación individual', 'la habitación doble', 'la suite', 'la recepción'], answer: 'la habitación individual', explanation: 'einzeln = individual; Doppelzimmer = doble.' },
      { id: 'hot-03', type: 'fill-blank', prompt: 'Die Heizung ___ nicht. (funcionar)', answer: 'funktioniert', explanation: 'funktionieren → funktioniert. La frase de queja universal.' },
      { id: 'hot-04', type: 'multiple-choice', prompt: '„Wie lange bleiben Sie?" pregunta…', options: ['cuánto tiempo se queda', 'de dónde viene', 'cuántas personas son', 'a qué hora llega'], answer: 'cuánto tiempo se queda', explanation: 'wie lange = cuánto tiempo.' },
      { id: 'hot-05', type: 'match', prompt: 'Empareja el vocabulario de viaje:', pairs: [['der Koffer', 'la maleta'], ['das Gepäck', 'el equipaje'], ['die Schlüsselkarte', 'la tarjeta de la habitación'], ['die Verspätung', 'el retraso']], explanation: 'El kit del viajero.' },
      { id: 'hot-06', type: 'translate', prompt: 'Traduce: ¿Podrían mandar a alguien? (formal)', answer: 'Könnten Sie jemanden schicken?', explanation: 'Konjunktiv II de cortesía + jemanden (Akkusativ).' },
      { id: 'hot-07', type: 'fill-blank', prompt: 'Ich muss noch den Koffer ___. (hacer la maleta)', answer: 'packen', explanation: 'den Koffer packen = hacer la maleta.' },
      { id: 'hot-08', type: 'multiple-choice', prompt: 'Al despedir a alguien que se va de viaje:', options: ['Gute Reise!', 'Gute Besserung!', 'Guten Appetit!', 'Gute Nacht!'], answer: 'Gute Reise!', explanation: 'Cada „Gute…" tiene su momento — este es el del viaje.' },
      { id: 'hot-09', type: 'listen', say: 'Wann gibt es Frühstück?', prompt: 'Escucha: ¿qué pregunta oyes?', options: ['Wann gibt es Frühstück?', 'Wo gibt es Frühstück?', 'Was gibt es zum Frühstück?', 'Gibt es Frühstück?'], answer: 'Wann gibt es Frühstück?', explanation: 'wann (cuándo) — la primera pregunta de todo huésped.' },
      { id: 'hot-10', type: 'fill-blank', prompt: 'Wie ist das ___-Passwort? (la red inalámbrica, en alemán)', answer: 'WLAN', explanation: 'En alemán el wifi es das WLAN (se dice „ve-lan").' },
      { id: 'hot-11', type: 'multiple-choice', prompt: '„auschecken" significa…', options: ['dejar la habitación (check-out)', 'registrarse (check-in)', 'pedir la cuenta', 'reservar'], answer: 'dejar la habitación (check-out)', explanation: 'einchecken = entrar; auschecken = salir.' },
      { id: 'hot-12', type: 'multiple-choice', prompt: 'Historia: Was für ein Zimmer hat Familie Ortiz reserviert?', options: ['ein Doppelzimmer mit Frühstück', 'ein Einzelzimmer', 'eine Suite', 'zwei Zimmer'], answer: 'ein Doppelzimmer mit Frühstück', explanation: '„Ja, ein Doppelzimmer mit Frühstück, drei Nächte."' },
      { id: 'hot-13', type: 'multiple-choice', prompt: 'Historia: Was funktioniert im Zimmer nicht?', options: ['die Heizung', 'das WLAN', 'der Aufzug', 'die Dusche'], answer: 'die Heizung', explanation: '„Die Heizung funktioniert nicht. Und es ist kalt!"' },
      { id: 'hot-14', type: 'multiple-choice', prompt: 'Historia: Was bekommt die Familie als Entschuldigung?', options: ['das Frühstück gratis', 'ein größeres Zimmer', 'Geld zurück', 'nichts'], answer: 'das Frühstück gratis', explanation: '„Als Entschuldigung bekommen Sie das Frühstück gratis."' },
      { id: 'hot-15', type: 'fill-blank', prompt: 'Historia: Könnten wir ein Zimmer mit ___ auf die Stadt haben? (vistas)', answer: 'Blick', explanation: 'mit Blick auf… = con vistas a…' },
      { id: 'hot-16', type: 'multiple-choice', prompt: 'Historia: Was empfiehlt die Rezeptionistin der Familie?', options: ['das Schloss Schönbrunn und eine Sachertorte', 'das Riesenrad und ein Konzert', 'einen Stadtplan', 'ein anderes Hotel'], answer: 'das Schloss Schönbrunn und eine Sachertorte', explanation: '„Das Schloss Schönbrunn! Und danach müssen Sie unbedingt eine Sachertorte probieren."' },
      { id: 'hot-17', type: 'multiple-choice', prompt: 'Historia: Was vergisst das Kind im Zimmer?', options: ['seinen Teddy', 'seine Jacke', 'die Schlüsselkarte', 'seinen Koffer'], answer: 'seinen Teddy', explanation: '„Aber... wo ist mein Teddy?" — El peluche seguía en la cama.' },
      { id: 'hot-18', type: 'multiple-choice', prompt: 'Historia: Was kann man vom Zimmer aus sehen?', options: ['das Riesenrad', 'den Bahnhof', 'das Schloss', 'den Fluss'], answer: 'das Riesenrad', explanation: '„Man kann von hier das Riesenrad sehen!" — la noria gigante del Prater.' }
    ],
    story: {
      intro: 'La familia Ortiz llega a su hotel de Viena tras un viaje largo: check-in, una petición especial, un problema con la calefacción — y una recepcionista que sabe arreglarlo todo.',
      lines: [
        { speaker: '', de: 'Nach einer langen Zugfahrt kommt Familie Ortiz im Hotel an.', es: 'Tras un largo viaje en tren, la familia Ortiz llega al hotel.' },
        { speaker: 'Vater', de: 'Guten Abend! Wir haben ein Zimmer reserviert, auf den Namen Ortiz.', es: '¡Buenas noches! Hemos reservado una habitación a nombre de Ortiz.' },
        { speaker: 'Rezeptionistin', de: 'Einen Moment... Ja, ein Doppelzimmer mit Frühstück, drei Nächte.', es: 'Un momento… Sí, una doble con desayuno, tres noches.' },
        { speaker: 'Mutter', de: 'Könnten wir ein Zimmer mit Blick auf die Stadt haben?', es: '¿Podríamos tener una habitación con vistas a la ciudad?' },
        { speaker: 'Rezeptionistin', de: 'Mal sehen... Ja! Zimmer 51, im fünften Stock. Hier ist Ihre Schlüsselkarte.', es: 'Vamos a ver… ¡Sí! Habitación 51, en la quinta planta. Aquí tiene su tarjeta.' },
        { speaker: 'Vater', de: 'Danke! Und wann gibt es Frühstück?', es: '¡Gracias! ¿Y a qué hora hay desayuno?' },
        { speaker: 'Rezeptionistin', de: 'Von sieben bis zehn, im ersten Stock.', es: 'De siete a diez, en la primera planta.' },
        { speaker: '', de: 'Im Zimmer entdeckt die Mutter ein Problem.', es: 'En la habitación, la madre descubre un problema.' },
        { speaker: 'Mutter', de: 'Die Heizung funktioniert nicht. Und es ist kalt!', es: 'La calefacción no funciona. ¡Y hace frío!' },
        { speaker: 'Vater', de: 'Entschuldigung, könnten Sie jemanden schicken? Die Heizung ist kaputt.', es: 'Disculpe, ¿podrían mandar a alguien? La calefacción está estropeada.' },
        { speaker: 'Rezeptionistin', de: 'Natürlich, sofort! Und als Entschuldigung bekommen Sie das Frühstück gratis.', es: '¡Por supuesto, ahora mismo! Y como disculpa, el desayuno les sale gratis.' },
        { speaker: 'Mutter', de: 'Siehst du? Fragen kostet nichts.', es: '¿Ves? Preguntar no cuesta nada.' },
        { speaker: '', de: 'Eine halbe Stunde später ist die Heizung repariert. Das Zimmer wird warm.', es: 'Media hora después, la calefacción está arreglada. La habitación se caldea.' },
        { speaker: 'Kind', de: 'Papa, schau mal! Man kann von hier das Riesenrad sehen!', es: '¡Papá, mira! ¡Desde aquí se ve la noria!' },
        { speaker: '', de: 'Am nächsten Morgen, beim Frühstück.', es: 'A la mañana siguiente, en el desayuno.' },
        { speaker: 'Mutter', de: 'Entschuldigung, was können Sie uns in Wien empfehlen?', es: 'Disculpe, ¿qué nos puede recomendar en Viena?' },
        { speaker: 'Rezeptionistin', de: 'Das Schloss Schönbrunn! Und danach müssen Sie unbedingt eine Sachertorte probieren.', es: '¡El palacio de Schönbrunn! Y después tienen que probar sí o sí una Sachertorte.' },
        { speaker: 'Kind', de: 'Torte! Der Plan gefällt mir.', es: '¡Tarta! El plan me gusta.' },
        { speaker: '', de: 'Drei Tage später, beim Check-out.', es: 'Tres días después, en el check-out.' },
        { speaker: 'Vater', de: 'Wir reisen heute ab. Können wir bitte bezahlen? Es war wunderbar!', es: 'Hoy nos marchamos. ¿Podemos pagar, por favor? ¡Ha sido maravilloso!' },
        { speaker: 'Rezeptionistin', de: 'Das freut mich! Hat Ihnen der Aufenthalt gefallen?', es: '¡Cuánto me alegro! ¿Les ha gustado la estancia?' },
        { speaker: 'Kind', de: 'Ja! Aber... wo ist mein Teddy?', es: '¡Sí! Pero… ¿dónde está mi peluche?' },
        { speaker: '', de: 'Die Rezeptionistin ruft im Zimmer an. Der Teddy sitzt noch auf dem Bett.', es: 'La recepcionista llama a la habitación. El peluche sigue sentado en la cama.' },
        { speaker: 'Rezeptionistin', de: 'Keine Sorge, wir holen ihn sofort. Bei uns geht kein Gast verloren — und kein Teddy!', es: 'No se preocupen, lo traemos ahora mismo. ¡Aquí no se nos pierde ningún huésped — ni ningún peluche!' }
      ]
    }
  });
})();
