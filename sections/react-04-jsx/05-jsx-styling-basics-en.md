# JSX and styling basics

## JSX and styling basics

In React, style definitions are usually located close to the component definition

possibilities:

- CSS file with the same base name as the JSX file
- style definition at the top of a component definition file
- inline style definition in the component template

## JSX and styling basics

styling in CSS files: typically separate CSS file for every component:

- _index.js_
- _index.css_ (global CSS declarations / resets)
- _App.js_
- _App.css_
- _TodoItem.js_
- _TodoItem.css_
- ...

## JSX and styling basics

including CSS declarations in the bundle:

```js
// in TodoItem.js

import './TodoItem.css';
```

## JSX and styling basics

possible structure of CSS classes via BEM: **B**locks, **E**lements, **M**odifiers

```jsx
<li
  className={
    isCompleted
      ? 'TodoItem TodoItem--Completed'
      : 'TodoItem'
  }
>
  <span className="TodoItem__Title">...</span>
  <input className="TodoItem__Checkbox" />
  ...
</li>
```

## JSX and styling basics

tooling that can help with stylesheets:

- _classnames_, _clsx_: for joining class name strings
- CSS modules: for "scoping"

## JSX and styling basics

CSS-in-JS: styles are defined inside JavaScript

options:

- basic solution: `style`-property (downsides: no media queries, no autoprefixing, ...)
- library: _emotion_
- library: _styled-components_

## JSX and styling basics

In JSX the _style_ property takes an object, e.g.:

```jsx
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const imageStyle = {
  display: 'block',
};
```

```jsx
<h1>Slideshow image {img}</h1>
<div style={containerStyle}>
  <button>prev</button>
  <img style={imageStyle} src="..." alt="..." />
  <button>next</button>
</div>
```

## JSX and styling basics

simple example with the _emotion_ library:

```js
import { css } from '@emotion/css';
```

```js
<div
  className={css({
    display: 'flex',
    justifyContent: 'center',
  })}
>
  ...
</div>
```

## Exercise

Exercise: Add (more) styling to the image slideshow application
