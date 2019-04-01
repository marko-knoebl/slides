# Objekte abändern

## Objekte abändern

In JavaScript können bestehende Arrays verändert werden - z.B. durch das Anhängen eines neuen Eintrags

Manche andere Objekte - z.B. String, Number - können nicht abgeändert werden. Jedoch ist es möglich, neue, veränderte Objekte basierend auf bereits vorhandenen Objekten zu erstellen.

## Objekte abändern

```js
let a = [1, 2, 3];
// creating a new object
a = a.concat([4, 5]);

a = [1, 2, 3];
// a is modified directly
a.push(4);
```

## Objekte abändern

Was wird das folgende Programm ausgeben?

```js
let a = [1, 2, 3];
let b = a;
b.push(4);
print(a);
```

## Objekte abändern

Eine Zuweisung (`let b = ...`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.
