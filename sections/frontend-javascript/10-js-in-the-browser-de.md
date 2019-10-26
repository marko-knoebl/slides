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
