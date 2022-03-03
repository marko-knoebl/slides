# Objektreferenzen und Mutationen

## Objektreferenzen und Mutationen

Was ist der Wert von `a` am Ende dieses Programms?

```js
let a = [1, 2, 3];
let b = a;
b.push(4);
```

## Objektreferenzen und Mutationen

Eine Zuweisung (z.B. `b = a`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.

## Objektreferenzen und Mutationen

Falls das Original erhalten bleiben soll, kann es kopiert werden oder die abgeänderte Variante basierend auf dem alten Objekt erstellt werden:

```js
let a = [1, 2, 3];
// creating a new copy
let b = a.slice();
// modifying b
b.push(4);
```

```js
let a = [1, 2, 3];
// creating a new object b based on a
let b = a.concat([4]);
// alternative:
let c = [...a, 4];
```

## Objektreferenzen und Mutationen

Ob eine Methode ein Objekt direkt abändert (wie `push`) oder ein neues Objekt zurückgibt (wie `concat`) muss in der Dokumentation nachgelesen werden.

## Objektreferenzen und Mutationen

Manche Datentypen können direkt verändert (mutiert) werden - z.B. via `.push()`, `.pop()`, ...

Beispiele: _object_, _array_

Einige einfache Objekte sind nach ihrer Erstellung unveränderlich.

Beispiele: _number_, _string_, _boolean_
