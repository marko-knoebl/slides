# this - quirks

## this - quirks

in object methods, `this` usually refers to the current object

**however**, keep in mind:

- each function call sets `this` (not just method calls)
- `this` will only be set correctly if the method is called via the syntax `object.method()`

## Problem: _this_ in anonymous functions

```js
class myComponent {
  constructor() {
    // this ist set correctly here
    this.foo = true;
    setTimeout(function() {
      // this will be overwritten here (to 'window')
      console.log(this.foo);
    }, 1000);
  }
}
```

## Solution: _arrow functions_

```js
class myComponent {
  constructor() {
    // this ist set correctly here
    this.foo = true;
    setTimeout(() => {
      // this will *not* be overwritten here
      console.log(this.foo);
    }, 1000);
  }
}
```

## Problem: method calls without method syntax

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet() {
    console.log(this.message);
  }
}
let foo = new Foo();
foo.greet(); // works
let fg = foo.greet;
fg(); // doesn't work (this is undefined)
```

## Solution: arrow methods

Available since ES2018:

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

## Solution: binding the method

```js
let f = new Foo();
f.greet(); // works
let fg = f.greet.bind(f);
fg(); // works as well now
```

Methods are usually bound in the constructor:

```js
  constructor() {
    this.greet = this.greet.bind(this);
  }
```
