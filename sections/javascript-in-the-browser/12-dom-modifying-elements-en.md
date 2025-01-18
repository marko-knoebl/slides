# DOM: Modifying elements

## DOM: Modifying elements

topics:

- modifying text content of an element
- modifying attributes of an element

## Modifying text content

- `element.textContent = ...`
- `element.innerText = ...`

these two properties have similar functionalities

## Modifying text content

example: replacing the HTML body content with the text "hello world"

```js
let body = document.querySelector('body');

body.textContent = 'hello world';
```

## Accessing Attributes

Accessing attributes: via `getAttribute` and `setAttribute` or via JS _properties_ of the same name

HTML example:

`<a href="https://example.com">example</a>`

Accessing the attribute in JS:

- `exampleLink.getAttribute("href")`
- `exampleLink.setAttribute("href", "https://xyz.com")`
- `exampleLink.href`
- `exampleLink.href = "https://xyz.com"`

## HTML Attributes and JS Properties

With _some_ HTML attributes, the corresponding JS property is different:

- different data type (attributes are always strings)
- different name

## HTML Attributes and JS Properties

attribute:

```js
checkbox.setAttribute('checked', '');
checkbox.removeAttribute('checked');
```

DOM property:

```js
checkbox.checked = true;
checkbox.checked = false;
```

## HTML Attributes and JS Properties

The `style` attribute is a string, the `style` property is an object:

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

## HTML Attributes and JS Properties

The `class` attribute can be manipulated via the `className` and `classList` properties.

```js
element.setAttribute('class', 'btn btn-primary');
```

```js
element.className = 'btn btn-primary';

element.classList.add('important');
```
