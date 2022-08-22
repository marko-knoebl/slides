# Problems with "this"

## Problems with "this"

in class components - especially in event handlers - `this` may sometimes be set incorrectly

## Problems with "this"

generic problem: method calls without method syntax:

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

## Problems with "this"

problem inside React renderings:

```js
class Foo extends Component {
  // ...

  greet() {
    console.log(this.message);
  }
  render() {
    return <button onClick={this.greet}>hello</button>;
  }
}
```

## Problems with "this"

solution A: arrow methods:

```js
class Foo extends Component {
  // ...
  greet = () => {
    console.log(this.message);
  };
  // ...
}
```

solution B: binding the method in the constructor:

```js
  constructor() {
    // ...
    this.greet = this.greet.bind(this);
  }
```
