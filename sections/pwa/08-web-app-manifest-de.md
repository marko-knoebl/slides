# Web App Manifest

## Web App Manifest

Das web app manifest ist eine json Datei, die Informationen zu einer Webanwendung beinhaltet.

Durch Bereitstellung einer manifest Datei kann die Installation einer PWA ermöglicht werden.

## Manifest-Datei

einbinden via:

```html
<link rel="manifest" href="manifest.json" />
```

## Manifest-Datei

```json
{
  "name": "Todo",
  "short_name": "Todo",
  "start_url": ".",
  "display": "standalone",
  "icons": [
    {
      "src": "images/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    ...
  ]
}
```

## Manifest-Datei: Einträge

https://developer.mozilla.org/en-US/docs/Web/Manifest

## Manifest-Datei: Einräge

essentielle Einträge in Chrome:

- `name`
- `short_name`
- `start_url`
- `icons` - verwendet im Menü, im Splash Screen; für Chrome sollten icons der folgenden Größen bereitgestellt werden: `144`, `192`, `512`
- `display`: `fullscreen` / `standalone` / `minimal-ui` / `browser`

## Manifest-Datei: Einträge

- `background_color` - sollte die gleiche Farbe sein wie die CSS-Hintergrundfarbe der Anwendung
- `description`
- `orientation`:
  - `any`
  - `natural`
  - `landscape` (`landscape-primary`, `landscape-secondary`)
  - `portrait` (`portrait-primary`,
    `portrait-secondary`)
- `theme_color`

## Meta tags in HTML

Diese Mata Tags sind hilfreich:

- in Chrome: Android Fensterfarbe: `<meta name="theme-color" content="..." />` - das sollte das gleiche sein wie `theme_color` in der Manifest-Datei
- in iOS: `<meta name="apple-mobile-web-app-capable" content="yes">` - versteckt das Browser UI
