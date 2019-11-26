# Immutability

## Immutability

important concept in functional programing and with React / Redux

Data is not modified directly - instead, new data is derived from existing data (and may replace the existing data)

## Data management without mutations: Arrays

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

## Data management without mutations: Objects

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

## immutable.js and immer.js

libraries that simplify working without mutations

## immutable.js

In particular, offers the data types _List_ and _Map_ as immutable alternatives for _Array_ and _Object_.

```js
import { List, Map } from 'immutable';

const a1 = List([1, 2, 3]);
const a2 = a1.push(4);

const b1 = Map({ a: 1, b: 2 });
const b2 = b1.set('b', null);
```

## immutable.js

```js
import { fromJS, setIn } from 'immutable';

const todos = fromJS([
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
]);

const newTodos = todos.setIn([1, 'completed'], true);
```

## immer.js

is recommended by the Redux team

```js
import produce from 'immer';

const todos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
];

const newTodos = produce(todos, draftTodos => {
  draftTodos[1].completed = true;
});
```
