# HTML

## Slides

<https://marko-knoebl.github.io/slides/>

## Your Trainer

Marko Knöbl

- Frontend Web-Development
  - JavaScript
  - React, Angular
- Programming
  - Python, JavaScript

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

# HTML, CSS & JavaScript

## HTML, CSS & JavaScript

Fundamental Technologies used by browsers:

- **HTML**: defines the structure and content of a page
- **CSS**: defines the style of a page
- **JavaScript**: defines behavior / interactions of a page

# HTML basics

## Elements and tags

HTML consists of nested **elements** which are delimited by **tags**

```html
<h1>this is a heading</h1>
```

## Elements and tags

Some HTML elements don't have any content - e.g. the _br_ tag, which signifies a line break:

```html
<br />
```

or

<!-- prettier-ignore -->

```html
<br>
```

## Attributes

HTML elements may have attributes:

```html
<img src="portrait.png" alt="Portrait of the user" />
```

values are usually inclosed in double quotes

## HTML tags

examples:

- h1-h6
- p
- em
- strong
- br
- ul & li
- img
- a

## Comments

```html
<!-- this is a comment -->
```

## Trying out

<https://codesandbox.io/s/> → _static_

(alternatives: <https://codepen.io> <https://jsfiddle.net>, <https://plnkr.co>)

## Browser tools (F12)

Exercise: inspect an existing website in the browser tools

# Structure of an HTML document

## Structure of an HTML document

```html
<!DOCTYPE html>
<html lang="de">
  <head></head>
  <body></body>
</html>
```

## Structure of an HTML document

```html
<!DOCTYPE html>
```

Declares the file as an HTML(5) document

## Structure of an HTML document

- `<html>`: contains the entire document; it often has the language set, e.g. `lang="en"`
- `<head>`: contains information like document title, character encoding, ...
- `<body>`: the actual content that is displayed in the browser view

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

# Stylesheets

## Stylesheets

Stylesheets allow us to include predefined styles and reuse them across HTML documents

they may be included from predefined libraries (e.g. _Bootstrap_) or created manually

## Inclusion

example:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/picnic"
/>
```

usually in the _head_ of a document

## CSS Resets

Resets: stylesheets that unify basic styles across browsers:

- _normalize.css_: [website](https://necolas.github.io/normalize.css/), [CDN](https://cdn.jsdelivr.net/npm/normalize.css/normalize.css)
- _sanitize.css_: based on normalize - [website](https://csstools.github.io/sanitize.css/), [CDN](https://cdn.jsdelivr.net/npm/sanitize.css/sanitize.css)
- _reboot_: based on normalize, is used in Bootstrap - [website](https://getbootstrap.com/docs/4.0/content/reboot/), [CDN](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap-reboot.css)

CDN: Content Delivery Network - services that host CSS and JS libraries

## CSS Libraries

CSS Libraries:

- _Picnic CSS_: simple CSS library, doesn't use JavaScript - [website](https://picnicss.com/), [CDN](https://cdn.jsdelivr.net/npm/picnic)
- _Bootstrap_: widely used CSS library with many themes - [website](https://getbootstrap.com/), [CDN for CSS](https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.css), [CDN for JS](https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.js)
- _Semantic UI_ - [website](https://semantic-ui.com), [CDN for CSS](https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.css), [CDN for JS](https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.js)
- _Foundation_ - [website](https://get.foundation/sites/docs/), [CDN for CSS](https://cdn.jsdelivr.net/npm/foundation-sites/dist/css/foundation.css), [CDN for JS](https://cdn.jsdelivr.net/npm/foundation-sites/dist/js/foundation.js)

<!--

https://picnicss.com/ (Einträge in der Navbar sind buttons, kein JS)
https://milligram.io/ (keine navbar, verwendet class="button")
http://getskeleton.com/ (keine navbar)
https://github.com/mdipierro/no.css
https://getbootstrap.com/
-->

# HTML elements

## HTML elements

- structuring: _h1_, _p_, _header_, _main_, _nav_, _section_, ...
- links: _a_
- text formatting: _br_, _em_, _strong_, ...
- general elements: _div_, _span_
- lists: _ul_, _ol_, _li_
- media: _img_, _video_, _audio_, ...
- forms: _form_, _input_, _button_, _label_, ...
- tables: _table_, _tr_, _td_, ...

## HTML elements

complete list:

- <https://www.w3schools.com/tags/ref_byfunc.asp>
- <https://www.w3schools.com/TAgs/default.asp>
- <https://developer.mozilla.org/de/docs/Web/HTML/Element>

## Exercise

We'll create a website for a Restaurant

contents: table for opening hours, form for Reservations, ...

# Structuring elements

## Structuring elements

- h1 - h6
- p

<!-- separator -->

- header
- main
- footer
- aside

<!-- separator -->

- nav

<!-- separator -->

- section
- article

## Headings and Structuring elements

Headings inside of _nav_, _aside_, _article_ and _section_ have their font sizes adjusted automatically:

```html
<h1>big heading</h1>
<section>
  <h1>medium heading</h1>
  ...
</section>
<section>
  <h1>medium heading</h1>
  <section>
    <h1>small heading</h1>
    <p>...</p>
  </section>
</section>
```

# Links

## Links

Example:

```html
<a href="https://en.wikipedia.org/wiki/HTML"
  >Wikipedia article</a
>
```

## Links

Link that opens in new tab / window:

```html
<a
  href="https://en.wikipedia.org/wiki/HTML"
  target="_blank"
  rel="noreferrer"
  >Wikipedia article</a
>
```

## Links

E-Mail link:

```html
<a href="mailto:foo@bar.com">send e-mail</a>
```

## Links

Download link:

```html
<a href="report.ods" download>report</a>
```

# Text formatting

## Text formatting

in practice:

- `em` or `i` for making text _italic_
- `strong` or `b` for making text **bold**

## Text formatting

actual meaning according to the HTML 5 standard:

- `em` - emphasis
- `i` - proper names, technical terms, foreign words, ...
- `strong` - importance
- `b` - other highlight

## Text formatting

Examples:

```html
My next phone <em>must</em> be a <i>FooPhone</i>.
```

```html
<strong>The event is cancelled</strong> due to bad weather.
```

# div and span

## div and span

- `div`: generic block element
- `span`: generic inline element

block elements: displayed underneath each other, as wide as possible

inline elements: displayed next to each other, as wide as their content

# Lists

## Lists

- `ul` (unordered list)
- `ol` (ordered list - numbered)
- `li` (list item)

## Lists

example:

```html
<h1>tetrapods:</h1>
<ul>
  <li>amphibians</li>
  <li>reptiles</li>
  <li>birds</li>
  <li>mammals</li>
</ul>
```

## Listen

nested lists:

```html
<h1>vertebrate:</h1>
<ul>
  <li>fish</li>
  <li>
    tetrapods
    <ul>
      <li>amphibians</li>
      <li>reptiles</li>
      <li>birds</li>
      <li>mammals</li>
    </ul>
  </li>
</ul>
```

# Forms and buttons

## Forms and buttons

elements:

- `button`
- `form`
- `input`
- `label`
- `select`
- ...

## Form example

```html
<form action="/register" method="post">
  <div>
    <label
      >first name: <input type="text" name="firstname"
    /></label>
  </div>
  <div>
    <label
      >last name: <input type="text" name="lastname"
    /></label>
  </div>
  <button type="submit">register</button>
</form>
```

## Buttons

```html
<button type="submit">press me!</button>
```

## Buttons

button types:

- _submit_: button that submits a form (default type for buttons in a form)
- _button_
- (_reset_)

## Input

```html
<input />
```

```html
<input type="password" />
```

## Input types

default type: `text`

other possibilities:

- `checkbox`
- `radio`
- `file`
- `password`
- `date` (HTML 5)
- `email`(HTML 5)
- `number` (HTML 5)
- `search` (HTML 5)

## Input attributes

- placeholder
- autofocus
- autocomplete
- size

## Autocomplete

Possible values of the `autocomplete` attribute:

- `name`
- `given-name`
- `email`
- `username`
- ...

## Validation

- `required`
- `minlength`
- `maxlength`

CSS pseudoclasses: `:valid`, `:invalid`

## Validation - example

```html
<input
  type="number"
  min="-5"
  max="5"
  step="0.1"
  value="1"
/>
```

## Input and label

Inputs should have labels that describe them:

```html
<label
  >enter your name:
  <input />
</label>
```

or

```html
<label for="name-input">enter your name:</label>
<input id="name-input" />
```

## Forms

```html
<form action="/register" method="post">
  first name: <input type="text" name="firstname" /><br />
  last name: <input type="text" name="lastname" /><br />
  <button type="submit">register</button>
</form>
```

## Forms

When the form is submitted, a _post_ request with the following content is sent to _/register_:

```txt
firstname=John&lastname=Doe
```

## Other form elements

- textarea
- select

# Media

## Media

- `img`
- `video`
- `audio`

## img

attributes:

- `src`: image path
- `alt`: alternative text in case the picture cannot be displayed
- `srcset`: list of image paths for different resolutions

## srcset - Beispiel

```html
<img
  alt=""
  src="images/2000x1000.png"
  srcset="
    images/500x250.png   500w,
    images/1000x500.png 1000w
  "
/>
```

Demo: <http://srcset.salcode.com/>

## video

```html
<video autoplay loop controls width="250">
  <source src="myvideo.webm" type="video/webm" />
  <source src="myvideo.mp4" type="video/mp4" />
  Sorry, your browser doesn't support embedded videos.
</video>
```

Example video: <https://interactive-examples.mdn.mozilla.net/media/examples/flower>.\*

## audio

```html
<audio src="myaudio.mk" loop volume="0.5"></audio>
```

# Tables

## Tables

tags:

- `table`
- (`tbody`)
- (`thead`)
- `tr`
- `th`, `td`
- `caption`

attributes:

- `colspan`, `rowspan`

# Head

## Entries in the head

- `title`
- `meta`
- favicon
- stylesheet
- scripts

## title

document title that appears in the window bar:

```html
<title>my website</title>
```

## meta

meta tags are used for including associated meta information

## meta: charset

We should usually include a `<meta charset="UTF-8" />` declaration so we can use any Unicode characters

```html
<button>😊</button>
```

## meta: viewport

We should usually include a _viewport_ declaration to reset browser scaling on small devices

```html
<meta name="viewport" width="device-width" />
```

**Background**: In the early days of mobile web (before responsive design), Websites were scaled down by mobile browsers. The above code disables this behavior.

<https://viewportsizes.com/mine>

## meta: description

- may be used by search engines to show a page summary
- default title for bookmarks

```html
<meta
  name="description"
  content="Wikipedia is a free online encyclopedia, ..."
/>
```

## meta: keywords

may be used by search engines

```html
<meta name="keywords" content="HTML,javascript" />
```

## meta: http-equiv="X-UA-Compatible"

is relevant for Internet Explorer &lt;= 10; causes the use of the most modern version of the rendering engine

## favicon

icon that is displayed in the website tab

```html
<link
  rel="icon"
  sizes="16x16"
  href="favicon_16.png"
  type="image/png"
/>
```

# Accessibility

## Accessibility

Strategies to make websites accessible by as many people as possible

relevant groups:

- visually impaired
- mobility impaired
- hearing impaired

mechanisms:

- screen reader
- keyboard navigation
- subtitles

## Screen reader support

- use semantic HTML elements (e.g. `button` and `section` instead of `div`)
- meaningful text on links and buttons
  Bad example: Click [here](https://en.wikipedia.org/wiki/Accessibility) to learn more about accessibility
  Good example: Learn [more on the topic of accessibility](https://en.wikipedia.org/wiki/Accessibility)
- associated labels for inputs
- alt text for images / videos

## Example: alt text for an image

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex:
    A two legged dinosaur standing upright, with small arms,
    and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur"
/>
```

## Supporting page navigation via keyboard

- use semantic elements (e.g. `button`, `a`, `form`, `input`)

## Ressources

- [MDN: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

# Hosting

## Hosting

Hosting for static websites is often available for free:

- [zeit.co](https://zeit.co) (command-line tool _now_)
- [Github Pages](https://pages.github.com)
- [tiiny.host](https://tiiny.host/) (login-free hosting for 24 hours)
- [netlify.com/drop](https://netlify.com/drop) (login-free hosting for 24 hours)

# Bootstrap

## Bootstrap

CSS framework for creating websites - we don't have to write (much) CSS

## Using Bootstrap

- without any additional work: default style of elements like `body`, `h1`, `button`, ... changes
- for more functionality: set the `class` attribute

## Bootstrap project: restaurant website

We'll create a simple website - e.g. for a restaurant

contents:

- navigation menu
- table with opening hours
- form for reservations
- slideshow with images

## Bootstrap: container

Container = basic building block for bootstrap, top-level division of a document

- `<div class="container-fluid">`: container that is as wide as the page
- `<div class="container">`: container that "locks" on specific sizes

## Bootstrap: column layout (simple)

using classes `container`, `row`, `col`

```html
<div class="container">
  <div class="row">
    <div class="col">one</div>
    <div class="col">two</div>
    <div class="col">three</div>
  </div>
  <div class="row">
    <div class="col">four</div>
    <div class="col">five</div>
  </div>
</div>
```

## Bootstrap: margins

Margins are spacings between elements

Bootstrap classes for margins:

- `ml-auto`: margin-left: auto
- `ml-1`: small left margin
- `mt-4`: big top margin
- `my-2`: medium margin in y directions (top and bottom)

## Bootstrap: elements and components

e.g.:

- button
- card
- carousel
- navbar
- ...

# VS Code

## VS Code

presentation: [VS Code](./vs-code-en.html)

## HTML documents in VS Code

code snippet: `html:5`

# SVG

## SVG

**SVG (scalable vector graphics)**: XML-based format for vector graphics

## The SVG tag

Attributes (example):

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="1000"
  height="500"
  viewBox="-500 0 1000 500"
></svg>
```

## SVG elements

- `g`: group
- `rect`
- `circle`
- `ellipse`
- `text`, `tspan`
- `path`

## General SVG attributes

- `id`, `class`
- `transform` (e.g. `"rotate(180)"`, `"translate(20 30)"`)
- `x`, `y` (position)
- `stroke` (line color)
- `fill` (fill color)

## rect

```xml
<rect x="50" y="50" width="20" height="200" fill="darkgrey">
```

## circle

```xml
<circle r="10" cy="290"/>
```

## ellipse

```xml
<ellipse cy="60" rx="30" ry="50"/>
```

## path

element `path`, attribute `d`

rectangle:

```xml
<path d="M 0,0 L 10,0 L 10,10 L 0,10 L 0,0">
```

## path commands

- `M`: move to
- `L`: line to
- `H`: horizontal line to
- `V`: vertical line to
- `Q`: quadratic bézier curve to
- `T`: smooth quadratic bézier curve to
- `C`: cubic bézier curve to
- `S`: smooth cubic bézier curve to
- `A`: elliptical arc to
- `Z`: close path

## path commands

All path commands are also possible with relative coordinates (with lowercase commands)

```xml
<path d="M 500,500 l 10,10">
```

is quivalent to:

```xml
<path d="M 500,500 L 510,510">
```

## g (group)

```xml
<g>
  <rect width="10" height="10">
  <rect x="20" width="10" height="10">
</g>
```

## Transformations

Via attribute `transform`:

```xml
<rect transform="translate(250, 0) rotate(-90, 50, 50)"/>
```

## Style

```xml
<g fill="grey" stroke="black" stroke-width="3">
```

## Example: spoon and fork

<figure style="width: 60%; margin: 0 auto">
  <img src="assets/spoon-fork.svg" />
</figure>

## Example: spoon and fork

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1" width="500" height="500" viewBox="0 0 500 500">
  <g
    transform="translate(250, 0) rotate(45, 0, 160)"
    fill="grey">
    <rect y="100" x="-10" width="20" height="190"/>
    <circle r="10" cy="290"/>
    <ellipse cy="60" rx="35" ry="55"/>
  </g>
  <g
    transform="translate(250,0) rotate(-45, 0, 160)"
    fill="darkgrey">
    <path d="
      M -10,310 L 10,310 L10,100
      C 10,90 20,80 20,70
      L 19,0 L13,0 L11,70 L5,70 L3,0
      L-3,0 L-5,70 L-11,70 L-13,0 L-19,0 L-20,70
      C-20,80 -10,90 -10,100 Z"/>
  </g>
</svg>
```

# Online resources

- MDN: Mozilla developer network
- W3Schools (not associated with W3C)
- caniuse.com: support tables for browser features
