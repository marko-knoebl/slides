# craco

## craco

= Create React App Configuration Override

## craco setup

```bash
npm install @craco/craco
```

## craco setup

package.json:

```json
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  },
```

## craco setup for LESS

```bash
npm install craco-less
```

```js
// craco.config.js
module.exports = {
  plugins: [
    {
      plugin: require('craco-less'),
    },
  ],
};
```
