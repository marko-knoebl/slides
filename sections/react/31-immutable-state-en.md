# Immutable state

## Immutability

**Immutability**: important concept in functional programing and with React / Redux

Data is not modified directly - instead, new data is derived from existing data (and may replace the existing data)

## Immutable state

if there are arrays or objects in the state we _could_ try and mutate them directly

don't do this - React will usually not notice the changes and will not rerender the view

state should be viewed as _immutabe_ (unchangeable)

## Data management without mutations: Arrays

initial data:

```js
let names = ['Alice', 'Bob', 'Charlie'];
```

**mutation**: this modifies the original array

```js
names.push('Dan');
```

**no mutation**: create a new array

```js
let newNames = [...names, 'Dan'];
```

## Data management without mutations: Objects

initial data:

```js
let user = {
  name: 'john'
  email: 'john@doe.com'
}
```

**mutation**: this modifies the object

```js
user.email = 'johndoe@gmail.com';
```

**no mutation**: create a new object

```js
let newUser = { ...user, email: 'johndoe@gmail.com' };
```

## immer.js and immutable.js

libraries that simplify working without mutations

## immer.js

is recommended by the Redux team

changes are specified via a _draft_ object

## immer.js

```js
import produce from 'immer';

const todos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
];

const newTodos = produce(todos, todosDraft => {
  todosDraft[1].completed = true;
  todosDraft.push({
    id: 3,
    title: 'relax',
    completed: false,
  });
});
```

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
