# Flexbox

## Display property

Möglichkeiten:

- `display: block`
- `display: inline`
- `display: none`
- `display: flex`

## Flexbox

Einfache Möglichkeit, Elemente _nebeneinander_ oder _untereinander_ anzuordnen

## Flexbox Properties

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

Beispiel: Seitenlayout mit Navbar auf der Seite und Hauptbereich

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

Beispiel: _article_-Element mit header und scrollbarem Hauptbereich

```css
article {
  height: 240px;
  display: flex;
  flex-direction: column;
}
article > header {
  height: 48px;
}
article > .main-content {
  flex-grow: 1;
  overflow-y: auto;
}
```

## Flexbox

[css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
