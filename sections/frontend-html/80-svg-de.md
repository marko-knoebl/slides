# SVG

## SVG

SVG (scalable vector graphics): XML-basiertes Format für Vektorgrafiken

## Das SVG Tag

Attribute (Beispiele):

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="1000"
  height="500"
  viewBox="-500 0 1000 500"
></svg>
```

## SVG Elemente

- `g`: Gruppe
- `rect`
- `circle`
- `ellipse`
- `text`, `tspan`
- `path`

## Allgemeine SVG Attribute

- `id`, `class`
- `transform` (z.B. `"rotate(180)"`, `"translate(20 30)"`)
- `x`, `y` (Position)
- `stroke` (Linienfarbe)
- `fill` (Füllfarbe)

## rect

```xml
<rect x="50" y="50" width="20" height="200" fill="darkgrey">
```

## circle

```xml
<circle r="10" cy="290"/>
```

## ellipse

```xml
<ellipse cy="60" rx="30" ry="50"/>
```

## path

Element `path`, Attribut `d`

Rechteck:

```xml
<path d="M 0,0 L 10,0 L 10,10 L 0,10 L 0,0">
```

## Pfade - Befehle

- `M`: move to
- `L`: line to
- `H`: horizontal line to
- `V`: vertical line to
- `Q`: quadratic bézier curve to
- `T`: smooth quadratic bézier curve to
- `C`: cubic bézier curve to
- `S`: smooth cubic bézier curve to
- `A`: elliptical arc to
- `Z`: close path

## Pfade - Befehle

Alle Pfadbefehle sind auch als relative Koordinatenangaben möglich (mit klein geschriebenen Befehlsnamen):

```xml
<path d="M 500,500 l 10,10">
```

ist äquivalent zu:

```xml
<path d="M 500,500 L 510,510">
```

## g (Gruppe)

```xml
<g>
  <rect width="10" height="10">
  <rect x="20" width="10" height="10">
</g>
```

## Transformationen

Via Attribut `transform`:

```xml
<rect transform="translate(250, 0) rotate(-90, 50, 50)"/>
```

## Stil

```xml
<g fill="grey" stroke="black" stroke-width="3">
```

## Beispiel: Löffel und Gabel

<figure style="width: 60%; margin: 0 auto">
  <img src="assets/spoon-fork.svg" />
</figure>

## Beispiel: Löffel und Gabel

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1" width="500" height="500" viewBox="0 0 500 500">
  <g
    transform="translate(250, 0) rotate(45, 0, 160)"
    fill="grey">
    <rect y="100" x="-10" width="20" height="190"/>
    <circle r="10" cy="290"/>
    <ellipse cy="60" rx="35" ry="55"/>
  </g>
  <g
    transform="translate(250,0) rotate(-45, 0, 160)"
    fill="darkgrey">
    <path d="
      M -10,310 L 10,310 L10,100
      C 10,90 20,80 20,70
      L 19,0 L13,0 L11,70 L5,70 L3,0
      L-3,0 L-5,70 L-11,70 L-13,0 L-19,0 L-20,70
      C-20,80 -10,90 -10,100 Z"/>
  </g>
</svg>
```
