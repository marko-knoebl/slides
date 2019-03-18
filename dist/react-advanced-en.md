# Hooks

## Hooks

Hooks = extension of function components; enable the use of state and other features without classes

## Hooks

> "In the longer term, we expect Hooks to be the primary way people write React components."

## Hooks: current state

- Documentation for beginners is still very focused on classes
- Limited support from React developer tools (browser plugins)

## important hooks

- state hook
- effect hook
- context hook
- reducer hook

# state Hook

## state Hook

The `setState` function may be called (repeatedly) at the beginning of a functional component definition.

`setState` takes one parameter - the initial state

`setState` returns two values: the current state and a function which can be used to set the state

```js
const App = () => {
  const [count, setCount] = useState(0);

  return ...
};
```

# Automated testing

## Automated testing

Programs / functions / classes may be tested automatically to ensure they behave as expected

## Tools for testing JavaScript

- _node_ is needed to provide a runtime
- _assert_: basic assertion package, built into node
- _Jest_: test runner & assertion library
- _Jasmine_: test runner & assertion library
- _Mocha_: test runner
- _Chai_: assertion library
- _Karma_: test runner
- _Enzyme_: test utilities & assertions for React

https://2018.stateofjs.com/testing/overview/

## Example: shorten

We are going to write and test a function that will shorten a string to a specified length

```js
shorten('loremipsum', 6);
// should return 'lor...'
```

Possible approaches:

- write implementation first
- write tests first (test-driven development)

## setting up the test runner

in an existing npm project:

```bash
npm install --save-dev mocha
```

in _package.json_:

```json
"scripts": {
  "test": "mocha"
}
```

run tests:

```bash
npm test
```

## finding tests

In general testing libraries look for files ending in `.test.js` or `.spec.js`

mocha: by default, looks in the `test` directory
jest: tests can be colocated with regular code

We can run mocha like this to find tests in the src directory:

```bash
mocha src/*.{test,spec}.{js,jsx}
```

## Example: shorten

```js
// shorten.js
const shorten = (s, maxlength) => {
  if (s.length > maxlength) {
    s = s.slice(0, maxlength - 3) + '...';
  }
  return s;
};

module.exports.shorten = shorten;
```

## Example: shorten

```js
// shorten.test.js
const shorten = require('./shorten.js').shorten;
// use node's built-in assert module
const assert = require('assert');

it('shortens "loremipsum" to "lor..."', () => {
  const expected = 'lor...';
  const actual = shorten('loremipsum', 6);
  assert.equal(actual, expected);
});
```

# Testing: assertions

## Testing: assertions

Assertions can be written in two main styles:

assert:

```js
assert.equal(a, b);
```

expect (behaviour-driven):

```js
expect(a).toEqual(b);
```

## Testing: assertions

assert:

- built into node
- chai

expect (behaviour-driven)

- jest
- jasmine
- chai
- enzyme

## Testing: assertions

assert: examples

node:

```js
assert.equal(a, b);
assert.deepEqual(a, b);
// ...
```

chai:

```js
assert.equal(a, b);
assert.typeOf(foo, 'string');
assert.lengthOf(foo, 3);
assert.throws(() => {
  1 / 0;
});
```

## Testing: assertions

expect: examples

jest:

```js
expect(4).toBeGreaterThan(3);
expect(() => {
  1 / 0;
}).toThrow();
expect(3).not.toEqual(4);
```

chai:

```js
expect(foo).to.be.a('string');
expect(() => {
  1 / 0;
}).to.throw();
expect(foo).to.equal('bar');
```

# Structuring tests

## Grouping tests

with `describe()`:

```js
// jest
describe('strings that are short enough', () => {
  it('leaves "abc" unchanged with limit 5', () => {
    expect(shorten('abc', 5)).toEqual('abc');
  });
  it('leaves "loremipsum" unchanged with limit 10', () => {
    expect(shorten('loremipsum', 10)).toEqual('loremipsum');
  });
});
```

## Setup and teardown

