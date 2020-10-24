# Positionierung

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

## Positionierung

Beispiel für `position: relative`: hochgestellter oder tiefgestellter Text

## Beispiel

Facebook-Klon mit Chat
