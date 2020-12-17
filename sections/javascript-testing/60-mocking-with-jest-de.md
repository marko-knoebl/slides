# Mocking mit Jest

## Mocking von built-ins

Mocking von _localStorage_ (welches in node nicht verfügbar ist) mit Beispieldaten:

```js
globalThis.localStorage = {
  getItem: (anyKey) => 'foo',
};
```

## Mocking von Modulen

Mocken eines Moduls mittels `jest.mock`:

```js
jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: { foo: 'bar' } }),
}));
```

## Mocking von Modulen

Mocking von Modulen via \_\_mocks\_\_ folders:

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

Bemerkung: in einem _create-react-app_-Projekt wäre dies z.B. `src/__mocks__/axios.js` anstatt `__mocks__/axios.js` (siehe [issue](https://github.com/facebook/create-react-app/issues/7539))

## Mocking von Modulen

```js
// __mocks__/fs.js

export const readFileSync = () => 'mock content';
```

## Mocking von Promises

Manuelles Mocken eines _fetch_-Resultats mittels eines Promises:

```js
globalThis.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve({ foo: 'bar' }),
  });
```

## Mocking von Promises

Mocking von _axios_-Anfragen mit Promises:

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

## Auto Mocking

Mocking von _fetch_ via _jest-fetch-mock_:

```js
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

fetchMock.mockResponseOnce('{ "foo": "bar" }');
```

## Mocken und Inspizieren von Funktionen

Mocken einer Funktion, die aufgerufen und später inspiziert werden kann:

```js
const mockFn = jest.fn();
mockFn('foo');
expect(mockFn).toHaveBeenCalledWith('foo');
```

## Ressourcen

- [How To Mock Fetch in Jest](https://www.leighhalliday.com/mock-fetch-jest)
- [Mocking Axios in Jest + Testing Async Functions](https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions)
