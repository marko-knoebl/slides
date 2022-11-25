# Errors

## Errors

JavaScript versucht oft, keine Fehler zu werfen, sondern Resultate zu liefern (auch wennd diese keinen Sinn machen)

- `1 + "1"` → `"11"`
- `parseInt("foo")` → `NaN`
- `{} + []` → `0`
- `Math.sqrttt` → `undefined`

## Arten von Fehlern

- SyntaxError
- ReferenceError
- TypeError
- ...

Übung: versuche, diese Arten von Fehlern auszulösen

## Beispiele: ReferenceErrors und TypeErrors

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

## Fehler abfangen

mögliche Fehlerquellen:

- Fehler des Programmierers
- Ungültige Eingaben / Werte → können abgefangen und behandelt werden

## Fehler abfangen

Beispiel: Versuch, ungültiges JSON zu parsen

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

## Fehler abfangen

Beispiel: Fehler in node.js

```js
try {
  fs.writeFileSync('foo.txt', 'foo');
} catch {
  console.log('could not write to file');
}
```

## Fehler abfangen

Zugriff auf das Fehler-Objekt:

```js
try {
  // ...
} catch (error) {
  console.log(error.name); // SyntaxError
  console.log(error.message); // JSON.parse: expected ...
}
```

## Fehler abfangen

Verwendung des _finally_-Blocks, der immer ausgeführt wird:

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
