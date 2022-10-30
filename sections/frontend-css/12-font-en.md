# Font

## Font

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
}
```

## font-family

we can specify multiple font families; the browser uses the first one that is available

```css
p {
  font-family: Arial, sans-serif;
}
```

Three generic font families that are available in every browser:

`serif`, `sans-serif`, `monospace`

## font-size

possible units:

- `px`: "pixel"
- `%`: percentage relative to the surrounding text
- `em`: relative to the surrounding text
- `rem`: relative to the font size of the `html` element

common default font size in browsers: `16px`

## line-height

common default line height in browsers: `1.2`

is often set to bigger values, e.g. `1.5`

## font-style

only used for italic font

```css
h1 {
  font-style: italic;
}
```

## font-weight

possible values:

- `100`
- `200`
- `300` (or: `light`)
- `400` (or: `regular`)
- `500`
- `600` (or: `semibold`)
- `700` (or: `bold`)
- `800`
- `900`

## text-decoration

```css
h1 {
  text-decoration: underline, overline, line-through;
}
```

## text-align

- `center`
- `justify`
- `left`
- `right`
- `start`
- `end`
