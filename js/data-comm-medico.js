(function () {
  var cheatsheet = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Decir qué te pasa</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>Ich habe Kopfschmerzen.</td><td>Me duele la cabeza.</td></tr>' +
    '<tr><td>Ich habe Halsschmerzen / Bauchschmerzen.</td><td>Me duele la garganta / la barriga.</td></tr>' +
    '<tr><td>Ich habe Fieber.</td><td>Tengo fiebre.</td></tr>' +
    '<tr><td>Ich bin erkältet.</td><td>Estoy resfriado/a.</td></tr>' +
    '<tr><td>Mir ist schlecht.</td><td>Tengo náuseas / me encuentro mal.</td></tr>' +
    '<tr><td>Mein Bein tut weh.</td><td>Me duele la pierna.</td></tr>' +
    '</table></div>' +
    '<div class="tip">El dolor se dice de dos formas: con el sustantivo compuesto <strong>…schmerzen</strong> („Ich habe Kopf<strong>schmerzen</strong>") o con <strong>… tut weh</strong> („Mein Kopf <strong>tut weh</strong>"). Las dos valen.</div>' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>La cita y la farmacia</caption>' +
    '<tr><th>Alemán</th><th>Español</th></tr>' +
    '<tr><td>Ich möchte einen Termin.</td><td>Quiero una cita.</td></tr>' +
    '<tr><td>Haben Sie am Montag Zeit?</td><td>¿Tiene hueco el lunes?</td></tr>' +
    '<tr><td>Nehmen Sie diese Tabletten.</td><td>Tome estas pastillas.</td></tr>' +
    '<tr><td>dreimal am Tag</td><td>tres veces al día</td></tr>' +
    '<tr><td>Gute Besserung!</td><td>¡Que te mejores!</td></tr>' +
    '</table></div>';

  registerModule({
    id: 'medico',
    category: 'nivel3',
    track: 'Comunicación',
    icon: '🩺',
    title: 'En el médico y citas',
    desc: 'Pedir cita, decir qué te duele y entender al médico. Con „Ich habe …-schmerzen" y „Gute Besserung!".',
    lessons: [
      {
        title: 'Pedir cita',
        content: `<p>Para pedir una cita: <strong>Ich möchte einen Termin</strong> (quiero una cita) o <strong>Ich hätte gern einen Termin</strong>. Para acordar el día: <strong>Haben Sie am Montag Zeit?</strong> (¿tiene hueco el lunes?).</p>`,
        examples: [
          { de: '<strong>Ich möchte einen Termin</strong> beim Arzt.', es: 'Quiero una cita con el médico.' },
          { de: '<strong>Haben Sie am Dienstag Zeit?</strong>', es: '¿Tiene hueco el martes?' }
        ]
      },
      {
        title: 'Decir qué te duele',
        content: `<p>Dos construcciones equivalentes. Con el sustantivo del dolor: <strong>Ich habe Kopfschmerzen</strong> (los -schmerzen se pegan a la parte del cuerpo: Kopf-, Hals-, Bauch-, Zahn-, Rücken-). O con <strong>… tut weh</strong>: <strong>Mein Kopf tut weh</strong>. Otros útiles: <strong>Ich habe Fieber</strong>, <strong>Ich bin erkältet</strong>, <strong>Mir ist schlecht</strong>.</p>`,
        examples: [
          { de: 'Ich habe <strong>Kopfschmerzen</strong>.', es: 'Me duele la cabeza.', note: 'Kopf (cabeza) + schmerzen (dolores).' },
          { de: 'Ich habe <strong>Halsschmerzen</strong> und <strong>Fieber</strong>.', es: 'Me duele la garganta y tengo fiebre.' },
          { de: 'Mein Rücken <strong>tut weh</strong>.', es: 'Me duele la espalda.' },
          { de: '<strong>Mir ist schlecht.</strong>', es: 'Tengo náuseas / me encuentro mal.' }
        ]
      },
      {
        title: 'Entender al médico',
        content: `<p>El médico suele decir: <strong>Nehmen Sie diese Tabletten</strong> (tome estas pastillas), con la frecuencia <strong>… mal am Tag</strong> (…veces al día). Y al despedirse: <strong>Gute Besserung!</strong> (¡que te mejores!).</p>`,
        examples: [
          { de: '<strong>Nehmen Sie</strong> die Tabletten <strong>dreimal am Tag</strong>.', es: 'Tome las pastillas tres veces al día.' },
          { de: 'Bleiben Sie im Bett. <strong>Gute Besserung!</strong>', es: 'Quédese en cama. ¡Que se mejore!' }
        ]
      }
    ],
    cheatsheet: cheatsheet,
    exercises: [
      { id: 'med-01', type: 'translate', prompt: 'Traduce: Me duele la cabeza.', answer: 'Ich habe Kopfschmerzen.', acceptable: ['Mein Kopf tut weh.'], explanation: 'Kopf + schmerzen, o „Mein Kopf tut weh".' },
      { id: 'med-02', type: 'multiple-choice', prompt: '„Halsschmerzen" =', options: ['dolor de garganta', 'dolor de cabeza', 'dolor de barriga', 'fiebre'], answer: 'dolor de garganta', explanation: 'der Hals = el cuello/la garganta.' },
      { id: 'med-03', type: 'multiple-choice', prompt: '„Gute Besserung!" =', options: ['¡Que te mejores!', '¡Salud!', '¡Que aproveche!', '¡Suerte!'], answer: '¡Que te mejores!' },
      { id: 'med-04', type: 'fill-blank', prompt: 'Ich habe ___. (fiebre)', answer: 'Fieber', explanation: 'das Fieber = la fiebre.' },
      { id: 'med-05', type: 'translate', prompt: 'Traduce: Quiero una cita.', answer: 'Ich möchte einen Termin.', acceptable: ['Ich hätte gern einen Termin.'], explanation: 'der Termin = la cita → einen Termin (Akkusativ).' },
      { id: 'med-06', type: 'multiple-choice', prompt: '„Mir ist schlecht." =', options: ['Tengo náuseas / me encuentro mal', 'Estoy bien', 'Tengo prisa', 'Tengo hambre'], answer: 'Tengo náuseas / me encuentro mal' },
      { id: 'med-07', type: 'match', prompt: 'Empareja el síntoma con su significado:', pairs: [['Kopfschmerzen', 'dolor de cabeza'], ['Halsschmerzen', 'dolor de garganta'], ['Zahnschmerzen', 'dolor de muelas'], ['Fieber', 'fiebre']], explanation: 'Los …schmerzen se forman con la parte del cuerpo + „schmerzen".' },
      { id: 'med-08', type: 'multiple-choice', prompt: '„Ich bin erkältet." =', options: ['Estoy resfriado/a', 'Estoy cansado/a', 'Tengo fiebre', 'Me he roto algo'], answer: 'Estoy resfriado/a' },
      { id: 'med-09', type: 'fill-blank', prompt: 'Mein Bein tut ___. (duele)', answer: 'weh', explanation: '„… tut weh" = … duele.' },
      { id: 'med-10', type: 'multiple-choice', prompt: 'Nehmen Sie die Tabletten ___ am Tag. (tres veces)', options: ['dreimal', 'drei', 'dritte', 'dreißig'], answer: 'dreimal', explanation: '„dreimal am Tag" = tres veces al día.' },
      { id: 'med-11', type: 'translate', prompt: 'Traduce: Me duele la barriga.', answer: 'Ich habe Bauchschmerzen.', acceptable: ['Mein Bauch tut weh.'], explanation: 'der Bauch = la barriga → Bauchschmerzen.' },
      { id: 'med-12', type: 'match', prompt: 'Empareja la parte del cuerpo:', pairs: [['der Kopf', 'la cabeza'], ['der Bauch', 'la barriga'], ['der Rücken', 'la espalda'], ['der Hals', 'la garganta']], explanation: 'Partes del cuerpo frecuentes en el médico.' },
      { id: 'med-13', type: 'multiple-choice', prompt: '„der Zahn" =', options: ['el diente', 'el pie', 'la mano', 'el ojo'], answer: 'el diente', explanation: 'Zahnschmerzen = dolor de muelas.' },
      { id: 'med-14', type: 'translate', prompt: 'Traduce: ¿Tiene tiempo el lunes? (formal)', answer: 'Haben Sie am Montag Zeit?', explanation: 'Formal „Sie" + „am Montag" (con días → am).' },
      { id: 'med-15', type: 'fill-blank', prompt: 'Ich möchte einen ___ beim Arzt. (una cita)', answer: 'Termin', explanation: 'der Termin = la cita.' },
      { id: 'med-16', type: 'multiple-choice', prompt: '„die Apotheke" =', options: ['la farmacia', 'el hospital', 'la consulta', 'la receta'], answer: 'la farmacia', explanation: 'die Apotheke = farmacia; das Krankenhaus = hospital; das Rezept = la receta.' },
      { id: 'med-17', type: 'fill-blank', prompt: 'Ich bin ___. (resfriado/a)', answer: 'erkältet', explanation: '„erkältet sein" = estar resfriado.' },
      { id: 'med-18', type: 'translate', prompt: 'Traduce: ¡Que te mejores!', answer: 'Gute Besserung!', explanation: 'La fórmula fija para desear una pronta recuperación.' }
      ,
      { id: 'med-19', type: 'multiple-choice', prompt: 'Historia: Was hat Herr Ortega?', options: ['Halsschmerzen und Husten', 'Bauchschmerzen', 'Kopfschmerzen und Fieber', 'Zahnschmerzen'], answer: 'Halsschmerzen und Husten', explanation: '„Ich habe seit Montag Halsschmerzen und Husten."' },
      { id: 'med-20', type: 'multiple-choice', prompt: 'Historia: Wie oft muss er die Tabletten nehmen?', options: ['dreimal am Tag', 'einmal am Tag', 'zweimal am Tag', 'jede Stunde'], answer: 'dreimal am Tag', explanation: '„Nehmen Sie sie dreimal am Tag."' },
      { id: 'med-21', type: 'fill-blank', prompt: 'Historia: Gute ___, Herr Ortega! (que se mejore)', answer: 'Besserung', explanation: '„Gute Besserung!" — la despedida fija del médico.' }
    ],
    story: {
      intro: 'El Sr. Ortega lleva días encontrándose mal y por fin tiene cita. La visita entera: síntomas, diagnóstico, receta e instrucciones — tal cual pasa en la consulta.',
      lines: [
        { speaker: '', de: 'Herr Ortega fühlt sich seit Tagen schlecht. Heute hat er endlich einen Termin.', es: 'El Sr. Ortega se encuentra mal desde hace días. Hoy por fin tiene cita.' },
        { speaker: 'Ärztin', de: 'Guten Tag, Herr Ortega. Was fehlt Ihnen denn?', es: 'Buenas, Sr. Ortega. ¿Qué le pasa?' },
        { speaker: 'Ortega', de: 'Ich habe seit Montag Halsschmerzen und Husten.', es: 'Tengo dolor de garganta y tos desde el lunes.' },
        { speaker: 'Ärztin', de: 'Haben Sie auch Fieber?', es: '¿Tiene también fiebre?' },
        { speaker: 'Ortega', de: 'Gestern Abend ja — achtunddreißig fünf.', es: 'Ayer por la noche sí — treinta y ocho y medio.' },
        { speaker: 'Ärztin', de: 'Machen Sie bitte den Mund auf... Ah ja. Eine Erkältung, nichts Schlimmes.', es: 'Abra la boca, por favor… Ah, sí. Un resfriado, nada grave.' },
        { speaker: 'Ortega', de: 'Muss ich Medikamente nehmen?', es: '¿Tengo que tomar medicamentos?' },
        { speaker: 'Ärztin', de: 'Ich verschreibe Ihnen Tabletten. Nehmen Sie sie dreimal am Tag.', es: 'Le receto unas pastillas. Tómelas tres veces al día.' },
        { speaker: 'Ortega', de: 'Und darf ich arbeiten?', es: '¿Y puedo trabajar?' },
        { speaker: 'Ärztin', de: 'Besser nicht. Bleiben Sie drei Tage zu Hause und trinken Sie viel Tee.', es: 'Mejor no. Quédese tres días en casa y beba mucho té.' },
        { speaker: 'Ortega', de: 'Drei Tage Serien... äh, Tee. Verstanden.', es: 'Tres días de series… eh, de té. Entendido.' },
        { speaker: 'Ärztin', de: 'Gute Besserung, Herr Ortega!', es: '¡Que se mejore, Sr. Ortega!' }
      ]
    }
  });
})();
