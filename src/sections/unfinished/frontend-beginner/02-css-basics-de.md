# CSS

---

## Stile auf HTML-Elemente anwenden

```html
<h1 style="color: blue; font-size: 30px">Hello</h1>
```

---

## Stylesheets einbinden

```html
<link rel="stylesheet" href="style.css" />
```

---

## CSS-Beispiel

```css
h1 {
  font-family: sans-serif;
  color: grey;
}

#home-button {
  color: white;
}
```

---

## CSS-Syntax

- Selektoren
- Properties

---

## CSS-Selektoren

Universalselektor: `*`
Tag-Selektor: `h1`
Klassen-Selektor: `.important`
ID-Selektor: `#home-button`

---

## CSS-Properties

- Farben
- Schriftart

---

## Farben

```css
h1 {
  color: red; /* Schriftfarbe */
  background-color: blue; /* Hintergrundfarbe */
}
```

---

## Farbangaben

Standard-Farben: z.B. `grey`, `blue`, `lightblue`, ...

RGB-Definition (rot-grün-blau): z.B. `rgb(255, 128, 128)`

HEX-Definition: z.B. `#ff8080`

---

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

---

## font-family

Es können mehrere Schriftarten angegeben werden. Der Browser verwendet die erste, die installiert ist.

```css
p {
  font-family: Arial, sans-serif;
}
```

3 allgemeine Schriftarten, die in jedem Browser vorhanden sind:

`serif`, `sans-serif`, `monospace`

---

## font-size

mögliche Einheiten:

- `px`: Pixel
- `%`: Prozent relativ zum umgebenden Text
- `em`: Prozent relativ zum umgebenden Text
- `rem`: Prozent relativ zur Schriftgröße vom `html`-Element

---

## font-style

dient ausschließlich für kursive Schrift

```css
h1 {
  font-style: italic;
}
```

---

## font-weight

Um die Schriftstärke zu verändern, insbesondere: `font-weight: bold;`

---

## text-decoration

```css
h1 {
  text-decoration: underline, overline, line-through;
}
```

---

## text-align

- `center`
- `justify`
- `left`
- `right`
- `start` (neu)
- `end` (neu)

---

## Inline- und Block-Elemente

Inline-Elemente:

- nebeneinander dargestellt
- so breit wie ihr Inhalt
- z.B. `a`, `em`, `strong`, (`img`)

Block-Elemente:

- untereinander dargestellt
- so breit wie möglich
- z.B. `h1`, `ul`, `li`, `p`

---

## span & div

`span` = allgemeinstes inline-Element

`div` = allgemeinstes block-Element

---

## Block- Elemente und das Box-Modell

"Schichten" von innen nach außen:

- Inhalt
- Innenabstand (padding)
- Rand (border)
- Außenabstand (margin)

---

## Block- Elemente und das Box-Modell

Größe des Inhalts:

- `height` / `width`
- `min-height` / `min-width`
- `max-height` / `max-width`

Wenn z.B. bei height `50%` angegeben wird, bezieht sich das auf das Elternelement

---

## Block- Elemente und das Box-Modell

Die Attribute `height`, `width` u.s.w. beziehen sich standardmäßig auf den Inhalt (ohne padding und border)

Heute setzt man oft:

```css
* {
  box-sizing: border-box;
}
```

dann beziehen sie sich auf die Gesamtgröße (mit padding und border, aber ohne margin)

---

## Block-Elemente und das Box-Modell

Padding (Innenabstand) und Margin (Außenabstand)

alle 4 Abstände gleich setzen: `padding: 10px;`

alle 4 Abstände individuell setzen: `padding: 10px 20px 30px 40px;` (oben - rechts - unten - links)

je 2 Abstände gleich setzen: `padding: 10px 20px;` (oben & unten - links & rechts)

horizontalen Abstand gleich setzen (zum horizontalen Zentrieren): `margin: 10px auto;`

Abstände individuell setzen: `padding: 10px; padding-left: 20px;`

---

## Block-Elemente und das Box-Modell

Border-Beispiel: `border: 10px solid blue`

Abrundung-Beispiel: `border-radius: 5px`

---

## margin & padding bei Inline-Elementen

Achtung: vertikales margin und padding wirken sich bei Inline-Elementen nicht auf die Positionierung aus und führen zu Überlappungen

---

## Layout-Beispiel: Horizontales Zentrieren

```css
div {
  width: 800px;
  margin: auto;
}
```

```css
div {
  max-width: 800px;
  margin: auto;
}
```

---

## overflow

Um bei Bedarf scroll-Leisten anzuzeigen:

```css
div {
  overflow: auto;
}
```

---

## Body mit voller Höhe

Standardmäßig: Body ist nur so groß wie dessen Inhalt

Um Body immer die volle Seitenhöhe einnehmen zu lassen:

```css
body {
  height: 100vh;
}
```

---

## Übung: Google-Klon
