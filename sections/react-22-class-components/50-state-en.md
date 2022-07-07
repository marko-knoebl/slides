# State

## State

In class components, `this.state` represents the state.

`this.state` is always a JavaScript object which can have various entries (properties)

State changes happen via `this.setState()`

## Structure of this.state

_this.state_ is always an object:

```json
{
  "todos": [],
  "loadingStatus": "idle"
}
```

## Type declarations

```ts
type TodoAppProps = {};
type TodoAppState = {
  todo: Array<Todo>;
  loadingStatus: string;
};

class TodoApp extends Component<
  TodoAppProps,
  TodoAppState
> {
  // ...
}
```

## Initializing the state

The state must be initialized in the constructor

The constructor will also receive the component's props as an argument

## Initializing the state

```ts
constructor(props: TodoAppProps) {
  super(props);
  this.state = {
    todos: [],
    loadingStatus: "idle",
  }
}
```

JavaScript requires calling the constructor of the parent class (`Component`) via `super()` in the constructor

## Changing state

```js
this.setState({ loadingStatus: 'loading' });
```

`setState` will change all specified entries and leave the rest unchanged
