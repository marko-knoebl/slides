# Mocking with Jest

## Mocking

**mocking**: simulating objects / interfaces in a testing environment

## Mocking

Example: Mocking a network request

```js
import fetchMock from 'fetch-mock';

fetchMock.mock('https://example.com', { foo: 'bar' });
```

<!-- alternative: MSW -->

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
