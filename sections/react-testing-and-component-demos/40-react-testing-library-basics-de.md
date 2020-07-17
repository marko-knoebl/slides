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

Abfrage nach _ARIA role_ und _accessible name_:

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
import { fireEvent } from 'react-testing-library';

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
