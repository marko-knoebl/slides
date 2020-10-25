# CSS

## Slides

<https://marko-knoebl.github.io/slides/>

## Your Trainer

Marko Knöbl

- based in Vienna
- former math teacher
- programming topics:
  - JavaScript, TypeScript and React
  - Python, data science

## Introduction of Participants

- current projects
- prior knowledge
- expectations

## Organizational

- duration
- breaks
- lunch
- materials
- questions, feedback?

## Code

Code available at: <https://github.com/marko-knoebl/courses-code>

# CSS

## CSS

Style language of the web: defines layout and style of HTML pages

## Applying style to an HTML element

```html
<h1 style="color: blue; font-size: 30px">Hello</h1>
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

# Colors

## Colors

```css
h1 {
  color: red; /* text color */
  background-color: blue; /* background color */
}
```

## Specifying colors

- default colors  
  e.g. `grey`, `blue`, `lightblue`, ...
- RGB defnition (red-green-blue)  
  e.g. `rgb(255, 128, 128)`
- HEX definition  
  e.g. `#ff8080`
- HSL definition  
  (hue, saturation, lightness)  
  e.g. `hsl(180, 60%, 70%)`

# Font

## Font

```css
p {
  font-family: Arial, sans-serif;
  font-size: 14px;
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

3 generic font families that are available in every browser:

`serif`, `sans-serif`, `monospace`

## font-size

possible units:

- `px`: "pixel"
- `%`: percentage relative to the surrounding text
- `em`: relative to the surrounding text
- `rem`: relative to the font size of the `html` element

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
- `start` (new)
- `end` (new)

# Units of length

## Units of length

px, em, rem, %, vh, vw

## device pixel ratio

formerly:  
1px = one pixel on the screen

today:  
e.g. on iPhone 4: 1px = two pixels on the screen (device pixel ratio = 2)

can be queried via the JavaScript variable `devicePixelRatio`

## rem

rem = font size of the `html` element

default size in browsers: 1rem = 16px

## vh, vw

1vh = 1% of the viewport height

1vw = 1% of the viewport width

# CSS resets and libraries

## CSS resets

reset: stylesheets which unify basic styles across browsers:

- _normalize.css_: [website](https://necolas.github.io/normalize.css/), [CDN](https://cdn.jsdelivr.net/npm/normalize.css/normalize.css)
- _sanitize.css_: based on normalize - [website](https://csstools.github.io/sanitize.css/), [CDN](https://cdn.jsdelivr.net/npm/sanitize.css/sanitize.css)
- _reboot_: based on normalize, acts as a basis for bootstrap - [website](https://getbootstrap.com/docs/4.0/content/reboot/), [CDN](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap-reboot.css)

## CSS libraries

- _Picnic CSS_: simple CSS library, without JavaScript - [website](https://picnicss.com/), [CDN](https://cdn.jsdelivr.net/npm/picnic)
- _Bootstrap_: widely-used CSS library with many available themes - [website](https://getbootstrap.com/), [CDN for CSS](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.css), [CDN for JS](https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.js)
- _Semantic UI_ - [website](https://semantic-ui.com), [CDN for CSS](https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.css), [CDN for JS](https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.js)
- _Foundation_ - [website](https://get.foundation/sites/docs/), [CDN for CSS](https://cdn.jsdelivr.net/npm/foundation-sites/dist/css/foundation.css), [CDN for JS](https://cdn.jsdelivr.net/npm/foundation-sites/dist/js/foundation.js)

# Inline elements and block elements

## Inline elements and block elements

inline elements:

- arranged next to each other
- as wide as their content
- e.g. `a`, `em`, `strong`, (`img`)

block elements:

- arranged underneath each other
- as wide as possible
- e.g. `h1`, `ul`, `li`, `p`

## span and div

`span` = generic inline element

`div` = generic block element

# Box model

## Box model

"layers" of block elements from innermost to outermost:

- content
- padding
- border
- margin

## Box model

example: two boxes

## Box model

sizing the content:

- `height` / `width`
- `min-height` / `min-width`
- `max-height` / `max-width`

if we specify a percentage amount (e.g. `width: 50%`) the size is relative to the parent element

## Box model

By default the attributes `height`, `width`, ... apply to the content (without padding or border)

In modern CSS we often set:

```css
* {
  box-sizing: border-box;
}
```

This means these attributes will refer to the total size (including padding and border, not including margin)

## Setting padding and margin

- setting all four margins to the same value:  
  `margin: 10px;`
- setting all four margins individually:  
  `margin: 10px 20px 30px 40px` (top - right - bottom - left)
- setting vertical and horizontal margins:  
  `margin: 10px 20px;` (top and bottom - left and right)
- setting horizontal margin automatically (horizontal centering):
  `margin: 10px auto;`
- setting margins individually:  
  `maring: 10px; margin-left: 20px;`

## Box model

border (example): `border: 10px solid blue`

rounded corners: `border-radius: 5px`

## Margin and padding on inline elements

Note: vertical margin and padding will not influence the positioning of inline elements (and may cause overlaps)

## Example: horizontal centering

```css
div {
  width: 800px;
  margin: auto;
}
```

```css
div {
  max-width: 800px;
  margin: auto;
}
```

## Example: full height body

By default the document body will be ass tall as its content

If the body should take up the entire screen height:

```css
body {
  height: 100vh;
}
```

## Tables and cell borders

By default every cell in a table has its own border

"collapsing" the borders of adjacent cells:

```css
table {
  border-collapse: collapse;
}
```

# Overflow

## Overflow

default behavior if a child element is taller or wider than its parent:

the child will flow out of the parent element

## Overflow

to display scroll bars if needed:

```css
#parent {
  overflow: auto;
}
```

## Overflow - example

example: display a background for the entire page by making the body take the full height, but display scrollbars if its content is more than that

```css
body {
  height: 100vh;
  overflow: auto;
  background-color: lightgrey;
}
```

# Flexbox

## Display property

possibilities:

- `display: block`
- `display: inline`
- `display: none`
- `display: flex`

## Flexbox

Simple possibility to arrange elements _underneath each other_ or _next to each other_

## Flexbox properties

container:

- `flex-direction`
- `flex-wrap`
- `justify-content`
- `align-content`
- `align-items`

items:

- `flex-basis`
- `flex-grow`

## Flexbox

```css
#container {
  display: flex;
  flex-direction: row;
}
```

```css
#container {
  display: flex;
  flex-direction: column;
}
```

## Flexbox

Example: page layout with navbar on the side and main area

```css
body {
  display: flex;
  flex-direction: row;
}
body > nav {
  flex-basis: 5em;
}
body > main {
  flex-grow: 1;
}
```

## Flexbox

[css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# Media queries

## Media queries

possibility to query the screen size and orientation (amongst others)

## Media queries

```css
.menu {
  display: flex;
  flex-direction: column;
}

