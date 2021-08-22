# Webpack: basic project setup

## Webpack: basic project setup

start with a _package.json_ file that contains an empty object: `{}`

install dependencies:

```bash
npm install webpack webpack-cli webpack-dev-server
```

## Webpack: basic project setup

in _src/index.js_:

```js
import { add } from './mymath.js';

console.log(add(1, 1));
```

in _src/mymath.js_:

```js
export const add = (a, b) => a + b;
```

## Webpack: basic project setup

configuration via _webpack.config.js_:

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

use _src/index.js_ as an entrypoint

write the result to _dist/_, using _dist/bundle.js_ as an entrypoint

## Webpack: basic project setup

npm scripts in _package.json_:

```json
"scripts": {
  "build": "webpack",
  "start": "webpack serve --mode development"
}
```

## Webpack: basic project setup

build via:

```bash
npm run build
```

development server on _localhost:8080_ via:

```bash
npm run start
```
