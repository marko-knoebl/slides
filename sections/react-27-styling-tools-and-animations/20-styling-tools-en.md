# Styling tools

## Styling tools

tools for external stylesheets:

- _classnames_ package
- CSS modules
- SCSS

CSS-in-JS libraries:

- emotion
- styled-components
- linaria
- ...

## classnames

utility: npm package _classnames_:

```jsx
import classNames from 'classnames';

<div
  className={classNames({
    todoitem: true,
    completed: props.completed,
  })}
>
  [...]
</div>;
```

## CSS modules

CSS modules are preconfigured in create-react-app; they enable using CSS class names that are guaranteed to be unique across CSS files

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem + ' ' + styles.completed}>
  ...
</div>;
```

possible output in the HTML:

```html
<div
  class="TodoItem_todoItem__L9V1E TodoItem_completed__9bPW1"
>
  ...
</div>
```

## CSS modules and classnames

```ts
<div className={classNames({
  [styles.todoitem]: true,
  [styles.completed]: props.completed
})}>
```

## CSS-in-JS

**CSS-in-JS**: JavaScript is used to generate and attach stylesheets

Nowadays it's considered _ok_ to put styling in the same file as JavaScript / HTML

## CSS-in-JS

libraries:

- emotion
- styled-components
- linaria
- ...

## CSS-in-JS

basic example in emotion:

```js
import { css } from '@emotion/css';

<button
  className={css({
    color: 'blue',
    '@media (min-width: 600px)': { color: 'green' },
    '&:hover': { color: 'red' },
  })}
>
  foo
</button>;
```

## CSS-in-JS

alternative notation: via "tagged template strings"

```js
<button
  className={css`
    color: blue;
    &:hover {
      color: red;
    }
  `}
>
  foo
</button>
```

## CSS-in-JS

recommended: use the `css` property instead of `className` (requires an extra source transform)

```js
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

<button css={css({ color: 'blue' })}>foo</button>;
```

## Styled components

_styled components_: approach where components are created whose only task is adding styling to HTML elements

example: `PrimaryButton` = a `button` element with extra styling

## Styled components

creating a styled component with emotion:

```js
import styled from '@emotion/styled';

const PrimaryButton = styled.button({
  color: 'blue',
  '&:hover': { color: 'red' },
});
```

## Styled components

theoretical manual version:

```js
function PrimaryButton(props) {
  return (
    <button
      {...props}
      className={css({
        color: 'blue',
        '&:hover': { color: 'red' },
      })}
    />
  );
}
```

## Styled components

dynamic styles via props:

with JavaScript:

```js
const Button = styled.button({
  padding: 8,
  color: (props) => (props.primary ? 'blue' : 'black'),
});
```

with TypeScript:

```tsx
const Button = styled.button<{ primary: boolean }>({
  padding: 8,
  color: (props) => (props.primary ? 'blue' : 'black'),
});
```

## Exercise

exercise: use some styling tools to add extra styling to an existing application (e.g. to the slideshow)
