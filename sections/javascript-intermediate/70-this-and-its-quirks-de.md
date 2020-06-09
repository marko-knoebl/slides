# "this" und seine Quirks in JavaScript

## "this" und seine Quirks

In Objektmethoden bezieht sich `this` üblicherweise auf das aktuelle Objekt

**allerdings**:

- jeder Funktionsaufruf setzt _this_ neu (nicht nur Methodenaufrufe)
- _this_ wird nur richtig gesetzt, wenn die Methode mit der Syntax `object.method()` aufgerufen wird

## Problem: _this_ in anonymen Funktionen

```js
class myComponent {
  constructor() {
    // this ist hier richtig gesetzt
    this.foo = true;
    setTimeout(function () {
      //this wird hier überschrieben (auf window)
      console.log(this.foo);
    }, 1000);
  }
}
```

## Lösung: _Pfeilfunktionen_

```js
class myComponent {
  constructor() {
    // this ist hier richtig gesetzt
    this.foo = true;
    setTimeout(() => {
      // this wird hier *nicht* überschrieben
      console.log(this.foo);
    }, 1000);
  }
}
```

## Problem: Methodenaufrufe ohne Methodensyntax

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet() {
    console.log(this.message);
  }
}
const foo = new Foo();
foo.greet(); // ok
const greet = foo.greet;
greet(); // not ok ("this" is undefined)
```

## Lösung: Pfeil-Methoden

Seit ES2018 einsetzbar:

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet = () => {
    console.log(this.message);
  };
}
```

## Lösung: Binden von Methoden

```js
const foo = new Foo();
foo.greet(); // ok
const greet = foo.greet.bind(foo);
greet(); // ok
```

Üblicherweise Zuweisung im Konstruktor:

```js
  constructor() {
    this.greet = this.greet.bind(this);
  }
```
