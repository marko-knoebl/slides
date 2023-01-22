# Components and Hooks

## Components and Hooks

building blocks in React:

- _components_: handle the _ui_ / _view_
- _hooks_: handle the _model_ / _logic_ behind the view

## Hooks

Hook = special function that can be called inside a component definition

possible examples:

- `useState`
- `useEffect`: for triggering _side effects_ (e.g. API queries)
- `useQuery`: more convenient way to query APIs
- `useTodos`: custom hook for managing an array of todos

## Rules of Hooks

inside a component defintion:  
hooks must be called in the same order on every render

(React uses call order to keep track of hook identity)

[Rules of Hooks on reactjs.org](https://reactjs.org/docs/hooks-rules.html)