For code that should be executed before and after each test in a group:

```js
// jest or mocha
beforeEach(() => {
  createTestDB();
});

afterEach(() => {
  clearTestDB();
});
```

# Testing React

## Test renderers for React

- `react-test-renderer` (developed by the React team)
- `Enzyme` (developed by Airbnb)

## Enzyme - Setup

```
npm install --save-dev enzyme enzyme-adapter-react-16
```

new file `src/setupTests.js`:

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Enzyme - Examples

Tests with Jest

```jsx
it('renders three <Foo /> components', () => {
  // Alternative for shallow: mount()
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find(Foo)).toHaveLength(3);
});

it('renders an `.icon-star`', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find('.icon-star')).toHaveLength(1);
});
```

## Enzyme - Examples

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

## Enzyme - Examples

```jsx
it('reacts to click events', () => {
  const mockFunction = jest.fn();

  const wrapper = mount(
    <Rating stars={3} onStarsChange={mockFunction} />
  );
  expect(wrapper.childAt(0).childAt(2).text()).toBe('*');
  wrapper.childAt(0).childAt(1).simulate('click');
  expect(mockFunction).toBeCalledWith(2);
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

# Example: testing a rating component

With Jest, Enzyme, Chai and Sinon

## Example: testing a rating component

```tsx
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Rating from './Rating';
```

## Example: testing a rating component

```tsx
describe('rendering', () => {
  it('renders 5 Star components', () => {
    const wrapper = shallow(<Rating stars={5} />);
    expect(wrapper.find('Star')).to.have.length(5);
  });

  it('renders 5 active stars', () => {
    const wrapper = mount(<Rating stars={5} />);
    expect(wrapper.find('.star')).to.have.length(5);
  });
});
```

## Example: testing a rating component

```tsx
describe('rendering', () => {
  it('renders 3 active stars', () => {
    const wrapper = mount(<Rating stars={3} />);
    expect(wrapper.find('.star')).to.have.length(5);
    expect(
      wrapper.find('.star').get(2).props.className
    ).to.equal('star active');
    expect(
      wrapper.find('.star').get(3).props.className
    ).to.equal('star');
  });
});
```

## Example: testing a rating component

```tsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <Rating stars={3} onStarsChange={spy} />
    );
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(spy.getCall(0).args[0]).to.equal(1);
  });
});
```

## Example: testing a rating component

```tsx
describe('errors', () => {
  it('throws an error if the number of stars is 0', () => {
    const testFn = () => {
      const wrapper = shallow(<Rating stars={0} />);
    };
    expect(testFn).to.throw(
      'number of stars must be positive'
    );
  });
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
npm install react-router-dom @types/react-router-dom
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
let deferredPrompt;

componentDidMount() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
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
    deferredPrompt = null;
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

## Context - example

```js
// TodosContext.js

const TodosContext = React.createContext();
```

## Context - example: TypeScript

```ts
// TodosContext.ts

type TodosContext = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onClear: () => void;
};

const TodosContext = React.createContext(
  {} as TodosContext
);
```

## Context - example: Provider

```jsx
const App = () => {
  return (
    <MyContext.Provider
      value={{
        todos: this.state.todos,
        onToggle: this.handleToggle,
        onClear: this.handleClear,
      }}>
      <TodoStats />
    </MyContext.Provider>
  );
};
```

## Context - example: Consumer

function component:

```jsx
const TodoStats = () => {
  const context = useContext(TodosContext);
  return <div>There are {context.todos.length} todos</div>;
};
```

## Context - example: Consumer

class component

```jsx
class TodoStats extends React.Component {
  render() {
    return (
      <TodosContext.Consumer>
        {context => (
          <div>
            There are {context.todos.length} todos
          </div>
        )}
      </Todos.Consumer>
    );
  }
}
```

# File Structure

https://reactjs.org/docs/faq-structure.html

common approaches:

- grouping by features or routes
- grouping by type (component / reducer / API interface)

keep in mind:

- Avoid too much nesting
- Don't overthink it



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

