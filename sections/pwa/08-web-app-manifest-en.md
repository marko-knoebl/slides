# Web App Manifest

## Web App Manifest

The web app manifest is a json file that provides information on a web app.

Providing a manifest file can enable installation of a PWA.

## Manifest file

include it via:

```html
<link rel="manifest" href="manifest.json" />
```

## Manifest file

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

## Manifest file - entries

https://developer.mozilla.org/en-US/docs/Web/Manifest

## Manifest file - entries

crucial entries for Chrome:

- `name`
- `short_name`
- `start_url`
- `icons` - used in the menu, in the splash screen; for Chrome we should provide square icons of sizes: `144`, `192`, `512`
- `display`: `fullscreen` / `standalone` / `minimal-ui` / `browser`

## Manifest file - entries

- `background_color` - should be the same as the app's CSS background color
- `description`
- `orientation`:
  - `any`
  - `natural`
  - `landscape` (`landscape-primary`, `landscape-secondary`)
  - `portrait` (`portrait-primary`,
    `portrait-secondary`)
- `theme_color`:

## Meta tags in HTML

These meta tags are helpful in the browser:

- in Chrome: Android window color: `<meta name="theme-color" content="..." />` - this should be the same as `theme_color` in the manifest
- on iOS: `<meta name="apple-mobile-web-app-capable" content="yes">` - this hides the browser UI
