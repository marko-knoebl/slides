# Serverseitiges Rendering mit next.js

## Serverseitiges Rendering mit next.js

[github.com/zeit/next.js](https://github.com/zeit/next.js/)

## Serverseitiges rendering

- Ermöglicht Verwendung von JSX als Templatesprache am Server
- Anwendungsgebiete:
  - Erstellen von statischen Websites
  - Anwendung kann am Server vorgerendert werden
    - Schnelleres erstes Rendering
    - Einfacheres indexieren durch Suchmaschinen

## Setup

Siehe https://github.com/zeit/next.js/#setup

<!--
```bash
npm init
npm install --save next react react-dom
```
package.json:
```json
  [...]
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
```
-->

## Build & Test

Testserver starten:

```bash
npm run dev
```

Build:

```bash
npm build
```

## Grundlagen

- Seiten definiert unter _./pages_
- Statische Assets unter _./static_
- verwendete Komponenten unter _./components_

## Beispiel: Hello world

index.js:

```js
export default () => <div>Welcome to next.js!</div>;
```

## Daten einbinden: getInitialProps()

```jsx
import React from 'react';
import fetch from 'isomorphic-fetch';

export default class Page extends React.Component {
  // am Server ausgeführt (node.js)
  static async getInitialProps() {
    const res = await fetch(
      'https://api.github.com/repos/zeit/next.js'
    );
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    return <div> Next stars: {this.props.stars} </div>;
  }
}
```
