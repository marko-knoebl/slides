# Media queries

## Media queries

Möglichkeit, insbesondere die Bildschirmgröße und Orientierung abzufragen

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

## Media queries

```css
@media (min-width: 576px) {
  /* small screen */
}

@media (min-width: 768px) {
  /* medium screen */
}

/* ... */
```

## Media queries

common breakpoints (roughly every 200px):

| size | min (bootstrap) | min (tailwind) |
| ---- | --------------- | -------------- |
| xs   | N/A             | N/A            |
| sm   | 576px           | 640px          |
| md   | 768px           | 768px          |
| lg   | 992px           | 1024px         |
| xl   | 1200px          | 1280px         |
| xxl  | 1400px          | 1536px         |
