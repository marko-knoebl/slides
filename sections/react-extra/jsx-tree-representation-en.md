# JSX tree representation

## JSX tree representation

"manual" creation of a React element:

```js
const element = {
  $$typeof: Symbol.for('react.element'),
  type: 'button',
  props: {
    type: 'submit',
    children: 'submit form',
  },
  ref: null,
};
```

## JSX tree representation

- `$$typeof`: exists for security reasons <small>(to prevent injection of JSON objects where a string was expected)</small>
- `type`: string or component definition
- `props`: events and props, including child elements
- `ref`: must be present, can be null

<small>See also: <a href="https://overreacted.io/why-do-react-elements-have-typeof-property/">Why Do React Elements Have a $$typeof Property?</a></small>

## JSX tree representation

other possible props:

- `key`
- `_owner` (FiberNode)
- `_store`
