# Overflow

## Overflow

Standardverhalten, wenn ein Kindelement höher oder breiter als das Elternelement ist:

Das Kindelement ragt über das Elternelement hinaus

## Overflow

Um bei Bedarf beim Elternelement Scrollleisten anzuzeigen:

```css
#parent {
  overflow: auto;
}
```

## Overflow - Beispiel

Beispiel: Anzeigen eines Hintergrunds für die ganze Seite durch einen _body_, der auf Fensterhöhe skaliert ist - aber Anzeigen von Scrollbars, falls der Inhalt darüber hinaus geht

```css
body {
  height: 100vh;
  overflow: auto;
  background-color: lightgrey;
}
```

## Overflow und das body-Element

_Sonderfall_: das body-Element verhält sich immer so, als ob `overflow: auto;` gesetzt wäre
