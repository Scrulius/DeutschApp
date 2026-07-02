(function () {
  var extraCheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Pares de verbos: acción (Akkusativ) vs estado (Dativ)</caption>' +
    '<tr><th>Movimiento → Akkusativ</th><th>Estado → Dativ</th></tr>' +
    '<tr><td>legen (poner, acostado)</td><td>liegen (estar tumbado)</td></tr>' +
    '<tr><td>stellen (poner, de pie)</td><td>stehen (estar de pie)</td></tr>' +
    '<tr><td>setzen (sentar)</td><td>sitzen (estar sentado)</td></tr>' +
    '<tr><td>hängen (colgar algo)</td><td>hängen (estar colgado)</td></tr>' +
    '</table></div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Contracciones frecuentes</caption>' +
    '<tr><th>Contracción</th><th>= </th><th>Uso</th></tr>' +
    '<tr><td>ins</td><td>in + das</td><td>movimiento</td></tr>' +
    '<tr><td>im</td><td>in + dem</td><td>ubicación</td></tr>' +
    '<tr><td>ans</td><td>an + das</td><td>movimiento</td></tr>' +
    '<tr><td>am</td><td>an + dem</td><td>ubicación</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'wechsel',
    category: 'nivel2',
    icon: '🔀',
    title: 'Wechselpräpositionen — Akkusativ o Dativ',
    desc: 'an, auf, in, über, unter, vor, hinter, neben, zwischen: un mismo lugar, dos casos posibles según el movimiento.',
    lessons: [
      {
        title: 'La regla de oro: ¿Wohin? (Akkusativ) vs ¿Wo? (Dativ)',
        content: `<p>Estas 9 preposiciones pueden llevar Akkusativ O Dativ. La elección depende de si hay <strong>movimiento hacia un destino</strong> (pregunta <strong>Wohin?</strong> → Akkusativ) o una <strong>ubicación estática</strong> (pregunta <strong>Wo?</strong> → Dativ).</p>
          <div class="tip">En español, "ir A la cocina" y "estar EN la cocina" ya usan preposiciones distintas, así que el cerebro no necesita marcar nada más. En alemán se reutiliza la MISMA preposición ("in") y en su lugar cambia el CASO — por eso cuesta tanto.</div>`,
        examples: [
          { de: 'Ich lege das Buch <strong>auf den Tisch</strong>.', es: 'Pongo el libro sobre la mesa.', note: 'Movimiento hacia el destino → Akkusativ: auf den.' },
          { de: 'Das Buch liegt <strong>auf dem Tisch</strong>.', es: 'El libro está sobre la mesa.', note: 'Ubicación estática → Dativ: auf dem.' },
          { de: 'Ich gehe <strong>in die Küche</strong>.', es: 'Voy a la cocina.', note: 'Movimiento → Akkusativ: in die.' },
          { de: 'Ich bin <strong>in der Küche</strong>.', es: 'Estoy en la cocina.', note: 'Ubicación → Dativ: in der.' }
        ]
      },
      {
        title: 'El truco de los verbos: legen/stellen/setzen (Akk) vs liegen/stehen/sitzen (Dat)',
        content: `<p>Hay pares de verbos que ayudan a decidir el caso sin pensar en Wohin/Wo: los verbos "activos" (colocar algo, causar un movimiento) piden Akkusativ; los verbos "de estado" (algo YA está ahí) piden Dativ. <strong>hängen</strong> es especial: sirve para los dos significados con la misma forma.</p>`,
        examples: [
          { de: 'Ich stelle die Flasche <strong>in den Kühlschrank</strong>.', es: 'Coloco la botella en la nevera.', note: 'stellen = acción → Akkusativ.' },
          { de: 'Die Flasche steht <strong>in dem Kühlschrank</strong>.', es: 'La botella está en la nevera.', note: 'stehen = estado → Dativ.' },
          { de: 'Ich hänge das Bild <strong>an die Wand</strong>.', es: 'Cuelgo el cuadro en la pared.', note: 'hängen (transitivo) = acción → Akkusativ.' },
          { de: 'Das Bild hängt <strong>an der Wand</strong>.', es: 'El cuadro está colgado en la pared.', note: 'hängen (intransitivo) = estado → Dativ.' }
        ]
      },
      {
        title: 'in/an + dem/das se contraen',
        content: `<p><strong>im</strong> (in+dem), <strong>ins</strong> (in+das), <strong>am</strong> (an+dem), <strong>ans</strong> (an+das) son contracciones muy frecuentes en el habla y la escritura — hay que reconocerlas al vuelo.</p>`,
        examples: [
          { de: 'Ich gehe <strong>ins</strong> Kino.', es: 'Voy al cine.', note: 'in + das.' },
          { de: 'Ich bin <strong>im</strong> Kino.', es: 'Estoy en el cine.', note: 'in + dem.' },
          { de: 'Wir gehen <strong>ans</strong> Meer.', es: 'Vamos al mar.', note: 'an + das.' },
          { de: 'Wir sind <strong>am</strong> Meer.', es: 'Estamos en el mar.', note: 'an + dem.' }
        ]
      }
    ],
    cheatsheet: window.SHARED.tables.wechselList + extraCheatsheet,
    exercises: [
      { id: 'wex-01', type: 'select-case', prompt: 'Ich lege das Buch auf [[den Tisch]].', answer: 'Akkusativ', explanation: 'Movimiento hacia un destino (¿Wohin?) → Akkusativ.', tip: 'La regla de oro de an/auf/in/über…: ¿Wohin? (movimiento a un destino) → Akkusativ · ¿Wo? (ubicación estática) → Dativ.' },
      { id: 'wex-02', type: 'select-case', prompt: 'Das Buch liegt auf [[dem Tisch]].', answer: 'Dativ', explanation: 'Ubicación estática (¿Wo?) → Dativ.' },
      { id: 'wex-03', type: 'multiple-choice', prompt: 'Ich gehe in ___ Küche.', options: ['die', 'der', 'den', 'dem'], answer: 'die', explanation: 'Wohin? Movimiento → Akkusativ → die Küche.' },
      { id: 'wex-04', type: 'multiple-choice', prompt: 'Ich bin in ___ Küche.', options: ['der', 'die', 'den', 'dem'], answer: 'der', explanation: 'Wo? Ubicación → Dativ → der Küche.' },
      { id: 'wex-05', type: 'multiple-choice', prompt: 'Ich stelle die Flasche in ___ Kühlschrank.', options: ['den', 'dem', 'der', 'des'], answer: 'den' },
      { id: 'wex-06', type: 'multiple-choice', prompt: 'Die Flasche steht in ___ Kühlschrank.', options: ['dem', 'den', 'der', 'des'], answer: 'dem' },
      { id: 'wex-07', type: 'multiple-choice', prompt: 'Ich hänge das Bild an ___ Wand.', options: ['die', 'der', 'den', 'dem'], answer: 'die' },
      { id: 'wex-08', type: 'multiple-choice', prompt: 'Das Bild hängt an ___ Wand.', options: ['der', 'die', 'den', 'dem'], answer: 'der' },
      { id: 'wex-09', type: 'fill-blank', prompt: 'Wir gehen ___ (in+das) Kino.', answer: 'ins', explanation: 'in + das se contrae en „ins" cuando hay movimiento.' },
      { id: 'wex-10', type: 'fill-blank', prompt: 'Wir sind ___ (in+dem) Kino.', answer: 'im', explanation: 'in + dem se contrae en „im" para ubicación.' },
      { id: 'wex-11', type: 'fill-blank', prompt: 'Wir gehen ___ (an+das) Meer.', answer: 'ans' },
      { id: 'wex-12', type: 'fill-blank', prompt: 'Wir sind ___ (an+dem) Meer.', answer: 'am' },
      { id: 'wex-13', type: 'select-case', prompt: 'Die Katze sitzt unter [[dem Stuhl]].', answer: 'Dativ', explanation: 'sitzen = estado, ubicación → Dativ.' },
      { id: 'wex-14', type: 'select-case', prompt: 'Die Katze springt unter [[den Stuhl]].', answer: 'Akkusativ', explanation: 'springen = movimiento hacia un destino → Akkusativ.' },
      { id: 'wex-15', type: 'multiple-choice', prompt: 'Er setzt sich neben ___ Freundin.', options: ['seine', 'seiner', 'seinen', 'seines'], answer: 'seine', explanation: 'sich setzen = movimiento (sentarse) → Akkusativ.' },
      { id: 'wex-16', type: 'multiple-choice', prompt: 'Er sitzt neben ___ Freundin.', options: ['seiner', 'seine', 'seinen', 'seines'], answer: 'seiner', explanation: 'sitzen = estado → Dativ.' },
      { id: 'wex-17', type: 'select-case', prompt: 'Das Auto parkt zwischen [[den beiden Bäumen]].', answer: 'Dativ', explanation: 'parken describe una ubicación, no un movimiento → Dativ.' },
      { id: 'wex-18', type: 'multiple-choice', prompt: 'Stell den Stuhl vor ___ Tisch!', options: ['den', 'dem', 'der', 'des'], answer: 'den', explanation: 'Orden de colocar (movimiento) → Akkusativ.' },
      { id: 'wex-19', type: 'multiple-choice', prompt: 'Der Stuhl steht vor ___ Tisch.', options: ['dem', 'den', 'der', 'des'], answer: 'dem' },
      { id: 'wex-20', type: 'translate', prompt: 'Traduce: El gato está debajo de la mesa.', answer: 'Die Katze ist unter dem Tisch.', acceptable: ['Die Katze sitzt unter dem Tisch.', 'Die Katze liegt unter dem Tisch.'], explanation: 'Ubicación estática → Dativ: unter dem Tisch. (sitzt/liegt también valen — incluso son más idiomáticos.)' },
      { id: 'wex-21', type: 'translate', prompt: 'Traduce: El gato salta debajo de la mesa.', answer: 'Die Katze springt unter den Tisch.', explanation: 'Movimiento hacia un destino → Akkusativ: unter den Tisch.' },
      { id: 'wex-22', type: 'select-case', prompt: 'Zwischen [[den Häusern]] ist ein kleiner Garten.', answer: 'Dativ', explanation: '„ist" describe ubicación, no movimiento → Dativ.' },
      { id: 'wex-23', type: 'multiple-choice', prompt: 'Ich hänge das Poster über ___ Bett.', options: ['das', 'dem', 'den', 'der'], answer: 'das', explanation: 'Movimiento (colgar hacia un sitio, ¿wohin?) → Akkusativ; „das Bett" no cambia pero el caso es Akkusativ.' },
      { id: 'wex-24', type: 'multiple-choice', prompt: 'Das Poster hängt über ___ Bett.', options: ['dem', 'das', 'den', 'der'], answer: 'dem', explanation: 'Ubicación estática (¿wo?) → Dativ → dem Bett.' },
      { id: 'wex-25', type: 'multiple-choice', prompt: 'Leg das Buch auf ___ Tisch!', options: ['den', 'dem', 'der', 'des'], answer: 'den', explanation: 'legen = movimiento hacia un destino → Akkusativ.' },
      { id: 'wex-26', type: 'multiple-choice', prompt: 'Das Buch liegt auf ___ Boden.', options: ['dem', 'den', 'der', 'des'], answer: 'dem', explanation: 'liegen = estado → Dativ.' },
      { id: 'wex-27', type: 'multiple-choice', prompt: 'Wir fahren heute an ___ See.', options: ['den', 'dem', 'der', 'des'], answer: 'den', explanation: 'Movimiento hacia un destino → Akkusativ; „der See" → den See.' },
      { id: 'wex-28', type: 'select-case', prompt: 'Die Lampe hängt über [[dem Tisch]].', answer: 'Dativ', explanation: 'Estado (dónde está colgada) → Dativ.' },
      { id: 'wex-29', type: 'select-case', prompt: 'Häng die Lampe über [[den Tisch]]!', answer: 'Akkusativ', explanation: 'Movimiento (colgarla hacia allí) → Akkusativ.' },
      { id: 'wex-30', type: 'fill-blank', prompt: 'Die Kinder spielen ___ (in+dem) Garten.', answer: 'im', explanation: 'Ubicación (¿wo?) → in+dem = im.' },
      { id: 'wex-31', type: 'fill-blank', prompt: 'Die Katze springt ___ (auf+den) Tisch.', answer: 'auf den', explanation: 'Movimiento (¿wohin?) → Akkusativ: auf den Tisch (no se contrae).' },
      { id: 'wex-32', type: 'translate', prompt: 'Traduce: Pongo la botella sobre la mesa.', answer: 'Ich stelle die Flasche auf den Tisch.', explanation: 'stellen = movimiento → Akkusativ: auf den Tisch.' },
      { id: 'wex-33', type: 'translate', prompt: 'Traduce: La botella está sobre la mesa.', answer: 'Die Flasche steht auf dem Tisch.', explanation: 'stehen = estado → Dativ: auf dem Tisch.' },
      { id: 'wex-34', type: 'multiple-choice', prompt: 'Müde legt er sich ___ (in+das) Bett.', options: ['ins', 'im', 'in den', 'in dem'], answer: 'ins', explanation: 'sich legen = movimiento → Akkusativ; in+das = ins.' },
      { id: 'wex-35', type: 'buckets', prompt: '¿Movimiento (Akkusativ) o ubicación (Dativ)?', buckets: ['Akkusativ', 'Dativ'], items: [['in die Küche', 'Akkusativ'], ['in der Küche', 'Dativ'], ['auf den Tisch', 'Akkusativ'], ['auf dem Tisch', 'Dativ'], ['ins Kino', 'Akkusativ'], ['im Kino', 'Dativ']], explanation: 'die/den/ins = destino (¿wohin?) → Akkusativ; der/dem/im = ubicación (¿wo?) → Dativ.' },
      { id: 'wex-36', type: 'reorder', words: ['Die', 'Katze', 'springt', 'auf', 'den', 'Tisch'], hint: 'El gato salta a la mesa.', answer: 'Die Katze springt auf den Tisch.', explanation: 'springen = movimiento hacia destino → Akkusativ: auf den Tisch.' }
      ,
      { id: 'wex-37', type: 'multiple-choice', prompt: 'Historia: Wohin stellen Nina und Jonas das Sofa?', options: ['ins Wohnzimmer, an die Wand', 'in die Küche', 'unter das Fenster', 'auf den Balkon'], answer: 'ins Wohnzimmer, an die Wand', explanation: '„Stell es ins Wohnzimmer, an die Wand." — movimiento → Akkusativ.' },
      { id: 'wex-38', type: 'multiple-choice', prompt: 'Historia: Wo schläft die Katze?', options: ['unter dem Sofa', 'auf dem Tisch', 'im Karton', 'an der Wand'], answer: 'unter dem Sofa', explanation: '„Sie liegt unter dem Sofa und schläft." — ubicación → Dativ.' },
      { id: 'wex-39', type: 'fill-blank', prompt: 'Historia: Am Abend hängen sie ein Bild an ___ Wand. (movimiento)', answer: 'die', explanation: 'Colgar HACIA la pared = movimiento → Akkusativ: an die Wand.' }
    ],
    story: {
      intro: 'Nina y Jonas se mudan. Cada mueble primero SE COLOCA en un sitio (Akkusativ) y luego ESTÁ en ese sitio (Dativ) — la historia entera es el juego wohin/wo.',
      lines: [
        { speaker: '', de: 'Nina und Jonas ziehen in eine neue Wohnung. Überall stehen Kisten.', es: 'Nina y Jonas se mudan a un piso nuevo. Hay cajas por todas partes.' },
        { speaker: 'Jonas', de: 'Wohin stelle ich das Sofa?', es: '¿Dónde (hacia dónde) pongo el sofá?' },
        { speaker: 'Nina', de: 'Stell es ins Wohnzimmer, an die Wand.', es: 'Ponlo en el salón, contra la pared.' },
        { speaker: 'Jonas', de: 'Und die Lampe?', es: '¿Y la lámpara?' },
        { speaker: 'Nina', de: 'Die stellen wir auf den kleinen Tisch.', es: 'Esa la ponemos en la mesita.' },
        { speaker: '', de: 'Eine Stunde später steht das Sofa im Wohnzimmer und die Lampe steht auf dem Tisch.', es: 'Una hora después, el sofá está en el salón y la lámpara está en la mesa.' },
        { speaker: 'Jonas', de: 'Wo ist eigentlich die Katze? Ich sehe sie nicht.', es: 'Por cierto, ¿dónde está la gata? No la veo.' },
        { speaker: 'Nina', de: 'Schau mal unter das Sofa...', es: 'Mira debajo del sofá…' },
        { speaker: 'Jonas', de: 'Da ist sie! Sie liegt unter dem Sofa und schläft.', es: '¡Ahí está! Está tumbada debajo del sofá, durmiendo.' },
        { speaker: 'Nina', de: 'Natürlich. Wir arbeiten, und sie legt sich unter das Sofa.', es: 'Claro. Nosotros trabajando, y ella va y se tumba debajo del sofá.' },
        { speaker: '', de: 'Am Abend hängen sie noch ein Bild an die Wand — fertig!', es: 'Por la noche cuelgan además un cuadro en la pared — ¡listo!' }
      ]
    }
  });
})();
