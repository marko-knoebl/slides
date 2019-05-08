# Iterables, iterators and generators

## Iterables

Iterable = object which can be iterated over via `for ... of`

Examples: Arrays, Iterators

Iterables define a Method under the symbol `Symbol.iterator`

## Iterators

Superficially: An iterator is a particular object that can be iterated over via `for (let item of iterator)`.

More precisely: An iterator is a particular object that has a method named `next`.

Iterators can be created in various ways.

## Generator functions

A generator function is one way to to create an iterator. A generator function can be entered an left repeatedly. It will remember its state in the meantime.

## Generator functions

A generator function is defined with the keyword `function*`. Instead of `return` statements it will contain `yield` statements.

```js
function* countTo100() {
  let i = 1;
  while (i <= 100) {
    yield i;
    i++;
  }
}
```

## Generator functions

usage:

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
