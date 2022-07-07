# Probleme mit "this"

## Probleme mit "this"

in Klassenkomponenten - insbesondere in Eventhandlern - kann `this` manchmals falsch gesetzt sein

## Probleme mit "this"

allgemeines Problem: Methodenaufrufe ohne Methodensyntax:

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

## Probleme mit "this"

Problem in einem React-Rendering:

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

## Probleme mit "this"

Lösung A: Pfeil-Methoden:

```js
class Foo extends Component {
  // ...
  greet = () => {
    console.log(this.message);
  };
  // ...
}
```

Lösung B: binden der Methode im Constructor:

```js
  constructor() {
    // ...
    this.greet = this.greet.bind(this);
  }
```
