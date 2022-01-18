# Mocking mit Jest

## Mocking

**Mocking**: Simulieren von Objekten / Interfaces in einer Test-Umgebung

## Mocking

Beispiel: Mocken einer Netzwerkanfrage

```js
import fetchMock from 'fetch-mock';

fetchMock.mock('https://example.com', { foo: 'bar' });
```

<!-- alternative: MSW -->

## Mocking von Modulen

Mocken eines Moduls mittels `jest.mock`:

```js
jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: { foo: 'bar' } }),
}));
```

## Mocking von Modulen

Mocking von Modulen via \_\_mocks\_\_ Ordnern:

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
