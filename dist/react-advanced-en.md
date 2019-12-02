# React Advanced

## Presentation and code

Presentations available at: https://karuga.eu/courses-presentations

Code available at: https://github.com/marko-knoebl/courses-code

## Your Trainer

Marko Knöbl

- Frontend Web-Development
  - JavaScript
  - React, Angular
- Programming
  - Python, JavaScript

## Introduction of Participants

- current projects
- prior knowledge
- expectations

## Organizational

- duration
- breaks
- lunch
- materials
- questions, feedback?

# Hooks

## Hooks

Hooks = extension of function components; enable the use of state and other features without classes

## Hooks

> "In the longer term, we expect Hooks to be the primary way people write React components."

\- [React FAQ](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

## Hooks: current state

- Documentation for beginners is still very focused on classes
- Not supported by the test library _enzyme_ (https://github.com/airbnb/enzyme/issues/2011)

## Important hooks

- state hook
- effect hook
- context hook
- reducer hook

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

# Immutability

## Immutability

important concept in functional programing and with React / Redux

Data is not modified directly - instead, new data is derived from existing data (and may replace the existing data)

## Data management without mutations: Arrays

```js
let names = ['Alice', 'Bob', 'Charlie'];
// invalid: modifies the original array
names.push('Dan');

// instead: new array
let newNames = names.slice();
newNames.push('Dan');
// overwrite the original
names = newNames;

// or:
names = [...names, 'Dan'];
```

## Data management without mutations: Objects

```js
let user = {
  name: 'john'
  email: 'john@doe.com'
}
// invalid: modifies the object
user.email = 'johndoe@gmail.com';

// instead: create a new object
let newUser = { ...user, email: 'johndoe@gmail.com' };
```

## immutable.js and immer.js

libraries that simplify working without mutations

## immutable.js

In particular, offers the data types _List_ and _Map_ as immutable alternatives for _Array_ and _Object_.

```js
import { List, Map } from 'immutable';

const a1 = List([1, 2, 3]);
const a2 = a1.push(4);

const b1 = Map({ a: 1, b: 2 });
const b2 = b1.set('b', null);
```

## immutable.js

```js
import { fromJS, setIn } from 'immutable';

const todos = fromJS([
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
]);

const newTodos = todos.setIn([1, 'completed'], true);
```

## immer.js

is recommended by the Redux team

```js
import produce from 'immer';

const todos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
];

const newTodos = produce(todos, draftTodos => {
  draftTodos[1].completed = true;
});
```

# Memoization

## Memoization

Memoization = technique to speed up function calls etc.: Previous results are cached and don't have to be recomputed

Can be applied in React: If a component's props or state don't change the component doesn't have to be rerendered.

## Memoization in React

Triggers for rerendering a component:

- **Parent component is (re)rendered**
- component state has changed
- triggered via a hook (e.g. `useContext`, `useReducer`, `useSelector`, ...)

Visualizing rerendering the React devtools: _Settings_ - _General_ - _Highlight updates when components render._

## Memoization in React

Preventing rerendering when parent component rerenders:

For performance optimization it can be desirable to not rerender a component every time its parent rerenders.

Instead, it should only rerender when its props (or state) changes.

If props (or state) haven't changed the previous (memoized) rendering is used.

## Memoization in React

Creating memoized components in React:

in function components: using the `memo` function (memoizes _props_)

in class components: inheriting from `PureComponent` instead of `Component` (memoizes _props_ and _state_)

## Memoization in React: function components

```js
import React, { memo } from 'react';

function Rating(...) ...

export default memo(Rating);
```

## Memoization in React: class components

```js
import { PureComponent } from 'react';

class Rating extends PureComponent {...}

export default Rating;
```

## Data management without mutations

In React, non-primitive entries in state or props are considered to have changed if they refer to a different object than before.

## Data management without mutations

Memoization in React: Data are checked for equality via `===`

What is the output of the following script?

```js
const state1 = [1, 2, 3];
const state2 = state1;
state2.push(4);

console.log(state1 === state2);
```

## Data management without mutations

```js
const state1 = [1, 2, 3];
const state2 = state1;
state2.push(4);

console.log(state1 === state2);
```

The above script will output `true`. `state1` and `state2` refer to the same object. The change would not trigger a rerendering of memoized components.

## Data management without mutations

correct process:

```js
const state1 = [1, 2, 3];
const state2 = [...state1, 4];
```

# State management with reducers

## State management

In more complex fontend-applications it makes sense to manage the state (model) separately from the view.

Often the entire application state is represented by a data model and every change to the state will be done by triggering a change to the data model.

## State management tools

- reducer hook (included in React, conceptually similar to Redux)
- Redux (based on reducers, commonly used with React)
- MobX (commonly used with React)
- ngrx (used with Angular)
- vuex (used with vue)

## State management with actions and reducers

Technique that is used in _Redux_ and in React's _reducer hook_:

An event inside an application triggers a so-called _action_.

Based on that _action_ the current _state_ will be transformed into a new _state_ via a _reducer_ function.

## Reducer diagram

<img src="assets/redux-flow.svg" type="text/svg" style="width: 100%">

## Example: todos state management

We manage an array of todos via a reducer. We start with two possible actions:

- adding a todo
- deleting a todo

## Example: todos state management

The _state_ could look like this:

```json
[
  {
    "id": 1,
    "title": "groceries",
    "completed": false
  },
  {
    "id": 2,
    "title": "gardening",
    "completed": false
  }
]
```

## Example: todos state management

_Actions_ will be represented by JavaScript objects; actions always have a type property

```json
{
  "type": "ADD_TODO",
  "title": "learn React"
}
```

```json
{
  "type": "DELETE_TODO",
  "id": 1
}
```

## Example: todos state management

A _reducer_ is a function that acts as the central element in Redux

The reducer receives the old state and an action describing a state change

The reducer function returns the new state. Importantly, the reducer function doesn't mutate the old state object (it is a pure function)

## Example: todos state management

```js
const todosReducer = (oldState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...oldState,
        {
          title: action.title,
          completed: false,
          id: generateId(), // dummy function
        },
      ];
    case 'DELETE_TODO':
      return oldState.filter(todo => todo.id !== action.id);
    default:
      // unknown action - change nothing
      return oldState;
  }
};
```

## Example: todos state management

Usage of the reducer (remember: it takes the old state and an action and returns the new state)

```js
const state1 = [
  { id: 1, title: 'groceries', completed: false },
];
const state2 = todosReducer(state1, {
  type: 'ADD_TODO',
  title: 'gardening',
});
const state3 = todosReducer(state2, {
  type: 'DELETE_TODO',
  id: 1,
});
console.log(state3);
// [{id: 2, title: "gardening", completed: false}]
```

# Reducer Hook

## Reducer Hook

For managing state we can now also utilize `useReducer` in addition to `useState`:

```js
useReducer(reducer, initialState);
```

## Reducer Hook

```js
const TodoApp = () => {
  const [todos, dispatch] = useReducer(
    todosReducer,
    initialTodos
  );

  return (
    <div>
      ...
      <button
        onClick={() => dispatch({ type: 'DELETE_ALL' })}>
        delete all todos
      </button>
    </div>
  );
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

We are going to write and test a function that will shorten a string to a specified length:

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

## Running tests

```bash
npm test
```

Note: running tests should always be cancelled bevor running `npm install ...` - otherwise the Installation may fail

## Finding tests

In general testing libraries look for files ending in `.test.js` or `.spec.js` inside the `test` directory.

We can also pass a custom pattern, e.g.:

```bash
mocha "src/**/*.{test,spec}.{js,jsx}"
```

## Test coverage

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

assert (node):

```js
assert.equal(a, b);
assert.deepEqual(a, b);
assert.throws(() => 1 / 0);
// ...
```

assert (chai):

```js
assert.equal(a, b);
assert.deepEqual(a, b);
assert.typeOf(foo, 'string');
assert.lengthOf(foo, 3);
assert.throws(() => 1 / 0);
```

## Testing: assertions

expect (jest):

```js
expect(a).toEqual(4);
expect(a).not.toEqual(2);
expect(a).toBeGreaterThan(3);
expect(a).toBeInstanceOf(Number);
expect(() => 1 / 0).toThrow();
```

expect (chai):

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
- `react-testing-library` (subproject of _testing library_, first published in mid-2019)
- `Enzyme` (no support for React hooks yet)

## React-Test-Renderer - installation

```bash
npm install --save-dev react-test-renderer
```

with TypeScript:

```bash
npm install --save-dev react-test-renderer @types/react-test-renderer
```

## React-Test-Renderer - Example

```js
import TestRenderer from 'react-test-renderer';

it('renders a component without crashing', () => {
  const instance = TestRenderer.create(<MyComponent />)
    .root;
});
```

## React-Test-Renderer - working with instances

- `instance.find(All)`
- `instance.find(All)ByType`
- `instance.find(All)ByProps`
- `instance.props`
- `instance.children`
- `instance.type`

## React-Testing-Library - Installation

```bash
npm install --save-dev @testing-library/react
```

recommended additional assertions for jest:

```bash
npm install --save-dev @testing-library/jest-dom
```

## React-Testing-Library - Example

```js
import { render } from '@testing-library/react';

it('renders a component without crashing', () => {
  const instance = render(<MyComponent />);
});
```

## React-Testing-Library - Querying elements

- `.getByText` (throws if there is not a unique match)
- `.getAllByText` (throws if there are no matches)
- `.queryByText`
- `.queryAllByText`
- ... (see [https://testing-library.com/docs/dom-testing-library/api-queries](https://testing-library.com/docs/dom-testing-library/api-queries))

## React-Testing-Library - advanced asserts for Jest

activate via:

```js
import '@testing-library/jest-dom/extend-expect';
```

examples:

- `.toBeInTheDocument()`
- `.toContainHTML()`
- `.toHaveClass()`
- ...

see [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

## Enzyme - Installation & Setup

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

# Example: Testing with Jest and React Test Renderer

Testing a Rating component

## Test setup

```jsx
import React from 'react';
import TestRenderer from 'react-test-renderer';

import Rating from './Rating';
```

## Testing the rendering

```jsx
describe('rendering', () => {
  it('renders 5 spans', () => {
    const instance = TestRenderer.create(
      <Rating stars={3} />
    ).root;
    expect(instance.findAllByType('span')).toHaveLength(5);
  });

  it('renders 3 active stars', () => {
    const instance = TestRenderer.create(
      <Rating stars={3} />
    ).root;
    expect(
      instance.findAllByProps({ className: 'star active' })
    ).toHaveLength(3);
  });
});
```

## Testing events

```jsx
describe('events', () => {
  it('reacts to click on the fourth star', () => {
    const mockFn = jest.fn();
    const instance = TestRenderer.create(
      <Rating stars={3} onStarsChange={mockFn} />
    ).root;
    const fourthStar = instance.findAllByType('span')[3];
    fourthStar.props.onClick();
    expect(mockFn).toBeCalledWith(4);
  });
});
```

## Testing exceptions

```jsx
describe('errors', () => {
  it('throws an error if the number of stars is 0', () => {
    const testFn = () => {
      TestRenderer.create(<Rating stars={0} />);
    };
    expect(testFn).toThrow('number of stars must be 1-5');
  });
});
```

# Example: Testing with Jest and React Testing Library

Testing a rating component

## Test setup

```js
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';

import Rating from './Rating';

afterEach(() => {
  cleanup();
});
```

## Testing the rendering

```jsx
it('renders three full stars', () => {
  const instance = render(<Rating stars={3} />);
  const fullStars = instance.getAllByText('★');
  expect(fullStars).toHaveLength(3);
  for (let fullStar of fullStars) {
    expect(fullStar).toHaveClass('active');
  }
});
```

## Testing events

```jsx
it('reacts to click on the fourth star', () => {
  const mockFn = jest.fn();
  const instance = render(
    <Rating stars={3} onStarsChange={mockFn} />
  );
  const firstEmptyStar = instance.getAllByText('☆')[0];
  fireEvent.click(firstEmptyStar);
  expect(mockFn).toHaveBeenCalledWith(4);
});
```

## Testing errors

```jsx
it('throws an error if the number of stars is 0', () => {
  const testFn = () => {
    render(<Rating stars={0} />);
  };
  expect(testFn).toThrow('number of stars must be 1-5');
});
```

# Example: testing a rating component

With jest and enzyme

## Example: testing a rating component

```jsx
import React from 'react';
import { shallow, mount } from 'enzyme';

import Rating from './Rating';
```

## Example: testing a rating component

```jsx
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

```jsx
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

```jsx
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

```jsx
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

```jsx
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

### with react-test-renderer

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshot tests are a kind of regression tests

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

# Storybook

## Storybook

Enables creation of isolated component demos

example:

https://airbnb.io/react-dates/

## Storybook - Setup

```bash
npx -p @storybook/cli sb init --type react
```

Will create a config folder under `.storybook` and a demo stories under `stories`.

## Storybook

```bash
npm run storybook
```

## Storybook

configuration: via `.storybook/config.js`

# React Router

## React Router

https://reacttraining.com/react-router/

## React Router - Setup

npm packages:

- `react-router-dom`
- (`@types/react-router-dom`)

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

<Route path="/" exact={true} component={TodoList} />
<Route path="/about" exact={true} component={About} />
<Route path="/add" exact={true} component={AddTodo} />
```

## React Router - defining routes

If props need to be passed:

```jsx
import { Route } from 'react-router-dom';

<Route
  path="/add"
  exact={true}
  render={props => (
    <AddTodo onSubmit={this.handleAddTodo} />
  )}
/>;
```

## React Router - Router links

```jsx
import { NavLink } from 'react-router-dom';

<NavLink to="/" activeClassName="active-link">Home</NavLink>
<NavLink to="/add" activeClassName="active-link">Add</NavLink>
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

Via `public/manifest.json`

## PWA: add to homescreen

https://developers.google.com/web/fundamentals/app-install-banners/

## PWA: add to homescreen

Procedure in Chrome:

- wait until Chrome will allow the install prompt to be displayed
- display a button or the like that offers installation
- when the button is clicked, make Chrome display an installation prompt

## PWA: add to homescreen

```js
const [installPrompt, setInstallPrompt] = useState(null);

// executed when the component has mounted
useEffect(() => {
  window.addEventListener(
    'beforeinstallprompt',
    ipEvent => {
      ipEvent.preventDefault();
      setInstallPrompt(ipEvent);
    }
  );
}, []);
```

## PWA: add to homescreen

```jsx
<div>
  {installPrompt && (
    <button
      onClick={() => {
        installPrompt.prompt();
      }}>
      install
    </button>
  )}
</div>
```

## PWA: Deployment on netlify

- `npm run build`
- drag & drop the dist folder to app.netlify.com/drop
- switch to HTTPS manually - try it out in Chrome on desktop and mobile

# React Native

## React Native

React Native can be used to write React applications for iOS and Android devices

## Online editor

see https://snack.expo.io/

## React Native components

- View (=div)
- Text (=span)
- Image
- Button
- TextInput (=input)
- ScrollView

[detailed list](https://facebook.github.io/react-native/docs/components-and-apis#basic-components)

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

class component:

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

## File Structure

https://reactjs.org/docs/faq-structure.html

common approaches:

- grouping by features or routes
- grouping by type (component / reducer / API interface)

keep in mind:

- Avoid too much nesting
- Don't overthink it

# Manual setup and configuration of React

## Manual setup and configuration

Setting up React without _create-react-app_

Here we will use the _parcel_ bundler - an alternative to webpack

## package.json and dependencies

Start out with a `package.json` file that contains an empty object : `{}`

Install the required packages:

```bash
npm install react react-dom
```

```bash
npm install --save-dev parcel-bundler babel-preset-react babel-preset-env
```

## Configuring babel

via `.babelrc` file:

```json
{
  "presets": ["env", "react"]
}
```

## npm scripts

add script to `package.json`:

```json
"scripts": {
  "build": "parcel build src/index.html",
  "start": "parcel src/index.html"
},
```

## HTML entry point

Create `src/index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React starter app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
</html>
```

## Rendering an App component

Create `index.js`:

```js
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello World!</div>;
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
```

## Running

Run `npm start` for a development server or `npm run build` for a build.

