# JSX

## JSX

JSX = Templatesprache von React

- **<** wechselt von JS zu XML/HTML
- **{** wechselt zurück zu JS

## JSX verwenden

in React Versionen < 17 müssen wir das `React`-Objekt importieren, um _JSX_ schreiben zu können

```js
import React from 'react';
```

## Gültige Elemente in JSX

- string
- number
- Komponenten (z.B. `<div>`, `<img>`, `<MyComponent>`)
- Arrays anderer Elemente
- null, undefined, true, false (werden nicht gerendert)
