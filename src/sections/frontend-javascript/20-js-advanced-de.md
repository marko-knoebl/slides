# JavaScript Fortgeschritten

## Module & Imports

- Möglichkeit, Funktionalität aus anderen js-Dateien zu importieren – kein globaler Namespace mehr
- Benötigt einen Bundler, z.B. webpack

```js
// user.js
export class User {
  ...
}
```

```js
// main.js
import { User } from 'user.js';
```

## Module & Imports

```js
// user.js
// es kann 1 default export geben
export default class User {
   ...
}
```

```js
// main.js
import User from 'user.js';
```

## Klassen und Vererbung

```js
class User extends Person {
  constructor(firstName, lastName, userName) {
    // ruft Person.constructor auf
    super(firstName, lastName);
    this.userName = userName;
  }
}
```

## Spread Syntax (Arrays und Objekte)

```js
let squares = [1, 4, 9];
let moreSquares = [...squares, 16, 25];
// moreSquares: [1, 4, 9, 16, 25]
```

```js
let pers = { firstName: 'John', lastName: 'Doe', age: 31 };
let updatedPers = { ...person, email: 'j@d.com', age: 32 };
// {firstName: 'John', lastName: 'Doe',
// email: 'j@d.com', age: 32}
```
