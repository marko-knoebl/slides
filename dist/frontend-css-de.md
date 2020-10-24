# CSS

## Präsentationen

<https://marko-knoebl.github.io/slides/>

## Ihr Trainer

Marko Knöbl

- aus Wien
- emaliger Mathematiklehrer
- Programmierthemen:
  - JavaScript, TypeScript und React
  - Python, Data Science

## Vorstellung der Teilnehmer

- Aktuelle Projekte
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

## Code

Code verfügbar unter: <https://github.com/marko-knoebl/courses-code>

# CSS

## CSS

Standard Stil-Sprache des webs: definiert Layout und Stil von HTML-Seiten

## Stile auf HTML-Elemente anwenden

```html
<h1 style="color: blue; font-size: 30px">Hello</h1>
```

## Stylesheets einbinden

üblicherweise im `head`:

```html
<link rel="stylesheet" href="style.css" />
```

## CSS-Beispiel

```css
/* Kommentar */
h1 {
  font-family: sans-serif;
  color: grey;
}

#home-button {
  color: white;
}
```

## CSS-Syntax

- Selektoren
- Properties

## CSS-Selektoren

- Universalselektor: `*`
- Tag-Selektor: `h1`
- Klassen-Selektor: `.important`
- ID-Selektor: `#home-button`

## CSS-Selektoren: Priorität

Falls sich zwei CSS-Attribute widersprechen, "gewinnt":

- das Attribut mit dem _spezifischeren_ Selektor
- bzw. bei gleicher Spezifizität, das CSS-Statement, das im Code _später_ auftritt

## CSS-Properties

- Farben
- Schriftart

# Farben

## Farben

```css
h1 {
  color: red; /* Schriftfarbe */
  background-color: blue; /* Hintergrundfarbe */
}
```

## Farbangaben

- Standard-Farben  
  z.B. `grey`, `blue`, `lightblue`, ...
- RGB-Definition (rot-grün-blau)  
  z.B. `rgb(255, 128, 128)`
- HEX-Definition  
  z.B. `#ff8080`
- HSL-Definition  
  (hue, saturation, lightness - Farbton, Sättigung, Helligkeit)
  z.B. `hsl(180, 60%, 70%)`

# Schrift

## Schrift

```css
p {
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
}
```

## font-family

Es können mehrere Schriftarten angegeben werden. Der Browser verwendet die erste, die installiert ist.

```css
p {
  font-family: Arial, sans-serif;
}
```

3 allgemeine Schriftarten, die in jedem Browser vorhanden sind:

`serif`, `sans-serif`, `monospace`

## font-size

mögliche Einheiten:

- `px`: "Pixel"
- `%`: Prozent relativ zum umgebenden Text
- `em`: relativ zum umgebenden Text
- `rem`: relativ zur Schriftgröße des `html`-Elements

## font-style

dient ausschließlich für kursive Schrift

```css
h1 {
  font-style: italic;
}
```

## font-weight

Um die Schriftstärke zu verändern, mögliche Werte:

- `100`
- `200`
- `300` (auch: `light`)
- `400` (auch: `regular`)
- `500`
- `600` (auch: `semibold`)
- `700` (auch: `bold`)
- `800`
- `900`

## text-decoration

```css
h1 {
  text-decoration: underline, overline, line-through;
}
```

## text-align

- `center`
- `justify`
- `left`
- `right`
- `start` (neu)
- `end` (neu)

# Längeneinheiten

## Längeneinheiten

px, em, rem, %, vh, vw

## device pixel ratio

früher:  
1px = ein Pixel am Bildschirm

heutzutage:  
z.B. beim iPhone 4: 1px = zwei Pixel am Bildschirm (device pixel ratio = 2)

abfragbar über JS-Variable `devicePixelRatio`

## rem

rem = Schriftgröße des `html`-Elements

Standard in Browsern: 1rem = 16px

## vh, vw

1vh = 1% der Viewport-Höhe

1vw = 1% der Viewport-Breite

# CSS Resets und Libraries

## CSS Resets

Resets: Stylesheets, die grundlegende Stile über verschiedene Browser hinweg vereinheitlichen:

