# React-Testing-Library

## Testing-Library

**Testing-Library**: project for testing UI components

tests focus on aspects that are relevant for the end user (and not on the exact DOM structure)

## React-Testing-Library

```js
import { render } from '@testing-library/react';

it('renders learn react link', () => {
  const instance = render(<App />);
  const linkElement = instance.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## Querying elements

- `.getByText` (throws if there is not a unique match)
- `.getAllByText` (throws if there are no matches)
- `.getByTitle`
- `.getByLabelText`
- ... (see [https://testing-library.com/docs/dom-testing-library/api-queries](https://testing-library.com/docs/dom-testing-library/api-queries))

## Assertions

extra assertions:

- `.toHaveTextContent()`
- `.toBeInTheDocument()`
- ... see [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

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
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(res => setJoke(res.data.value));
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
import { waitForElement } from '@testing-library/react';

it('loads Chuck Norris joke from API', async () => {
  const instance = render(<ChuckNorrisJoke />);
  const jokeElement = await waitForElement(() =>
    instance.getByTitle('joke')
  );
  // joke should have at least 3 characters
  expect(jokeElement).toHaveTextContent(/.../);
});
```

`waitForElement` will repeatedly query for an element until it exists

## Mocking objects

mocking API calls:

replacing `axios` with a mocked module:

```js
import axios from 'axios';
jest.mock('axios');
```

mocking `axios.get` as a successful promise:

```js
axios.get.mockResolvedValueOnce({
  data: {
    value: 'Chuck Norris counted to infinity. Twice.',
  },
});
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

enable advanced assertions (see [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)):

```js
import '@testing-library/jest-dom/extend-expect';
```

test case cleanup (unmounting):

```js
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
```

## Resource

https://react-testing-examples.com/
