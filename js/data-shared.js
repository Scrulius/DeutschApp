// Tablas de referencia reutilizadas por varios módulos (chuletas).
(function (root) {
  // Bootstrap del registro de módulos: cada data-*.js llama a registerModule(mod).
  root.MODULES = root.MODULES || {};
  root.registerModule = function (mod) { root.MODULES[mod.id] = mod; };

  var T = {};

  T.articles = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Artículos determinados (der/die/das) en los 4 casos</caption>' +
    '<tr><th>Caso</th><th>Masculino</th><th>Femenino</th><th>Neutro</th><th>Plural</th></tr>' +
    '<tr><td>Nominativ</td><td class="hl">der</td><td>die</td><td>das</td><td>die</td></tr>' +
    '<tr><td>Akkusativ</td><td class="hl">den</td><td>die</td><td>das</td><td>die</td></tr>' +
    '<tr><td>Dativ</td><td class="hl">dem</td><td>der</td><td>dem</td><td>den <em>(+n final)</em></td></tr>' +
    '<tr><td>Genitiv</td><td class="hl">des <em>(+(e)s)</em></td><td>der</td><td>des <em>(+(e)s)</em></td><td>der</td></tr>' +
    '</table></div>';

  T.articlesIndef = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Artículos indeterminados (ein) y negación (kein)</caption>' +
    '<tr><th>Caso</th><th>Masculino</th><th>Femenino</th><th>Neutro</th><th>Plural (kein)</th></tr>' +
    '<tr><td>Nominativ</td><td>ein</td><td>eine</td><td>ein</td><td>keine</td></tr>' +
    '<tr><td>Akkusativ</td><td class="hl">einen</td><td>eine</td><td>ein</td><td>keine</td></tr>' +
    '<tr><td>Dativ</td><td class="hl">einem</td><td>einer</td><td>einem</td><td>keinen</td></tr>' +
    '<tr><td>Genitiv</td><td>eines</td><td>einer</td><td>eines</td><td>keiner</td></tr>' +
    '</table></div>' +
    '<p style="font-size:13px;color:var(--text-dim)"><em>ein</em> no tiene plural (no puedes decir "unos" con <em>ein</em>); por eso en plural se usa <em>kein</em> (negación) o simplemente se omite el artículo.</p>';

  T.pronouns = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Pronombres personales: Nominativ → Akkusativ → Dativ</caption>' +
    '<tr><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th><th>Español</th></tr>' +
    '<tr><td>ich</td><td>mich</td><td>mir</td><td>yo</td></tr>' +
    '<tr><td>du</td><td>dich</td><td>dir</td><td>tú</td></tr>' +
    '<tr><td>er</td><td>ihn</td><td>ihm</td><td>él</td></tr>' +
    '<tr><td>sie</td><td>sie</td><td>ihr</td><td>ella</td></tr>' +
    '<tr><td>es</td><td>es</td><td>ihm</td><td>ello/eso</td></tr>' +
    '<tr><td>wir</td><td>uns</td><td>uns</td><td>nosotros</td></tr>' +
    '<tr><td>ihr</td><td>euch</td><td>euch</td><td>vosotros</td></tr>' +
    '<tr><td>sie</td><td>sie</td><td>ihnen</td><td>ellos/ellas</td></tr>' +
    '<tr><td>Sie</td><td>Sie</td><td>Ihnen</td><td>usted(es)</td></tr>' +
    '</table></div>';

  T.possessive = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Artículos posesivos (mein-) — siguen el patrón de "ein"</caption>' +
    '<tr><th>Caso</th><th>Masculino</th><th>Femenino</th><th>Neutro</th><th>Plural</th></tr>' +
    '<tr><td>Nominativ</td><td>mein</td><td>meine</td><td>mein</td><td>meine</td></tr>' +
    '<tr><td>Akkusativ</td><td class="hl">meinen</td><td>meine</td><td>mein</td><td>meine</td></tr>' +
    '<tr><td>Dativ</td><td class="hl">meinem</td><td>meiner</td><td>meinem</td><td>meinen</td></tr>' +
    '<tr><td>Genitiv</td><td>meines</td><td>meiner</td><td>meines</td><td>meiner</td></tr>' +
    '</table></div>' +
    '<p style="font-size:13px;color:var(--text-dim)">Igual funcionan dein-, sein-, ihr-, unser-, euer-, ihr- (de ellos), Ihr- (formal).</p>';

  T.wechselList = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Las 9 preposiciones de dos direcciones (Wechselpräpositionen)</caption>' +
    '<tr><th>Preposición</th><th>Significado</th></tr>' +
    '<tr><td>an</td><td>junto a, en (vertical)</td></tr>' +
    '<tr><td>auf</td><td>encima de, sobre</td></tr>' +
    '<tr><td>hinter</td><td>detrás de</td></tr>' +
    '<tr><td>in</td><td>en, dentro de</td></tr>' +
    '<tr><td>neben</td><td>al lado de</td></tr>' +
    '<tr><td>über</td><td>encima de, por encima de</td></tr>' +
    '<tr><td>unter</td><td>debajo de</td></tr>' +
    '<tr><td>vor</td><td>delante de</td></tr>' +
    '<tr><td>zwischen</td><td>entre</td></tr>' +
    '</table></div>';

  T.dativPrepList = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Preposiciones que SIEMPRE llevan Dativ</caption>' +
    '<tr><th>Preposición</th><th>Significado</th></tr>' +
    '<tr><td>aus</td><td>de, desde (origen)</td></tr>' +
    '<tr><td>außer</td><td>excepto, aparte de</td></tr>' +
    '<tr><td>bei</td><td>en casa de, cerca de</td></tr>' +
    '<tr><td>mit</td><td>con</td></tr>' +
    '<tr><td>nach</td><td>después de; hacia (ciudades/países)</td></tr>' +
    '<tr><td>seit</td><td>desde (tiempo)</td></tr>' +
    '<tr><td>von</td><td>de, desde (posesión/origen)</td></tr>' +
    '<tr><td>zu</td><td>hacia, a (persona/lugar)</td></tr>' +
    '<tr><td>gegenüber</td><td>enfrente de</td></tr>' +
    '</table></div>' +
    '<p style="font-size:13px;color:var(--text-dim)">Truco mnemónico: <strong>A</strong>us <strong>B</strong>ei <strong>M</strong>it <strong>N</strong>ach <strong>S</strong>eit <strong>V</strong>on <strong>Z</strong>u → "ABMNSVZ" (o la frase "Aus Bei Mit Nach Seit Von Zu").</p>';

  T.akkusativPrepList = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Preposiciones que SIEMPRE llevan Akkusativ</caption>' +
    '<tr><th>Preposición</th><th>Significado</th></tr>' +
    '<tr><td>durch</td><td>a través de</td></tr>' +
    '<tr><td>für</td><td>para</td></tr>' +
    '<tr><td>gegen</td><td>contra</td></tr>' +
    '<tr><td>ohne</td><td>sin</td></tr>' +
    '<tr><td>um</td><td>alrededor de; a las (hora)</td></tr>' +
    '<tr><td>entlang</td><td>a lo largo de (normalmente va DESPUÉS del sustantivo)</td></tr>' +
    '</table></div>' +
    '<p style="font-size:13px;color:var(--text-dim)">Truco mnemónico: <strong>D</strong>urch <strong>O</strong>hne <strong>F</strong>ür <strong>U</strong>m <strong>G</strong>egen → "DOFUG".</p>';

  T.genitivPrepList = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Preposiciones que llevan Genitiv</caption>' +
    '<tr><th>Preposición</th><th>Significado</th></tr>' +
    '<tr><td>während</td><td>durante</td></tr>' +
    '<tr><td>trotz</td><td>a pesar de</td></tr>' +
    '<tr><td>wegen</td><td>a causa de, por</td></tr>' +
    '<tr><td>statt / anstatt</td><td>en lugar de</td></tr>' +
    '<tr><td>innerhalb</td><td>dentro de (un plazo)</td></tr>' +
    '<tr><td>außerhalb</td><td>fuera de</td></tr>' +
    '<tr><td>aufgrund</td><td>debido a</td></tr>' +
    '</table></div>' +
    '<p style="font-size:13px;color:var(--text-dim)">En alemán hablado, <em>trotz/wegen/während</em> se oyen cada vez más con Dativ ("wegen dem Wetter"). En el examen y por escrito, usa siempre Genitiv.</p>';

  T.dativVerbList = '' +
    '<div class="ref-table-wrap"><table class="ref-table">' +
    '<caption>Verbos frecuentes que rigen Dativ (sin objeto directo, o con Dativ+Akkusativ)</caption>' +
    '<tr><th>Verbo</th><th>Significado</th></tr>' +
    '<tr><td>helfen</td><td>ayudar (a alguien)</td></tr>' +
    '<tr><td>danken</td><td>agradecer (a alguien)</td></tr>' +
    '<tr><td>gefallen</td><td>gustar (a alguien)</td></tr>' +
    '<tr><td>gehören</td><td>pertenecer (a alguien)</td></tr>' +
    '<tr><td>glauben</td><td>creer (a una persona)</td></tr>' +
    '<tr><td>folgen</td><td>seguir (a alguien)</td></tr>' +
    '<tr><td>gratulieren</td><td>felicitar</td></tr>' +
    '<tr><td>passen</td><td>quedar bien, convenir</td></tr>' +
    '<tr><td>schmecken</td><td>saber bien (a alguien)</td></tr>' +
    '<tr><td>vertrauen</td><td>confiar (en alguien)</td></tr>' +
    '<tr><td>antworten</td><td>responder (a alguien)</td></tr>' +
    '<tr><td>begegnen</td><td>encontrarse con (alguien)</td></tr>' +
    '<tr><td>fehlen</td><td>faltar, echar de menos</td></tr>' +
    '<tr><td>gelingen</td><td>salir bien, lograr</td></tr>' +
    '<tr><td>widersprechen</td><td>contradecir</td></tr>' +
    '</table></div>' +
    '<p style="font-size:13px;color:var(--text-dim)">Ojo: en español casi todos estos van con "a" + persona ("ayudo <u>a</u> mi hermano"), lo que engaña al cerebro hispanohablante para tratarlos como Akkusativ. En alemán son Dativ puro: <strong>Ich helfe meinem Bruder</strong> (no "meinen Bruder").</p>';

  root.SHARED = { tables: T };
})(typeof window !== 'undefined' ? window : globalThis);
