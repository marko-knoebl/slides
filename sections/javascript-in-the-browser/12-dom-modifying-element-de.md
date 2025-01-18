# DOM: Elemente ändern

## DOM: Elemente ändern

Themen:

- Textinhalte eines Elements ändern
- Attribute eines Elements ändern

## Textinhalte ändern

- `element.textContent = ...`
- `element.innerText = ...`

Diese beiden Properties haben ähnliche Funktionalitäten

## Textinhalte ändern

Beispiel: Ersetzen des body-Inhalts durch den Text "hello world"

```js
let body = document.querySelector('body');

body.textContent = 'hello world';
```

## Auf Attribute zugreifen

Zugriff auf HTML-Attribute: durch `getAttribute` und `setAttribute` oder durch eine entsprechende JS-Property

in HTML:

`<a href="https://example.com">example</a>`

Möglichkeiten in JS:

- `exampleLink.getAttribute("href")`
- `exampleLink.setAttribute("href", "https://xyz.com")`
- `exampleLink.href`
- `exampleLink.href = "https://xyz.com"`

## HTML Attribute und JS Properties

Bei _manchen_ HTML-Attributen weicht die entsprechende JS Property ab:

- anderer Datentyp (Attribute sind immer Strings)
- anderer Name

## HTML Attribute und JS Properties

Attribut:

```js
checkbox.setAttribute('checked', '');
checkbox.removeAttribute('checked');
```

DOM Property:

```js
checkbox.checked = true;
checkbox.checked = false;
```

## HTML Attribute und JS Properties

Das `style`-Attribut ist ein String, die `style`-Property ist ein Objekt:

```js
element.setAttribute(
  'style',
  'color: #99aaff; padding: 4px;'
);
```

```js
element.style.color = '#99aaff';
element.style.padding = '4px';
```

## HTML Attribute und JS Properties

Zum `class`-Attribut gibt es die Properties `className` und `classList`

```js
element.setAttribute('class', 'btn btn-primary');
```

```js
element.className = 'btn btn-primary';

element.classList.add('important');
```
