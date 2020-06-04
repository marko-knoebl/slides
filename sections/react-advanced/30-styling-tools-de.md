# Styling Tools

## Styling Tools

Tools für externe Stylesheets:

- Paket _classnames_
- CSS-Module
- SCSS

CSS-in-JS libraries:

- styled-components
- JSS
- radium

## classnames

Hilfs-Utility: npm-Paket _classnames_:

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

## CSS-Module

Bei create-react-app sind CSS-Module vorkonfiguriert; Diese erlauben das Verwenden von CSS-Klassennamen, die garantiert über CSS-Dateien hinweg eindeutig sind.

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem}>...</div>;

<div className={`${styles.todoItem} ${styles.completed}`}>
  ...
</div>;
```

## SCSS

SCSS in einem create-react-app Projekt einbinden:

```bash
npm install node-sass
```

Verwendung:

```js
import './TodoItem.scss';
```

## CSS-in-JS

**CSS-in-JS**: JavaScript wird verwendet, um Stylesheets zu erzeugen und anzufügen

Libraries:

- styled-components
- JSS
- radium
- emotion

## styled-components

Library, die es ermöglicht, bestehende HTML-Elemente mit eigenen Stilen zu versehen

npm-Paket: `styled-components`

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

dynamische Stile via props:

```jsx
import styled from 'styled-components';

const Button = styled.button`
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

## radium

Library, die die Syntax der `style`-Property von HTML-Elementen in Komponenten erweitert

npm-Paket: `radium`

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

const TestButton = (props) => (
  <button
    style={[styles.base, props.primary && styles.primary]}
  >
    test
  </button>
);

export default radium(TestButton);
```
