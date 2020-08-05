# CSS

## Präsentationen

<https://marko-knoebl.github.io/slides/>

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

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

Standard-Farben: z.B. `grey`, `blue`, `lightblue`, ...

RGB-Definition (rot-grün-blau): z.B. `rgb(255, 128, 128)`

HEX-Definition: z.B. `#ff8080`

HSL-Definition (hue, saturation, lightness - Farbton, Sättigung, Helligkeit): z.B. `hsl(180, 60%, 70%)`

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

Abfragbar über JS-Variable `devicePixelRatio`

## rem

rem = Schriftgröße des `html`-Elements

Standard in Browsern: 1rem = 16px

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

# overflow

## overflow

Um bei Bedarf Scrollleisten anzuzeigen:

```css
div {
  overflow: auto;
}
```

# Reboot

## Reboot

Reboot ist ein _CSS-Reset_, der aus dem bootstrap-Projekt hervorgegangen ist.

Er vereinheitlicht Browserverhalten und bietet einen ansprechenderen Standardstil im Browser

Sourcecode:

<https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap-reboot.css>

# Flexbox

## Display property

Möglichkeiten:

- `display: block`
- `display: inline`
- `display: none`
- `display: flex`

## Flexbox

Einfache Möglichkeit, Elemente _nebeneinander_ oder _untereinander_ anzuordnen

## Flexbox

[css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# Beispiele

- Google-Klon
- Chat-Anwendung

# Media queries

## Media queries

Möglichkeit, insbesondere die Bildschirmgröße für CSS abzufragen

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

# erweiterte CSS-Selektoren

- Unterelemente
- Kindelemente
- Pseudoklassen
- Pseudoelemente

# Pseudoklassen

## Pseudoklassen

in CSS können mit `:` sogenannte Pseudoklassen abgefragt werden

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

# Tabellen und CSS

## Tabellen: verwenden von Pseudoklassen

- `:hover`: Der Stil einer Tabellenzeile soll sich ändern, wenn wir die Maus darüber bewegen
- `:nth-child`: Die Zeilen sollen gestreift dargestellt werden

## Tabellen: Stil

```css
table {
  border-collapse: collapse;
}
tr:hover:nth-child(n) {
  background-color: lightgrey;
}
tr:nth-child(2n) {
  background-color: skyblue;
}
```

## Übung: Öffnungszeiten

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

## Beispiele

- Facebook-Klon (mit Chat)

# Transformationen

## Transformationen

Beispiele:

```css
#element1 {
  transform: translsate(100px, 0);
}

#element2 {
  transform: translate(10px, 0) rotate(-90deg);
  transform-origin: 0 0;
}
```

# Übergänge (Animationen)

## Übergänge

Die Änderung verschiedener CSS-Properties kann wie folgt animiert werden:

```css
#animated {
  transition: background-color: 3s, margin-top: 1s;
}
```

## Beispiel: Animation bei hover

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
  transform: translate(0 0) rotate(0);
  transition: transform 9s, background-color 9s;
}
div:hover {
  background-color: red;
  transform: translate(200px 0) rotate(360deg);
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
