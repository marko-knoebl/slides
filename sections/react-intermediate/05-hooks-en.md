# Hooks

## Hooks

Building blocks in React:

- _components_: handle the _view_
- _hooks_: handle the _model_ / _logic_ behind the view

purposes:

- structuring code
- code re-use

## Hooks

Hooks are special functions that can be called inside a component definition.

Examples:

- `useState(...)`
- `useEffect(...)`
- `useContext(...)`

## External Hooks

Many additional hooks are provided by the React community

example use cases:

- querying APIs
- using global state
- using _localStorage_ for persistent state
- media queries
- querying the scroll position
- ... (see [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks))

## Rules of Hooks

Hooks inside a component definition must be called in the same order every time the component renders - React uses the call order to distinguish between e.g. multiple calls to `useState`

The same rules as in a component apply to hook calls inside a cutom hook

[Rules of Hooks on reactjs.org](https://reactjs.org/docs/hooks-rules.html)
