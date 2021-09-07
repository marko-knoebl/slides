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

Bemerkung:

Das direkte binden an die _style_-Property ist ineffizient und wird meist vermieden; in der Praxis werden Libraries wie _styled-components_ oder _emotion_ verwendet, um Stildeklarationen in JavaScript zu schreiben.
