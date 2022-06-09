# JSX und Styling Grundlagen

## JSX und Styling Grundlagen

In React-Projekten sind Style-Definitionen üblicherweise nahe bei den betroffenen Komponenten-Definitionen zu finden

Möglichkeiten:

- CSS-Datei mit dem gleichen Namen wie die JSX-Datei
- Stil-Definition am Beginn einer Komponentendefinitions-Datei
- Inline Stil-Definition im Komponenten-Template

## JSX und Styling Grundlagen

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

es gibt Hilfslibraries, die die _className_-Property dynamisch generieren

## JSX und Styling Grundlagen

CSS-in-JS: Stile werden in JavaScript definiert

Möglichkeiten:

- grundlege Lösung: `style`-Property (Nachteile: keine Media-Queries, kein Autoprefixing, ...)
- Library: _emotion_
- Library: _styled-components_

## JSX und Styling Grundlagen

In JSX weisen wir der _style_-Property ein Objekt zu, z.B.:

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

## JSX und Styling Grundlagen

einfaches Beispiel mit der Library _emotion_:

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
