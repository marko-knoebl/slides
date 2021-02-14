# Color picker

Create a color picker component that can be used in this way:

```jsx
const [headingColor, setHeadingColor] = useState("0000ff");
```

```jsx
<ColorPicker color={headingColor} onChange={setHeadingColor} />
```

## Details

The color picker should initially be displayed as a small square that shows the current color. When, clicked, it should expand to show a selection of default color squares and an input for hex values.

The `onChange` event should be triggered any time the user clicks on a square or any time the input has a valid hex content.

## Hints for implementation

Split it into multiple components, e.g. `ColorPicker`, `PickerPopup`, `ColoredSquare`

For a selection of default colors, you could use these:

```js
// from https://clrs.cc/
const colors = [
  "001f3f",
  "0074D9",
  "7FDBFF",
  "39CCCC",
  "3D9970",
  "2ECC40",
  "01FF70",
  "FFDC00",
  "FF851B",
  "FF4136",
  "85144B",
  "F012BE",
  "B10DC9",
  "111111",
  "AAAAAA",
  "DDDDDD",
  "FFFFFF",
];
```
