# JavaScript basics for React

## map, filter, reduce

- Array methods for functional programming

## map

- modifies each entry in an array via a function
- returns a new array

```js
let myNumbers = [2, 10, 23];

let triple = n => 3 * n;

let newNumbers = myNumbers.map(triple);
// [6, 30, 69]
```

## filter

- only keeps specific entries in an array
- uses a function to check entries for a specific criterion
- returns a new array

```js
let myNumbers = [2, 10, 23];

let isEven = n => n % 2 === 0;

let newNumbers = myNumbers.filter(isEven);
// [2, 10]
```

## reduce

- computes one value based on a start value and all entries in an array

```js
let myNumbers = [2, 10, 23];

let multiply = (a, b) => a * b;

let result = myNumbers.reduce(multiply, 1);
```

## this

in object methods, `this` usually refers to the current object

**however**, keep in mind:

- each function call sets `this` (not just method calls)
- `this` will only be set correctly if the method is called via the syntax `object.method()`

## problem: _this_ in anonymous functions

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

## solution 1: _that_ / _self_

```js
class myComponent {
  constructor() {
    // this ist set correctly here
    this.foo = true;
    let that = this;
    setTimeout(function() {
      // this will be overwritten here (to 'window')
      console.log(that.foo);
    }, 1000);
  }
}
```

## solution 2: _arrow functions_

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

## problem: method calls without using method syntax

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet() {
    console.log(this.message);
  }
}
let f = new Foo();
f.greet(); // works
let fg = f.greet;
fg(); // doesn't work (this is undefined)
```

## solution: arrow methods

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

## solution: binding the method

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
