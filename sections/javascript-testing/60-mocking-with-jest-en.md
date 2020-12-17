# Mocking with jest

## Mocking built-ins

mocking _localStorage_ (which is not available in node) with example content:

```js
globalThis.localStorage = {
  getItem: (anyKey) => 'foo',
};
```

## Mocking modules

mocking a module via `jest.mock`:

```js
jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: { foo: 'bar' } }),
}));
```

## Mocking modules via \_\_mocks\_\_

mocking modules via \_\_mocks\_\_ folders:

```txt
__mocks__/fs.js
__mocks__/axios.js
src/foo.js
src/foo.test.js
src/__mocks__/foo.js
```

```js
// src/foo.test.js
jest.mock('fs');
jest.mock('axios'); // optional for contents of node_modules
jest.mock('./foo');
```

Note: inside a create-react-app project this would be e.g. `src/__mocks__/axios.js` instead of `__mocks__/axios.js` (see [issue](https://github.com/facebook/create-react-app/issues/7539))

## Mocking modules

```js
// __mocks__/fs.js

export const readFileSync = () => 'mock content';
```

## Mocking promises

manually mocking a _fetch_ result with a promise:

```js
globalThis.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve({ foo: 'bar' }),
  });
```

## Mocking promises

Mocking _axios_ requests with promises:

```js
// __mocks__/axios.js

export default {
  get: (path) => {
    if (path === '/') {
      return Promise.resolve({ foo: 'bar' });
    }
    return Promise.reject({ message: 'NetworkError ...' });
  },
};
```

## Auto mocking

mocking _fetch_ via _jest-fetch-mock_:

```js
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

fetchMock.mockResponseOnce('{ "foo": "bar" }');
```

## Mocking and inspecting functions

Mocking a function that can be called and inspected later:

```js
const mockFn = jest.fn();
mockFn('foo');
expect(mockFn).toHaveBeenCalledWith('foo');
```

## Resources

- [How To Mock Fetch in Jest](https://www.leighhalliday.com/mock-fetch-jest)
- [Mocking Axios in Jest + Testing Async Functions](https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions)
