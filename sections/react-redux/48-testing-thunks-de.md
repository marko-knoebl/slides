# Testen von thunks

## Testen von thunks - Setup

```js
import configureMockStore from 'redux-mock-store';
import fetchMock from 'jest-fetch-mock';
import thunk from 'redux-thunk';
import { requestTodos } from './actions';

fetchMock.enableMocks();
const mockStore = configureMockStore([thunk]);
```

## Testen von thunks

```js
test('loadTodos() dispatches two actions', async (done) => {
  const todoData = [
    { title: 'abc', completed: false, id: 1 },
  ];
  fetchMock.mockResponseOnce(JSON.stringify(todoData));
  const store = mockStore();
  const expectedActions = [
    { type: 'todoRequest' },
    { type: 'todoResponse', payload: todoData },
  ];
  await store.dispatch(requestTodos());
  expect(store.getActions()).toEqual(expectedActions);
});
```
