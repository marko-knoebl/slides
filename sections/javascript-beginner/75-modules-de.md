# Module

## Module

JavaScript-Code kann in einzelne Dateien (Module) aufgeteilt und aus diesen importiert werden

um das im Browser zu erlauben, muss das Einstiegs-Skript in HTML als Modul gekennzeichnet werden:

```html
<script src="index.js" type="module"></script>
```

## Module

benannte Imports und Exports:

```js
// mymodule.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };
```

```js
// index.js
import { foo, bar } from './mymodule.js';
```

## Module

es kann einen _default export_ geben:

```js
// mymodule.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };

const main = 0;

export default main;
```

```js
// index.js
import main, { foo, bar } from 'mymodule.js';
```

## Module

Imports müssen immer zuoberst in einer Datei stehen
