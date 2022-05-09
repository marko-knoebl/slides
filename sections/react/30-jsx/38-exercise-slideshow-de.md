# Beispiel: Slideshow

## Beispiel: Slideshow

- zusätzliches Styling
- kleine Vorschaubilder für 5 Bilder (2 vorhergehende, aktuelles, 2 kommende)
- Möglichkeit, die Bildgröße umzuschalten

Hinweise: möglicher Code, um Vorschau-IDs zu generieren:

```js
const previewIds = [];
for (let i = img - 2; i <= img + 2; i++) {
  if (i >= 0) {
    previewIds.push(i);
  }
}
```

mögliche Lösung: https://codesandbox.io/s/slideshow-advanced-zlltxu
