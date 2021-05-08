# CSS Styling Beispiele

## Body-Höhe

Sicherstellen, dass der body das ganze Fenster ausfüllt (z.B. um den Hintergrund zu setzen):

```css
html {
  height: 100%;
}
body {
  height: 100%;
  padding: 0;
}
```

## Button

Beispiel für einen Button mit angewendetem Stil:

```css
button {
  background-color: #0074d9;
  color: #ffffff;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

## Container

"fluid Container" - ähnlich wie bei _Bootstrap_:

```css
.container-fluid {
  padding-left: 12px;
  padding-right: 12px;
}
```

## Container

Container ähnlich wie bei _bootstrap_:

```css
.container {
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 720px;
  }
}
/* ... (more media queries) ... */
```

## Container

standard Viewport-Breiten und Container-Größen in Bootstrap:

- 576px → 540px
- 768px → 720px
- 992px → 960px
- 1200px → 1140px
- 1400px → 1320px

## Grid

einfaches Beispiel aus _Picnic CSS_:

```css
.flex {
  display: flex;
  flex-wrap: wrap;
}
```
