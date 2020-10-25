# Advanced CSS selectors

## Advanced CSS selectors

- attributes
- sub-elements
- child elements
- pseudo classes
- pseudo elements

## Attributes

```css
input[type='checkbox'] {
  /* ... */
}
```

## Sub elements and child elements

style links occuring somewhere in the `header`:

```css
header a {
  /* ... */
}
```

style a `nav` which is a direct child of `body`:

```css
body > nav {
  /* ... */
}
```

## Pseudo classes

**Pseudo classes** start with a colon:

```css
a:hover {
  text-decoration: underline;
}
button:disabled {
  background-color: lightgrey;
}
tr:nth-child(2n) {
  background-color: grey;
}
tr:hover:nth-child(n) {
  background-color: lightgreen;
}
```

## Pseudo classes in forms

- `:checked`
- `:empty`
- `:valid`
- `:invalid`
- `:required`

## Pseudo classes for links, buttons, ...

- `:hover`
- `:visited`
- `:active`

## Pseudo classes for ordered children

- `:first-child`
- `:last-child`
- `:nth-child(2n)`

## Pseudo elements

**Pseudo elements** allow for adding additional HTML elements via CSS:

```css
.todo-item.completed::before {
  content: '✓';
}
```

```css
nav button[aria-haspopup='true']::after {
  content: '▾';
}
```
