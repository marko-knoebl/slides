# {{title}}

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# HTML, CSS & JavaScript

## HTML, CSS & JavaScript

Zentrale Technologien, die der Browser verwendet:

- **HTML**: definiert Struktur und Inhalt einer Seite
- **CSS**: definiert Stil (Aussehen) einer Seite
- **JavaScript**: definiert Verhalten / Interaktion einer Seite

# HTML Grundlagen

## HTML-Syntax

HTML besteht aus verschachtelten **Elementen**, die von **Tags** begrenzt werden.

```html
<h1>Dies ist eine Überschrift</h1>
```

## HTML-Syntax

Manche HTML-Elemente haben keinen Inhalt, zB der br-Tag, der einen Zeilenumbruch darstellt:

<!-- prettier-ignore -->
```html
<br>
```

## HTML-Syntax: Attribute

HTML-Tags können Attribute der folgenden Form zugewiesen werden:

```html
<img src="portrait.png" alt="Portraitbild des Benutzers" />
```

Die Werte stehen _üblicherweise_ in doppelten Anführungszeichen

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

## Kommentare

```html
<!-- dies ist ein Kommentar -->
```

## Ausprobieren

https://codepen.io

(Alternativen: https://jsfiddle.net, https://plnkr.co, https://codesandbox.io)

## Browser tools (F12)

Übung: Bestehende Website in Browser Tools begutachten

## Grundlegende HTML-Struktur

```html
<!DOCTYPE html>
<html lang="de">
  <head></head>
  <body></body>
</html>
```

# VS Code

## VS Code

https://code.visualstudio.com

Open-Source-Entwicklungsumgebung

Unabhängig vom eigentlichen Visual Studio

## VS Code: Ordner öffnen

ganzen Ordner öffnen mit _File_ - _Open Folder_

## VS Code: Datei-Explorer, Split Editor

## VS Code: Terminal

Öffnen und Schließen der Ansicht via _Strg_ + _Ö_

zusätzliches Terminal via Symbol _+_

übernimmt das aktuell geöffnete Verzeichnis

## VS Code - Konfiguration

Via _File - Preferences - Settings_

Eingeteilt in _User Settings_ und _Workspace Settings_

## VS Code - Konfigurationsmöglichkeiten

Empfehlungen:

- Accept Suggestion on Commit Character (Autovervollständigung ohne _Enter_): _deaktivieren_
- Auto Save: _afterDelay_
- Tab Size: _2_ oder _4_

Weitere Möglichkeiten:

- Word Wrap
- EOL
- Workbench: Color Theme

## VS Code - Kurzbefehle

- _F1_ oder _Ctrl_ + _Shift_ + _P_: Kommandopalette

<!-- list separator -->

- _Strg_ + _F_: Suchen in Datei
- _Alt_ + _Shift_ + _F_: Formatieren der Datei
- _Ctrl_ + _#_: aus- / einkommentieren
- _F12_: Zur Definition springen
- _Shift_ + _F12_: Definition anzeigen
- _F2_: Umbenennen von Variablen
- _Ctrl_ + _F2_: Mehrere Textcursor setzen
- _Alt_ + Mausklick: Mehrere Textcursor setzen

# VS Code - Extensions

In der Sidebar öffnen: fünftes Symbol auf der linken Seite

## VS Code - Extensions

- Prettier - Automatische Code-Formatierung nach strikten Regeln - für HTML, JS, CSS

## Prettier - Konfiguration

z.B. über _prettierrc.json_:

```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

# Struktur eines HTML-Dokuments

## Grundlegende HTML-Struktur

In VS Code: Codeschnipsel `html:5`

## Grundlegende HTML-Struktur

```html
<!DOCTYPE html>
```

Deklariert die Datei als HTML(5)-Dokument

## Grundlegende HTML Struktur

- `<html>`: beinhaltet das ganze Dokument; oft ist z.B. `lang="de"` oder ähnliches gesetzt
- `<head>`: beinhaltet Informationen wie Dokumenttitel, Zeichensatz, ...
- `<body>`: die eigentlichen Inhalte - das, was im Browserfenster erscheint

## Einträge im head

- `title`
- `meta`
- favicon
- stylesheet
- scripts

## title

Dokumenttitel (erscheint in der Fensterleiste)

```html
<title>my website</title>
```

## meta

zum Einbinden verschiedener Metadaten über das Dokument

## meta: charset

Es sollte heutzutage immer `<meta charset="UTF-8" />` angegeben sein, dann können generell beliebige Unicode-Zeichen verwendet werden.

```html
<button>😊</button>
```

## Besondere Zeichen

Um die folgenden Zeichen in einem HTML-Dokument darzustellen, sollten sie immer "escaped" werden:

- `<` wird zu `&lt;`
- `>` wird zu `&gt;`
- `&` wird zu `&amp;`

Folgende Zeichen müssen in HTML-Attributen escaped werden:

- `"` wird zu `&quot;`
- (`'` wird zu `&apos;`, wenn das HTML-Attribut durch `'` begrenzt wird)

## meta: viewport

Sollte auf allen Websites verwendet werden, um die Browser-Skalierung zurückzusetzen

```html
<meta name="viewport" width="device-width" />
```

Hintergrund:  
In den Anfängen des mobilen Web (vor responsive Design) wurden Websites von Browsern of verkleinert dargestellt. Mit obigem Code wird dies verhindert.

https://viewportsizes.com/mine

## meta: description

Kann von Suchmaschinen verwendet werden, um eine Seitenzusammenfassung anzuzeigen  
Standardtitel für Lesezeichen

```html
<meta
  name="description"
  content="Wikipedia is a free online encyclopedia, ..."
/>
```

## meta: keywords

Kann von Suchmaschinen verwendet werden

```html
<meta name="keywords" content="HTML,javascript" />
```

## meta: http-equiv="X-UA-Compatible"

Ist bei Internet Explorer <= 10 relevant; führt zur Verwendung der modernsten Version der Rendering-Engine

## favicon

Icon, das im Tab der Website angezeigt wird

```html
<link
  rel="icon"
  sizes="16x16"
  href="favicon_16.png"
  type="image/png"
/>
```

# HTML Elemente

## HTML Elemente

vollständige Liste:

- https://www.w3schools.com/tags/ref_byfunc.asp
- https://www.w3schools.com/TAgs/default.asp
- https://developer.mozilla.org/de/docs/Web/HTML/Element

## allgemeine Elemente

- `div`: allgemeines Block-Element
- `span`: allgemeines Inline-Element

Block-Elemente: untereinander angeordnet, so breit wie möglich  
Inline-Elemente: nebeneinander angeordnet, so breit wie ihr Inhalt

## Links

- `a`

## Strukturierung / Begrenzung

- `h1` - `h6`
- `p`
- `hr`

## Textformatierung

- `br`
- `em` (emphasis)
- `strong`
- `b` (veraltet)
- `i` (veraltet)

## Listen

- `ul` (unordered list)
- `ol` (ordered list)
- `li` (list item)

## strukturierende (semantische) Elemente

- `main`
- `section`
- `article`
- `footer`
- `nav`
- `aside`

## Medien

- `img`
- `video`
- `audio`

## Formulare

- `button`
- `input`
- `label`
- `select`

## Tabellen

- `table`
- (`tbody`)
- (`thead`)
- `tr`
- `th`, `td`
- `caption`
- Attribute `colspan`, `rowspan`

# Accessibility

## Accessibility

Strategien, um Websites für möglichst viele Menschen verwendbar zu machen

Relevante Gruppen:

- Menschen mit Sehbehinderungen
- Menschen mit Motorischen Einschränkungen
- Menschen mit Hörbehinderungen

Strategien:

- Screen Reader
- Websitenavigation via Tastatur
- Untertitel

## Unterstützung von Screen Readern

zu beachten:

- Verwendung semantischer HTML Elemente (z.B. `button` und `section` statt `div`)
- Sinnvolle Texte auf Links bzw Buttons
  Schlechtes Beispiel: Klicken Sie [hier](https://en.wikipedia.org/wiki/Accessibility), um mehr zum Thema _Accessibility_ zu erfahren
  Gutes Beispiel: Erfahren Sie [mehr zum Thema Accessibility](https://en.wikipedia.org/wiki/Accessibility)
- Zugeordnete Label für Eingabefelder
- Alternativtext für Bildinhalte

## Beispiel: Alternativtext für Bildinhalte

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex:
    A two legged dinosaur standing upright, with small arms,
    and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur"
/>
```

## Unterstützung von Seitennavigation via Tastatur

- Verwendung semantischer Elemente (z.B. `button`, `a`, `form`, `input`)

## Resourcen

- [MDN: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

# Übung: Tabellen und Formulare

## Übung: Tabellen und Formulare

Wir erstellen eine Website für ein Restaurant

Wir beginnen mit einer Tabelle für die Öffnungszeiten und einem _einfachen_ Formular für Reservierungen

Um die optische Gestaltung kümmern wir uns später mit Hilfe des CSS-Frameworks Bootstrap

# Stylesheets und Klassen

## Stylesheets

Möglichkeit, vorgefertigte Stile einzubinden und in mehreren HTML-Dokumenten zu übernehmen

Stylesheets können aus vorgegebenen Libraries eingebunden werden (z.B. bootstrap) oder selbst erstellt werden

## Stylesheets - Einbindung

oft im head:

```html
<link rel="stylesheet" href="style.css" />
```

# Bootstrap

## Bootstrap

CSS-Framework, mit dem HTML-Seiten gestaltet werden können - selbst muss man kein oder kaum CSS schreiben

## Verwendung von Bootstrap

- ohne eigenes Zutun: Standardstil von Elementen wie `body`, `h1`, `button`, ... verändert sich
- für weitere Funktionalität: Das Attribut `class` kann gesetzt werden

## Bootstrap - Projekt: Restaurantwebsite

Wir erstellen eine einfache Website - z.B. für ein Restaurant.

Inhalt unter anderem:

- Navigationsmenü
- Tabelle mit Öffnungszeiten
- Formular zum Reservieren
- Slideshow mit Bildern

## Bootstrap: Container

Container = grundlegender Baustein für bootstrap, oberste Unterteilungsebene für das Dokument

- `<div class="container-fluid">`: Container, der die ganze Seitenbreite einnimmt
- `<div class="container">`: Container, der auf bestimmte Größen (Breakpoints) "einrastet"

## Bootstrap: Spaltenlayout (einfach)

Mit Klassen `container`, `row` und `col`

```html
<div class="container">
  <div class="row">
    <div class="col">one</div>
    <div class="col">two</div>
    <div class="col">three</div>
  </div>
  <div class="row">
    <div class="col">four</div>
    <div class="col">five</div>
  </div>
</div>
```

## Bootstrap: margins

Margins sind Abstände von Elementen. Sie helfen beim gestalten von Layouts.

Bootstrap bietet hierzu vorgefertigte Klassen, z.B.:

- `ml-auto`: margin-left: auto
- `ml-1`: kleiner Margin links
- `mt-4`: großer Margin oben (top)
- `my-2`: mittlerer Margin in y-Richtung (oben und unten)

## Bootstrap: Elemente und vorgefertigte Komponenten

z.B.:

- button
- card
- carousel
- navbar
- ...

# Medien

## img

Attribute:

- `src`: Pfad zum Bild
- `alt`: Alternativtext, falls das Bild nicht dargestellt werden kann
- `srcset`: Liste von Bildpfaden für verschiedene Auflösungen

## srcset - Beispiel

```html
<img
  alt=""
  src="images/2000x1000.png"
  srcset="
    images/500x250.png   500w,
    images/1000x500.png 1000w
  "
/>
```

Demo: http://srcset.salcode.com/

## video

```html
<video autoplay loop controls width="250">
  <source src="myvideo.webm" type="video/webm" />
  <source src="myvideo.mp4" type="video/mp4" />
  Sorry, your browser doesn't support embedded videos.
</video>
```

Beispielvideo: https://interactive-examples.mdn.mozilla.net/media/examples/flower.*

## audio

```html
<audio src="myaudio.mk" loop volume="0.5"></audio>
```

# Formulare

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

## Input-Attribute

- placeholder
- autofocus
- autocomplete
- size

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

## autocomplete

Das `autocomplete`-Attribut kann für die Autovervollständigung hilfreich sein, z.B.:

- `name`
- `given-name`
- `email`
- `username`
- ...

## Validierung

- `required`
- `minlength`
- `maxlength`

CSS-Pseudoklassen: `:valid`, `:invalid`

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

## Aktionen bei Formularen

```html
<form action="login.php" method="post">
  <input name="username" /><br />
  <input name="password" type="password" /><br />
  <button>log in</button>
</form>
```

Bei Betätigen des Buttons sendet das Formular einen post-Request an die Adresse _login.php_ und übermittelt die Daten _username_ und _password_

# SVG

## SVG

SVG (scalable vector graphics): XML-basiertes Format für Vektorgrafiken

## Das SVG Tag

Attribute (Beispiele):

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="1000"
  height="500"
  viewBox="-500 0 1000 500"
></svg>
```

## SVG Elemente

- `g`: Gruppe
- `rect`
- `circle`
- `ellipse`
- `text`, `tspan`
- `path`

## Allgemeine SVG Attribute

- `id`, `class`
- `transform` (z.B. `"rotate(180)"`, `"translate(20 30)"`)
- `x`, `y` (Position)
- `stroke` (Linienfarbe)
- `fill` (Füllfarbe)

## rect

```xml
<rect x="50" y="50" width="20" height="200" fill="darkgrey">
```

## circle

```xml
<circle r="10" cy="290"/>
```

## ellipse

```xml
<ellipse cy="60" rx="30" ry="50"/>
```

## path

Element `path`, Attribut `d`

Rechteck:

```xml
<path d="M 0,0 L 10,0 L 10,10 L 0,10 L 0,0">
```

## Pfade - Befehle

- `M`: move to
- `L`: line to
- `H`: horizontal line to
- `V`: vertical line to
- `Q`: quadratic bézier curve to
- `T`: smooth quadratic bézier curve to
- `C`: cubic bézier curve to
- `S`: smooth cubic bézier curve to
- `A`: elliptical arc to
- `Z`: close path

## Pfade - Befehle

Alle Pfadbefehle sind auch als relative Koordinatenangaben möglich (mit klein geschriebenen Befehlsnamen):

```xml
<path d="M 500,500 l 10,10">
```

ist äquivalent zu:

```xml
<path d="M 500,500 L 510,510">
```

## g (Gruppe)

```xml
<g>
  <rect width="10" height="10">
  <rect x="20" width="10" height="10">
</g>
```

## Transformationen

Via Attribut `transform`:

```xml
<rect transform="translate(250, 0) rotate(-90, 50, 50)"/>
```

## Stil

```xml
<g fill="grey" stroke="black" stroke-width="3">
```

## Beispiel: Löffel und Gabel

<img src="assets/spoon-fork.svg" type="text/svg" style="width: 100%"/>

## Beispiel: Löffel und Gabel

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1" width="500" height="500" viewBox="0 0 500 500">
  <g
    transform="translate(250, 0) rotate(45, 0, 160)"
    fill="grey">
    <rect y="100" x="-10" width="20" height="190"/>
    <circle r="10" cy="290"/>
    <ellipse cy="60" rx="35" ry="55"/>
  </g>
  <g
    transform="translate(250,0) rotate(-45, 0, 160)"
    fill="darkgrey">
    <path d="
      M -10,310 L 10,310 L10,100
      C 10,90 20,80 20,70
      L 19,0 L13,0 L11,70 L5,70 L3,0
      L-3,0 L-5,70 L-11,70 L-13,0 L-19,0 L-20,70
      C-20,80 -10,90 -10,100 Z"/>
  </g>
</svg>
```

# Online Resourcen

- MDN: Mozilla Developer Network
- W3Schools (kein Zusammenhang zu W3C)
- caniuse.com: Unterstützung verschiedener Browser-Features

