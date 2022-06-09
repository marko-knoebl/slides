# JSX and styling basics

## JSX and styling basics

In React, style definitions are usually located close to the component definition

possibilities:

- CSS file with the same base name as the JSX file
- style definition at the top of a component definition file
- inline style definition in the component template

## JSX and styling basics

```js
import './TodoItem.css';
```

```jsx
<li
  className={
    isCompleted ? 'todoitem completed' : 'todoitem'
  }
>
  [...]
</li>
```

there are helper libraries that will generate the _className_ property dynamically

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
  className={css`
    display: flex;
    justify-content: center;
  `}
>
  ...
</div>
```
