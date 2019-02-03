# Testing React Applications

## Testing React Applications

standard test framework for React: [jest](https://facebook.github.io/jest/)

## Example

```js
// shorten.js
const shorten = (s, maxlength) => {
  if (s.length > maxlength) {
    s = s.slice(0, maxlength - 3) + '...';
  }
  return s;
};

export { shorten };
```

## Example

```js
// shorten.test.js
import { shorten } from './shorten';

it('shortens "loremipsum" to "lor..."', () => {
  const expected = 'lor...';
  const actual = shorten('loremipsum', 6);
  expect(actual).toEqual(expected);
});
```

## Running tests

```bash
npm test
```

Jest will find files ending in `.test.js`.

## other matchers

Besides `.toEqual` we can use:

- `.toBeGreaterThan()`
- `.toMatch()`
- `.toThrow()`
- `.not.toEqual()`
- ...

## Setup and teardown

For code that should be executed before and after each test:

```js
beforeEach(() => {
  createTestDB();
});

afterEach(() => {
  clearTestDB();
});
```

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshot tests are a kind of regression tests

## Snapshot tests - setup

```bash
npm install --save-dev react-test-renderer
```

für TypeScript:

```bash
npm install --save-dev @types/react-test-renderer
```

## Snapshot tests in React - creating tests

```jsx
// Rating.test.js
import React from 'react';
import Rating from './Rating.js';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(<Rating stars={2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

## updating snapshot tests

Once we have changed and and verified the behaviour of a component we can update the corresponding tests accordingly:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

## mocking network (fetch) requests

```bash
npm install --save-dev jest-fetch-mock
```

## mocking network (fetch) requests

```js
import fetch from 'jest-fetch-mock';

global.fetch = fetch;

fetch.mockResponse(
  `[{ "title": "abc", "completed": false, "id": 1 }]`
);
```

## testing network requests - thunk

```js
store.dispatch(requestTodos()).then(() => {
  expect(store.getActions()).toEqual(expectedActions);
});
```

## testing network requests - thunk

```js
import configureMockStore from 'redux-mock-store';
import fetch from 'jest-fetch-mock';
import thunk from 'redux-thunk';
import { requestTodos } from './actions';

global.fetch = fetch;

const mockStore = configureMockStore([thunk]);
```

## testing network requests - thunk

```js
it('dispatches "TODO_REQUEST" and "TODO_RESPONSE"', () => {
  const todoData = [
    { title: 'abc', completed: false, id: 1 },
  ];
  fetch.mockResponse(
    `[{ "title": "abc", "completed": false, "id": 1 }]`
  );
  const store = mockStore();
  const expectedActions = [
    { type: 'TODO_REQUEST' },
    { type: 'TODO_RESPONSE', payload: todoData },
  ];
  store.dispatch(requestTodos()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
```

## Enzyme

Enzyme is a set of testing utilities for React.

## Enzyme - examples

```jsx
it('renders three <Foo /> components', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find(Foo)).to.have.lengthOf(3);
});

it('renders an `.icon-star`', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
});
```

## Enzyme - examples

```jsx
it('reacts to click events', () => {
  const onButtonClick = sinon.spy();
  const wrapper = shallow(
    <Foo onButtonClick={onButtonClick} />
  );
  wrapper.find('button').simulate('click');
  expect(onButtonClick).to.have.property('callCount', 1);
});
```

# React Router

## React Router

https://reacttraining.com/react-router/

## React Router - Setup

```bash
npm install react-router-dom
```

```bash
// TypeScript:
npm install @types/react-router-dom
```

## React Router - BrowserRouter

In order to use React Router:  
The entire Application is enclosed in a `BrowserRouter` - Element

```js
import { BrowserRouter } from 'react-router-dom';
[...]

<BrowserRouter>
  <App/>
</BrowserRouter>
```

## React Router - defining routes

```js
import { Route } from 'react-router-dom';

<Route path="/about" component={About} />
<Route path="/" exact component={List} />
<Route path="/add" component={AddTodo} />
```

## React Router - defining routes

If Props need to be passed:

```jsx
import { Route } from 'react-router-dom';

<Route
  path="/add"
  exact
  render={props => (
    <AddTodo onSubmit={this.handleAddTodo} />
  )}
/>;
```

## React Router - Router links

```jsx
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/add">Add</Link>
```

## React Router - Redirects

```jsx
import { Redirect } from 'react-router-dom';

<Route
  path="/home"
  render={props => <Redirect to="/" />}
/>;
```

## React Router - route parameters

```jsx
<Route
  path="/todos/:todoId"
  render={props => (
    <div>Current todo: {props.match.params.todoId}</div>
  )}
/>
```

Route parameters may be accessed via _props.match.params_

## React Router - Switch

Only the first matching route will be displayed

```jsx
import { Switch } from 'react-router-dom';

<Switch>
  <Route path="/todos/:todoId" component={Todo} />
  <Route path="/" component={NotFound} />
</Switch>;
```

# PWAs

Progressive Web Apps with React

## PWAs

**Progressive Web Apps** enable us to write applications for PC and mobile using HTML, CSS and JavaScript

Applications created with `create-react-app` already have the basics configured:

- configuration in `public/manifest.json`
- PWA-Boilerplate in `src/serviceWorker.js`

## PWAs: activation

in `index.js` / `index.tsx`:

```js
serviceWorker.register();
```

## PWAs: configuration

Via `public/manifest.json`:

name, short_name

## PWAs: configuring icons

Adding icons for the resolutions `144x144px`, `192x192px` and `512x512px` (in manifest.json)

## PWA: add to homescreen

https://developers.google.com/web/fundamentals/app-install-banners/

## PWA: add to homescreen

```js
componentDidMount() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    this.deferredPrompt = e;
    this.setState({ showInstallBtn: true });
  });
}
```

## PWA: add to homescreen

```js
handleInstallBtnClicked = () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === 'accepted') {
      console.log('user accepted');
    } else {
      console.log('user dismissed');
    }
    this.deferredPrompt = null;
    this.setState({ showInstallBtn: false });
  });
};
```

## PWA: Deployment on Bitballoon

- `npm run build`
- drag & drop the dist-Ornder to bitballoon.com (app.netlify.com/drop)
- choose "edit name" and pick a shorter name
- switch to https manually - try it out in Chrome on desktop and mobile

# Context

## Context

Context is a means to provide values from a components to all components that are contained within it - without explicitly passing it through all intermediate levels.

## Context

two main elements:

- `Provider`: provides values
- `Consumer`: uses these values (the consumer may be deep down in the component hierarchy)

## Context

The interface of context can pass both data and event handler

## Context - example: Provider

```jsx
const MyContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <MyContext.Provider
        value={{
          todos: this.state.todos,
          onToggle: this.handleToggle,
        }}>
        <TodoList />
      </MyContext.Provider>
    );
  }
}
```

## Context - example: Consumer

```jsx
class TodoList extends React.Component {
  render() {
    <MyContext.Consumer>
      {context => (
        <div>
          {JSON.stringify(context)}
          <button
            onClick={() => {
              context.onToggle(2);
            }}
          />
        </div>
      )}
    </MyContext.Consumer>;
  }
}
```

# Fragments

## Fragments

Fragments enable a component to return multiple elements (instead of a single element)

## Fragments - example

```ts
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

long version:

```ts
return (
  <React.Fragment>
    <td>Hello</td>
    <td>World</td>
  </React.Fragment>
);
```
