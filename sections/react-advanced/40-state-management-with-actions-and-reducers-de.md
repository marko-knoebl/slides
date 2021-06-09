# State Management mit Reducern

<!-- NOTE: other sections link to this section - take care when reordering -->

## State Management

In komplexeren Anwendungen oder Komponenten macht es Sinn, den Anwendungszustand (model) von der Ansicht (view) zu trennen.

Oft wird der gesamte Anwendungszustand durch ein Datenmodell repräsentiert. Jede Änderung am Anwendungszustand läuft über das Datenmodell.

## State Management Tools

- reducer Hook (in React beinhaltet, sehr ähnlich zu Redux)
- Redux (basiert auf Reducern, oft mit React verwendet)
- MobX (oft mit React verwendet, einfacher als Reducer)
- recoil (basiert auf React Hooks, 2020 von facebook veröffentlicht)
- ngrx (mit Angular verwendet)
- vuex (mit Vue.js verwendet)

## State Management Tools

<figure>
  <img src="assets/redux-devtools-airbnb.png" style="width: 100%" alt="Redux devtools showing the state of the airbnb website">
  <figcaption>Redux Devtools, die den komplexen State der airbnb-Website anzeigen</figcaption>
</figure>

## State Management mit Actions

Beim Reducer Hook, Redux, ngrx und vuex wird jede State-Änderung durch eine _Action_ ausgelöst, die durch ein JavaScript-Objekt repräsentiert wird

<small>Anmerkung: vuex verwendet den Begriff _Mutation_</small>

## State Management mit Actions

In Redux / Reducer Hook:

- Actions werden durch JavaScript-Objekte repräsentiert
- Actions haben immer eine _type_-Property
- Actions haben meist auch eine _payload_-Property

## State Management mit Actions

Beispiele für Actions:

```json
{
  "type": "addTodo",
  "payload": "learn React"
}
```

```json
{
  "type": "deleteTodo",
  "payload": 1
}
```

```json
{
  "type": "deleteCompletedTodos"
}
```

## State Management mit Reducern

Konzept von _Redux_ und Reacts _Reducer Hook_:

- eine Stateänderung erfolgt über eine Reducer-Funktion
- die Reducer-Funktion erhält den aktuellen State und eine Action
- die Reducer-Funktion gibt den neuen State zurück (ohne den alten State zu verändern)

## Reducer Diagramm

<img src="assets/redux-flow.svg" />

## Beispiel: Todos State Management

Manuelle Verwendung eines Reducers:

```js
const state1 = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'taxes', completed: true },
];
const actionA = { type: 'addTodo', payload: 'gardening' };
const state2 = todosReducer(state1, actionA);
const actionB = { type: 'deleteTodo', payload: 1 };
const state3 = todosReducer(state2, actionB);
console.log(state3);
/* [{ id: 2, title: 'taxes', completed: true },
    { id: 3, title: 'gardening', completed: false },] */
```

## Beispiel: Todos State Management

Implementierung eines Reducers:

```js
const todosReducer = (oldState, action) => {
  switch (action.type) {
    case 'addTodo':
      return [
        ...oldState,
        {
          title: action.payload,
          completed: false,
          id: Math.max(0, ...oldState.map((t) => t.id)) + 1,
        },
      ];
    case 'deleteTodo':
      return oldState.filter(
        (todo) => todo.id !== action.payload
      );
    default:
      throw new Error('unknown action type');
  }
};
```

## Beispiel: Todos State Management

Verwendung mit TypeScript:

```ts
type TodosState = Array<Todo>;

type TodosAction =
  | { type: 'addTodo'; payload: string }
  | { type: 'deleteTodo'; payload: number };

const todosReducer = (
  state: TodosState,
  action: TodosAction
): TodosState => {
  // ...
};
```

## Reducer kombinieren

Reducer können einfach kombiniert / aufgesplittet werden um komplexen / verschachtelten State zu verwalten

Beispiel für State:

```json
{
  "todoData": {
    "status": "loading",
    "todos": []
  },
  "uiData": {
    "newTitle": "re",
    "filterText": ""
  }
}
```

## Reducer kombinieren

Reducer-Implementierung:

```js
const rootReducer = (rootState, action) => ({
  todoData: todoDataReducer(rootState.todoData, action),
  uiData: uiDataReducer(rootState.uiData, action),
});

const uiDataReducer = (uiData, action) => ({
  newTitle: newTitleReducer(uiData.newTitle, action),
  filterText: filterTextReducer(uiData.filterText, action),
});

const newTitleReducer = (newTitle, action) => {
  if (action.type === 'setNewTitle') {
    return action.payload;
  } else if (action.type === 'addTodo') {
    return '';
  } else {
    return newTitle;
  }
};
```

## Reducer kombinieren

Bei kombinierten Reducern verwaltet ein einzelner Reducer nur einen Teil des States; aber jeder Reducer erhält jede Action und kann darauf reagieren
