# Styling in JSX

## CSS classes

```jsx
<div
  className={'todoitem' + isCompleted ? ' completed' : ''}>
  [...]
</div>
```

## CSS classes

helper utility: npm package _classnames_:

```jsx
import classNames from 'classnames';

<div
  className={classNames({
    todoitem: true,
    completed: isCompleted,
  })}>
  [...]
</div>;
```

## CSS modules

When using create-react-app CSS modules are preconfigured. They allow using CSS class names that are guaranteed to be unique across CSS files.

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem}>...</div>;

<div className={`${styles.todoItem} ${styles.completed}`}>
  ...
</div>;
```

## using SCSS

```bash
npm install node-sass
```

```js
import styles from './TodoItem.module.scss';
```

```scss
/* TodoItem.module.scss */
@import '../colors';
...
```

```scss
/* colors.scss */
$primary: lightblue;
```

## JSX: dynamic styles

```jsx
<div
  style={{
    color: '#333',
    fontSize: getFontSize(),
  }}
/>
```

## React styling libraries

examples:

- styled-components
- jss
- emotion
- radium
- ...

## styled-components

library that enables creating styled versions of existing HTML elements

npm package: `styled-components`

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

const Slideshow = props => (
  <Container>
    <button>prev</button>
    <BlockImg src="..." alt="..." />
    <button>next</button>
  </Container>
);
```

## styled-components

dynamic styles via props:

```jsx
import styled from 'styled-components';

const Button = styled.button`
  color: ${props => (props.primary ? 'black' : 'white')};
  background-color: ${props =>
    props.primary ? 'white' : 'navy'};
`;

const Slideshow = props => (
  <Container>
    <Button primary={true}>prev</Button>
    <BlockImg src="..." alt="..." />
    <Button primary={true}>next</Button>
  </Container>
);
```

## radium

library that extends the `style` property syntax of HTML elements in a component

npm package: `radium`

## radium

```jsx
const styles = {
  base: {
    padding: '8px',
  },
  primary: {
    color: 'white',
    backgroundColor: 'navy',
  },
};

const TestButton = props => (
  <button
    style={[styles.base, props.primary && styles.primary]}>
    test
  </button>
);

export default radium(TestButton);
```
