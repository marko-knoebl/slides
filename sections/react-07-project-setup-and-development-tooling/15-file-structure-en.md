# File structure

## File structure

create-react-app: default file structure

- _package.json_: configuration, list of direct dependencies
- _node_modules_: dependencies
- _public/index.html_, _src/index.tsx_: entry points
- _src/index.css_: global style declarations
- _src/App.tsx_, _src/App.css_: define the App component

## File structure

basic file structure for a simple todo list project:

- _src/_
  - _index.tsx_
  - _index.css_
  - _App.tsx_
  - _App.css_
  - _components/_
    - _AddTodo.tsx_
    - _AddTodo.css_
    - _TodoItem.tsx_
    - _TodoItem.css_
    - ...
  - _hooks/_
    - _useTodos.ts_
  - _types.ts_

## File structure

common approaches:

- grouping by type (component / hook / API connection / ...)
- grouping by features or routes

<!-- list-separator -->

[React docs on file structure](https://reactjs.org/docs/faq-structure.html)

[example project: bulletproof react](https://github.com/alan2207/bulletproof-react)
