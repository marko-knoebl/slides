# Immutability

## Immutability

important concept in functional programing and with React / Redux

## Immutability

When using Redux or React's PureComponent:

Objects that describe the application state must not be modified directly

Instead, these Objects should be replaced by new, modified Objects

Advantages: increased performance, more possibilities when it comes to debugging

## PureComponent

Instead of `Component` we can inherit from `PureComponent`:

The component will onl be rerendered if either state or props have changed

Entries in state or props are considered to have changed only if they refer to a different object than before

## Data managment without mutations

## Data managment without mutations: Arrays

```js
let names = ['Alice', 'Bob', 'Charlie'];
// invalid: modifies the original array
names.push('Dan');

// instead: new array
let newNames = names.slice();
newNames.push('Dan');
// overwrite the original
names = newNames;

// or:
names = [...names, 'Dan'];
```

## Data managment without mutations: Objects

```js
let user = {
  name: 'john'
  email: 'john@doe.com'
}
// invalid: modifies the object
user.email = 'johndoe@gmail.com';

// instead: create a new object
let newUser = { ...user, email: 'johndoe@gmail.com' };
```
