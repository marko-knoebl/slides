# Komponenten und Hooks

## Komponenten und Hooks

Erstellen / Strukturieren des UIs / Views: via **Komponenten**

Erstellen / Strukturieren der Logik / des Modells hinter dem UI: via **Hooks**

## Hooks

Hooks = besondere Funktionen, die in einer Komponentenfunktion aufgerufen werden können

Beispiele: `useState`, `useEffect`, `useContext`

## Regeln für Hooks

in einer Komponentendefinition:  
Hooks müssen bei jedem Rendering in der gleichen Reihenfolge aufgerufen werden

(React verwendet die Reihenfolge, um den "gleichen" Hook-Aufruf über mehrere Renderings zu verfolgen)

[Rules of Hooks auf reactjs.org](https://reactjs.org/docs/hooks-rules.html)

## Komponenten und Hooks

grundlegende HTML-Elemente:

- `<div>`
- `<button>`
- `<input>`
- ...

können verwendet werden, um eigene Komponenten zu erstellen:

- `<Button>`
- `<Calendar>`
- `<Sidebar>`
- ...

## Komponenten und Hooks

Eingebaute Hooks:

- `useState`
- `useEffect` (um Side-Effects auszulösen, z.B. API-Abfragen)
- `useContext` (um State über einen Komponentenbaum hinweg zu teilen)
- ...

können verwendet werden, um eigene Hooks zu erstellen:

- `useForm` (zum Verwalten von Formularen)
- `useQuery` (zum Abfragen von APIs)
- ...

## Komponenten und Hooks

Beispiele für Komponenten und Hooks aus Libraries:

- _MUI_ (Material-UI): `<Button>`, `<Alert>`, ...
- _React Router_: `<Route>`, `<Link>`, `useParams`, `useNavigate`
- _react-query_: `useQuery`
- _react-hook-form_: `useForm`

## Komponenten und Hooks

Listen verfügbarer Komponenten und Hooks:

[awesome-react-components](https://github.com/brillout/awesome-react-components): Liste von Komponenten, ...

[awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks): liste von Hooks

## Modularität

Modularität des UI: mittels **eigener Komponenten**

Modularität der Logik / des Modells hinter dem UI: mittels eigener Hooks

## Modularität

warum Modularität?

- Strukturierung von Code
- Wiederverwenden von Code / Funktionalität

## Modularität mittels Komponenten und Hooks

Beispiele für Komponenten zur Wiederverwendung (innerhalb eines Projektes oder über Projekte hinweg):

- `Button` (zum Styling)
- `Calendar`
- `Sidebar`

## Modularität mittels Komponenten und Hooks

Beispiel für Komponenten zur Strukturierung von Code:

- `TodoApp`
- `TodoList`
- `TodoItem`

## Modularität mittels Komponenten und Hooks

Beispiele für Hooks zur Wiederverwendung (innerhalb eines Projektes oder über Projekte hinweg):

- `useState`
- `useQuery`
- `useMedia`

## Modularität mittels Komponenten und Hooks

Beispiele für Hooks zur Strukturierung von Code:

in einer Todo-Anwendung: `useTodos`

in einem Online-Shop: `useProducts`, `useCart`

## Modularität mittels Komponenten und Hooks

Beispiel: eigene Komponenten und eigener Hook für eine Todo-Anwendung:

```jsx
function TodoApp() {
  const todoData = useTodos();
  return (
    <div>
      <Header />
      <AddTodo onAdd={todoData.addTodo} />
      <TodoList
        todos={todoData.todos}
        onDelete={todoData.deleteTodo}
        onChangeCompleted={todoData.setCompleted}
      />
      <Statistics todos={todoData.todos} />
    </div>
  );
}
```
