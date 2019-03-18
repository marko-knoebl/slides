# Schrift

## Schrift

```css
p {
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
}
```

## font-family

Es können mehrere Schriftarten angegeben werden. Der Browser verwendet die erste, die installiert ist.

```css
p {
  font-family: Arial, sans-serif;
}
```

3 allgemeine Schriftarten, die in jedem Browser vorhanden sind:

`serif`, `sans-serif`, `monospace`

## font-size

mögliche Einheiten:

- `px`: "Pixel"
- `%`: Prozent relativ zum umgebenden Text
- `em`: Prozent relativ zum umgebenden Text
- `rem`: Prozent relativ zur Schriftgröße des `html`-Elements

## font-style

dient ausschließlich für kursive Schrift

```css
h1 {
  font-style: italic;
}
```

## font-weight

Um die Schriftstärke zu verändern, insbesondere: `font-weight: bold;`

## text-decoration

```css
h1 {
  text-decoration: underline, overline, line-through;
}
```

## text-align

- `center`
- `justify`
- `left`
- `right`
- `start` (neu)
- `end` (neu)
