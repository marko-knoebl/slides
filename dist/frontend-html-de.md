# HTML

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

# HTML, CSS & JavaScript

## HTML, CSS & JavaScript

Zentrale Technologien, die der Browser verwendet:

- **HTML**: definiert Struktur und Inhalt einer Seite
- **CSS**: definiert Stil (Aussehen) einer Seite
- **JavaScript**: definiert Verhalten / Interaktion einer Seite

# HTML Grundlagen

## Elemente und Tags

HTML besteht aus verschachtelten **Elementen**, die von **Tags** begrenzt werden.

```html
<h1>Dies ist eine Überschrift</h1>
```

## Elemente und Tags

Manche HTML-Elemente haben keinen Inhalt, z.B. der br-Tag, der einen Zeilenumbruch darstellt:

```html
<br />
```

oder

<!-- prettier-ignore -->

```html
<br>
```

## Attribute

HTML-Elementen können Attribute der folgenden Form zugewiesen werden:

```html
<img src="portrait.png" alt="Portraitbild des Benutzers" />
```

Die Werte stehen üblicherweise in doppelten Anführungszeichen

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

<https://codesandbox.io/s/> → _static_

(Alternativen: <https://codepen.io> <https://jsfiddle.net>, <https://plnkr.co>)

## Browser tools (F12)

Übung: Bestehende Website in Browser Tools begutachten

# Struktur eines HTML-Dokuments

## Struktur eines HTML-Dokuments

```html
<!DOCTYPE html>
<html lang="de">
  <head></head>
  <body></body>
</html>
```

## Struktur eines HTML-Dokuments

```html
<!DOCTYPE html>
```

Deklariert die Datei als HTML(5)-Dokument

## Struktur eines HTML-Dokuments

- `<html>`: beinhaltet das ganze Dokument; oft ist z.B. `lang="de"` oder ähnliches gesetzt
- `<head>`: beinhaltet Informationen wie Dokumenttitel, Zeichensatz, ...
- `<body>`: die eigentlichen Inhalte - das, was im Browserfenster erscheint

# Besondere Zeichen und Whitespace

## Besondere Zeichen

Um die folgenden Zeichen in einem HTML-Dokument darzustellen, sollten sie immer "escaped" werden:

- `<` wird zu `&lt;`
- `>` wird zu `&gt;`
- `&` wird zu `&amp;`

Folgende Zeichen müssen in HTML-Attributen escaped werden:

- `"` wird zu `&quot;`
- (`'` wird zu `&apos;`, wenn das Attribut mit `'` begrenzt wird)

## Whitespace

In HTML wird jede Abfolge von "Whitespace"- Zeichen (Leerzeichen, Zeilenumbrüche, Tabs) als einzelnes Leerzeichen interpretiert.

## Whitespace

Die folgenden Beispiele sin äquivalent (und stellen ein einzelnes Leerzeichen zwischen den Bildern dar):

<!-- prettier-ignore-start -->

```html
<img src="foo.png" /> <img src="bar.png" />
```

```html
<img src="foo.png" />    <img src="bar.png" />
```

```html
<img src="foo.png" />

<img src="bar.png" />
```

<!-- prettier-ignore-end -->

## Whitespace

Beispiel für mehrzeilige Formatierung, falls wir Elemente ohne Leerzeichen dazwischen darstellen wollen:

```html
<img src="image1.png" /><img src="image2.png" /><img
  src="image3.png"
/>
```

# Stylesheets

## Stylesheets

Möglichkeit, vorgefertigte Stile einzubinden und in mehreren HTML-Dokumenten zu übernehmen

Stylesheets können aus vorgegebenen Libraries eingebunden werden (z.B. _Bootstrap_) oder selbst erstellt werden

## Einbindung

Einbindung meist im head, z.B.:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/picnic"
/>
```

## CSS Resets

Resets: Stylesheets, die grundlegende Stile über verschiedene Browser hinweg vereinheitlichen:

- _normalize.css_: [website](https://necolas.github.io/normalize.css/), [CDN](https://cdn.jsdelivr.net/npm/normalize.css/normalize.css)
- _sanitize.css_: basiert auf normalize - [website](https://csstools.github.io/sanitize.css/), [CDN](https://cdn.jsdelivr.net/npm/sanitize.css/sanitize.css)
- _reboot_: basiert auf normalize, dient als Basis für Bootstrap - [website](https://getbootstrap.com/docs/4.0/content/reboot/), [CDN](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap-reboot.css)

CDN: Content Delivery Network - Services, die CSS- und JS-Libraries hosten

## CSS Libraries

CSS Libraries:

- _Picnic CSS_: einfache CSS-Library, ohne JavaScript - [website](https://picnicss.com/), [CDN](https://cdn.jsdelivr.net/npm/picnic)
- _Bootstrap_: weit verbreitete CSS-Library mit vielen verfügbaren Themes - [website](https://getbootstrap.com/), [CDN für CSS](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.css), [CDN für JS](https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.js)
- _Semantic UI_ - [website](https://semantic-ui.com), [CDN für CSS](https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.css), [CDN für JS](https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.js)
- _Foundation_ - [website](https://get.foundation/sites/docs/), [CDN für CSS](https://cdn.jsdelivr.net/npm/foundation-sites/dist/css/foundation.css), [CDN für JS](https://cdn.jsdelivr.net/npm/foundation-sites/dist/js/foundation.js)

<!--

https://picnicss.com/ (Einträge in der Navbar sind buttons, kein JS)
https://milligram.io/ (keine navbar, verwendet class="button")
http://getskeleton.com/ (keine navbar)
https://github.com/mdipierro/no.css
https://getbootstrap.com/
-->

# HTML Elemente

## HTML Elemente

- Strukturierung: _h1_, _p_, _header_, _main_, _nav_, _section_, ...
- Links: _a_
- Textformatierung: _br_, _em_, _strong_, ...
- allgemeine Elemente: _div_, _span_
- Listen: _ul_, _ol_, _li_
- Medien: _img_, _video_, _audio_, ...
- Formulare: _form_, _input_, _button_, _label_, ...
- Tabellen: _table_, _tr_, _td_, ...

## HTML Elemente

vollständige Liste:

- <https://www.w3schools.com/tags/ref_byfunc.asp>
- <https://www.w3schools.com/TAgs/default.asp>
- <https://developer.mozilla.org/de/docs/Web/HTML/Element>

## Übung

Wir erstellen eine Website für ein Restaurant

Inhalte z.B.: Tabelle mit Öffnungszeiten, Formular für Reservierungen, ...

# Strukturierende Elemente

## Strukturierende Elemente

- h1 - h6
- p

<!-- separator -->

- header
- main
- footer
- aside

<!-- separator -->

- nav

<!-- separator -->

- section
- article

## Headings und strukturierende Elemente

Headings innerhalb von _nav_, _aside_, _article_, _section_ haben automatisch angepasste Größen:

```html
<h1>big heading</h1>
<section>
  <h1>medium heading</h1>
  ...
</section>
<section>
  <h1>medium heading</h1>
  <section>
    <h1>small heading</h1>
    <p>...</p>
  </section>
</section>
```

# Links

## Links

Beispiel:

```html
<a href="https://en.wikipedia.org/wiki/HTML"
  >Wikipedia article</a
>
```

## Links

Öffnen in neuem Tab oder Fenster:

```html
<a
  href="https://en.wikipedia.org/wiki/HTML"
  target="_blank"
  rel="noreferrer"
  >Wikipedia article</a
>
```

## Links

E-Mail-Link:

```html
<a href="mailto:foo@bar.com">send e-mail</a>
```

## Links

Download-Link:

```html
<a href="report.ods" download>report</a>
```

# Textformatierung

## Textformatierung

in der Praxis:

- `em` oder `i` für _kursiv_
- `strong` oder `b` für **fett**

## Textformatierung

tatsächliche Bedeutung laut HTML 5 Standard:

- `em` - Betonung
- `i` - Eigennamen, technische Begriffe, Fremdwörter, ...
- `strong` - Wichtigkeit
- `b` - andere Hervorhebung

## Textformatierung

Beispiele:

```html
Mein nächstes Hany <em>muss</em> ein <i>FooPhone</i> sein.
```

```html
<strong>Das Event wurde</strong> aufgrund von schlechtem
Wetter <strong>abgesagt</strong>.
```

# div und span

## div und span

- `div`: allgemeines Block-Element
- `span`: allgemeines Inline-Element

Block-Elemente: untereinander angeordnet, so breit wie möglich

Inline-Elemente: nebeneinander angeordnet, so breit wie ihr Inhalt

# Listen

## Listen

- `ul` (unordered list)
- `ol` (ordered list - nummeriert)
- `li` (list item)

## Listen

Beispiel:

```html
<h1>tetrapods:</h1>
<ul>
  <li>amphibians</li>
  <li>reptiles</li>
  <li>birds</li>
  <li>mammals</li>
</ul>
```

## Listen

verschachtelte Liste:

```html
<h1>vertebrate:</h1>
<ul>
  <li>fish</li>
  <li>
    tetrapods
    <ul>
      <li>amphibians</li>
      <li>reptiles</li>
      <li>birds</li>
      <li>mammals</li>
    </ul>
  </li>
</ul>
```

# Formulare und Buttons

## Formulare und Buttons

Elemente:

- `button`
- `form`
- `input`
- `label`
- `select`
- ...

## Beispiel für ein Formular

```html
<form action="/register" method="post">
  <div>
    <label
      >first name: <input type="text" name="firstname"
    /></label>
  </div>
  <div>
    <label
      >last name: <input type="text" name="lastname"
    /></label>
  </div>
  <button type="submit">register</button>
</form>
```

## Button

```html
<button>press me!</button>
```

## Buttons

Button-Typen:

- _submit_: Button, der ein Formular absendet (dies ist der Standardtyp für Buttons in Formularen)
- _button_
- (_reset_)

## Input

```html
<input />
```

```html
<input type="password" />
```

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

## Input-Attribute

- placeholder
- autofocus
- autocomplete
- size

## autocomplete

Mögliche Werte des `autocomplete`-Attributs:

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

## Input und Label

Inputs sollten beschreibende Labels haben:

```html
<label
  >enter your name:
  <input />
</label>
```

oder

```html
<label for="name-input">enter your name:</label>
<input id="name-input" />
```

## Formulare

```html
<form action="/register" method="post">
  first name: <input type="text" name="firstname" /><br />
  last name: <input type="text" name="lastname" /><br />
  <button type="submit">register</button>
</form>
```

## Formulare

Beim Abschicken des Formulars wird _post_-Request mit etwa folgendem Inhalt an die Adresse _/register_ gesendet:

```txt
firstname=John&lastname=Doe
```

## Weitere Formular-Elemente

- textarea
- select

# Medien

## Medien

- `img`
- `video`
- `audio`

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

Demo: <http://srcset.salcode.com/>

## video

```html
<video autoplay loop controls width="250">
  <source src="myvideo.webm" type="video/webm" />
  <source src="myvideo.mp4" type="video/mp4" />
  Sorry, your browser doesn't support embedded videos.
</video>
```

Beispielvideo: <https://interactive-examples.mdn.mozilla.net/media/examples/flower>.\*

## audio

```html
<audio src="myaudio.mk" loop volume="0.5"></audio>
```

# Tabellen

## Tabellen

Tags:

- `table`
- (`tbody`)
- (`thead`)
- `tr`
- `th`, `td`
- `caption`

Attribute:

- `colspan`, `rowspan`

# Head

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

## meta: viewport

Sollte auf allen Websites verwendet werden, um die Browser-Skalierung zurückzusetzen

```html
<meta name="viewport" width="device-width" />
```

Hintergrund:  
In den Anfängen des mobilen Web (vor responsive Design) wurden Websites von mobilen Browsern of verkleinert dargestellt. Mit obigem Code wird dies verhindert.

<https://viewportsizes.com/mine>

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

Ist bei Internet Explorer &lt;= 10 relevant; führt zur Verwendung der modernsten Version der Rendering-Engine

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

# Hosting

## Hosting

Hosting für statische Websites wird vielfach kostenlos angeboten:

- [zeit.co](https://zeit.co) (command-line tool _now_)
- [Github Pages](https://pages.github.com)
- [tiiny.host](https://tiiny.host/) (ohne Login für 24 h gehostet)
- [netlify.com/drop](https://netlify.com/drop) (ohne Login für 24 h gehostet)

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

# VS Code

## VS Code

Präsentation: [VS Code Grundlagen und Plugins](./vs-code-de.html)

## HTML-Dokument in VS Code

Codeschnipsel: `html:5`

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

<figure style="width: 60%; margin: 0 auto">
  <img src="assets/spoon-fork.svg" />
</figure>

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

# Online Ressourcen

- MDN: Mozilla Developer Network
- W3Schools (kein Zusammenhang zu W3C)
- caniuse.com: Unterstützung verschiedener Browser-Features
