# JavaScript im Frontend

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

# JavaScript im Browser

## Beispiele in der Browser-Konsole

```js
alert();
open('https://google.com', '_self');
prompt("What's your name?");
Math.random();
```

## Document Object Model

**DOM (Document Object Model)** = JavaScript-API für Interaktion mit dem HTML-Inhalt

## DOM Grundlagen

- `document.getElementById()`
- `document.querySelector()`
- `element.innerHTML =`

## DOM Grundlagen - Beispiele

- Zufallszahl
- Aktuelles Datum

## DOM: Stile und Attribute (href, ...)

- `element.style`
- `element.className`
- `element.classList` (`.add`, `.remove`, `.toggle`, `.contains`)

## DOM: createElement, appendChild

- `document.createElement()`
- `element1.appendChild(element2)`
- `element1.removeChild(element2)`
- `element2.remove() // not IE`

## DOM: createElement, appendChild - Beispiele

- Schachbrett
- Todo-Liste (nicht interaktiv)

## Events

- `setTimeout()`
- `setInterval()`
- `element.addEventListener('click', ...)`

## Events - Beispiele

- Uhr
- Countdown
- Spiel: click the box

## Formulare und Formular-Events

Beispiel: Todo-Liste

# Debuggen im Browser

## Debuggen im Browser

`debugger` Statement

## Debuggen im Browser

Breakpoints:

- setzen von Breakpoints
- Aktivieren / Deaktivieren von Breakpoints

## Debugger im Browser

Manuell weiterspringen:

- play / pause
- _step over / Schritt darüber_: in die nächste Zeile
- _step into / Schritt hinein_: einem Funktionsaufruf folgen
- _step out / Schritt heraus_: aktuellen Funktionsaufruf verlassen

## Debugger im Browser

Beobachten von Variablen

# Übungen

- Lotto - Generator
- uhr
- Todo-Liste
- chessboard
- facebook
- es6
