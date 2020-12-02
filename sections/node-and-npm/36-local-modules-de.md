# Lokale Module

## Lokale Module

Eine JavaScript-Datei, die Objekte exportiert, ist ein sogenanntes _Modul_

## Lokale Module

Beispiel für ein Modul mit moderner Syntax:

```js
const message1 = 'hello!';
const message2 = 'have a nice day!';

export { message1, message2 };
```

## Lokale Module

es kann einen default Export geben

```js
const mainMessage = 'xyz';

const message1 = 'hello!';
const message2 = 'have a nice day!';

export { message1, message2 };
export default mainMessage;
```

## Lokale Module

Lokale Module werden mittels relativer Dateipfade importiert

```js
import mainMessage, { message1 } from './messages.js';
```

Dateiendung ist optional:

```js
import mainMessage, { message1 } from './messages';
```

## Lokale Module

ältere Syntax für den Export:

```js
const message1 = 'hello!';
const message2 = 'have a nice day!';

module.exports.message1 = message1;
module.exports.message2 = message2;
// shorthand
exports.message3 = 'Bye';
```

default Export:

```js
const mainMessage = 'xyz';

module.exports = mainMessage;
```
