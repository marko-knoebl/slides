# Styling Tools

## Styling Tools

Tools für externe Stylesheets:

- Paket _classnames_
- CSS-Module
- SCSS

CSS-in-JS libraries:

- emotion
- styled-components
- ...

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

Heutzutage wird es als _ok_ angesehen, Styling-Informationen in der gleichen Datei abzulegen, wie JavaScript / HTML

## CSS-in-JS

Zugänge:

- Erweiterung von Elementen-Properties (z.B. `css=...` in _Emotion_)
- Erstellen von React-Komponenten, die nur für das Styling zuständig sind (z.B. `PrimaryButton`)

## CSS-in-JS

Libraries:

- emotion
- styled-components
- ...

## Emotion

In Emotion werden Stile üblicherweise direkt im Template mittels eines _Tagged Template Literals_ eingebunden.

## Emotion

allgemeine Verwendung:

```jsx
<div
  className={css`
    display: flex;
    justify-content: center;
  `}
>
  ...
</div>
```

## Emotion

empfohlene Verwendung in _React_ (benötigt zusätzliche Source-Code-Transformation):

```jsx
<div
  css={css`
    display: flex;
    justify-content: center;
  `}
>
  ...
</div>
```

beachte: neue Property `css` anstatt `className`

## Emotion

allgemeiner Import:

```jsx
import { css } from '@emotion/css';
```

Import und Source-Code-Transformation in React 17:

```jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
```

Import und Source-Code-Transformation in React 16:

```jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
```

## styled-components

Library, die es ermöglicht, bestehende HTML-Elemente mit eigenen Stilen zu versehen

npm-Pakete: `styled-components`, `@types/styled-components`

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

dynamische Stile via props (TypeScript):

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
