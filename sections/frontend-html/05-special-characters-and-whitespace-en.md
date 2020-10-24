# Special characters and whitespace

## Special characters

the following characters should always be "escaped" in an HTML document:

- `<` becomes `&lt;`
- `>` becomes `&gt;`
- `&` becomes `&amp;`

these characters must be escaped if they occur in attributes:

- `"` becomes `&quot;`
- (`'` becomes `&apos;` if the attribute is delimited by `'`)

## Whitespace

In HTML, any sequence of whitespace characters (space, line break, tab) is interpreted as a single space.

## Whitespace

These examples are all equivalent (displaying a single space between the images):

<!-- prettier-ignore-start -->

```html
<img src="foo.png" /> <img src="bar.png" />
```

```html
<img src="foo.png" />    <img src="bar.png" />
```

```html
<img src="foo.png" />

<img src="bar.png" />
```

<!-- prettier-ignore-end -->

## Whitespace

example of multi-line formatting if we want to display multiple elements without a space in between:

```html
<img src="image1.png" /><img src="image2.png" /><img
  src="image3.png"
/>
```
