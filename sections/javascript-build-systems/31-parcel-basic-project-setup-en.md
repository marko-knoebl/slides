# Parcel: basic project setup

## Parcel: basic project setup

start with a _package.json_ file that contains an empty object: `{}`

install dependencies:

```bash
npm install parcel
```

## Parcel: basic project setup

in _src/index.js_:

```js
import { add } from './mymath.js';

console.log(add(1, 1));
```

in _src/mymath.js_:

```js
export const add = (a, b) => a + b;
```

## Parcel: basic project setup

Konfiguration in _package.json_:

```json
{
  "source": "src/index.html",
  "scripts": {
    "build": "parcel build",
    "start": "parcel"
  }
}
```

## Parcel: basic project setup

HTML entry point in _src/index.html_:

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

## Parcel: basic project setup

build via:

```bash
npm run build
```

development server on _localhost:8080_ via:

```bash
npm run start
```
