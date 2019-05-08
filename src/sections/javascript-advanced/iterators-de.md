# Iterables, Iterators und Generators

## Iterable

Iterable = Objekt, über das mit `for ... of` iteriert werden kann

Beispiele: Arrays, Iterators

Iterables definieren eine Methode unter dem Symbol `Symbol.iterator`

## Iterators

Oberflächlich: Ein Iterator ist ein besonderes Objekt, über das wir mit `for (let item of iterator)` iterieren können.

Genauer Hintergrund: Ein Iterator ist ein besonderes Objekt, das eine `next`-Methode besitzt.

Iterators können auf verschiedene Arten erzeugt werden.

## Generator-Funktionen

Eine Generator-Funktion ist eine Möglichkeit, einen Iterator zu erstellen. Eine Generator-Funktion kann wiederholt betreten und verlassen werden. Sie "merkt" sich in der Zwischenzeit ihren Zustand.

## Generator-Funktionen

Eine Funktion kann mit `function*` definiert werden und anstatt eines `return`-Statements ein `yield` Statement enthalten - sie wird damit zu einer Generator-Funktion, die beim Aufruf einen Iterator zurückgibt.

```js
function* countTo100() {
  let i = 1;
  while (i <= 100) {
    yield i;
    i++;
  }
}
```

## Generator-Funktionen

Verwendung:

```js
for (let i of countTo100()) {
  console.log(i);
}
```

```js
const c = countTo100();
const firstEnetry = c.next();
console.log(firstEntry.value);
const secondEntry = c.next();
console.log(secondEntry.value);
```
