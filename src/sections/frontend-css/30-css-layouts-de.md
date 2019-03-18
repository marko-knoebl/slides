# CSS-Layouts

## Layout-Grundlagen

[learnlayout.com](https://learnlayout.com)

## Absolute Positionierung

Beispiel: ein `div` soll je `10px` von der rechten unteren Ecke seines Elternelements positioniert sein

## Absolute Positionierung

```html
<div id="outer">
  <div id="inner"></div>
</div>
```

```css
#outer {
  position: relative;
}

#inner {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
```

## Positionierung

- `position`: `absolute`
- (`position`: `relative`)
- (`position`: `fixed`)
- (`position`: `static`: Standardwert)

## Flexbox

[css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Beispiele

- Facebook-Klon (mit Chat)
- Messaging-Anwendung

## Media Queries

- device-width
- aspect-ratio

Gerätesimulation im Browser