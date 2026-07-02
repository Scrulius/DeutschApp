# Deutsch für Dich 🇩🇪

App web para aprender **gramática y comunicación en alemán**, pensada para
hispanohablantes (de A1 a B2). Sin dependencias, sin build: es HTML + CSS +
JavaScript puro. Se abre con doble clic en `index.html` o se sirve como sitio
estático.

## Qué incluye

- **26 módulos** ordenados por nivel (A1 → B2), en dos vías: **Gramática**
  (casos, verbos, orden de la frase, adjetivos…) y **Comunicación** (saludos,
  números y horas, small talk, restaurante, direcciones, médico, opinión…).
- **+700 ejercicios** de 11 tipos: opción múltiple, ¿qué caso es?, completar,
  traducir, ordenar la frase, emparejar, reloj (horas), escucha, dictado,
  clasificar y "caza el error".
- **Historias con comprensión lectora**: cada tema tiene su relato interactivo
  (diálogo con traducción por línea) + una sección final de 4 historias largas,
  una por nivel.
- **Voz alemana** (síntesis del navegador) en ejemplos y ejercicios de escucha.
- **Sonido** de acierto/fallo (sintetizado, con botón de silencio).
- **Feedback completo** al fallar: contraste "tu respuesta → correcta",
  variantes válidas, el porqué y reglas breves.
- El **progreso se guarda solo en tu navegador** (localStorage); no hay servidor
  ni cuenta.

## Cómo usarla

**En local:** abre `index.html` en el navegador (mejor con Chrome/Edge para que
la voz alemana suene bien).

**Sirviéndola** (recomendado, evita restricciones de `file://`):

```bash
# con Python
python -m http.server 8000
# luego abre http://localhost:8000
```

## Estructura

```
index.html            → carga los scripts y la hoja de estilos
css/style.css         → sistema visual (editorial, tipografía Fraunces/Inter/Space Mono)
js/
  storage.js          → progreso en localStorage
  audio.js            → sonidos sintetizados (Web Audio)
  speech.js           → voz alemana (SpeechSynthesis)
  exercises.js        → motor de los 11 tipos de ejercicio
  app.js              → router de vistas, sesiones, feedback
  data-*.js           → contenido (un fichero por módulo/historia)
validate-content.js   → validador de integridad del contenido (Node, sin deps)
```

## Validar el contenido

```bash
node validate-content.js
```

Comprueba ids únicos, coherencia de respuestas, reconstrucción de frases y que
ninguna respuesta se filtre en el enunciado.

---

Hecho con cariño para dejar de dudar en el dativo.
