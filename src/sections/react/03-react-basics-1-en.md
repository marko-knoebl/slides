# React.js - Basics

## Developing with node.js and npm

- node.js: JS-Runtime
  - Running the testservr
  - unit-tests
- npm: package manager
  - managing dependencies
  - packages are located in the _node_modules_ - Directory
  - configuration via _package.json_

## create-react-app

most-used method for generating React projects: _create-react-app_

run it via:

```bash
npx create-react-app playground
```

see also: https://reactjs.org/docs/add-react-to-a-new-app.html

## default project structure

- `public/index.html`, `src/index.js`: entry points
- `App.js`, `App.css`: define the App component
- `node_modules`: dependencies

## test server and build

inside the project directory:

- `npm start`: starts the test server
- `npm run build`: creates a build (for deployment)

## JSX: JS + XML

JSX = Template language of React

- **<** switches from JS to XML/HTML
- **{** switches back to JS

## JSX: JS + XML

```jsx
el = <div>Hello, I am {2018 - 1970} years old.</div>;
```

## JSX: Simple tasks

- Show the current date
- Show a random roulette number (0-36)

## component state

A component which will update its state every second:

```js
constructor () {
  super();
  this.state = { now: new Date() };
  setInterval(() => {
    this.setState({ now: new Date() });
  }, 1000);
};
```

```jsx
<div>{this.state.now.toLocaleTimeString()}</div>
```
