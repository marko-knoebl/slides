# React: Testen und Komponentendemos

## React: Testen und Komponentendemos

### Themen

- Komponentendemos mit _Storybook_
- Testen in JavaScript
- Libraries für das Testen von React-Komponenten
  - react-testing-library
  - react-test-renderer
  - enzyme
- Snapshot-Tests

# Storybook

## Storybook

Ermöglicht das Erstellen isolierter Komponentendemos

Beispiele:

- <https://storybookjs.netlify.com/official-storybook/>
- <https://airbnb.io/react-dates/>

## Setup

in einem Create-React-App Projekt:

```bash
npx -p @storybook/cli sb init --type react_scripts
```

in einem regulären React Projekt:

```bash
npx -p @storybook/cli sb init --type react
```

## Ausführen

```bash
npm run storybook
```

## Stories schreiben

Beispiel: _Rating.stories.js_

```jsx
import React from 'react';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

export const oneStar = () => <Rating stars={1} />;
export const fiveStars = () => <Rating stars={5} />;
```

## Addons

siehe <https://storybook.js.org/addons/>:

- _@storybook/knobs_ (Komponentenprops)
- _@storybook/actions_ (Komponentenevents)
- ...

Addons werden in _.storybook/main.js_ konfiguriert

## Knobs Addon

für Komponentenprops:

```jsx
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'Rating',
  component: Rating,
  decorators: [withKnobs],
};

export const variableStars = () => {
  const rating = number('rating', 1);
  return <Rating stars={rating} />;
};
```

## Actions Addon

für Komponentenevents:

```jsx
import { action } from '@storybook/addon-actions';

export const oneStarInteraction = () => (
  <Rating
    stars={1}
    onChange={action('rating change triggered')}
  />
);
```

# Testen

## Automatisiertes Testen in JavaScript

Manche Funktionen in React - z.B. Reducer - sind ganz "normale" JavaScript-Funktionen und können mit standard-Testwerkzeugen getestet werden

Siehe die Präsentation [JavaScript Testing](./javascript-testing-de.html) für einen Einstieg (Bemerkung: Die Library Jest ist in einem create-react-app Projekt schon eingerichtet)

## Testen von React-Komponenten

was kann getestet werden:

- Rendering
- Auslösen von Events
- Änderungen am State

## Testen von React-Komponenten

im allgemeinen drei Schritte:

- arrange (vorbereiten)
- act (Interaktion)
- assert (Überprüfen von Konditionen)

## Test Renderer für React

- `react-testing-library` (Unterprojekt von _Testing Library_)
- `react-test-renderer` (vom React Team entwickelt)
- `Enzyme`

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

# React-Testing-Library

## Testing-Library

**Testing-Library**: Projekt zum Testen von UI Komponenten (u.a. React)

Fokus der Tests liegt auf Aspekten, die für den Endnutzer relevant sind (nicht so sehr auf der genauen DOM-Struktur oder Implementierungsdetails)

## Beispiel

```js
import { render } from '@testing-library/react';

it('renders learn react link', () => {
  const instance = render(<App />);
  const linkElement = instance.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## Elemente abfragen

Beispiele:

- `.getByText(...)`
- `.queryAllByText(...)`
- `.findByLabelText(...)`

## Elemente abfragen

- `.getBy*`: wirft Exception, wenn es keinen eindeutigen Match gibt
- `.getAllBy*`: wirft Exception, wenn es keine Matches gibt
- `.queryBy*`: gibt _null_ zurück, wenn es keine Matches gibt; wirft Exception, wenn es mehr als einen Match gibt
- `.queryAllBy*`: kann ein leeres Array zurückgeben
- `.findBy*`: asynchrone Version von `.getBy*` (wartet standardmäßig 1 Sekunde)
- `.findAllBy*`: asynchrone Version von `.getAllBy*`

siehe <https://testing-library.com/docs/dom-testing-library/api-queries> für eine Liste von Queries

## Assertions

extra Assertions:

- `.toHaveTextContent()`
- `.toBeInTheDocument()`
- ... (siehe <https://github.com/testing-library/jest-dom>)

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

## Testen von asynchronem Code

Testen mit echtem API:

```js
it('loads Chuck Norris joke from API', async () => {
  const instance = render(<ChuckNorrisJoke />);
  const jokeElement = await instance.findByTitle('joke');
  // joke should have at least 3 characters
  expect(jokeElement).toHaveTextContent(/.../);
});
```

`findByTitle` versucht wiederholt, ein Element abzufragen, bis es existiert

## Mocking des APIs mit Jest

```js
const data = {
  value: 'Chuck Norris counted to infinity. Twice.',
};
globalThis.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(data) });
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

