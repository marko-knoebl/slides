# JSX und Styling Grundlagen

## JSX und Styling Grundlagen

In React-Projekten sind Style-Definitionen üblicherweise nahe bei den betroffenen Komponenten-Definitionen zu finden

Möglichkeiten:

- CSS-Datei mit dem gleichen Namen wie die JSX-Datei
- Stil-Definition am Beginn einer Komponentendefinitions-Datei
- Inline Stil-Definition im Komponenten-Template

## JSX und Styling Grundlagen

Styling in CSS-Dateien: typischerweise separate CSS-Datei für jede Komponente:

- _index.js_
- _index.css_ (globale CSS-Deklarationen / -Resets)
- _App.js_
- _App.css_
- _TodoItem.js_
- _TodoItem.css_
- ...

## JSX und Styling Grundlagen

Einbinden von CSS-Deklarationen im Bundle:

```js
// in TodoItem.js

import './TodoItem.css';
```

## JSX und Styling Grundlagen

mögliche Struktur von CSS-Klassen via BEM: **B**locks, **E**lements, **M**odifiers

```jsx
<li
  className={
    isCompleted
      ? 'TodoItem TodoItem--Completed'
      : 'TodoItem'
  }
>
  <span className="TodoItem__Title">...</span>
  <input className="TodoItem__Checkbox" />
  ...
</li>
```

## JSX und Styling Grundlagen

Werkzeuge, die bei Stylesheets hilfreich sein können:

- _classnames_, _clsx_: zum Zusammensetzen von Klassennamen-Strings
- CSS-Module: für "scoping"

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
  className={css({
    display: 'flex',
    justifyContent: 'center',
  })}
>
  ...
</div>
```

## Übung

Übung: Füge (weiteres) Styling zur Bilder-Slideshow hinzu
