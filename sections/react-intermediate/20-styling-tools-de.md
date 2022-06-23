# Styling Tools

## Styling Tools

Tools für externe Stylesheets:

- Paket _classnames_
- CSS-Module
- SCSS

CSS-in-JS libraries:

- emotion
- styled-components
- linaria
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

## CSS-in-JS

**CSS-in-JS**: JavaScript wird verwendet, um Stylesheets zu erzeugen und anzufügen

Heutzutage wird es als _ok_ angesehen, Styling-Informationen in der gleichen Datei abzulegen, wie JavaScript / HTML

## CSS-in-JS

Libraries:

- emotion
- styled-components
- linaria
- ...

## CSS-in-JS

grundlegendes Beispiel in Emotion:

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

alternative Notation: via "tagged template strings"

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

Empfehlung: Verwenden der `css`-Property statt `className` (benötigt zusätzliche Source-Code-Transformation):

```js
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

<button css={css({ color: 'blue' })}>foo</button>;
```

## Styled components

_styled components_: Zugang, bei dem Komponenten erstellt werden, deren einzige Aufgabe es ist, Styling auf bestehende HTML-Elemente anzuwenden

Beispiel: `PrimaryButoon` = ein `button`-Element mit zusätzlichem Styling

## Styled components

Erstellen eines "styled component" mit emotion:

```js
import styled from '@emotion/styled';

const PrimaryButton = styled.button({
  color: 'blue',
  '&:hover': { color: 'red' },
});
```

## Styled components

theoretische manuelle Variante:

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

dynamische Stile via Props:

mit JavaScript:

```js
const Button = styled.button({
  padding: 8,
  color: (props) => (props.primary ? 'blue' : 'black'),
});
```

mit TypeScript:

```tsx
const Button = styled.button<{ primary: boolean }>({
  padding: 8,
  color: (props) => (props.primary ? 'blue' : 'black'),
});
```

## Übung

Übung: Verwende Styling-Tools, um zusätzliches Styling zu einer bestehenden Anwendung hinzuzufügen (z.B. zur Slideshow)
