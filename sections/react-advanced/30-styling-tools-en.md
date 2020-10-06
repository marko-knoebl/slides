# Styling tools

## Styling tools

tools for external stylesheets:

- _classnames_ package
- CSS modules
- SCSS

CSS-in-JS libraries:

- emotion
- styled-components
- ...

## classnames

utility: npm package _classnames_:

```jsx
import classNames from 'classnames';

<div
  className={classNames({
    todoitem: true,
    completed: isCompleted,
  })}
>
  [...]
</div>;
```

## CSS modules

CSS modules are preconfigured in create-react-app; they enable using CSS class names that are guaranteed to be unique across CSS files

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem}>...</div>;

<div className={`${styles.todoItem} ${styles.completed}`}>
  ...
</div>;
```

## SCSS

enabling SCSS in a create-react-app project:

```bash
npm install node-sass
```

then we can use:

```js
import './TodoItem.scss';
```

## CSS-in-JS

**CSS-in-JS**: JavaScript is used to generate and attach stylesheets

Nowadays it's considered _ok_ to put styling in the same file as JavaScript / HTML

## CSS-in-JS

approaches:

- extend HTML element props (e.g. `css=...` in _emotion_)
- create React components that are only used for styling (e.g `PrimaryButton`)

## CSS-in-JS

libraries:

- styled-components
- emotion
- ...

## styled-components

library that enables creating styled versions of existing HTML elements

npm packages: `styled-components`, `@types/styled-components`

## styled-components

```jsx
import styled from 'styled-components';

const BlockImg = styled.img`
  display: block;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Slideshow = (props) => (
  <Container>
    <button>prev</button>
    <BlockImg src="..." alt="..." />
    <button>next</button>
  </Container>
);
```

## styled-components

dynamic styles via props (TypeScript):

```tsx
import styled from 'styled-components';

const Button = styled.button<{ primary: boolean }>`
  color: ${(props) => (props.primary ? 'black' : 'white')};
  background-color: ${(props) =>
    props.primary ? 'white' : 'navy'};
`;

const Slideshow = (props) => (
  <Container>
    <Button primary={true}>prev</Button>
    <BlockImg src="..." alt="..." />
    <Button primary={true}>next</Button>
  </Container>
);
```

## Emotion

Emotion extends jsx notation with an additional _css_ prop

Installation:

```bash
npm install @emotion/core
```

## Emotion

```jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Slideshow = (props) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
    `}
  >
    <button>prev</button>
    <img
      css={css`
        display: block;
      `}
      src="..."
      alt="..."
    />
    <button>next</button>
  </div>
);
```
