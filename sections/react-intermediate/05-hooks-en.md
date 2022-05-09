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

- querying APIs (e.g. [react-query](https://github.com/tannerlinsley/react-query), [swr](https://github.com/vercel/swr))
- managing forms (e.g. [react-hook-form](https://github.com/react-hook-form/react-hook-form), [react-use-form-state](https://github.com/wsmd/react-use-form-state))
- media queries (e.g. [react-responsive](https://github.com/yocontra/react-responsive))
- using _localStorage_ (e.g. [rehooks/local-storage](https://github.com/rehooks/local-storage))
- ... (see [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks), [react-use](https://github.com/streamich/react-use))

## Rules of Hooks

Hooks inside a component definition must be called in the same order every time the component renders - React uses the call order to distinguish between e.g. multiple calls to `useState`

The same rules as in a component apply to hook calls inside a cutom hook

[Rules of Hooks on reactjs.org](https://reactjs.org/docs/hooks-rules.html)
