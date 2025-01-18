# DOM: Elemente abfragen / suchen

## DOM: Elemente abfragen / suchen

Abfragen von HTML-Elementen:

- `document.getElementById()`
- `document.getElementsByClassName()`
- `document.getElementsByTagName()`
- `document.querySelector()`
- `document.querySelectorAll()`
- ...

## DOM: Elemente abfragen / suchen

```html
<div id="chat-popup">...</div>
```

Abfragen des DOM-Elements:

```js
let element = document.getElementById('chat-popup');
```

äquivalent:

```js
let element = document.querySelector('#chat-popup');
```

## DOM: Elemente abfragen / suchen

Abfragen von mehreren Elementen:

```js
let inputElements = document.querySelectorAll('input');
```
