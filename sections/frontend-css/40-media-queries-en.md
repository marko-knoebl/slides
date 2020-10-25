# Media queries

## Media queries

possibility to query the screen size and orientation (amongst others)

## Media queries

```css
.menu {
  display: flex;
  flex-direction: column;
}

@media (min-width: 800px) {
  .menu {
    flex-direction: row;
  }
}
```

## Media queries

```css
@media (orientation: landscape) {
  .layout {
    flex-direction: row;
  }
}
```