- _normalize.css_: [website](https://necolas.github.io/normalize.css/), [CDN](https://cdn.jsdelivr.net/npm/normalize.css/normalize.css)
- _sanitize.css_: basiert auf normalize - [website](https://csstools.github.io/sanitize.css/), [CDN](https://cdn.jsdelivr.net/npm/sanitize.css/sanitize.css)
- _reboot_: basiert auf normalize, dient als Basis für Bootstrap - [website](https://getbootstrap.com/docs/4.0/content/reboot/), [CDN](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap-reboot.css)

## CSS Libraries

- _Picnic CSS_: einfache CSS-Library, ohne JavaScript - [website](https://picnicss.com/), [CDN](https://cdn.jsdelivr.net/npm/picnic)
- _Bootstrap_: weit verbreitete CSS-Library mit vielen verfügbaren Themes - [website](https://getbootstrap.com/), [CDN für CSS](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.css), [CDN für JS](https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.js)
- _Semantic UI_ - [website](https://semantic-ui.com), [CDN für CSS](https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.css), [CDN für JS](https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.js)
- _Foundation_ - [website](https://get.foundation/sites/docs/), [CDN für CSS](https://cdn.jsdelivr.net/npm/foundation-sites/dist/css/foundation.css), [CDN für JS](https://cdn.jsdelivr.net/npm/foundation-sites/dist/js/foundation.js)

# Inline- und Block-Elemente

## Inline- und Block-Elemente

Inline-Elemente:

- nebeneinander dargestellt
- so breit wie ihr Inhalt
- z.B. `a`, `em`, `strong`, (`img`)

Block-Elemente:

- untereinander dargestellt
- so breit wie möglich
- z.B. `h1`, `ul`, `li`, `p`

## span & div

`span` = allgemeinstes inline-Element

`div` = allgemeinstes block-Element

# Block-Elemente und das Box-Modell

## Block- Elemente und das Box-Modell

"Schichten" von innen nach außen:

- Inhalt
- Innenabstand (padding)
- Rand (border)
- Außenabstand (margin)

## Block- Elemente und das Box-Modell

Beispiel: zwei Boxen

## Block- Elemente und das Box-Modell

Größe des Inhalts:

- `height` / `width`
- `min-height` / `min-width`
- `max-height` / `max-width`

Wenn z.B. bei height `50%` angegeben wird, bezieht sich das auf das Elternelement

## Block- Elemente und das Box-Modell

Die Attribute `height`, `width` u.s.w. beziehen sich standardmäßig auf den Inhalt (ohne padding und border)

Heute setzt man oft:

```css
* {
  box-sizing: border-box;
}
```

dann beziehen sie sich auf die Gesamtgröße (mit padding und border, aber ohne margin)

## Block-Elemente und das Box-Modell

Padding (Innenabstand) und Margin (Außenabstand)

alle 4 Abstände gleich setzen: `padding: 10px;`

alle 4 Abstände individuell setzen: `padding: 10px 20px 30px 40px;` (oben - rechts - unten - links)

je 2 Abstände gleich setzen: `padding: 10px 20px;` (oben & unten - links & rechts)

horizontalen Abstand gleich setzen (zum horizontalen Zentrieren): `margin: 10px auto;`

Abstände individuell setzen: `padding: 10px; padding-left: 20px;`

## Block-Elemente und das Box-Modell

Border-Beispiel: `border: 10px solid blue`

Abrundung-Beispiel: `border-radius: 5px`

## margin & padding bei Inline-Elementen

Achtung: vertikales margin und padding wirken sich bei Inline-Elementen nicht auf die Positionierung aus und führen zu Überlappungen

## Layout-Beispiel: Horizontales Zentrieren

```css
div {
  width: 800px;
  margin: auto;
}
```

```css
div {
  max-width: 800px;
  margin: auto;
}
```

## Layout-Beispiel: Body mit voller Höhe

Standardmäßig: Body ist nur so groß wie dessen Inhalt

Um Body immer die volle Seitenhöhe einnehmen zu lassen:

```css
body {
  height: 100vh;
}
```

## Tabellen und Zellenrahmen

Standardmäßig hat jede Zelle in einer Tabelle einen eigenen Rahmen.

"Zusammenlegen" der Rahmen benachbarter Zellen:

```css
table {
  border-collapse: collapse;
}
```

# Overflow

## Overflow

Standardverhalten, wenn ein Kindelement höher oder breiter als das Elternelement ist:

Das Kindelement ragt über das Elternelement hinaus

## overflow

Um bei Bedarf beim Elternelement Scrollleisten anzuzeigen:

```css
#parent {
  overflow: auto;
}
```

# Flexbox

## Display property

Möglichkeiten:

- `display: block`
- `display: inline`
- `display: none`
- `display: flex`

## Flexbox

Einfache Möglichkeit, Elemente _nebeneinander_ oder _untereinander_ anzuordnen

## Flexbox Properties

container:

- `flex-direction`
- `flex-wrap`
- `justify-content`
- `align-content`
- `align-items`

items:

- `flex-basis`
- `flex-grow`

## Flexbox

```css
#container {
  display: flex;
  flex-direction: row;
}
```

```css
#container {
  display: flex;
  flex-direction: column;
}
```

## Flexbox

Beispiel: Seitenlayout mit Navbar auf der Seite und Hauptbereich

```css
body {
  display: flex;
  flex-direction: row;
}
body > nav {
  flex-basis: 5em;
}
body > main {
  flex-grow: 1;
}
```

## Flexbox

[css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# Media queries

## Media queries

Möglichkeit, insbesondere die Bildschirmgröße und Orientierung für CSS abzufragen

## Media queries

```css
.menu {
  display: flex;
  flex-direction: column;
}

@media (min-width: 800px) {
  .menu {
    flex-direction: row;
  }
}
```

## Media queries

```css
@media (orientation: landscape) {
  .layout {
    flex-direction: row;
  }
}
```

# Beispiele

- Google-Klon
- Chat-Anwendung

# Erweiterte CSS-Selektoren

## Erweiterte CSS-Selektoren

- Attribute
- Unterelemente
- Kindelemente
- Pseudoklassen
- Pseudoelemente

## Attribute

```css
input[type='checkbox'] {
  /* ... */
}
```

## Unterelemente und Kindelemente

ein Link, der irgendwo im `header` auftritt:

```css
header a {
  /* ... */
}
```

ein `nav`, das direkt im `body` liegt:

```css
body > nav {
  /* ... */
}
```

## Pseudoklassen

**Pseudoklassen** können mittel Doppelpunkt abgefragt werden:

```css
a:hover {
  text-decoration: underline;
}
button:disabled {
  background-color: lightgrey;
}
tr:nth-child(2n) {
  background-color: grey;
}
tr:hover:nth-child(n) {
  background-color: lightgreen;
}
```

## Pseudoklassen in Formularen

- `:checked`
- `:empty`
- `:valid`
- `:invalid`
- `:required`

## Pseudoklassen für Links, Buttons, ...

- `:hover`
- `:visited`
- `:active`

## Pseudoklassen für die Reihenfolge

- `:first-child`
- `:last-child`
- `:nth-child(2n)`

## Pseudoelemente

Pseudoelemente erlauben das Hinzufügen zusätzlicher HTML-Elemente via CSS:

```css
.todo-item.completed::before {
  content: '✓';
}
```

```css
nav button[aria-haspopup='true']::after {
  content: '▾';
}
```

# Positionierung

## Absolute Positionierung

Beispiel: ein `div` soll je `10px` von der rechten unteren Ecke seines Elternelements positioniert sein

## Absolute Positionierung

```html
<div id="outer">
  <div id="inner"></div>
</div>
```

```css
#outer {
  position: relative;
}

#inner {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
```

## Positionierung

- `position`: `absolute`
- (`position`: `relative`)
- (`position`: `fixed`)
- (`position`: `static`: Standardwert)

## Positionierung

Beispiel für `position: relative`: hochgestellter oder tiefgestellter Text

## Beispiel

Facebook-Klon mit Chat

# Transformationen

## Transformationen

```css
#element1 {
  transform: translsate(100px, 0);
}
```

## Transformationen

```css
#element2 {
  transform: translate(100px, 0) rotate(45deg);
  transform-origin: 0 0;
}
```

Element wird zuerst um 45 Grad im Uhrzeigersinn gedreht, dann um 100 Pixel nach rechts verschoben

Punkt, um den gedreht wird: linke obere Ecke des Elements

# Übergänge (Animationen)

## Übergänge

Die Änderung verschiedener CSS-Properties kann wie folgt animiert werden:

```css
#animated {
  transition: background-color: 3s, margin-top: 1s;
}
```

## Beispiel: Animation bei Hover

```css
div.box {
  width: 40px;
  height: 40px;
  background-color: blue;
  transform: rotate(0);
  transition: transform 9s, background-color 9s;
}
div.box:hover {
  background-color: red;
  transform: rotate(360deg) scale(2);
  transition: transform 0.5s, background-color 0.5s;
}
```

## Beispiel: Spiel

```css
div {
  width: 40px;
  height: 40px;
  background-color: blue;
  transform: translate(0, 0) rotate(0);
  transition: transform 9s, background-color 9s;
}
div:hover {
  background-color: red;
  transform: translate(200px, 0) rotate(360deg);
  transition: transform 3s, background-color 3s;
}
```

## Aufgabe: Dropdown

Dropdown, das bei einem Buttonklick aktiv wird

HTML-Vorlage:

```html
<div id="dropdown">
  dropdown
</div>
<button
  id="dropdown-button"
  onclick="dropdown.className = 'active'"
>
  menu
</button>
```

## Aufgabe: Overlay bei Hover

## Aufgabe: Animation von Löffel und Gabel

<figure style="width: 50%; margin: 0 auto">
  <img src="assets/spoon-fork-animated.svg" />
</figure>

Achtung: Wir verwenden nun CSS-Transformationen, nicht SVG-Transformationen; wir müssen nun beispielsweise `transform-origin` separat setzen
