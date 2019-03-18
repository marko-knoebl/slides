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

- Open-Source-Entwicklungsumgebung
- Unabhängig vom eigentlichen Visual Studio

## VS Code: Ordner öffnen

ganzen Ordner öffnen mit _File_ - _Open Folder_

## VS Code: speichern

Nicht gespeicherte Dateien sind durch einen Kreis statt des "X" im Tab erkennbar

Speichern mit _Strg_ + _S_

oder: _File_ - _Auto Save_

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

- Auto Save: _aktivieren_
- Accept Suggestion on Commit Character (Autovervollständigung ohne _Enter_): _deaktivieren_
- Tab Size: _2_

Weitere Möglichkeiten:

- Format on Save
- Format on Paste
- EOL
- Workbench: Color Theme

## VS Code - Kurzbefehle

- _Strg_ + _F_: Suchen in Datei
- _Alt_ + _Shift_ + _F_: Formatieren der Datei
- _F2_: Umbenennen von Variablen
- _Alt_ + Mausklick: Mehrere Textcursor zum gleichzeitigen Schreiben setzen

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

# Übung: Tabellen und Formulare

## Übung: Tabellen und Formulare

Wir erstellen eine Website für ein Restaurant

Wir beginnen mit einer Tabelle für die Öffnungszeiten und einem Formular für Reservierungen

Um die optische Gestaltung kümmern wir uns später mit Hilfe des CSS-Frameworks Bootstrap

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

Dokumenttitel (erscheind in der Fensterleiste)

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

# Online Resourcen

- MDN: Mozilla Developer Network
- W3Schools (kein Zusammenhang zu W3C)
- caniuse.com: Unterstützung verschiedener Browser-Features

