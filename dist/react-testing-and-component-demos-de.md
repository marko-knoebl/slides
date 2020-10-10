# React: Testen und Komponentendemos

## Themen

- Komponentendemos mit _Storybook_
- Testen in JavaScript
- Libraries für das Testen von React-Komponenten
  - react-testing-library
  - react-test-renderer
  - enzyme
- Snapshot-Tests

## Ressource

[Präsentation zum Thema Testen von React / JavaScript von Gabriel Vasile](https://docs.google.com/presentation/d/1ljMA8glel6hCopJ9Ib221A-pZ6brnibuwpzRLf1A3OM)

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

## Stories

einfaches Beispiel: _Rating.stories.js_

```jsx
import React from 'react';
import Rating from './Rating';

export default { title: 'Rating', component: Rating };

export const OneStar = () => <Rating stars={1} />;
export const FiveStars = () => <Rating stars={5} />;
```

## Stories

Beispiel mit Template, props (controls) und events (actions)

```jsx
import React from 'react';
import Rating from './Rating';

export default { title: 'Rating', component: Rating };

const RatingStoryTemplate = (args) => <Rating {...args} />;

export const OneStar = RatingStoryTemplate.bind({});
OneStar.args = { stars: 1 };
export const FiveStars = RatingStoryTemplate.bind({});
FiveStars.args = { stars: 5 };
```

## Stories

Beispiel mit TypeScript:

```ts
import { Story } from '@storybook/react/types-6-0';
```

```tsx
const RatingStoryTemplate: Story<
  Parameters<typeof Rating>[0]
> = (args) => <Rating {...args} />;
```

# Testen

## Automatisiertes Testen in JavaScript

Manche Funktionen in React - z.B. Reducer - sind ganz "normale" JavaScript-Funktionen und können mit standard-Testwerkzeugen getestet werden

Siehe die Präsentation [JavaScript Testing](./javascript-testing-de.html) für einen Einstieg (Bemerkung: Die Library Jest ist in einem create-react-app Projekt schon eingerichtet)

## Testen von React-Komponenten

was kann getestet werden:

- Rendering
- Reaktion auf User-Aktionen

## Testen von React-Komponenten

im allgemeinen drei Schritte:

- arrange (vorbereiten)
- act (Interaktion)
- assert (Überprüfen von Konditionen)

## Test Renderer für React

- **react-testing-library**
- _react-test-renderer_ (vom React Team entwickelt)
- _Enzyme_

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

# Puppeteer

## Testen einer React-Anwendung mit Puppeteer

Starten der React-Anwendung im Hintergrund (auf Port 3000), damit Puppeteer auf sie zugreifen kann:

```bash
npm run start
```

Test, der Puppeteer nutzt:

```js
test("displays page with title 'React App'", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  const pageTitle = await page.title();
  expect(pageTitle).toEqual('React App');
});
```

# React-Testing-Library Grundlagen

## React-Testing-Library

**React-Testing-Library**: Tool zum Testen von UI Komponenten (bedeutsamstes Unterprojekt der _Testing-Library_)

Fokus der Tests liegt auf Aspekten, die für den Endnutzer relevant sind (nicht so sehr auf der genauen DOM-Struktur oder Implementierungsdetails)

## Beispiel

```js
import { render, screen } from '@testing-library/react';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', {
    name: /learn react/i,
  });
  expect(linkElement).toBeInTheDocument();
});
```

## Elemente abfragen

Abfrage mittels _ARIA role_ und _accessible name_:

```js
screen.getByRole('button', { name: 'delete' });
screen.getByRole('textbox', { name: /new title/i });
screen.getAllByRole('listitem');
```

Möglichkeiten für den _accessible name_:

- Textinhalt
- Alt-Text eines Bildes
- Titel eines Links / Bildes
- Label-Text eines Inputs

## Elemente abfragen

Beispiele für _Role_ (implizit oder explizit gesetzt):

- _article_
- _button_
- _checkbox_
- _form_
- _heading_
- _img_
- _link_
- _list_
- _listitem_
- _menuitem_
- _presentation_
- _textbox_
- ... (see [role definitions from W3C](https://www.w3.org/TR/2014/REC-wai-aria-20140320/roles#role_definitions))

## Unterelemente abfragen

```js
import { screen, within } from '@testing-library/react';

const todoList = screen.getByRole('list');
const thirdTodo = within(todoList).getAllByRole(
  'listitem'
)[2];
const deleteButton = within(thirdListItem).getByRole(
  'button'
);
```

## Assertions

erweiterte Assertions (bei _create-react-app_ vorkonfiguriert):

- `.toHaveTextContent()`
- `.toHaveAttribute()`
- `.toBeInTheDocument()`
- ... (siehe <https://github.com/testing-library/jest-dom>)

## Testen des Renderings

_Slideshow_-Komponente:

```jsx
it('renders a slideshow starting at image 0', () => {
  render(<Slideshow />);
  const slide = screen.getByRole('img');
  expect(slide).toHaveAttribute(
    'src',
    'https://picsum.photos/200?image=0'
  );
});
```

## Testen des Renderings

_TodoItem_-Komponente:

```jsx
it('renders a list item with a given title text', () => {
  const title = 'title-text';
  render(<TodoItem title={title} completed={false} />);
  const todoElement = screen.getByRole('listitem');
  expect(todoElement).toHaveTextContent(new RegExp(title));
});
```

## Testen von State-Änderungen

Slideshow-Komponente:

```jsx
import { fireEvent } from '@testing-library/react';

it('switches to the next slide', () => {
  render(<Slideshow />);
  fireEvent.click(
    screen.getByRole('button', { name: 'next' })
  );
  expect(screen.getByRole('img')).toHaveAttribute(
    'src',
    'https://picsum.photos/200?image=1'
  );
});
```

## Testen von Events

_TodoItem_-Komponente:

```jsx
it('triggers an event when the todo is clicked', () => {
  const mockFn = jest.fn();
  render(
    <TodoItem
      title="title-text"
      completed={false}
      onToggle={mockFn}
    />
  );
  fireEvent.click(screen.getByRole('listitem'));
  expect(mockFn).toHaveBeenCalled();
});
```

## Ressourcen

- [How to use React Testing Library Tutorial, Robin Wieruch](https://www.robinwieruch.de/react-testing-library)
- [react-testing-examples.com](https://react-testing-examples.com/)
- [JavaScript Testing Masterclass, Gabriel Vasile](https://docs.google.com/presentation/d/1ljMA8glel6hCopJ9Ib221A-pZ6brnibuwpzRLf1A3OM/)

# React testing library - Intermediate

## Andere Abfragen

- `getByText`: z.B. für _divs_, _spans_
- `getByLabelText`: findet Input nach Label
- `getByAltText`: z.B. für Bilder
- `getByTitle`: z.B. für Bilder / Links
- ... (siehe <https://testing-library.com/docs/dom-testing-library/api-queries#queries>)

## getByText

sinnvoll für _divs_ / _spans_ (keine _role_ vordefiniert)

Bemerkung: kann eventuell durch `getByRole` ersetzt werden, wenn die Rolle explizit vergeben wird (z.B. `role="presentation"`)

## Testen von asynchronem Code und APIs

Wir verwenden `findByRole` anstatt `getByRole`, um darauf zu warten, dass ein Element erscheint

`findByRole` sucht wiederholt nach einem Element bis es existiert (standardmäßig alle 0.05 Sekunden für maximal 1 Sekunde)

## Testen von asynchronem Code

Aufgabe: Testen einer `ChuckNorrisJoke`-Komponente, die ein API abfragt:

```js
const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  }, []);
  if (!joke) {
    return <div role="status">loading...</div>;
  }
  return <article>{joke}</article>;
};
```

## Testen von asynchronem Code

Testen mit echtem API:

```js
it('loads Chuck Norris joke from API', async () => {
  render(<ChuckNorrisJoke />);
  const jokeElement = await screen.findByRole('article');
  // joke should have at least 3 characters
  expect(jokeElement).toHaveTextContent(/.../);
});
```

## Testen von asynchronem Code

Testen mit einem Mock-API:

```js
const data = {
  value: 'Chuck Norris counted to infinity. Twice.',
};
globalThis.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(data) });
```

## Testen von Fehlern

_TodoItem_-Komponente:

```jsx
it('throws an error if the title is missing', () => {
  const testFn = () => {
    render(<TodoItem />);
  };
  expect(testFn).toThrow(
    'property "title" must be present'
  );
});
```

## Testen des Nicht-Vorhandenseiens eines Elements

```js
expect(() => getByRole('listitem')).toThrow();
```

oder mittels _queryBy..._:

```js
expect(queryByRole('listitem')).toEqual(null);
```

_queryBy..._ gibt _null_ zurück statt eine Exception auszulösen

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

Snapshots sind einfache Textrepräsentationen von gerenderten Inhalten

Snapshot Tests fallen unter Regressionstests.

## Snapshot Tests

Snapshots werden üblicherweise als Textdateien z.B. unter `__snapshots__/Counter.test.js.snap` gespeichert

```
exports[`matches the snapshot 1`] = `
<div>
  <div>
    count:
    0
    <button>
      +
    </button>
  </div>
</div>
`;
```

## Snapshot Tests erstellen

mit react-testing-library:

```jsx
it('matches the snapshot', () => {
  render(
    <TodoItem
      title="foo"
      completed={false}
      onToggle={() => {}}
      onDelete={() => {}}
    />
  );
  const li = screen.getByRole('listitem');
  expect(li).toMatchSnapshot();
});
```

## Snapshot Tests aktualisieren

Haben wir das Verhalten einer Komponente geändert und danach ihr Verhalten überprüft, können wir Snapshot-Tests entsprechend aktualisieren:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```
