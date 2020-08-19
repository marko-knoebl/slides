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
