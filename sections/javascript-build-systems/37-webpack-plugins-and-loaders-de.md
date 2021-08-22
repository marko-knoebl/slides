# Webpack Loader und Plugins

## Webpack Loader und Plugins

Beispiele:

- _html-webpack-plugin_
- _babel-loader_ (JavaScript-Varianten)
- _style-loader_, _css-loader_

## HTML Plugin

Erstellt eine HTML-Seite, die auf das JavaScript-Bundle verweist (unter _dist/index.html_)

## HTML Plugin

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

Aktivierung von Babel in _webpack.config.js_:

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

Bemerkung: in dieser Konfiguration ändert Babel noch nichts am Code
