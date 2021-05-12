# Babel

## Babel

Babel: JavaScript compiler

- transforms modern JavaScript to backwards-compatible JavaScript
- transforms TypeScript to JavaScript
- transforms JSX to JavaScript
- ...

## Babel

example input:

```js
const square = (n) => n * n;

export { square };
```

output (with _@babel/preset-env_):

```js
// ...

var square = function square(n) {
  return n * n;
};

exports.square = square;
```

## Babel setup

basic packages:

- _@babel/core_
- _@babel/cli_

## Babel presets

available presets (npm packages):

- _@babel/preset-env_: modern JavaScript
- _@babel/preset-react_: React and JSX syntax
- _@babel/preset-typescript_
- _@vue/babel-preset-app_
- ...

configuration via _babel.config.json_:

```json
{
  "presets": ["@babel/preset-env"]
}
```

## Babel

Basic usage of Babel:

compiling a single file:

```bash
npx babel input.js -o output.js
```

compiling contents of a folder:

```bash
npx babel src -d dist
```

## Babel

watching for file changes to recompile automatically:

```bash
npx babel src -d dist --watch
```

## Babel

executing directly:

install npm package _@babel/node_

```bash
npx babel-node script.js
```

```bash
npx babel-node script.tsx --extensions ".ts,.tsx"
```
