# Übergänge (Transitions)

## Übergänge

Die Änderung verschiedener CSS-Properties kann wie folgt animiert werden:

```css
#animated {
  transition: background-color: 3s, margin-top: 1s;
}
```

## Beispiel: Animation bei Hover

```css
div.box {
  width: 40px;
  height: 40px;
  background-color: blue;
  transform: rotate(0);
  transition: transform 9s, background-color 9s;
}
div.box:hover {
  background-color: red;
  transform: rotate(360deg) scale(2);
  transition: transform 0.5s, background-color 0.5s;
}
```

## Beispiel: Spiel

```css
div {
  width: 40px;
  height: 40px;
  background-color: blue;
  transform: translate(0, 0) rotate(0);
  transition: transform 9s, background-color 9s;
}
div:hover {
  background-color: red;
  transform: translate(200px, 0) rotate(360deg);
  transition: transform 3s, background-color 3s;
}
```

## Aufgabe: Dropdown

Dropdown, das bei einem Buttonklick aktiv wird

HTML-Vorlage:

```html
<div id="dropdown">dropdown</div>
<button
  id="dropdown-button"
  onclick="dropdown.className = 'active'"
>
  menu
</button>
```

## Aufgabe: Overlay bei Hover

## Aufgabe: Animation von Löffel und Gabel

<figure style="width: 50%; margin: 0 auto">
  <img src="assets/spoon-fork-animated.svg" />
</figure>

Achtung: Wir verwenden nun CSS-Transformationen, nicht SVG-Transformationen; wir müssen nun beispielsweise `transform-origin` separat setzen
