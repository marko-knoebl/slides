# Codeblöcke

## Codeblöcke

_Codeblock_: Folge von zusammengehörenden Anweisungen (Statements)

insbesondere wichtig bei _Kontrollstrukturen_ und _Funktionsdefinitionen_

## Codeblöcke

Begrenzung eines Codeblocks: mittels `{` und `}`

Inhalte typischerweise eingerückt (z.B. mit 2 Leerzeichen)

## Codeblöcke

Beispiel im Zusammenspiel mit _if_:

```js
let a = 3;
if (a > 0) {
  console.log('a is greater than 0');
  console.log('a is positive');
}
```

## Codeblöcke

**Scope**: Variablen sind nur innerhalb von Codeblöcken verfügbar, in denen sie (z.B. mit `let`) deklariert wurden

ungültiger Code:

```js
let a = 3;
if (a > 0) {
  let message = 'a is positive';
} else {
  let message = 'a is negative or 0';
}
console.log(message); // ReferenceError!
```

## Codeblöcke

korrigierter Code:

```js
let a = 3;
let message;
if (a > 0) {
  message = 'a is positive';
} else {
  message = 'a is negative or 0';
}
console.log(message);
```
