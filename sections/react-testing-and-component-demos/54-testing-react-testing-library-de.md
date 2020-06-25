# React-Testing-Library

## Testing-Library

**Testing-Library**: Projekt zum Testen von UI Komponenten (u.a. React)

Fokus der Tests liegt auf Aspekten, die für den Endnutzer relevant sind (nicht so sehr auf der genauen DOM-Struktur)

## React-Testing-Library - Beispiel

```js
import { render } from '@testing-library/react';

it('renders learn react link', () => {
  const instance = render(<App />);
  const linkElement = instance.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## Elemente abfragen

- `.getByText` (wirft Exception, wenn es keinen eindeutigen Match gibt)
- `.getAllByText` (wirft Exception, wenn es keine Matches gibt)
- `.getByTitle`
- `.getByLabelText`
- ... (siehe [https://testing-library.com/docs/dom-testing-library/api-queries](https://testing-library.com/docs/dom-testing-library/api-queries))

## Assertions

extra Assertions:

- `.toHaveTextContent()`
- `.toBeInTheDocument()`
- ... siehe [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

## Testen des Renderings

Rating-Komponente:

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

## Testen des Renderings

Slideshow-Komponente:

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

## Testen von State-Änderungen

Slideshow-Komponente:

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

## Testen von Events

Rating-Komponente:

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

## Testen von asynchronem Code

`ChuckNorrisJoke`-Komponente, die ein API abfragt:

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

## Testen von asynchronem Code

Testen mit echtem API:

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

`waitForElement` versucht wiederholt, ein Element abzufragen, bis es existiert

## Mocking von Objekten

Mocking von API-Abrufen:

ersetzen von `axios` durch einen Mock:

```js
import axios from 'axios';
jest.mock('axios');
```

Mocking von `axios.get` als erfolgreiche Promise:

```js
axios.get.mockResolvedValueOnce({
  data: {
    value: 'Chuck Norris counted to infinity. Twice.',
  },
});
```

## Testen von Fehlern

Rating-Komponente:

```jsx
it('throws an error if the number of stars is 0', () => {
  const testFn = () => {
    render(<Rating stars={0} />);
  };
  expect(testFn).toThrow('number of stars must be 1-5');
});
```

## Manuelle Einrichtung

diese Schritte sind bei der Verwendung von `create-react-app` schon eingerichtet

Aktivieren erweiterter Assertions (siehe [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)):

```js
import '@testing-library/jest-dom/extend-expect';
```

Aufräumen nach einem Test (Unmounting):

```js
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
```

## Ressource

https://react-testing-examples.com/
