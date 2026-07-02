(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Conectores que provocan INVERSIÓN (verbo antes del sujeto)</caption>' +
    '<tr><th>Conector</th><th>Español</th></tr>' +
    '<tr><td>deshalb / deswegen / darum</td><td>por eso</td></tr>' +
    '<tr><td>trotzdem</td><td>aun así, a pesar de eso</td></tr>' +
    '<tr><td>außerdem</td><td>además</td></tr>' +
    '<tr><td>allerdings / jedoch</td><td>sin embargo</td></tr>' +
    '<tr><td>dann / danach</td><td>luego / después</td></tr>' +
    '</table></div>' +
    '<div class="warn">Estos NO son como „weil". Van en la frase principal y, al ir en la posición 1, empujan el verbo delante del sujeto: „Es regnet, <strong>deshalb bleibe ich</strong> zu Hause" (verbo „bleibe" antes de „ich"). Compáralo con „…, <strong>weil ich</strong> zu Hause <strong>bleibe</strong>" (weil manda el verbo al final).</div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Ordenar un argumento</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>zuerst / erstens</td><td>primero / en primer lugar</td></tr>' +
    '<tr><td>dann / danach</td><td>luego / después</td></tr>' +
    '<tr><td>außerdem</td><td>además</td></tr>' +
    '<tr><td>schließlich / zum Schluss</td><td>por último / al final</td></tr>' +
    '<tr><td>einerseits … andererseits</td><td>por un lado … por otro</td></tr>' +
    '<tr><td>es kommt darauf an / das hängt davon ab</td><td>depende</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'conectores',
    category: 'nivel4',
    track: 'Comunicación',
    icon: '🧩',
    title: 'Conectar ideas y argumentar',
    desc: 'deshalb, trotzdem, außerdem… los conectores que encadenan tus frases y te hacen sonar fluido (y provocan inversión).',
    lessons: [
      {
        title: 'Conectores con inversión: el salto de nivel',
        content: `<p>Palabras como <strong>deshalb</strong> (por eso), <strong>trotzdem</strong> (aun así), <strong>außerdem</strong> (además) o <strong>allerdings</strong> (sin embargo) enlazan dos frases principales. Al colocarlas al principio de la segunda, ocupan la posición 1 y, por la regla V2, el <strong>verbo va justo detrás — delante del sujeto</strong>.</p>
          <div class="warn">No los confundas con „weil/dass/obwohl" (que mandan el verbo al FINAL). „deshalb" y compañía son adverbios: viven en la frase principal y solo provocan inversión. „Es ist spät, <strong>deshalb gehe ich</strong>" ✓ — nunca „deshalb ich gehe".</div>`,
        examples: [
          { de: 'Es regnet, <strong>deshalb bleibe ich</strong> zu Hause.', es: 'Llueve, por eso me quedo en casa.', note: 'verbo „bleibe" antes del sujeto „ich".' },
          { de: 'Es ist teuer. <strong>Trotzdem kaufe ich</strong> es.', es: 'Es caro. Aun así lo compro.' },
          { de: 'Das Hotel ist schön. <strong>Außerdem ist</strong> es billig.', es: 'El hotel es bonito. Además es barato.' }
        ]
      },
      {
        title: 'Ordenar lo que dices',
        content: `<p>Para que una explicación suene estructurada, encadénala: <strong>zuerst</strong> (primero) → <strong>dann</strong> (luego) → <strong>außerdem</strong> (además) → <strong>schließlich</strong> (por último). Suena mil veces mejor que soltar frases sueltas.</p>`,
        examples: [
          { de: '<strong>Zuerst</strong> frühstücke ich, <strong>dann</strong> gehe ich zur Arbeit.', es: 'Primero desayuno, luego voy al trabajo.' },
          { de: '<strong>Schließlich</strong> sind wir nach Hause gegangen.', es: 'Por último nos fuimos a casa.' }
        ]
      },
      {
        title: 'Matizar y valorar en un debate',
        content: `<p>Para argumentar como un B2: <strong>einerseits… andererseits</strong> (por un lado… por otro), <strong>im Gegenteil</strong> (al contrario), <strong>es kommt darauf an / das hängt davon ab</strong> (depende).</p>`,
        examples: [
          { de: '<strong>Einerseits</strong> ist es teuer, <strong>andererseits</strong> spart man Zeit.', es: 'Por un lado es caro, por otro ahorras tiempo.' },
          { de: 'Ist Homeoffice besser? — <strong>Das hängt davon ab.</strong>', es: '¿Es mejor el teletrabajo? — Depende.' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'con-01', type: 'multiple-choice', prompt: 'Es regnet, ___ bleibe ich zu Hause. ("por eso")', options: ['deshalb', 'weil', 'dass', 'obwohl'], answer: 'deshalb', explanation: '„deshalb" = por eso; provoca inversión (verbo „bleibe" antes del sujeto).' },
      { id: 'con-02', type: 'reorder', words: ['Es', 'ist', 'spät,', 'deshalb', 'gehe', 'ich', 'nach', 'Hause'], hint: 'Es tarde, por eso me voy a casa.', answer: 'Es ist spät, deshalb gehe ich nach Hause.', explanation: 'Tras „deshalb", el verbo („gehe") va antes del sujeto („ich").' },
      { id: 'con-03', type: 'multiple-choice', prompt: '„trotzdem" =', options: ['aun así / a pesar de eso', 'porque', 'por eso', 'además'], answer: 'aun así / a pesar de eso' },
      { id: 'con-04', type: 'multiple-choice', prompt: '„außerdem" =', options: ['además', 'sin embargo', 'por eso', 'en cambio'], answer: 'además' },
      { id: 'con-05', type: 'multiple-choice', prompt: 'Para EMPEZAR una enumeración:', options: ['zuerst', 'schließlich', 'trotzdem', 'deshalb'], answer: 'zuerst', explanation: '„zuerst" = primero, en primer lugar.' },
      { id: 'con-06', type: 'multiple-choice', prompt: 'Para TERMINAR una enumeración:', options: ['schließlich', 'zuerst', 'außerdem', 'dann'], answer: 'schließlich', explanation: '„schließlich / zum Schluss" = por último.' },
      { id: 'con-07', type: 'fill-blank', prompt: 'Ich bin müde. ___ arbeite ich weiter. ("aun así", con inversión)', answer: 'Trotzdem', explanation: '„Trotzdem" en posición 1 → verbo „arbeite" antes del sujeto.' },
      { id: 'con-08', type: 'multiple-choice', prompt: '„allerdings" ≈', options: ['sin embargo', 'además', 'por eso', 'primero'], answer: 'sin embargo' },
      { id: 'con-09', type: 'multiple-choice', prompt: '„es kommt darauf an" / „das hängt davon ab" =', options: ['depende', 'estoy de acuerdo', 'además', 'por desgracia'], answer: 'depende' },
      { id: 'con-10', type: 'reorder', words: ['Ich', 'lerne', 'viel,', 'deshalb', 'bestehe', 'ich', 'die', 'Prüfung'], hint: 'Estudio mucho, por eso apruebo el examen.', answer: 'Ich lerne viel, deshalb bestehe ich die Prüfung.', explanation: 'Inversión tras „deshalb": verbo „bestehe" antes de „ich".' },
      { id: 'con-11', type: 'multiple-choice', prompt: '„einerseits … andererseits" =', options: ['por un lado … por otro', 'primero … después', 'o … o', 'ni … ni'], answer: 'por un lado … por otro' },
      { id: 'con-12', type: 'multiple-choice', prompt: '„im Gegenteil" =', options: ['al contrario', 'además', 'por eso', 'sin embargo'], answer: 'al contrario' },
      { id: 'con-13', type: 'fill-blank', prompt: 'Zuerst frühstücke ich, ___ gehe ich zur Arbeit. ("luego")', answer: 'dann', explanation: '„dann" = luego, después (también provoca inversión).' },
      { id: 'con-14', type: 'multiple-choice', prompt: 'Clave: „deshalb" frente a „weil":', options: ['deshalb: frase principal con inversión; weil: verbo al final', 'son intercambiables sin más', 'deshalb manda el verbo al final', 'weil provoca inversión'], answer: 'deshalb: frase principal con inversión; weil: verbo al final', explanation: '„deshalb" (adverbio) → inversión en frase principal; „weil" (conjunción) → verbo al final.' },
      { id: 'con-15', type: 'multiple-choice', prompt: 'Es ist kalt, ___ gehen wir spazieren. (aun así)', options: ['trotzdem', 'deshalb', 'weil', 'außerdem'], answer: 'trotzdem', explanation: '„trotzdem" = aun así (contraste), con inversión: trotzdem gehen wir.' },
      { id: 'con-16', type: 'reorder', words: ['Zuerst', 'koche', 'ich,', 'dann', 'esse', 'ich'], hint: 'Primero cocino, luego como.', answer: 'Zuerst koche ich, dann esse ich.', explanation: '„Zuerst" y „dann" provocan inversión: verbo antes del sujeto en ambas partes.' },
      { id: 'con-17', type: 'multiple-choice', prompt: 'Das Hotel ist billig. ___ liegt es zentral. (además)', options: ['Außerdem', 'Trotzdem', 'Deshalb', 'Allerdings'], answer: 'Außerdem', explanation: '„außerdem" = además (suma otro argumento).' },
      { id: 'con-18', type: 'translate', prompt: 'Traduce: Llueve, por eso me quedo en casa.', answer: 'Es regnet, deshalb bleibe ich zu Hause.', explanation: '„deshalb" + inversión: deshalb bleibe ich.' }
      ,
      { id: 'con-19', type: 'multiple-choice', prompt: 'Historia: Warum will Diana eigentlich Ja sagen?', options: ['Das Gehalt ist super', 'Hamburg ist billig', 'Ihre Freunde wohnen dort', 'Ihr Bruder wohnt dort'], answer: 'Das Gehalt ist super', explanation: '„Das Gehalt ist super, deshalb will ich eigentlich Ja sagen."' },
      { id: 'con-20', type: 'multiple-choice', prompt: 'Historia: Was soll Diana zuerst machen?', options: ['die Stadt besuchen', 'sofort Ja sagen', 'eine Wohnung suchen', 'mit ihren Freunden sprechen'], answer: 'die Stadt besuchen', explanation: '„Zuerst solltest du die Stadt besuchen. Dann kannst du besser entscheiden."' },
      { id: 'con-21', type: 'fill-blank', prompt: 'Historia: Das Gehalt ist super, ___ will ich eigentlich Ja sagen. (por eso)', answer: 'deshalb', explanation: '„deshalb" + inversión: deshalb will ich…' }
    ],
    story: {
      intro: 'A Diana le ofrecen un trabajo en Hamburgo y lo habla con su hermano. La deliberación entera va hilada con conectores: deshalb, allerdings, außerdem, einerseits/andererseits, zuerst, trotzdem, schließlich.',
      lines: [
        { speaker: '', de: 'Diana hat ein Jobangebot aus Hamburg bekommen. Sie spricht mit ihrem Bruder.', es: 'A Diana le ha llegado una oferta de trabajo de Hamburgo. Habla con su hermano.' },
        { speaker: 'Diana', de: 'Das Gehalt ist super, deshalb will ich eigentlich Ja sagen.', es: 'El sueldo es genial, por eso en principio quiero decir que sí.' },
        { speaker: 'Bruder', de: 'Verstehe. Allerdings sind die Mieten in Hamburg sehr hoch.', es: 'Entiendo. Sin embargo, los alquileres en Hamburgo son muy altos.' },
        { speaker: 'Diana', de: 'Stimmt. Außerdem wohnen alle meine Freunde hier.', es: 'Cierto. Además, todos mis amigos viven aquí.' },
        { speaker: 'Bruder', de: 'Einerseits ist die Stelle eine große Chance...', es: 'Por un lado, el puesto es una gran oportunidad…' },
        { speaker: 'Diana', de: '...andererseits verliere ich mein ganzes Leben hier. Genau.', es: '…por otro, pierdo toda mi vida de aquí. Exacto.' },
        { speaker: 'Bruder', de: 'Zuerst solltest du die Stadt besuchen. Dann kannst du besser entscheiden.', es: 'Primero deberías visitar la ciudad. Luego podrás decidir mejor.' },
        { speaker: 'Diana', de: 'Gute Idee. Trotzdem habe ich Angst vor der Entscheidung.', es: 'Buena idea. Aun así, me da miedo la decisión.' },
        { speaker: 'Bruder', de: 'Das ist normal. Schließlich geht es um dein Leben.', es: 'Es normal. Al fin y al cabo, se trata de tu vida.' },
        { speaker: '', de: 'Am Wochenende fährt Diana nach Hamburg — und verliebt sich in die Stadt.', es: 'El fin de semana Diana va a Hamburgo — y se enamora de la ciudad.' },
        { speaker: 'Diana', de: 'Ich habe eine Entscheidung getroffen. Hamburg, ich komme!', es: 'He tomado una decisión. ¡Hamburgo, allá voy!' }
      ]
    }
  });
})();
