(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Preguntar y dar direcciones</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>Wie komme ich zum / zur …?</td><td>¿Cómo llego a …?</td></tr>' +
    '<tr><td>Entschuldigung, wo ist …?</td><td>Perdone, ¿dónde está …?</td></tr>' +
    '<tr><td>links / rechts / geradeaus</td><td>izquierda / derecha / recto</td></tr>' +
    '<tr><td>an der Ampel / an der Ecke</td><td>en el semáforo / en la esquina</td></tr>' +
    '<tr><td>Ist es weit? — Nein, nur 5 Minuten.</td><td>¿Está lejos? — No, solo 5 minutos.</td></tr>' +
    '</table></div>' +
    '<div class="tip"><strong>zum</strong> (= zu dem) para masculino y neutro: „zum Bahnhof" (der Bahnhof). <strong>zur</strong> (= zu der) para femenino: „zur Post" (die Post). Ambos rigen Dativ.</div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Transporte</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>mit dem Bus / Zug / der U-Bahn fahren</td><td>ir en bus / tren / metro</td></tr>' +
    '<tr><td>die Haltestelle</td><td>la parada</td></tr>' +
    '<tr><td>einsteigen / aussteigen / umsteigen</td><td>subir / bajar / hacer trasbordo</td></tr>' +
    '<tr><td>eine Fahrkarte / ein Ticket</td><td>un billete</td></tr>' +
    '<tr><td>Welche Linie fährt zum Zentrum?</td><td>¿Qué línea va al centro?</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'direcciones',
    category: 'nivel2',
    track: 'Comunicación',
    icon: '🧭',
    title: 'Direcciones y transporte',
    desc: 'Preguntar cómo llegar (izquierda/derecha/recto) y moverte en bus, tren y U-Bahn sin perderte.',
    lessons: [
      {
        title: 'Preguntar el camino',
        content: `<p>La pregunta estrella es <strong>Wie komme ich zum/zur …?</strong> (¿cómo llego a…?). También <strong>Entschuldigung, wo ist …?</strong>. Las respuestas usan <strong>links</strong> (izquierda), <strong>rechts</strong> (derecha) y <strong>geradeaus</strong> (recto), a menudo con puntos de referencia: <strong>an der Ampel</strong> (en el semáforo), <strong>an der Ecke</strong> (en la esquina).</p>
          <div class="tip">Ojo con „zum" vs „zur": „zum Bahnhof" (der, masculino), „zur Post" (die, femenino). Los dos son „zu" + Dativ contraído.</div>`,
        examples: [
          { de: '<strong>Wie komme ich zum Bahnhof?</strong>', es: '¿Cómo llego a la estación?', note: 'der Bahnhof → zum.' },
          { de: '<strong>Wie komme ich zur Post?</strong>', es: '¿Cómo llego a correos?', note: 'die Post → zur.' },
          { de: 'Gehen Sie <strong>geradeaus</strong> und dann <strong>links</strong>.', es: 'Vaya recto y luego a la izquierda.' },
          { de: 'An der Ampel <strong>rechts</strong>.', es: 'En el semáforo, a la derecha.' }
        ]
      },
      {
        title: 'Moverte en transporte público',
        content: `<p>Para el transporte se usa <strong>mit</strong> + Dativ: <strong>mit dem Bus / mit dem Zug / mit der U-Bahn</strong>. Verbos clave: <strong>einsteigen</strong> (subir), <strong>aussteigen</strong> (bajar), <strong>umsteigen</strong> (hacer trasbordo) — todos separables. La parada es <strong>die Haltestelle</strong> y el billete <strong>die Fahrkarte</strong> (o „das Ticket").</p>`,
        examples: [
          { de: 'Ich fahre <strong>mit dem Bus</strong> zur Arbeit.', es: 'Voy al trabajo en autobús.' },
          { de: 'Wo ist die nächste <strong>Haltestelle</strong>?', es: '¿Dónde está la parada más cercana?' },
          { de: 'Am Hauptbahnhof musst du <strong>umsteigen</strong>.', es: 'En la estación central tienes que hacer trasbordo.' },
          { de: 'Eine <strong>Fahrkarte</strong> nach Köln, bitte.', es: 'Un billete a Colonia, por favor.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'dir-01', type: 'multiple-choice', prompt: '„links" =', options: ['izquierda', 'derecha', 'recto', 'detrás'], answer: 'izquierda' },
      { id: 'dir-02', type: 'multiple-choice', prompt: '„rechts" =', options: ['derecha', 'izquierda', 'recto', 'delante'], answer: 'derecha' },
      { id: 'dir-03', type: 'multiple-choice', prompt: '„geradeaus" =', options: ['todo recto', 'a la izquierda', 'a la derecha', 'hacia atrás'], answer: 'todo recto' },
      { id: 'dir-04', type: 'translate', prompt: 'Traduce: ¿Cómo llego a la estación? (der Bahnhof)', answer: 'Wie komme ich zum Bahnhof?', explanation: 'der Bahnhof → „zum" (zu dem).' },
      { id: 'dir-05', type: 'fill-blank', prompt: 'Wie komme ich ___ Post? (zu + die)', answer: 'zur', explanation: 'die Post (femenino) → zur (zu der).' },
      { id: 'dir-06', type: 'fill-blank', prompt: 'Wie komme ich ___ Bahnhof? (zu + der)', answer: 'zum', explanation: 'der Bahnhof (masculino) → zum (zu dem).' },
      { id: 'dir-07', type: 'fill-blank', prompt: 'Ich fahre ___ dem Bus. (con → preposición)', answer: 'mit', explanation: '„mit" + Dativ para el transporte: mit dem Bus.' },
      { id: 'dir-08', type: 'match', prompt: 'Empareja cada palabra con su significado:', pairs: [['links', 'izquierda'], ['rechts', 'derecha'], ['geradeaus', 'recto'], ['die Ampel', 'el semáforo']], explanation: 'Vocabulario básico de direcciones.' },
      { id: 'dir-09', type: 'multiple-choice', prompt: '„umsteigen" =', options: ['hacer trasbordo', 'subir', 'bajar', 'esperar'], answer: 'hacer trasbordo', explanation: 'einsteigen=subir, aussteigen=bajar, umsteigen=trasbordar.' },
      { id: 'dir-10', type: 'multiple-choice', prompt: '„die Haltestelle" =', options: ['la parada', 'el billete', 'el andén', 'el horario'], answer: 'la parada' },
      { id: 'dir-11', type: 'translate', prompt: 'Traduce: ¿Está lejos?', answer: 'Ist es weit?', explanation: 'weit = lejos.' },
      { id: 'dir-12', type: 'fill-blank', prompt: 'Wo ist die ___? (la parada)', answer: 'Haltestelle', explanation: 'die Haltestelle = la parada.' },
      { id: 'dir-13', type: 'reorder', words: ['Wie', 'komme', 'ich', 'zum', 'Bahnhof'], punctuation: '?', hint: '¿Cómo llego a la estación?', answer: 'Wie komme ich zum Bahnhof?', explanation: 'W-Frage: „Wie" + verbo „komme" en 2ª posición.' },
      { id: 'dir-14', type: 'multiple-choice', prompt: '„Eine Fahrkarte nach Berlin" =', options: ['Un billete a Berlín', 'Una parada en Berlín', 'Un tren desde Berlín', 'Un horario de Berlín'], answer: 'Un billete a Berlín', explanation: 'die Fahrkarte = el billete; „nach" + ciudad = destino.' },
      { id: 'dir-15', type: 'translate', prompt: 'Traduce: Vaya recto. (formal)', answer: 'Gehen Sie geradeaus.', explanation: 'Imperativo formal con „Sie": Gehen Sie geradeaus.' },
      { id: 'dir-16', type: 'multiple-choice', prompt: 'An der ___ links. (en la esquina)', options: ['Ecke', 'Ampel', 'Straße', 'Brücke'], answer: 'Ecke', explanation: 'die Ecke = la esquina; die Ampel = el semáforo.' },
      { id: 'dir-17', type: 'fill-blank', prompt: 'Am Hauptbahnhof musst du ___. (hacer trasbordo)', answer: 'umsteigen', explanation: 'umsteigen = hacer trasbordo (con modal, va entero al final).' },
      { id: 'dir-18', type: 'translate', prompt: 'Traduce: ¿Qué línea va al centro?', answer: 'Welche Linie fährt zum Zentrum?', explanation: '„welche Linie" (die Linie, femenino) + fahren.' }
      ,
      { id: 'dir-19', type: 'multiple-choice', prompt: 'Historia: Wo müssen die Touristen links gehen?', options: ['an der Ampel', 'an der Ecke', 'an der Brücke', 'am Museum'], answer: 'an der Ampel', explanation: '„An der Ampel links, und dann die zweite Straße rechts."' },
      { id: 'dir-20', type: 'multiple-choice', prompt: 'Historia: Wie lange dauert der Weg zu Fuß?', options: ['zehn Minuten', 'zwanzig Minuten', 'fünf Minuten', 'eine halbe Stunde'], answer: 'zehn Minuten', explanation: '„Nein, zu Fuß nur zehn Minuten."' },
      { id: 'dir-21', type: 'multiple-choice', prompt: 'Historia: ¿Dónde estaba el museo al final?', options: ['justo detrás de ellos', 'al lado del semáforo', 'a diez minutos más', 'cerrado'], answer: 'justo detrás de ellos', explanation: '„Da! Direkt hinter Ihnen." — el clásico final de todo turista.' },
      { id: 'dir-22', type: 'match', prompt: 'Empareja los lugares de la ciudad:', pairs: [['die Brücke', 'el puente'], ['die Kreuzung', 'el cruce'], ['der Platz', 'la plaza'], ['der Weg', 'el camino']], explanation: 'Los puntos de referencia que salen en cualquier indicación.' },
      { id: 'dir-23', type: 'fill-blank', prompt: 'Gehen Sie über ___ Brücke. (cruzar el puente: movimiento)', answer: 'die', explanation: '„über" con movimiento → Akkusativ; die Brücke (femenino) no cambia de forma.' },
      { id: 'dir-24', type: 'translate', prompt: 'Traduce: La primera calle a la derecha.', answer: 'Die erste Straße rechts.', explanation: 'Ordinal + Straße + dirección: die erste/zweite Straße rechts/links.' },
      { id: 'dir-25', type: 'multiple-choice', prompt: '„Sie können es nicht verfehlen" significa:', options: ['No tiene pérdida', 'Está prohibido pasar', 'No lo encontrará', 'Debe dar la vuelta'], answer: 'No tiene pérdida', explanation: 'verfehlen = no dar con algo → la coletilla optimista de toda indicación.' }
    ],
    story: {
      intro: 'Dos turistas con plano buscan el museo de la ciudad: preguntan el camino, siguen las indicaciones (geradeaus, links, rechts)… y el final es el de siempre.',
      lines: [
        { speaker: '', de: 'Zwei Touristen stehen mit einem Stadtplan in der Altstadt.', es: 'Dos turistas están con un plano en el casco antiguo.' },
        { speaker: 'Tourist', de: 'Entschuldigung, wie kommen wir zum Stadtmuseum?', es: 'Perdone, ¿cómo llegamos al museo de la ciudad?' },
        { speaker: 'Frau', de: 'Ganz einfach. Gehen Sie hier geradeaus bis zur Ampel.', es: 'Muy fácil. Sigan todo recto hasta el semáforo.' },
        { speaker: 'Tourist', de: 'Bis zur Ampel, okay...', es: 'Hasta el semáforo, vale…' },
        { speaker: 'Frau', de: 'An der Ampel links, und dann die zweite Straße rechts.', es: 'En el semáforo a la izquierda, y luego la segunda calle a la derecha.' },
        { speaker: 'Tourist', de: 'Ist es weit?', es: '¿Está lejos?' },
        { speaker: 'Frau', de: 'Nein, zu Fuß nur zehn Minuten. Oder eine Station mit der U-Bahn.', es: 'No, a pie solo diez minutos. O una parada en metro.' },
        { speaker: 'Tourist', de: 'Wir gehen zu Fuß. Vielen Dank!', es: 'Vamos andando. ¡Muchas gracias!' },
        { speaker: '', de: 'Zwanzig Minuten später...', es: 'Veinte minutos después…' },
        { speaker: 'Tourist', de: 'Entschuldigung... wo ist das Stadtmuseum?', es: 'Perdone… ¿dónde está el museo de la ciudad?' },
        { speaker: 'Mann', de: 'Da! Direkt hinter Ihnen.', es: '¡Ahí! Justo detrás de ustedes.' }
      ]
    }
  });
})();
