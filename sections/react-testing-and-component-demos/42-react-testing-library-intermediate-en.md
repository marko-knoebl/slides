# React-Testing-Library intermediate

## Other queries

- `getByText`: e.g. for _divs_, _spans_
- `getByLabelText`: for form fields
- `getByAltText`: e.g. for images
- `getByTitle`: e.g. for images / links
- `getByTestId`: for explicit test ids via `data-testid="..."`
- ... (see <https://testing-library.com/docs/dom-testing-library/api-queries#queries>)

## getByText

useful for _divs_ / _spans_ (no default _role_)

note: Consider giving the element an appropriate role, and using e.g. `getByRole("presentation", { name: "text" })`

## Testing asynchronous interactions and APIs

Use `.findByRole`, instead of `.getByRole` to wait for an element to appear

`findByRole` will repeatedly query for an element until it exists (by default every 0.05 seconds for a maximum of 1 second)

## Testing asynchronous code

task: testing a `ChuckNorrisJoke` component which queries an API:

```js
const URL = 'https://api.chucknorris.io/jokes/random';
const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState(null);
  async function loadJoke() {
    const res = await fetch(URL);
    const data = await res.json();
    setJoke(data.value);
  }
  useEffect(() => {
    loadJoke();
  }, []);
  if (!joke) {
    return <div role="status">loading...</div>;
  }
  return <article>{joke}</article>;
};
```

## Testing asynchronous interactions

testing with an actual API:

```js
test('load Chuck Norris joke from API', async () => {
  render(<ChuckNorrisJoke />);
  const jokeElement = await screen.findByRole('article');
  // joke should have at least 3 characters
  expect(jokeElement).toHaveTextContent(/.../);
});
```

## Testing asynchronous interactions

Testing with a mocked API:

```js
const data = {
  value: 'Chuck Norris counted to infinity. Twice.',
};
globalThis.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(data) });
```

## Testing errors

Rating component:

```jsx
test('throw an error if the rating is invalid', () => {
  const testFn = () => {
    render(<Rating value={-1} />);
  };
  expect(testFn).toThrow('value must be 0 to 5');
});
```

## Testing for non-existence

```js
expect(() => getByRole('listitem')).toThrow();
```

or via _queryBy..._:

```js
expect(queryByRole('listitem')).toEqual(null);
```

_queryBy..._ will return _null_ instead of throwing

## Resources

- [How to use React Testing Library Tutorial, Robin Wieruch](https://www.robinwieruch.de/react-testing-library)
- [react-testing-examples.com](https://react-testing-examples.com/)
- [JavaScript Testing Masterclass, Gabriel Vasile](https://docs.google.com/presentation/d/1ljMA8glel6hCopJ9Ib221A-pZ6brnibuwpzRLf1A3OM/)
