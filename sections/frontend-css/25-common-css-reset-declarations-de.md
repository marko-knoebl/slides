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
