# Webpack loaders and plugins

## Webpack loaders and plugins

examples:

- _html-webpack-plugin_
- _babel-loader_ (JavaScript variants)
- _style-loader_, _css-loader_

## HTML plugin

creates an HTML page that runs the JavaScript

## HTML plugin

```bash
npm install html-webpack-plugin
```

in _webpack.config.js_:

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

<!-- prettier-ignore -->
```js
  plugins: [
    new HtmlWebpackPlugin({title: "page title"})
  ],
```

## Babel loader

```bash
npm install babel-loader @babel/core
```

activating babel in _webpack.config.js_:

<!-- prettier-ignore -->
```js
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
```

note: in this configuration Babel will not modify the code
