(function (root) {
  var module = {
    id: 'vocab-01',
    category: 'top1000',
    title: 'Top 1-100 palabras',
    notes: '' +
      '<p>En esta primera lección aprenderás las 100 palabras más comunes del alemán. ¡Con este pequeño grupo de palabras ya puedes formar muchísimas frases!</p>' +
      '<div class="ref-table-wrap"><table class="ref-table">' +
      '<caption>Palabras 1 a 20</caption>' +
      '<tr><th>Alemán</th><th>Español</th></tr>' +
      '<tr><td>ich</td><td>yo</td></tr>' +
      '<tr><td>sein</td><td>ser / estar</td></tr>' +
      '<tr><td>nicht</td><td>no</td></tr>' +
      '<tr><td>sie</td><td>ella / ellos</td></tr>' +
      '<tr><td>du</td><td>tú</td></tr>' +
      '<tr><td>das, die, der</td><td>el, la, lo (artículos)</td></tr>' +
      '<tr><td>es</td><td>ello (pronombre neutro)</td></tr>' +
      '<tr><td>und</td><td>y</td></tr>' +
      '<tr><td>zu</td><td>a / hacia / demasiado</td></tr>' +
      '<tr><td>ein, eine</td><td>un, una</td></tr>' +
      '<tr><td>in</td><td>en</td></tr>' +
      '<tr><td>wir</td><td>nosotros</td></tr>' +
      '<tr><td>mir, mich</td><td>a mí, me</td></tr>' +
      '<tr><td>mit</td><td>con</td></tr>' +
      '<tr><td>was</td><td>qué</td></tr>' +
      '<tr><td>auf</td><td>en / sobre</td></tr>' +
      '<tr><td>dass</td><td>que (conjunción)</td></tr>' +
      '<tr><td>er</td><td>él</td></tr>' +
      '<tr><td>haben</td><td>tener / haber</td></tr>' +
      '<tr><td>so</td><td>así / tan</td></tr>' +
      '</table></div>' +
      '<div class="ref-table-wrap"><table class="ref-table">' +
      '<caption>Palabras 21 a 40</caption>' +
      '<tr><th>Alemán</th><th>Español</th></tr>' +
      '<tr><td>von</td><td>de</td></tr>' +
      '<tr><td>dir, dich</td><td>a ti, te</td></tr>' +
      '<tr><td>für</td><td>para</td></tr>' +
      '<tr><td>ja</td><td>sí</td></tr>' +
      '<tr><td>hier</td><td>aquí</td></tr>' +
      '<tr><td>an</td><td>en / junto a</td></tr>' +
      '<tr><td>wie</td><td>como / cómo</td></tr>' +
      '<tr><td>noch</td><td>todavía / aún</td></tr>' +
      '<tr><td>uns</td><td>nosotros / a nosotros</td></tr>' +
      '<tr><td>sich</td><td>se (reflexivo)</td></tr>' +
      '<tr><td>nur</td><td>solo / solamente</td></tr>' +
      '<tr><td>nein</td><td>no</td></tr>' +
      '<tr><td>ihn, ihm</td><td>a él, le</td></tr>' +
      '<tr><td>auch</td><td>también</td></tr>' +
      '<tr><td>ihr</td><td>vosotros / a ella</td></tr>' +
      '<tr><td>da</td><td>allí / ya que</td></tr>' +
      '<tr><td>aus</td><td>de / desde</td></tr>' +
      '<tr><td>können</td><td>poder</td></tr>' +
      '<tr><td>aber</td><td>pero</td></tr>' +
      '<tr><td>schon</td><td>ya</td></tr>' +
      '</table></div>' +
      '<div class="ref-table-wrap"><table class="ref-table">' +
      '<caption>Palabras 41 a 60</caption>' +
      '<tr><th>Alemán</th><th>Español</th></tr>' +
      '<tr><td>wenn</td><td>si (condicional) / cuando</td></tr>' +
      '<tr><td>werden</td><td>llegar a ser / volverse (auxiliar futuro/pasiva)</td></tr>' +
      '<tr><td>um</td><td>alrededor de / a las (hora)</td></tr>' +
      '<tr><td>als</td><td>como / cuando (pasado)</td></tr>' +
      '<tr><td>mal</td><td>vez</td></tr>' +
      '<tr><td>doch</td><td>sin embargo / sí que (contradecir negación)</td></tr>' +
      '<tr><td>gut</td><td>bien / bueno</td></tr>' +
      '<tr><td>mein</td><td>mi</td></tr>' +
      '<tr><td>jetzt</td><td>ahora</td></tr>' +
      '<tr><td>wissen</td><td>saber</td></tr>' +
      '<tr><td>nach</td><td>después de / hacia</td></tr>' +
      '<tr><td>oh</td><td>oh</td></tr>' +
      '<tr><td>oder</td><td>o</td></tr>' +
      '<tr><td>dann</td><td>entonces</td></tr>' +
      '<tr><td>wollen</td><td>querer</td></tr>' +
      '<tr><td>mehr</td><td>más</td></tr>' +
      '<tr><td>kein</td><td>ningún / ninguno</td></tr>' +
      '<tr><td>etwas</td><td>algo</td></tr>' +
      '<tr><td>alles</td><td>todo</td></tr>' +
      '<tr><td>müssen</td><td>tener que / deber</td></tr>' +
      '</table></div>' +
      '<div class="ref-table-wrap"><table class="ref-table">' +
      '<caption>Palabras 61 a 80</caption>' +
      '<tr><th>Alemán</th><th>Español</th></tr>' +
      '<tr><td>immer</td><td>siempre</td></tr>' +
      '<tr><td>nichts</td><td>nada</td></tr>' +
      '<tr><td>man</td><td>se / uno (impersonal)</td></tr>' +
      '<tr><td>wieder</td><td>otra vez</td></tr>' +
      '<tr><td>bei</td><td>en / junto a / cerca de</td></tr>' +
      '<tr><td>machen</td><td>hacer</td></tr>' +
      '<tr><td>vor</td><td>delante de / antes de</td></tr>' +
      '<tr><td>Mann</td><td>hombre</td></tr>' +
      '<tr><td>tun</td><td>hacer</td></tr>' +
      '<tr><td>sagen</td><td>decir</td></tr>' +
      '<tr><td>denn</td><td>pues / porque</td></tr>' +
      '<tr><td>warum</td><td>por qué</td></tr>' +
      '<tr><td>gehen</td><td>ir</td></tr>' +
      '<tr><td>sehen</td><td>ver</td></tr>' +
      '<tr><td>sehr</td><td>muy</td></tr>' +
      '<tr><td>alle</td><td>todos</td></tr>' +
      '<tr><td>über</td><td>sobre / acerca de</td></tr>' +
      '<tr><td>einfach</td><td>simple / simplemente</td></tr>' +
      '<tr><td>euch</td><td>a vosotros</td></tr>' +
      '<tr><td>nie</td><td>nunca</td></tr>' +
      '</table></div>' +
      '<div class="ref-table-wrap"><table class="ref-table">' +
      '<caption>Palabras 81 a 100</caption>' +
      '<tr><th>Alemán</th><th>Español</th></tr>' +
      '<tr><td>also</td><td>así que / por lo tanto</td></tr>' +
      '<tr><td>wo</td><td>dónde</td></tr>' +
      '<tr><td>los</td><td>¡vamos! / suelto</td></tr>' +
      '<tr><td>Zeit</td><td>tiempo</td></tr>' +
      '<tr><td>ihnen</td><td>a ellos</td></tr>' +
      '<tr><td>geben</td><td>dar</td></tr>' +
      '<tr><td>wirklich</td><td>realmente</td></tr>' +
      '<tr><td>hey</td><td>hey</td></tr>' +
      '<tr><td>danke</td><td>gracias</td></tr>' +
      '<tr><td>dein</td><td>tu</td></tr>' +
      '<tr><td>sollen</td><td>deber (consejo/mandato)</td></tr>' +
      '</table></div>' +
      '<h3>Lectura: Un día sencillo</h3>' +
      '<p>A continuación, lee este pequeño texto que utiliza muchas de las palabras que acabas de aprender en contexto.</p>' +
      '<div class="story-box">' +
      '<p><strong>Hallo! Ich bin hier.</strong> (¡Hola! Yo estoy aquí.)</p>' +
      '<p><strong>Wie geht es dir?</strong> (¿Cómo te va? / ¿Qué tal estás?)</p>' +
      '<p><strong>Mir geht es sehr gut, danke. Und dir?</strong> (A mí me va muy bien, gracias. ¿Y a ti?)</p>' +
      '<p><strong>Wo bist du jetzt?</strong> (¿Dónde estás tú ahora?)</p>' +
      '<p><strong>Ich sehe einen Mann. Er ist mein Freund.</strong> (Yo veo a un hombre. Él es mi amigo.)</p>' +
      '<p><strong>Wir wollen etwas machen. Wir müssen gehen.</strong> (Nosotros queremos hacer algo. Nosotros tenemos que irnos.)</p>' +
      '<p><strong>Hast du Zeit?</strong> (¿Tienes tú tiempo?)</p>' +
      '<p><strong>Ja, ich habe Zeit. Aber wir können nicht alles tun.</strong> (Sí, yo tengo tiempo. Pero nosotros no podemos hacerlo todo.)</p>' +
      '<p><strong>Was sollen wir machen? Ich weiß es nicht.</strong> (¿Qué deberíamos hacer nosotros? Yo no lo sé.)</p>' +
      '<p><strong>Vielleicht einfach nur reden.</strong> (Tal vez simplemente solo hablar.)</p>' +
      '<p><strong>Es ist schon spät. Wir werden uns wieder sehen.</strong> (Ya es tarde. Nosotros nos volveremos a ver.)</p>' +
      '<p><strong>Alles gut, danke.</strong> (Todo bien, gracias.)</p>' +
      '</div>',
    exercises: [
      {
        id: 'v1-01',
        type: 'translate',
        german: 'Ich bin hier.',
        spanish: ['Yo estoy aquí', 'Estoy aquí']
      },
      {
        id: 'v1-02',
        type: 'translate',
        german: 'Wie geht es dir?',
        spanish: ['¿Cómo estás?', 'Cómo estás', '¿Qué tal?', '¿Cómo te va?', 'Qué tal']
      },
      {
        id: 'v1-03',
        type: 'translate',
        german: 'Wir wollen etwas machen.',
        spanish: ['Queremos hacer algo', 'Nosotros queremos hacer algo']
      },
      {
        id: 'v1-04',
        type: 'gap',
        text: 'Wir [müssen] gehen.',
        translation: 'Tenemos que irnos.'
      },
      {
        id: 'v1-05',
        type: 'gap',
        text: 'Ich [weiß] es nicht.',
        translation: 'No lo sé.'
      },
      {
        id: 'v1-06',
        type: 'listen',
        german: 'Es ist schon spät.'
      },
      {
        id: 'v1-07',
        type: 'listen',
        german: 'Wir werden uns wieder sehen.'
      },
      {
        id: 'v1-08',
        type: 'dictation',
        german: 'Hast du Zeit?',
        translation: '¿Tienes tiempo?'
      },
      {
        id: 'v1-09',
        type: 'dictation',
        german: 'Aber wir können nicht alles tun.',
        translation: 'Pero no podemos hacerlo todo.'
      },
      {
        id: 'v1-10',
        type: 'gap',
        text: 'Er ist [mein] Freund.',
        translation: 'Él es mi amigo.'
      }
    ]
  };

  if (typeof root.registerModule === 'function') {
    root.registerModule(module);
  }
})(typeof window !== 'undefined' ? window : globalThis);
