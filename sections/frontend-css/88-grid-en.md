# Grid

## Grid

example: layout with header and sidebar

```css
#layout {
  display: grid;
  height: 100vh;
  grid-template-areas: "header header" "sidebar main";
  grid-template-rows: auto 1fr;
  grid-template-columns: 200px 1fr;
}
```

## Grid

placing contents:

```css
#header {
  grid-area: header;
}

#main {
  grid-area: main;
}

/* ... */
```
