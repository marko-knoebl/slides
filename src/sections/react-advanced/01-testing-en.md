# Testing React Applications

---

## Testing React Applications

standard test framework for React: [jest](https://facebook.github.io/jest/)

---

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

---

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

---

## Running tests

```bash
npm test
```

Jest will find files ending in `.test.js`.

---

## other matchers

Besides `.toEqual` we can use:

- `.toBeGreaterThan()`
- `.toMatch()`
- `.toThrow()`
- `.not.toEqual()`
- ...

---

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

---

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshot tests are a kind of regression tests

---

## Snapshot tests - setup

```bash
npm install --save-dev react-test-renderer
```

---

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

---

## updating snapshot tests

Once we have changed and and verified the behaviour of a component we can update the corresponding tests accordingly:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

---

## mocking network (fetch) requests

```bash
npm install --save-dev jest-fetch-mock
```

---

## mocking network (fetch) requests

```js
import fetch from 'jest-fetch-mock';

global.fetch = fetch;

fetch.mockResponse(
  `[{ "title": "abc", "completed": false, "id": 1 }]`
);
```

---

## testing network requests - thunk

```js
store.dispatch(requestTodos()).then(() => {
  expect(store.getActions()).toEqual(expectedActions);
});
```

---

## testing network requests - thunk

```js
import configureMockStore from 'redux-mock-store';
import fetch from 'jest-fetch-mock';
import thunk from 'redux-thunk';
import { requestTodos } from './actions';

global.fetch = fetch;

const mockStore = configureMockStore([thunk]);
```

---

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

---

## Enzyme

Enzyme is a set of testing utilities for React.

---

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

---

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
