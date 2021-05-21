# State

## State

In class components, `this.state` represents the state.

`this.state` is always a JavaScript object which can have various entries (properties)

State changes happen via `this.setState()`

## Structure of this.state

_this.state_ is always an object:

```json
{
  "loggedIn": true,
  "todos": [
    { "id": 1, "title": "laundry", "completed": false },
    { "id": 2, "title": "groceries", "completed": true },
    { "id": 5, "title": "taxes", "completed": false }
  ]
}
```

## Initializing the state

The state must be initialized in the constructor

The constructor will also receive the component's props as an argument

## Initializing the state

```js
constructor(props) {
  super(props);
  this.state = {
    loggedIn: true,
    todos: ['laundry', 'groceries', 'taxes'],
  }
}
```

JavaScript requires calling the constructor of the parent class (`Component`) via `super()` in the constructor

## Modifying this.state

only via `setState()`:

```js
this.setState({ loggedIn: false });
```

`setState` will change all specified entries and leave the rest unchanged

## Repeated calls to this.setState

Advice: In an event handler `setState` should only be called once.

If you do want to call `setState` multiple times and one call depends on the modifications of the previous call:

```js
this.setState(oldState => ({ count: oldState.count + 1 }));
this.setState(oldState => ({ count: oldState.count + 1 }));
```

Pass a function to `setState`. This function will transform the old state into the new state.
