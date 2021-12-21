# React course topics

[React slides](./react-all-en.html)

## React basics

usually 2 days

### Development of modern front-end applications

- overview and similarities of React, Vue and Angular
- declarative rendering and state
- components - defining custom HTML tags
- initializing a React project via create-react-app

### JavaScript basics for React (as needed)

- development with node.js and npm
- JavaScript versions and features
- modules (import and export)
- arrow functions
- functional programming in JavaScript
- data managemant without mutations

### TypeScript basics for React

- static vs dynamic typing
- declaring types of variables, functions and classes
- basic data types
- types and interfaces
- generics

### Managing state in React

- declarative rendering
- managing component state via the state hook
- capturing the content of input elements in the state

### Template language

- JSX: React's JavaScript-based template language
- setting element content and props
- event handlers
- repeating elements
- if / else
- CSS classes and styles

### Components

- including existing components
- component libraries for React
- custom component definition
- props and events in custom components
- prop, event and state types in TypeScript
- data flow between components
- inspecting components via the React developer tools

### Class components

- defining components via functions or via classes
- JavaScript: "this" and its quirks
- state in class components
- props and events in class components

### Querying APIs from React

- sending HTTP requests via _fetch_
- using the effect hook to trigger HTTP requests

### React router

- displaying different views based on the route
- nested routes
- route parameters

## React intermediate

usually 1 day

### React tools and libraries

- styling libraries
- form libraries
- external and custom hooks (e.g. react-query)
- context: sharing values across a component tree

### State management with reducers

- overview of state management
- state management with reducers and pure functions
- using the reducer hook in React
- overview of state management with Redux

### Testing and component demos

- component demos with storybook
- testing JavaScript code with Jest
- end-to-end tests with JavaScript
- testing React components with react-testing-library
- snapshot tests

### App development with React

- Progressive Web Apps: creating installable mobile and desktop apps
- overview of React Native

### Performance optimization and pre-rendering

- React developer tools profiler
- React.memo (memoized component renderings)
- callback hook (memoized callbacks / event handlers)
- memo hook (memoized derived values)

### Pre-Rendering und next.js

- static site generation
- server-side rendering
- code splitting

## React and Redux

usually 1 day

### Redux basics

- state management with reducers
- state management in Redux
- setting up a Redux store with Redux toolkit
- using the Redux devtools

### React and Redux

- integrating Redux with React
- Redux hooks
- container components

### Redux in practice

- splitting / combining reducers
- actions in detail
- asynchronous actions and data fetching via Thunk
- action creators
- Redux and TypeScript

### Helper functions

- createAction
- createReducer
- createSlice

### Selectors and memoization

### Redux ecosystem

- overview of the Redux ecosystem
- middleware

## React and GraphQL

usually half a day

### Overview of GraphQL

- use cases of GraphQL
- simple GraphQL examples
- GraphQL vs REST
- GraphQL compared to SQL
- GraphiQL explorer

### GraphQL basics

- parametric queries
- mutations
- data types

### GraphQL clients

- GraphQL from pure JavaScript
- Apollo client
- Apollo client and React
