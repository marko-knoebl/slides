# Manual setup and configuration of React

## Manual setup and configuration

Setting up React without _create-react-app_

Here we will use the _parcel_ bundler - an alternative to webpack

## package.json and dependencies

Start out with a `package.json` file that contains an empty object : `{}`

Install the required packages:

```bash
npm install react react-dom
```

```bash
npm install --save-dev parcel-bundler babel-preset-react babel-preset-env
```

## Configuring babel

via `.babelrc` file:

```json
{
  "presets": ["env", "react"]
}
```

## npm scripts

add script to `package.json`:

```json
"scripts": {
  "build": "parcel build src/index.html",
  "start": "parcel src/index.html"
},
```

## HTML entry point

Create `src/index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React starter app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
</html>
```

## Rendering an App component

Create `index.js`:

```js
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello World!</div>;
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
```

## Running

Run `npm start` for a development server or `npm run build` for a build.
