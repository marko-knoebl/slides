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
screen.getByRole('button', { name: /delete/i });
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
- ... (siehe [role Definitionen von W3C](https://www.w3.org/TR/wai-aria-1.2/#role_definitions))

## Unterelemente abfragen

```js
import { screen, within } from '@testing-library/react';

const todoList = screen.getByRole('list');
const firstTodoItem = within(todoList).getAllByRole(
  'listitem'
)[0];
const firstTodoItemDeleteButton = within(
  firstTodoItem
).getByRole('button', { name: /delete/i });
```

## Assertions

erweiterte Assertions (bei _create-react-app_ vorkonfiguriert):

- `.toHaveTextContent()`
- `.toHaveAttribute()`
- `.toHaveClass()`
- `.toBeInTheDocument()`
- ... (siehe <https://github.com/testing-library/jest-dom>)

## Benutzerinteraktionen simulieren

```js
import userEvent from '@testing-library/user-event';

userEvent.type(
  screen.getByRole('input', { name: /title/i }),
  'write tests'
);
userEvent.click(
  screen.getByRole('button', { name: /add todo/i })
);
```
