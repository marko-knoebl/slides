# Erweiterte CSS-Selektoren

## Erweiterte CSS-Selektoren

- Attribute
- Unterelemente
- Kindelemente
- Pseudoklassen
- Pseudoelemente

## Attribute

```css
input[type='checkbox'] {
  /* ... */
}
```

## Unterelemente und Kindelemente

ein Link, der irgendwo im `header` auftritt:

```css
header a {
  /* ... */
}
```

ein `nav`, das direkt im `body` liegt:

```css
body > nav {
  /* ... */
}
```

## Pseudoklassen

**Pseudoklassen** können mittel Doppelpunkt abgefragt werden:

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

## Pseudoklassen in Formularen

- `:checked`
- `:empty`
- `:valid`
- `:invalid`
- `:required`

## Pseudoklassen für Links, Buttons, ...

- `:hover`
- `:visited`
- `:active`

## Pseudoklassen für die Reihenfolge

- `:first-child`
- `:last-child`
- `:nth-child(2n)`

## Pseudoelemente

Pseudoelemente erlauben das Hinzufügen zusätzlicher HTML-Elemente via CSS:

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
