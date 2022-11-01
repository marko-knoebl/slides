# Box-Modell

## Box-Modell

"Schichten" von von Block-Elementen von innen nach außen:

- Inhalt
- Innenabstand (padding)
- Rand (border)
- Außenabstand (margin)

## Box-Modell

Beispiel: zwei Boxen

## Box-Modell

Größe des Inhalts:

- `height` / `width`
- `min-height` / `min-width`
- `max-height` / `max-width`

Wenn wir einen Prozentsatz angeben (z.B. `50%`), bezieht sich dieser auf das Elternelement

## Box-Modell

Die Attribute `height`, `width` u.s.w. beziehen sich standardmäßig auf den Inhalt (ohne padding und border)

Heute setzt man oft:

```css
* {
  box-sizing: border-box;
}
```

dann beziehen sie sich auf die Gesamtgröße (mit padding und border, aber ohne margin)

## Padding (Innenabstand) und margin (Außenabstand)

- Setzen aller vier Padding-Werte auf den gleichen Wert:  
  `padding: 10px`
- individuelles Setzen aller vier Werte:  
  `padding: 10px 20px 30px 40px` (top - right - bottom - left)
- Setzen der Paddings in vertikaler und horizontaler Richtung:  
  `padding: 10px 20px;` (top und bottom - left und right)
- automatisches Setzen des horizontalen Margins (horizontales Zentrieren):  
  `margin: 10px auto;`
- Individuelles setzen eines Paddings:  
  `padding: 10px; padding-left: 20px;`

## Box-Modell

Border-Beispiel: `border: 1px solid blue`

abgerundete Ecken: `border-radius: 5px`

## margin & padding bei Inline-Elementen

Achtung: vertikales margin und padding wirken sich bei Inline-Elementen nicht auf die Positionierung aus und führen zu Überlappungen

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

## Layout-Beispiel: Body mit voller Höhe

Standardmäßig: Body ist nur so groß wie dessen Inhalt

Um Body immer die volle Seitenhöhe einnehmen zu lassen:

```css
html {
  height: 100%;
}
body {
  height: 100%;
}
```

## Tabellen und Zellenrahmen

Standardmäßig hat jede Zelle in einer Tabelle einen eigenen Rahmen.

"Zusammenlegen" der Rahmen benachbarter Zellen:

```css
table {
  border-collapse: collapse;
}
```
