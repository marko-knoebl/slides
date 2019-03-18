# Tabellen und CSS

## Tabellen: verwenden von Pseudoklassen

- `:hover`: Der Stil einer Tabellenzeile soll sich ändern, wenn wir die Maus darüber bewegen
- `:nth-child`: Die Zeilen sollen gestreift dargestellt werden

## Tabellen: Stil

```css
table {
  border-collapse: collapse;
}
tr:hover:nth-child(n) {
  background-color: lightgrey;
}
tr:nth-child(2n) {
  background-color: skyblue;
}
```

## Übung: Öffnungszeiten