Aktivieren erweiterter Assertions (siehe <https://github.com/testing-library/jest-dom>:

```js
import '@testing-library/jest-dom/extend-expect';
```

Aufräumen nach einem Test (Unmounting):

```js
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
```

## Ressourcen

- <https://react-testing-examples.com/>
- <https://thomlom.dev/test-react-testing-library/>

# React-Test-Renderer

## React-Test-Renderer - Installation

```bash
npm install --save-dev react-test-renderer
```

für TypeScript:

```bash
npm install --save-dev react-test-renderer @types/react-test-renderer
```

## React-Test-Renderer - Beispiel

```js
import TestRenderer from 'react-test-renderer';

it('renders a component without crashing', () => {
  const instance = TestRenderer.create(<MyComponent />)
    .root;
});
```

## React-Test-Renderer - mit Instanzen arbeiten

- `instance.find(All)` (erhält eine Testfunktion als Argument)
- `instance.find(All)ByType`
- `instance.find(All)ByProps`
- `instance.props`
- `instance.children`
- `instance.type`

## React-Test-Renderer - API

<https://reactjs.org/docs/test-renderer.html>

## Beispiel: Testen mit Jest und React-Test-Renderer

Testen einer Rating Komponente

## Test-Setup

```jsx
import React from 'react';
import TestRenderer from 'react-test-renderer';

import Rating from './Rating';
```

## Testen des Renderings

```jsx
describe('rendering', () => {
  it('renders 5 spans', () => {
    const instance = TestRenderer.create(
      <Rating stars={3} />
    ).root;
    expect(instance.findAllByType('span')).toHaveLength(5);
  });

  it('renders 3 active stars', () => {
    const instance = TestRenderer.create(
      <Rating stars={3} />
    ).root;
    expect(
      instance.findAllByProps({ className: 'star active' })
    ).toHaveLength(3);
  });
});
```

## Testen von Events

```jsx
describe('events', () => {
  it('reacts to click on the fourth star', () => {
    const mockFn = jest.fn();
    const instance = TestRenderer.create(
      <Rating stars={3} onStarsChange={mockFn} />
    ).root;
    const fourthStar = instance.findAllByType('span')[3];
    fourthStar.props.onClick();
    expect(mockFn).toBeCalledWith(4);
  });
});
```

## Testen von Fehlern

```jsx
describe('errors', () => {
  it('throws an error if the number of stars is 0', () => {
    const testFn = () => {
      TestRenderer.create(<Rating stars={0} />);
    };
    expect(testFn).toThrow('number of stars must be 1-5');
  });
});
```

# Enzyme

## Enzyme - Installation & Einrichtung

```bash
npm install --save-dev enzyme enzyme-adapter-react-16
```

neue Datei `src/setupTests.js`:

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Enzyme - Beispiele

```jsx
import { shallow, mount } from 'enzyme';

it('renders a component without crashing', () => {
  const wrapper = shallow(<MyComponent />);
});

it('renders a component tree without crashing', () => {
  const wrapper = mount(<MyComponent />);
});
```

## Enzyme - Cheatsheet

<https://devhints.io/enzyme>

## Beispiel: Testen mit Jest und Enzyme

Testen einer Rating-Komponente

## Beispiel: Testen einer Rating-Komponente

```jsx
import React from 'react';
import { shallow, mount } from 'enzyme';

import Rating from './Rating';
```

## Beispiel: Testen einer Rating-Komponente

```jsx
describe('rendering', () => {
  it('renders 5 Star components', () => {
    const wrapper = shallow(<Rating stars={5} />);
    expect(wrapper.find('Star')).toHaveLength(5);
  });

  it('renders 5 stars', () => {
    const wrapper = mount(<Rating stars={5} />);
    expect(wrapper.find('.star')).toHaveLength(5);
  });
});
```

## Beispiel: Testen einer Rating-Komponente

```jsx
describe('rendering', () => {
  it('renders 3 active stars', () => {
    const wrapper = mount(<Rating stars={3} />);
    expect(wrapper.find('.star')).toHaveLength(5);
    expect(
      wrapper.find('.star').get(2).props.className
    ).toEqual('star active');
    expect(
      wrapper.find('.star').get(3).props.className
    ).toEqual('star');
  });
});
```

## Beispiel: Testen einer Rating-Komponente

```jsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Rating stars={3} onStarsChange={mockFn} />
    );
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(mockFn.mock.calls[0][0]).toEqual(1);
  });
});
```

## Beispiel: Testen einer Rating-Komponente

Testen einer (hypothetischen) Rating-Komponente, die ihren eigenen internen State hat:

```jsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const wrapper = mount(<Rating />);
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(wrapper.instance.state.count).toEqual(1);
  });
});
```

## Beispiel: Testen einer Rating-Komponente

```jsx
describe('errors', () => {
  it('throws an error if the number of stars is 0', () => {
    const testFn = () => {
      const wrapper = shallow(<Rating stars={0} />);
    };
    expect(testFn).toThrow(
      'number of stars must be positive'
    );
  });
});
```

# Snapshot Tests

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

Snapshot Tests fallen unter Regressionstests.

## Snapshot Tests - Tests erstellen

mit react-testing-library

```jsx
it('matches the snapshot', () => {
  const instance = render(<Slideshow />);
  expect(instance.baseElement).toMatchSnapshot();
  const slide = instance.getByAltText('slide');
  expect(slide).toMatchSnapshot();
});
```

## Snapshot Tests aktualisieren

Haben wir das Verhalten einer Komponente geändert und danach ihr Verhalten überprüft, können wir Snapshot-Tests entsprechend aktualisieren:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```
