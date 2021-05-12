# Babel

## Babel

Babel: JavaScript-Compiler

- kompiliert modernes JavaScript in von älteren Browsern unterstütztes
- kompiliert TypeScript in JavaScript
- kompiliert JSX in JavaScript
- ...

## Babel

Beispiel - Input:

```js
const square = (n) => n * n;

export { square };
```

Beispiel - Output (mit _@babel/preset-env_):

```js
// ...

var square = function square(n) {
  return n * n;
};

exports.square = square;
```

## Babel Setup

grundlegende Pakete:

- _@babel/core_
- _@babel/cli_

## Babel Presets

Babel Presets (npm Pakete):

- _@babel/preset-env_: modernes JavaScript
- _@babel/preset-react_: React und JSX Syntax
- _@babel/preset-typescript_
- _@vue/babel-preset-app_
- ...

Konfiguration mittels _babel.config.json_:

```json
{
  "presets": ["@babel/preset-env"]
}
```

## Babel

grundlegende Verwendung von Babel:

einzelne Datei kompilieren:

```bash
npx babel input.js -o output.js
```

Inhalte eines Ordners kompilieren:

```bash
npx babel src -d dist
```

## Babel

Ordnerinhalte beobachten, um automatisch neu zu kompilieren:

```bash
npx babel src -d dist --watch
```

## Babel

direktes Ausführen:

npm-Pakget _@babel/node_

```bash
npx babel-node script.js
```

```bash
npx babel-node script.tsx --extensions ".ts,.tsx"
```
