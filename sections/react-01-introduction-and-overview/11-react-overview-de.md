# React Überblick

## React

_React_: JavaScript-Library zum Erstellen interaktiver Benutzeroberflächen im Browser

## Grundlagen moderner JavaScript UI Libraries

- State-basiert / deklarativ
- Komponenten-Struktur

## State-basiert / deklarativ

- Datenmodell, das den gesamten Anwendungszustand (State) abbildet
- User-Interaktionen ändern den State, die Anzeige wird automatisch aktualisiert

## State-basiert / deklarativ

Beispiel: vollständiger State einer Todo-Anwendung

```json
{
  "newTitleInput": "learn Rea",
  "todos": [
    { "id": 1, "title": "laundry", "completed": true },
    { "id": 4, "title": "shopping", "completed": true },
    { "id": 7, "title": "gardening", "completed": false }
  ]
}
```

## State-basiert / deklarativ

mögliches Erscheinungsbild einer Todo-Anwendung:

<img src="assets/todolist.png" alt="screenshot of a todo list application" style="height: 400px" />

## Komponenten-Struktur

- "eigene" HTML-Tags
- Kommunikation zwischen Eltern- und Kindelement via _Props_ und _Events_

## Komponenten-Struktur

Beispiel: Komponentenstruktur einer Todo-Anwendung

<img src="assets/todolist-component-structure.png" alt="screenshot of a todo list application with components outlined in red" style="height: 400px" />

## Beispiel: Komponenten und State in einer Todo-Anwendung

Beispiel: Komponenten, State und Props in einer Todo-Anwendung

<img src="assets/todo-components-state-props.svg" />

## Was macht React besonders?

- JavaScript-basierte Template-Syntax: JSX
- Explizite Änderung des Anwendungszustands mittels Settern
- State-Objekte sind unveränderlich (immutable)

## JSX

einfaches Codebeispiel mit State und JSX:

```js
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>current count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>
          increment
        </button>
      </div>
    </div>
  );
}
```