@media (min-width: 800px) {
  .menu {
    flex-direction: row;
  }
}
```

## Media queries

```css
@media (orientation: landscape) {
  .layout {
    flex-direction: row;
  }
}
```

# Exercises

- Google clone
- Chat application

# Advanced CSS selectors

## Advanced CSS selectors

- attributes
- sub-elements
- child elements
- pseudo classes
- pseudo elements

## Attributes

```css
input[type='checkbox'] {
  /* ... */
}
```

## Sub elements and child elements

style links occuring somewhere in the `header`:

```css
header a {
  /* ... */
}
```

style a `nav` which is a direct child of `body`:

```css
body > nav {
  /* ... */
}
```

## Pseudo classes

**Pseudo classes** start with a colon:

```css
a:hover {
  text-decoration: underline;
}
button:disabled {
  background-color: lightgrey;
}
tr:nth-child(2n) {
  background-color: grey;
}
tr:hover:nth-child(n) {
  background-color: lightgreen;
}
```

## Pseudo classes in forms

- `:checked`
- `:empty`
- `:valid`
- `:invalid`
- `:required`

## Pseudo classes for links, buttons, ...

- `:hover`
- `:visited`
- `:active`

## Pseudo classes for ordered children

- `:first-child`
- `:last-child`
- `:nth-child(2n)`

## Pseudo elements

**Pseudo elements** allow for adding additional HTML elements via CSS:

```css
.todo-item.completed::before {
  content: '✓';
}
```

```css
nav button[aria-haspopup='true']::after {
  content: '▾';
}
```

# Positioning

## Absolute positioning

Example: a `div` should be positioned `10px` from the bottom right corner of its parent

## Absolute positioning

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

## Positioning

- `position`: `absolute`
- (`position`: `relative`)
- (`position`: `fixed`)
- (`position`: `static`: default value)

## Positioning

Example for `position: relative`: superscript or subscript

## Beispiel

Facebook clone with chat

# Transformations

## Transformations

```css
#element1 {
  transform: translsate(100px, 0);
}
```

## Transformations

```css
#element2 {
  transform: translate(100px, 0) rotate(45deg);
  transform-origin: 0 0;
}
```

element will be rotated by 45 degrees first, then translated to the right by 100 pixels

center of rotation: top left corner of the element

# Transitions

## Transitions

the change of some CSS properties can be animated:

```css
#animated {
  transition: background-color: 3s, margin-top: 1s;
}
```

## Example: transition on hover

```css
div.box {
  width: 40px;
  height: 40px;
  background-color: blue;
  transform: rotate(0);
  transition: transform 9s, background-color 9s;
}
div.box:hover {
  background-color: red;
  transform: rotate(360deg) scale(2);
  transition: transform 0.5s, background-color 0.5s;
}
```

## Example: game

```css
div {
  width: 40px;
  height: 40px;
  background-color: blue;
  transform: translate(0, 0) rotate(0);
  transition: transform 9s, background-color 9s;
}
div:hover {
  background-color: red;
  transform: translate(200px, 0) rotate(360deg);
  transition: transform 3s, background-color 3s;
}
```

## Task: dropdown

Dropdown that becomes active on button click

HTML template:

```html
<div id="dropdown">dropdown</div>
<button
  id="dropdown-button"
  onclick="dropdown.className = 'active'"
>
  menu
</button>
```

## Task: overlay on hover

## Task: Animating spoon and fork

<figure style="width: 50%; margin: 0 auto">
  <img src="assets/spoon-fork-animated.svg" />
</figure>

Note: we are using CSS transformations, not SVG transformations; we must set `transform-origin` separately
