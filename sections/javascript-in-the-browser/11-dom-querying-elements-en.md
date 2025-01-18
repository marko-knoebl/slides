# DOM: Querying elements

## DOM: Querying elements

Querying HTML elements:

- `document.getElementById()`
- `document.getElementsByClassName()`
- `document.getElementsByTagName()`
- `document.querySelector()`
- `document.querySelectorAll()`
- ...

## DOM: Querying elements

```html
<div id="chat-popup">...</div>
```

Accessing the DOM element:

```js
let element = document.getElementById("chat-popup");
```

equivalent:

```js
let element = document.querySelector("#chat-popup");
```

## DOM: Querying elements

querying multiple elements:

```js
let inputElements = document.querySelectorAll("input");
```
