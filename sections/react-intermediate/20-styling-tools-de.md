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
    completed: props.completed,
  })}
>
  [...]
</div>;
```

## CSS Module

Bei create-react-app sind CSS-Module vorkonfiguriert; Diese erlauben das Verwenden von CSS-Klassennamen, die garantiert über CSS-Dateien hinweg eindeutig sind.

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem + ' ' + styles.completed}>
  ...
</div>;
```

möglicher Output im HTML:

```html
<div
  class="TodoItem_todoItem__L9V1E TodoItem_completed__9bPW1"
>
  ...
</div>
```

## CSS Module und classnames

```ts
<div className={classNames({
  [styles.todoitem]: true,
  [styles.completed]: props.completed
})}>
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

## Tagged Template Literals

**Tagged** Template Literals ermöglichen zusätzliche Verarbeitung, wenn Werte eingebunden werden

Beispiele für Verwendungszwecke:

- "Escaping" von Werten aus unsicheren Quellen
- Anpasen der Einrückung
- Einbinden von Stilen in React
- ...

## Tagged Template Literals

Beispiel: "Escaping" von HTML:

```js
import { safeHtml } from 'common-tags';

const message = 'I <3 U';

const post = safeHtml`
  <div>${message}</div>
`;
```

Ergebnis:

```html
<div>I &lt;3 U</div>
```

Bemerkung: In React geschieht "Escaping" von HTMl automatisch, wir müssen diese Funktion in React nicht verwenden

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

dynamische Stile via props:

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
