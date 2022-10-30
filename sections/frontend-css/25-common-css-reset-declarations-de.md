# Common CSS reset declarations

## Box-sizing

```css
* {
  box-sizing: border-box;
}
```

## Body margin

Body margin (default: 8px) is commonly set to 0 - e.g. so a navbar can be at the very top

```css
body {
  margin: 0;
}
```

## Schriftart

Einfache Deklaration für serifenlose Schrift:

```css
body {
  font-family: sans-serif;
}
```

Standard-Auswahl für serifenlose Schriften in Bootstrap / Reboot - beinhaltet native Schriftarten für verschiedene Plattformen:

```css
body {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji' !default;
}
```
