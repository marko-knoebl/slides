# {{title}}

---

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

---

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

---

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

---

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

----

# HTML, CSS & JavaScript

---

## HTML, CSS & JavaScript

Zentrale Technologien, die der Browser verwendet:

- **HTML**: definiert Struktur und Inhalt einer Seite
- **CSS**: definiert Stil (Aussehen) einer Seite
- **JavaScript**: definiert Verhalten / Interaktion einer Seite

----

# HTML Grundlagen

---

## HTML-Syntax

HTML besteht aus verschachtelten **Elementen**, die von **Tags** begrenzt werden.

```html
<h1>Dies ist eine Überschrift</h1>
```

---

## HTML-Syntax

Manche HTML-Elemente haben keinen Inhalt, zB der br-Tag, der einen Zeilenumbruch darstellt:

<!-- prettier-ignore -->
```html
<br>
```

---

## HTML-Syntax: Attribute

HTML-Tags können Attribute der folgenden Form zugewiesen werden:

```html
<img src="portrait.png" alt="Portraitbild des Benutzers" />
```

---

## HTML-Tags

Beispiele:

- h1-h6
- p
- em
- strong
- br
- ul & li
- img
- a

---

## Ausprobieren

https://codepen.io

(Alternativen: https://jsfiddle.net, https://plnkr.co, https://codesandbox.io)

---

## Kommentare

```html
<!-- dies ist ein Kommentar -->
```

---

## Grundlegende HTML-Struktur

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

In VS Code: Codeschnipsel `html:5`

---

## Besondere Zeichen

Um die folgenden Zeichen in einem HTML-Dokument darzustellen, sollten sie immer "escaped" werden:

- `<` wird zu `&lt;`
- `>` wird zu `&gt;`
- `&` wird zu `&amp;`

Folgende Zeichen müssen in HTML-Attributen excaped werden:

- `"` wird zu `&quot;`
- (`'` wird zu `&apos;`, wenn das HTML-Attribut durch `'` begrenzt wird)

---

## Besondere Zeichen

Es sollte heutzutage immer `<meta charset="UTF-8" />` angegeben sein, dann können generell beliebige Unicode-Zeichen verwendet werden.

```html
<button>😊</button>
```

---

## Viewport

```html
<meta
  name="view&quot;port"
  content="width=device-width, initial-scale=1"
/>
```

https://viewportsizes.com/mine

---

## Browser tools (F12)

???

Bestehende Website in browser-tools begutachten

----

# VS Code

---

## VS Code

https://code.visualstudio.com

- Open-Source-Entwicklungsumgebung
- Unabhängig vom eigentlichen Visual Studio

---

## VS Code: Ordner öffnen

ganzen Ordner öffnen mit _File_ - _Open Folder_

---

## VS Code: speichern

Nicht gespeicherte Dateien sind durch einen Kreis statt des "X" im Tab erkennbar

Speichern mit _Strg_ + _S_

oder: _File_ - _Auto Save_

---

## VS Code: Datei-Explorer, Split Editor

---

## VS Code: Terminal

Öffnen und Schließen der Ansicht via _Strg_ + _Ö_

zusätzliches Terminal via Symbol _+_

übernimmt das aktuell geöffnete Verzeichnis

---

## VS Code - Konfiguration

Via _File - Preferences - Settings_

Eingeteilt in _User Settings_ und _Workspace Settings_

---

## VS Code - Konfigurationsmöglichkeiten

Empfehlungen:

- Auto Save: _aktivieren_
- Accept Suggestion on Commit Character (Autovervollständigung ohne _Enter_): _deaktivieren_
- Tab Size: _2_

Weitere Möglichkeiten:

- Format on Save
- Format on Paste
- EOL
- Workbench: Color Theme

---

## VS Code - Kurzbefehle

- _Strg_ + _F_: Suchen in Datei
- _Alt_ + _Shift_ + _F_: Formatieren der Datei
- _F2_: Umbenennen von Variablen
- _Alt_ + Mausklick: Mehrere Textcursor zum gleichzeitigen Schreiben setzen

---

# VS Code - Plugins

Empfohlene Plugins:

- Debugger for Chrome (Firefox / ...)
- ESLint
  npm install --save-dev eslint
  ./node_modules/.bin/eslint --init

(siehe auch _Show Popular Extensions_ in VS Code)

???

http://www.snappyjs.com/2018/03/25/vscode-extensions-for-javascript-developers/
ESLint
JSRefactor
auto rename tag
auto close tag (in html in mordernem VS Code nicht mehr notwendig)
npm Intellisense
guides
rainbow brackets
wakatime

---

# VS Code - Plugins

für React:

- Prettier

für Angular:

- Angular v7 Snippets (by John Papa)
- Angular Language Service

---

# Prettier - Konfiguration

prettierrc.json:

```json
{
  "bracketSpacing": false,
  "singleQuote": true,
  "jsxBracketSameLine": true,
  "trailingComma": "all",
  "printWidth": 80
}
```

---

----

# VS Code - Extensions

In der Sidebar öffnen: fünftes Symbol auf der linken Seite

---

## VS Code - Extensions

- Prettier - Automatische Code-Formatierung nach strikten Regeln - für HTML, JS, CSS

---

## Prettier - Konfiguration

z.B. über _prettierrc.json_:

```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

----

# CSS

---

## Stile auf HTML-Elemente anwenden

```html
<h1 style="color: blue; font-size: 30px">Hello</h1>
```

---

## Stylesheets einbinden

```html
<link rel="stylesheet" href="style.css" />
```

---

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

---

## CSS-Syntax

- Selektoren
- Properties

---

## CSS-Selektoren

Universalselektor: `*`
Tag-Selektor: `h1`
Klassen-Selektor: `.important`
ID-Selektor: `#home-button`

---

## CSS-Selektoren: Priorität

Falls sich zwei CSS-Attribute widersprechen, "gewinnt":

- das Attribut mit dem _spezifischeren_ Selektor
- bzw. bei gleicher Spezifizität, das CSS-Statement, das im Code _später_ auftritt

---

## CSS-Properties

- Farben
- Schriftart

---

## Farben

```css
h1 {
  color: red; /* Schriftfarbe */
  background-color: blue; /* Hintergrundfarbe */
}
```

---

## Farbangaben

Standard-Farben: z.B. `grey`, `blue`, `lightblue`, ...

RGB-Definition (rot-grün-blau): z.B. `rgb(255, 128, 128)`

HEX-Definition: z.B. `#ff8080`

---

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

---

## font-family

Es können mehrere Schriftarten angegeben werden. Der Browser verwendet die erste, die installiert ist.

```css
p {
  font-family: Arial, sans-serif;
}
```

3 allgemeine Schriftarten, die in jedem Browser vorhanden sind:

`serif`, `sans-serif`, `monospace`

---

## font-size

mögliche Einheiten:

- `px`: Pixel
- `%`: Prozent relativ zum umgebenden Text
- `em`: Prozent relativ zum umgebenden Text
- `rem`: Prozent relativ zur Schriftgröße vom `html`-Element

---

## font-style

dient ausschließlich für kursive Schrift

```css
h1 {
  font-style: italic;
}
```

---

## font-weight

Um die Schriftstärke zu verändern, insbesondere: `font-weight: bold;`

---

## text-decoration

```css
h1 {
  text-decoration: underline, overline, line-through;
}
```

---

## text-align

- `center`
- `justify`
- `left`
- `right`
- `start` (neu)
- `end` (neu)

---

## Inline- und Block-Elemente

Inline-Elemente:

- nebeneinander dargestellt
- so breit wie ihr Inhalt
- z.B. `a`, `em`, `strong`, (`img`)

Block-Elemente:

- untereinander dargestellt
- so breit wie möglich
- z.B. `h1`, `ul`, `li`, `p`

---

## span & div

`span` = allgemeinstes inline-Element

`div` = allgemeinstes block-Element

---

## Block- Elemente und das Box-Modell

"Schichten" von innen nach außen:

- Inhalt
- Innenabstand (padding)
- Rand (border)
- Außenabstand (margin)

---

## Block- Elemente und das Box-Modell

Größe des Inhalts:

- `height` / `width`
- `min-height` / `min-width`
- `max-height` / `max-width`

Wenn z.B. bei height `50%` angegeben wird, bezieht sich das auf das Elternelement

---

## Block- Elemente und das Box-Modell

Die Attribute `height`, `width` u.s.w. beziehen sich standardmäßig auf den Inhalt (ohne padding und border)

Heute setzt man oft:

```css
* {
  box-sizing: border-box;
}
```

dann beziehen sie sich auf die Gesamtgröße (mit padding und border, aber ohne margin)

---

## Block-Elemente und das Box-Modell

Padding (Innenabstand) und Margin (Außenabstand)

alle 4 Abstände gleich setzen: `padding: 10px;`

alle 4 Abstände individuell setzen: `padding: 10px 20px 30px 40px;` (oben - rechts - unten - links)

je 2 Abstände gleich setzen: `padding: 10px 20px;` (oben & unten - links & rechts)

horizontalen Abstand gleich setzen (zum horizontalen Zentrieren): `margin: 10px auto;`

Abstände individuell setzen: `padding: 10px; padding-left: 20px;`

---

## Block-Elemente und das Box-Modell

Border-Beispiel: `border: 10px solid blue`

Abrundung-Beispiel: `border-radius: 5px`

---

## margin & padding bei Inline-Elementen

Achtung: vertikales margin und padding wirken sich bei Inline-Elementen nicht auf die Positionierung aus und führen zu Überlappungen

---

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

---

## overflow

Um bei Bedarf scroll-Leisten anzuzeigen:

```css
div {
  overflow: auto;
}
```

---

## Body mit voller Höhe

Standardmäßig: Body ist nur so groß wie dessen Inhalt

Um Body immer die volle Seitenhöhe einnehmen zu lassen:

```css
body {
  height: 100vh;
}
```

---

## Übung: Google-Klon

----

# HTML Fortgreschritten

---

## Semantisches HTML

- section
- article
- footer
- nav
- aside

---

## Tabellen

- table, tr
- th, td
- border-collapse
- caption-Tag
- colspan

---

## Tabellen: Übung Öffnungszeiten

---

## Tabellen: verwenden von Pseudoklassen

- `:hover`: Der Stil einer Tabellenzeile soll sich ändern, wenn wir die Maus darüber bewegen
- `:nth-child`: Die Zeilen sollen gestreift dargestellt werden

---

## Formulare

Beispiel:

```html
<form>
  <label for="firstname">First Name:</label>
  <input id="firstname" />
  <label for="lastname">Last Name:</label>
  <input id="lastname" />
</form>
```

---

## Input-Attribute

- placeholder
- autofocus
- autocomplete
- size

---

## Input-Typen

Standardwert: `text`

Weitere Möglichkeiten:

- `checkbox`
- `radio`
- `file`
- `password`
- `date` (HTML 5)
- `email`(HTML 5)
- `number` (HTML 5)
- `search` (HTML 5)

---

## autocomplete

Das `autocomplete`-Attribut kann für die Autovervollständigung hilfreich sein, z.B.:

- `name`
- `given-name`
- `email`
- `username`
- ...

---

## Validierung

- `required`
- `minlength`
- `maxlength`

CSS-Pseudoklassen: `:valid`, `:invalid`

---

## Validierung - Beispiel

```html
<input
  type="number"
  min="-5"
  max="5"
  step="0.1"
  value="1"
/>
```

---

## Aktionen bei Formularen

```html
<form action="login.php" method="post">
  <input name="username" /><br />
  <input name="password" type="password" /><br />
  <button>log in</button>
</form>
```

Bei Betätigen des Buttons sendet das Formular einen post-Request an die Adresse _login.php_ und übermittelt die Daten _username_ und _password_

----

# CSS-Layouts

---

## Layout-Grundlagen

[learnlayout.com](https://learnlayout.com)

---

## Positionierung

- `position`: `absolute`
- (`position`: `relative`)
- (`position`: `fixed`)
- (`position`: `static`: Standardwert)

---

## Flexbox

[css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## Beispiel: Facebook-Klon

---

## Media Queries

---

## CSS-Frameworks: Beispiel Bootstrap
