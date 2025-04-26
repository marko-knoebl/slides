# Local modules

## Local modules

A JavaScript file that exports objects is called a module

## Local modules

example of a module with modern syntax:

```js
const message1 = 'hello!';
const message2 = 'have a nice day!';

export { message1, message2 };
```

## Local modules

there may be one default export

```js
const mainMessage = 'xyz';

const message1 = 'hello!';
const message2 = 'have a nice day!';

export { message1, message2 };
export default mainMessage;
```

## Local modules

local modules are referenced via relative file paths:

```js
import mainMessage, { message1 } from './messages.js';
```

## Local modules

older, node-specific, export syntax:

```js
const message1 = 'hello!';
const message2 = 'have a nice day!';

module.exports.message1 = message1;
module.exports.message2 = message2;
// shorthand
exports.message3 = 'Bye';
```

default export:

```js
const mainMessage = 'xyz';

module.exports = mainMessage;
```
