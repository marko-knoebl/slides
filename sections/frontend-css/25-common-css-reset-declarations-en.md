# Verbreitete CSS Reset-Deklarationen

## Box-sizing

```css
* {
  box-sizing: border-box;
}
```

## Body margin

Der Body margin (Standard: 8px) wird oft auf 0 gesetzt - z.B. damit eine Navigationsleiste ganz oben angezeigt werden kann

```css
body {
  margin: 0;
}
```

## Fonts

simple sans-serif font declaration:

```css
body {
  font-family: sans-serif;
}
```

default sans-serif font declaration in Bootstrap / Reboot - includes native fonts for various platforms:

```css
body {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji' !default;
}
```
