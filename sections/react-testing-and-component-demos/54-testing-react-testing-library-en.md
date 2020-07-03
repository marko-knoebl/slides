# React-Testing-Library

## Testing-Library

**Testing-Library**: project for testing UI components

tests focus on aspects that are relevant for the end user (and not on the exact DOM structure or implementation details)

## Example

```js
import { render } from '@testing-library/react';

it('renders learn react link', () => {
  const instance = render(<App />);
  const linkElement = instance.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## Querying elements

examples:

- `.getByText(...)`
- `.queryAllByText(...)`
- `.findByLabelText(...)`

## Querying elements

- `.getBy*`: throws if there is not a unique match
- `.getAllBy*`: throws if there are no matches
- `.queryBy*`: returns _null_ if there are no matches; throws if there are more than one
- `.queryAllBy*`: may return an empty array
- `.findBy*`: asynchronous version of `.getBy*` (waits for 1 sec by default)
- `.findAllBy*`: asynchronous version of `.getAllBy*`

see <https://testing-library.com/docs/dom-testing-library/api-queries> for a list of queries

## Assertions

extra assertions:

- `.toHaveTextContent()`
- `.toBeInTheDocument()`
- ... (see <https://github.com/testing-library/jest-dom>)

## Testing the rendering

rating component:

```jsx
import { render } from '@testing-library/react';

it('renders three full stars', () => {
  const instance = render(<Rating stars={3} />);
  const fullStars = instance.getAllByText('★');
  expect(fullStars).toHaveLength(3);
  for (let fullStar of fullStars) {
    expect(fullStar).toHaveClass('active');
  }
});
```

## Testing the rendering

slideshow component:

```jsx
it('renders a slideshow starting at image 0', () => {
  const instance = render(<Slideshow />);
  const slide = instance.getByAltText('slide');
  expect(slide).toHaveAttribute(
    'src',
    'https://picsum.photos/200?image=0'
  );
});
```

## Testing state changes

slideshow component:

```jsx
import { fireEvent } from 'react-testing-library';

it('switches to the next slide', () => {
  const instance = render(<Slideshow />);
  const slide = instance.getByAltText('slide');
  fireEvent.click(instance.getByText('next'));
  expect(slide).toHaveAttribute(
    'src',
    'https://picsum.photos/200?image=1'
  );
});
```

## Testing events

rating component:

```jsx
it('triggers an event when the fourth star is clicked', () => {
  const mockFn = jest.fn();
  const instance = render(
    <Rating stars={3} onStarsChange={mockFn} />
  );
  const firstEmptyStar = instance.getAllByText('☆')[0];
  fireEvent.click(firstEmptyStar);
  expect(mockFn).toHaveBeenCalledWith(4);
});
```

## Testing asynchronous code

`ChuckNorrisJoke` component which queries an API:

```js
const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  }, []);
  if (!joke) {
    return <div>loading...</div>;
  }
  return <h1 title="joke">{joke}</h1>;
};
```

## Testing asynchronous code

testing with an actual API:

```js
it('loads Chuck Norris joke from API', async () => {
  const instance = render(<ChuckNorrisJoke />);
  const jokeElement = await instance.findByTitle('joke');
  // joke should have at least 3 characters
  expect(jokeElement).toHaveTextContent(/.../);
});
```

`findByTitle` will repeatedly query for an element until it exists

## Mocking the API with jest

```js
const data = {
  value: 'Chuck Norris counted to infinity. Twice.',
};
globalThis.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(data) });
```

## Testing errors

rating component:

```jsx
it('throws an error if the number of stars is 0', () => {
  const testFn = () => {
    render(<Rating stars={0} />);
  };
  expect(testFn).toThrow('number of stars must be 1-5');
});
```

## Manual setup

these steps are already set up when using `create-react-app`

enable advanced assertions (see <https://github.com/testing-library/jest-dom>

```js
import '@testing-library/jest-dom/extend-expect';
```

test case cleanup (unmounting):

```js
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
```

## Resources

- https://react-testing-examples.com/
- https://thomlom.dev/test-react-testing-library/
