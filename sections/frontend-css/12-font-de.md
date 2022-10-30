# Schrift

## Schrift

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
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

Drei allgemeine Schriftarten, die in jedem Browser vorhanden sind:

`serif`, `sans-serif`, `monospace`

## font-size

mögliche Einheiten:

- `px`: "Pixel"
- `%`: Prozent relativ zum umgebenden Text
- `em`: relativ zum umgebenden Text
- `rem`: relativ zur Schriftgröße des `html`-Elements

übliche Standardgröße in Browsern: `16px`

## line-height

übliche Standardgröße in Browsern: `1.2`

wird oft auf größere Werte gesetzt, z.B. `1.5`

## font-style

dient ausschließlich für kursive Schrift

```css
h1 {
  font-style: italic;
}
```

## font-weight

Um die Schriftstärke zu verändern, mögliche Werte:

- `100`
- `200`
- `300` (auch: `light`)
- `400` (auch: `regular`)
- `500`
- `600` (auch: `semibold`)
- `700` (auch: `bold`)
- `800`
- `900`

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
- `start`
- `end`
