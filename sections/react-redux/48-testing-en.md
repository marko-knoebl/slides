# Testing

## Testing

as they are pure functions, reducers and action creators are easy to test in isolation

testing middleware like _thunk_ is more complex

## Testing thunks - setup

```js
import configureMockStore from 'redux-mock-store';
import fetchMock from 'jest-fetch-mock';
import thunk from 'redux-thunk';
import { requestTodos } from './actions';

fetchMock.enableMocks();
const mockStore = configureMockStore([thunk]);
```

## Testing thunks

```js
it('loadTodos() dispatches two actions', async (done) => {
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
