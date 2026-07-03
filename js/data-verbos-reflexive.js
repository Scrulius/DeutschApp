(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Pronombres reflexivos: Akkusativ vs Dativ</caption>' +
    '<tr><th>Persona</th><th>Akkusativ</th><th>Dativ</th></tr>' +
    '<tr><td>ich</td><td>mich</td><td>mir</td></tr>' +
    '<tr><td>du</td><td>dich</td><td>dir</td></tr>' +
    '<tr><td>er/sie/es</td><td>sich</td><td>sich</td></tr>' +
    '<tr><td>wir</td><td>uns</td><td>uns</td></tr>' +
    '<tr><td>ihr</td><td>euch</td><td>euch</td></tr>' +
    '<tr><td>sie/Sie</td><td>sich</td><td>sich</td></tr>' +
    '</table></div>' +
    '<div class="tip">Solo ich/du cambian de forma entre Akkusativ y Dativ (mich/mir, dich/dir). El resto de personas usan la misma palabra en los dos casos — así que la duda real solo existe con "yo" y "tú".</div>';

  registerModule({
    id: 'reflexive',
    category: 'nivel2',
    icon: '🪞',
    title: 'Verbos reflexivos — ¿mich o mir?',
    desc: 'sich waschen, sich anziehen... cuándo el reflexivo es Akkusativ y cuándo pasa a ser Dativ.',
    lessons: [
      {
        title: 'Por defecto, el reflexivo es Akkusativ',
        content: `<p>La mayoría de verbos reflexivos usan el pronombre reflexivo en <strong>Akkusativ</strong> (mich, dich, sich, uns, euch, sich) cuando no hay ningún otro objeto directo en la frase.</p>`,
        examples: [
          { de: 'Ich freue mich.', es: 'Me alegro.' },
          { de: 'Du entspannst dich.', es: 'Tú te relajas.' },
          { de: 'Er interessiert sich für Sport.', es: 'Él se interesa por el deporte.' },
          { de: 'Wir treffen uns um sechs.', es: 'Quedamos a las seis.' }
        ]
      },
      {
        title: 'Con objeto directo, el reflexivo pasa a Dativ',
        content: `<p>Con verbos de cuidado personal o posesión (<strong>waschen, anziehen, kämmen, putzen, kaufen, merken, vorstellen</strong>...), si además hay un objeto directo explícito (una parte del cuerpo, una prenda, algo comprado), el reflexivo se convierte en objeto indirecto → <strong>Dativ</strong>, y esa cosa pasa a ser el objeto directo en Akkusativ.</p>
          <div class="tip">Pregúntate: "¿me hago algo A MÍ MISMO en general (Akk), o me hago algo A MÍ MISMO CON un objeto concreto (Dat + Akk)?"</div>`,
        examples: [
          { de: 'Ich wasche mich.', es: 'Me lavo.', note: 'Sin objeto directo → mich (Akk).' },
          { de: 'Ich wasche mir die Hände.', es: 'Me lavo las manos.', note: 'Objeto directo „die Hände" → mir (Dat).' },
          { de: 'Ich ziehe mich an.', es: 'Me visto.', note: 'mich (Akk).' },
          { de: 'Ich ziehe mir die Jacke an.', es: 'Me pongo la chaqueta.', note: 'Objeto directo „die Jacke" → mir (Dat).' },
          { de: 'Ich kaufe mir ein neues Handy.', es: 'Me compro un móvil nuevo.', note: 'Objeto directo „ein neues Handy" → mir (Dat).' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'ref-01', type: 'multiple-choice', prompt: 'Ich freue ___ über das Wetter.', options: ['mich', 'mir', 'dich', 'sich'], answer: 'mich' },
      { id: 'ref-02', type: 'multiple-choice', prompt: 'Ich wasche ___.', options: ['mich', 'mir', 'dich', 'sich'], answer: 'mich', explanation: 'Sin objeto directo → reflexivo en Akkusativ.' },
      { id: 'ref-03', type: 'multiple-choice', prompt: 'Ich wasche ___ die Hände.', options: ['mir', 'mich', 'dir', 'dich'], answer: 'mir', explanation: 'Hay objeto directo („die Hände"): el reflexivo pasa a Dativ.' },
      { id: 'ref-04', type: 'multiple-choice', prompt: 'Ich ziehe ___ an.', options: ['mich', 'mir', 'dich', 'dir'], answer: 'mich' },
      { id: 'ref-05', type: 'multiple-choice', prompt: 'Ich ziehe ___ die Jacke an.', options: ['mir', 'mich', 'dir', 'dich'], answer: 'mir' },
      { id: 'ref-06', type: 'multiple-choice', prompt: 'Ich putze ___ die Zähne.', options: ['mir', 'mich', 'dir', 'dich'], answer: 'mir', explanation: 'putzen + objeto directo (die Zähne) → reflexivo en Dativ siempre.' },
      { id: 'ref-07', type: 'multiple-choice', prompt: 'Ich kaufe ___ ein neues Handy.', options: ['mir', 'mich', 'dir', 'dich'], answer: 'mir' },
      { id: 'ref-08', type: 'multiple-choice', prompt: 'Du entspannst ___.', options: ['dich', 'dir', 'mich', 'sich'], answer: 'dich' },
      { id: 'ref-09', type: 'multiple-choice', prompt: 'Er interessiert ___ für Sport.', options: ['sich', 'ihn', 'ihm', 'er'], answer: 'sich' },
      { id: 'ref-10', type: 'multiple-choice', prompt: 'Wir treffen ___ um sechs.', options: ['uns', 'euch', 'sich', 'wir'], answer: 'uns' },
      { id: 'ref-11', type: 'multiple-choice', prompt: 'Kämmst du ___ die Haare?', options: ['dir', 'dich', 'du', 'deiner'], answer: 'dir', explanation: 'kämmen + objeto directo (die Haare) → Dativ.' },
      { id: 'ref-12', type: 'select-case', prompt: 'Ich kann [[mir]] das gut vorstellen.', answer: 'Dativ', explanation: '„sich etwas vorstellen" (imaginarse algo) usa el reflexivo en Dativ; „das" es el objeto directo en Akkusativ.' },
      { id: 'ref-13', type: 'translate', prompt: 'Traduce: Me lavo las manos.', answer: 'Ich wasche mir die Hände.', explanation: 'Objeto directo presente → reflexivo Dativ.' },
      { id: 'ref-14', type: 'translate', prompt: 'Traduce: Me alegro.', answer: 'Ich freue mich.', explanation: 'Sin objeto directo → reflexivo Akkusativ.' },
      { id: 'ref-15', type: 'multiple-choice', prompt: 'Stellt ihr ___ vor?', options: ['euch', 'euer', 'ihr', 'sich'], answer: 'euch', explanation: 'sich vorstellen (presentarse) sin otro objeto → Akkusativ: euch.' },
      { id: 'ref-16', type: 'multiple-choice', prompt: 'Ich merke ___ diesen Namen.', options: ['mir', 'mich', 'dir', 'dich'], answer: 'mir', explanation: 'sich etwas merken (retener algo en la memoria) → reflexivo Dativ, „diesen Namen" es el objeto Akkusativ.' },
      { id: 'ref-17', type: 'multiple-choice', prompt: 'Beeil ___! Wir sind spät dran.', options: ['dich', 'dir', 'du', 'deiner'], answer: 'dich', explanation: 'sich beeilen (darse prisa): sin objeto directo → Akkusativ.' },
      { id: 'ref-18', type: 'multiple-choice', prompt: 'Im Urlaub erhole ich ___ gut.', options: ['mich', 'mir', 'dich', 'sich'], answer: 'mich', explanation: 'sich erholen (descansar): Akkusativ.' },
      { id: 'ref-19', type: 'multiple-choice', prompt: 'Kannst du ___ das vorstellen?', options: ['dir', 'dich', 'du', 'deiner'], answer: 'dir', explanation: 'sich etwas vorstellen (imaginarse algo): con objeto directo („das") → Dativ.' },
      { id: 'ref-20', type: 'multiple-choice', prompt: 'Wir freuen ___ auf die Ferien.', options: ['uns', 'euch', 'sich', 'wir'], answer: 'uns', explanation: 'sich freuen sin objeto directo → Akkusativ; „wir" → uns.' },
      { id: 'ref-21', type: 'multiple-choice', prompt: 'Setz ___ bitte auf diesen Stuhl!', options: ['dich', 'dir', 'du', 'deiner'], answer: 'dich', explanation: 'sich setzen (sentarse): Akkusativ.' },
      { id: 'ref-22', type: 'multiple-choice', prompt: 'Ich wasche ___ das Gesicht.', options: ['mir', 'mich', 'dir', 'dich'], answer: 'mir', explanation: 'Con objeto directo („das Gesicht") → reflexivo en Dativ.' },
      { id: 'ref-23', type: 'translate', prompt: 'Traduce: Me lavo los dientes.', answer: 'Ich putze mir die Zähne.', explanation: 'Objeto directo („die Zähne") → reflexivo en Dativ (mir).' },
      { id: 'ref-24', type: 'multiple-choice', prompt: 'Interessiert ihr ___ für Kunst?', options: ['euch', 'euer', 'ihr', 'sich'], answer: 'euch', explanation: 'sich interessieren sin objeto directo → Akkusativ; „ihr" → euch.' },
      { id: 'ref-25', type: 'find-error', prompt: '¿Dónde está el error?', words: ['Ich', 'wasche', 'mich', 'die', 'Hände.'], wrong: 2, fix: 'mir', explanation: 'Hay objeto directo („die Hände") → el reflexivo pasa a Dativ: Ich wasche mir die Hände.' }
      ,
      { id: 'ref-26', type: 'multiple-choice', prompt: 'Historia: Was zieht sich Paula an?', options: ['das blaue Kleid', 'das rote Kleid', 'eine Jeans', 'einen Anzug'], answer: 'das blaue Kleid', explanation: '„Ich ziehe mir das blaue Kleid an." — con objeto directo, el reflexivo va en Dativ (mir).' },
      { id: 'ref-27', type: 'multiple-choice', prompt: 'Historia: „Beeil dich!" significa:', options: ['¡Date prisa!', '¡Cálmate!', '¡Siéntate!', '¡Despierta!'], answer: '¡Date prisa!', explanation: 'sich beeilen = darse prisa (reflexivo en Akkusativ: dich).' },
      { id: 'ref-28', type: 'fill-blank', prompt: 'Historia: Moment! Ich kämme ___ noch die Haare. (reflexivo)', answer: 'mir', explanation: 'Hay objeto directo („die Haare") → el reflexivo pasa a Dativ: mir.' },
      { id: 'ref-29', type: 'multiple-choice', prompt: 'Historia: Was für eine Party ist es wirklich?', options: ['eine Kostümparty', 'eine Geburtstagsparty', 'eine Gartenparty', 'eine Überraschungsparty'], answer: 'eine Kostümparty', explanation: '„Wo sind eure Kostüme?" — una hora arreglándose… para eso.' },
      { id: 'ref-30', type: 'multiple-choice', prompt: 'Historia: Was leiht Lisa den beiden?', options: ['zwei Hüte und eine alte Sonnenbrille', 'zwei Kostüme', 'ein blaues Kleid', 'nichts'], answer: 'zwei Hüte und eine alte Sonnenbrille', explanation: '„Ich habe noch zwei Hüte und eine alte Sonnenbrille." — y Marco no se las quitará jamás.' },
      { id: 'ref-31', type: 'fill-blank', prompt: 'Historia: Auf der Party amüsieren ___ alle. (reflexivo)', answer: 'sich', explanation: 'sich amüsieren: con „alle" (3ª persona) el reflexivo es sich.' }
    ],
    story: {
      intro: 'La fiesta empieza a las siete y Paula y Marco se arreglan a contrarreloj. Cada acción de cuidado personal lleva su reflexivo — y cambia entre mich y mir según haya objeto o no.',
      lines: [
        { speaker: '', de: 'Um sieben beginnt die Party. Es ist schon sechs.', es: 'La fiesta empieza a las siete. Ya son las seis.' },
        { speaker: 'Paula', de: 'Ich dusche mich schnell!', es: '¡Me ducho rápido!' },
        { speaker: '', de: 'Zehn Minuten später...', es: 'Diez minutos después…' },
        { speaker: 'Paula', de: 'Wo ist mein Kleid? Ich ziehe mir das blaue Kleid an.', es: '¿Dónde está mi vestido? Me pongo el vestido azul.' },
        { speaker: 'Marco', de: 'Beeil dich! Wir kommen zu spät!', es: '¡Date prisa! ¡Llegamos tarde!' },
        { speaker: 'Paula', de: 'Moment! Ich kämme mir noch die Haare.', es: '¡Un momento! Todavía me peino.' },
        { speaker: 'Marco', de: 'Und ich? Ich habe mich schon vor einer Stunde fertig gemacht.', es: '¿Y yo qué? Yo ya me arreglé hace una hora.' },
        { speaker: 'Paula', de: 'Du hast dich aber nicht rasiert. Setz dich hin und warte.', es: 'Pero no te has afeitado. Siéntate y espera.' },
        { speaker: '', de: 'Um Viertel nach sieben sind beide endlich fertig.', es: 'A las siete y cuarto, por fin están los dos listos.' },
        { speaker: 'Marco', de: 'Endlich! Freust du dich auf die Party?', es: '¡Por fin! ¿Tienes ganas de la fiesta?' },
        { speaker: 'Paula', de: 'Sehr! Aber zuerst... wo sind meine Schuhe?', es: '¡Muchas! Pero primero… ¿dónde están mis zapatos?' },
        { speaker: '', de: 'Um halb acht klingeln sie an Lisas Tür.', es: 'A las siete y media llaman a la puerta de Lisa.' },
        { speaker: 'Lisa', de: 'Da seid ihr ja! Kommt rein... Moment. Wo sind eure Kostüme?', es: '¡Por fin estáis aquí! Pasad… Un momento. ¿Y vuestros disfraces?' },
        { speaker: 'Paula', de: 'Kostüme?!', es: '¡¿Disfraces?!' },
        { speaker: 'Marco', de: 'Ich habe mich eine Stunde lang fertig gemacht... für eine Kostümparty?!', es: '¿Me he pasado una hora arreglándome… para una fiesta de disfraces?' },
        { speaker: 'Lisa', de: 'Ärgert euch nicht! Ich habe noch zwei Hüte und eine alte Sonnenbrille.', es: '¡No os enfadéis! Aún tengo dos sombreros y unas gafas de sol viejas.' },
        { speaker: '', de: 'Paula setzt sich den Hut auf. Marco setzt sich die Sonnenbrille auf.', es: 'Paula se pone el sombrero. Marco se pone las gafas de sol.' },
        { speaker: '', de: 'Auf der Party amüsieren sich alle. Paula und Marco unterhalten sich bis Mitternacht.', es: 'En la fiesta todos se lo pasan en grande. Paula y Marco charlan hasta medianoche.' },
        { speaker: 'Paula', de: 'Und morgen? Morgen ruhen wir uns aus. Den ganzen Tag!', es: '¿Y mañana? Mañana descansamos. ¡Todo el día!' },
        { speaker: 'Marco', de: 'Einverstanden. Aber diese Sonnenbrille setze ich nie wieder ab. Sie gefällt mir.', es: 'De acuerdo. Pero estas gafas de sol no me las quito nunca más. Me gustan.' }
      ]
    }
  });
})();
