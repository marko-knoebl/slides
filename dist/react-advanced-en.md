# Hooks

## Hooks

Hooks = extension of function components; enable the use of state and other features without classes

## Hooks

> "In the longer term, we expect Hooks to be the primary way people write React components."

\- [React FAQ](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

## Hooks: current state

- Documentation for beginners is still very focused on classes
- Limited support from React developer tools (browser plugins)
- Test libraries like enzyme don't support them yet

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

# Reducer hook

## State managment & reducer hook

In complex components / applications it makes sense to separate the state (model) from the view. This can happen via external state management libraries like _redux_ or, in simple cases, via the reducer hook.

Often the entire application state is contained in a data model. Each change to the application state is done via that data model.

## Reducer hook

In state management tools each state change usually happens through an _event_ or _action_; With the reducer hook or Redux an action usually has a _type_ and (optionally) a _payload_:

```json
{
  "type": "ADD_TODO",
  "payload": {
    "title": "learn react"
  }
}
```

## Reducer hook

State management with reducers:

when using the _reducer hook_ or _Redux_:

The transition from one state to the next happens via a reducer function:

The reducer function receives two arguments: the old state and an action describing the state change

The reducer function returns the new state

## Reducer hook

The reducer hook is included in a way that is similar to the state hook:

in general:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

specific example: count:

```js
const [count, countDispatch] = useReducer(countReducer, 0);
```

## Reducer hook

```js
const countReducer = (count, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    default:
      throw new Error('unknown action');
  }
};
```

## Reducer hook

In order to trigger actions, we call the `dispatch` function of the reducer with the action as an argument

# Component lifecycle

## Component lifecycle

We can listen for certain events in the lifecycle of a component:

- the component is included (mounted)
- component state or props have changed
- the component is removed

## Component lifecycle

We can use these events for:

- querying APIs
- explicitly manipulating the DOM
- cleaning up after a component was removed

## Component lifecycle

We can listen for lifecycle events via the following means:

In class components we use lifecycle methods like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`

In functional components we use the effect hook

## Example: DocumentTitle component

We will create a component that can set the document title dynamically:

```xml
<DocumentTitle>my custom title</DocumentTitle>
```

This component may appear anywhere in the React application.

## Example: DocumentTitle component

as a class component:

```jsx
class DocumentTitle extends Component {
  componentDidMount() {
    document.title = this.props.children;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = this.props.children;
  }

  render() {
    return null;
  }
}
```

## Example: DocumentTitle component

with `useEffect`

```jsx
const DocumentTitle = props => {
  useEffect(() => {
    document.title = props.children;
  });

  return null;
};
```

## Example: Clock component

## Example: Clock component

as a class component:

```jsx
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  render() {
    return <div>{this.state.time}</div>;
  }
```

## Example: Clock component

```jsx
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
```

## useEffect in detail

`useEffect` will receive two parameters: A function and (optionally) an array of values.

The function is executed after the component renders if one of the values in the array has changed.

The function is also executed when the component is included and rendered for the first time.

## useEffect in detail

If no second parameter is passed the function will be called after each render.

If an empty array is passed as the second parameter the function will only be called after the first render.

## useEffect: example: weather

```js
const [weatherData, setWeatherData] = useState(null);
const [stale, setStale] = useState(true);

// fetch data whenever data is stale
useEffect(() => {
  if (stale) {
    refetch();
  }
}, [stale]);
```

## useEffect: example: weather

```js
const refetch = () => {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather' +
      `?q=${city}&appid=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      setWeatherData({ temperature: data.main.temp });
      setStale(false);
    });
};
```

## useEffect: component removal

```jsx
const Clock = () => {
  ...
  // will be called when the component has mounted
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // will be called when the component will be removed
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  ...
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
npm install --save-dev jest
```

in _package.json_:

```json
"scripts": {
  "test": "jest"
}
```

run tests:

```bash
npm test
```

## finding tests

In general testing libraries look for files ending in `.test.js` or `.spec.js` inside the `test` directory.

We can also pass a custom pattern, e.g.:

```bash
mocha "src/**/*.{test,spec}.{js,jsx}"
```

## test coverage

Some testing libraries can report on how much of the code is covered by tests:

example: in a create-react-app project:

```bash
npm test -- --coverage
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

node:

```js
assert.equal(a, b);
assert.deepEqual(a, b);
assert.throws(() => 1 / 0);
// ...
```

chai:

```js
assert.equal(a, b);
assert.deepEqual(a, b);
assert.typeOf(foo, 'string');
assert.lengthOf(foo, 3);
assert.throws(() => 1 / 0);
```

## Testing: assertions

jest:

```js
expect(a).toEqual(4);
expect(a).not.toEqual(2);
expect(a).toBeGreaterThan(3);
expect(a).toBeInstanceOf(Number);
expect(() => 1 / 0).toThrow();
```

chai:

```js
expect(a).to.equal(4);
expect(a).not.to.equal(2);
expect(a).to.be.greaterThan(3);
expect(a).to.be.a('number');
expect(() => 1 / 0).to.throw();
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

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Enzyme - Examples

```jsx
import { shallow, mount } from 'enzyme';

it('renders a component without crashing', () => {
  const wrapper = shallow(<MyComponent />);
});

it('renders a component tree without crashing', () => {
  const wrapper = mount(<MyComponent />);
});
```

## Enzyme - Cheatsheet

https://devhints.io/enzyme

# Example: testing a rating component

With jest and enzyme

## Example: testing a rating component

```tsx
import React from 'react';
import { shallow, mount } from 'enzyme';

import Rating from './Rating';
```

## Example: testing a rating component

```tsx
describe('rendering', () => {
  it('renders 5 Star components', () => {
    const wrapper = shallow(<Rating stars={5} />);
    expect(wrapper.find('Star')).toHaveLength(5);
  });

  it('renders 5 stars', () => {
    const wrapper = mount(<Rating stars={5} />);
    expect(wrapper.find('.star')).toHaveLength(5);
  });
});
```

## Example: testing a rating component

```tsx
describe('rendering', () => {
  it('renders 3 active stars', () => {
    const wrapper = mount(<Rating stars={3} />);
    expect(wrapper.find('.star')).toHaveLength(5);
    expect(
      wrapper.find('.star').get(2).props.className
    ).toEqual('star active');
    expect(
      wrapper.find('.star').get(3).props.className
    ).toEqual('star');
  });
});
```

## Example: testing a rating component

```tsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const mockFn = fn();
    const wrapper = mount(
      <Rating stars={3} onStarsChange={mockFn} />
    );
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(mockFn.mock.calls[0][0]).toEqual(1);
  });
});
```

## Example: testing a rating component

Testing a (hypothetical) rating component that has its own internal state:

```tsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const wrapper = mount(<Rating />);
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(wrapper.instance.state.count).toEqual(1);
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
    expect(testFn).toThrow(
      'number of stars must be positive'
    );
  });
});
```

# Snapshot tests

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshot tests are a kind of regression tests

## Snapshot tests - setup

```bash
npm install --save-dev react-test-renderer
```

for TypeScript:

```bash
npm install --save-dev @types/react-test-renderer
```

## Snapshot tests in React - creating tests

```jsx
// Rating.test.js
import React from 'react';
import Rating from './Rating.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
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

<Route path="/" exact component={TodoList} />
<Route path="/about" exact component={About} />
<Route path="/add" exact component={AddTodo} />
```

## React Router - defining routes

If props need to be passed:

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
import { NavLink } from 'react-router-dom';

<NavLink to="/" activeClassName="active-link">Home</Link>
<NavLink to="/add" activeClassName="active-link">Add</Link>
```

## React Router - Switch

Only the first matching route will be displayed

```jsx
import { Switch } from 'react-router-dom';

<Switch>
  <Route path="/todos/:todoId" component={Todo} />
  <Route path="/" component={NotFound} />
</Switch>;
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

Add icons for the resolutions `144x144px`, `192x192px` and `512x512px` (in manifest.json)

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

## PWA: Deployment on netlify

- `npm run build`
- drag & drop the dist folder to app.netlify.com/drop
- switch to HTTPS manually - try it out in Chrome on desktop and mobile

# Context

## Context

Context is a means to provide values from a component to all components that are contained within it - without explicitly passing it through all intermediate levels.

## Context

two main elements:

- `Provider`: provides values
- `Consumer`: uses these values (the consumer may be deep down in the component hierarchy)

## Context

The interface of context can pass both data and event handlers

## Context - example

```js
// TodosContext.js

const TodosContext = React.createContext();
```

## Context - example: TypeScript

```ts
// TodosContext.ts

type TodosContextType = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onClear: () => void;
};

const TodosContext = React.createContext(
  {} as TodosContextType
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

