# Static pages

## Static pages

using React to generate static documents via node:

```js
const ReactDOMServer = require("react-dom/server");

const rendering = ReactDOMServer.renderToStaticMarkup(<MyComponent />);
```

note: this will not work with ES2015 modules - i.e. with _import_ ([GitHub issue](https://github.com/babel/babel/issues/11108))

## Set up

packages:

- react
- react-dom
- @babel/core
- @babel/node
- @babel/preset-env
- @babel/preset-react

## Set up

configuration in _babel.config.json_:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## Static pages

```bash
npx babel-node ./index.js
```

example _index.js_:

```js
const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const Invitation = (props) => (
  <html lang="en">
    ...
    <p>Dear {props.name},</p>
    <p>I'm inviting you to my party on ...</p>
  </html>
);

for (let name of ["Alice", "Bob", "Charlie"]) {
  let content = "<!DOCTYPE html>";
  content += ReactDOMServer.renderToStaticMarkup(<Invitation name={name} />);
  fs.writeFileSync(`invitation-${name}.html`, content);
}
```
