# Transitions

## Transitions

the change of some CSS properties can be animated:

```css
#animated {
  transition: background-color: 3s, margin-top: 1s;
}
```

## Example: transition on hover

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

## Example: game

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

## Task: dropdown

Dropdown that becomes active on button click

HTML template:

```html
<div id="dropdown">dropdown</div>
<button
  id="dropdown-button"
  onclick="dropdown.className = 'active'"
>
  menu
</button>
```

## Task: overlay on hover

## Task: Animating spoon and fork

<figure style="width: 50%; margin: 0 auto">
  <img src="assets/spoon-fork-animated.svg" />
</figure>

Note: we are using CSS transformations, not SVG transformations; we must set `transform-origin` separately
