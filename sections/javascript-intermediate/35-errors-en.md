# Errors

## Errors

JavaScript often tries not to throw errors, but to produce some results (even if the results don't make sense)

- `1 + "1"` → `"11"`
- `parseInt("foo")` → `NaN`
- `{} + []` → `0`
- `Math.sqrttt` → `undefined`

## Types of errors

- SyntaxError
- ReferenceError
- TypeError
- ...

Exercise: try and trigger the above errors

## Examples: ReferenceErrors and TypeErrors

```js
console.log(Mathhh);
```

→ ReferenceError: _Mathhh is not defined_

```js
Math.sqrttt(2);
```

→ TypeError: _Math.sqrttt is not a function_

```js
emptyArray[0].toUpperCase();
```

→ TypeError: _Cannot read properties of undefined_

## Catching errors

origins of errors:

- programmer's error
- invalid input / value → can be caught and handled

## Catching errors

example: trying to parse invalid JSON

```js
// invalid JSON string
let preferencesString = '{ theme: dark }';
let preferences;
try {
  preferences = JSON.parse(preferencesString);
} catch {
  // error while loading preferences - use default values
  preferences = { theme: 'light' };
}
```

## Catching errors

example: error in node.js

```js
try {
  fs.writeFileSync('foo.txt', 'foo');
} catch {
  console.log('could not write to file');
}
```

## Catching errors

getting the _error_ object, accessing details

```js
try {
  // ...
} catch (error) {
  console.log(error.name); // SyntaxError
  console.log(error.message); // JSON.parse: expected ...
}
```

## Catching errors

using the _finally_ block which will always be executed:

```js
try {
  let file = fs.openSync('foo.txt');
  fs.writeSync(file, 'foo\n');
  fs.writeSync(file, 'bar\n');
} catch {
  console.log('error while writing - aborting');
  return;
} finally {
  // "clean up"
  fs.closeSync('foo.txt');
}
```
