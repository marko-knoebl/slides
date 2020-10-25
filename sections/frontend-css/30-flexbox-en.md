# Flexbox

## Display property

possibilities:

- `display: block`
- `display: inline`
- `display: none`
- `display: flex`

## Flexbox

Simple possibility to arrange elements _underneath each other_ or _next to each other_

## Flexbox properties

container:

- `flex-direction`
- `flex-wrap`
- `justify-content`
- `align-content`
- `align-items`

items:

- `flex-basis`
- `flex-grow`

## Flexbox

```css
#container {
  display: flex;
  flex-direction: row;
}
```

```css
#container {
  display: flex;
  flex-direction: column;
}
```

## Flexbox

Example: page layout with navbar on the side and main area

```css
body {
  display: flex;
  flex-direction: row;
}
body > nav {
  flex-basis: 5em;
}
body > main {
  flex-grow: 1;
}
```

## Flexbox

[css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
