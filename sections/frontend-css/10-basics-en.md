# CSS

## CSS

Style language of the web: defines layout and style of HTML pages

## Applying style to an HTML element

```html
<h1 style="color: grey; font-size: 30px">Hello</h1>
```

## Including stylesheets

usually inside the `head`:

```html
<link rel="stylesheet" href="style.css" />
```

## CSS example

```css
/* comment */
h1 {
  font-family: sans-serif;
  color: grey;
}

#home-button {
  color: white;
}
```

## CSS syntax

- selectors
- properties

## CSS selectors

- universal selector: `*`
- tag selector: `h1`
- class selector: `.important`
- ID selector: `#home-button`

## CSS selectors: priority

If two CSS properties are at odds with each other, the property that is applied is:

- the property that has a _more specific_ selector
- or, with equal _specificity_, the CSS statement that occurs _last_ in the code
