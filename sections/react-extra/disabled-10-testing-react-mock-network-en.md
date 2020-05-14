

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
