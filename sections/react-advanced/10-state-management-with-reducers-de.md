# State Management mit Reducern

## State Management

In komplexeren Anwendungen oder Komponenten macht es Sinn, den Anwendungszustand (model) von der Ansicht (view) zu trennen.

Oft wird der gesamte Anwendungszustand durch ein Datenmodell repräsentiert. Jede Änderung am Anwendungszustand läuft über das Datenmodell.

## State Management Tools

- reducer Hook (in React beinhaltet, sehr ähnlich zu Redux)
- Redux (basiert auf Reducern, oft mit React verwendet)
- MobX (oft mit React verwendet, einfacher als Reducer)
- ngrx (mit Angular verwendet)
- vuex (mit Vue.js verwendet)

## State Management mit Actions und Reducern

Konzept von _Redux_ und Reacts _Reducer Hook_:

Ein Ereignis in der Anwendung löst eine sogenannte _Action_ aus.

Basierend auf dieser Action wird ein aktueller _State_ mittels einer _Reducer_-Funktion in einen geänderten neuen _State_ übergeführt.

## Reducer Diagramm

<img src="assets/redux-flow.svg" type="text/svg" style="width: 100%">

## Beispiel: Todos State Management

Wir verwalten ein Array von Todos mit Hilfe eines Reducers. Zu Beginn setzen wir zwei mögliche Actions um:

- Hinzufügen eines Todos
- Entfernen eines Todos

## Beispiel: Todos State Management

Der State könnte folgendermaßen aussehen:

```json
[
  {
    "id": 1,
    "title": "groceries",
    "completed": false
  },
  {
    "id": 2,
    "title": "gardening",
    "completed": false
  }
]
```

## Beispiel: Todos State Management

_Actions_ werden von JavaScript Objekten repräsentiert; Actions haben immer eine _type_ Property

```json
{
  "type": "ADD_TODO",
  "title": "learn React"
}
```

```json
{
  "type": "DELETE_TODO",
  "id": 1
}
```

## Beispiel: Todos State Management

Ein _Reducer_ ist eine Funktion.

Der Reducer erhält den alten State und eine Action, die eine Änderung am State beschreibt.

Der Reducer gibt den neuen Zustand zurück. Wichtig: Ein Reducer ändert das alte state-Objekt nicht ab, sondern erstellt ein neues (Reducer sind reine Funktionen)

## Beispiel: Todos State Management

```js
const todosReducer = (oldState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...oldState,
        {
          title: action.title,
          completed: false,
          id: generateId(), // dummy function
        },
      ];
    case 'DELETE_TODO':
      return oldState.filter(todo => todo.id !== action.id);
    default:
      throw new Error('unknown action type');
  }
};
```

## Beispiel: Todos State Management

Verwendung des Reducers (Wir erinnern uns: Der Reducer bekommt den alten State und eine Action übergeben; er gibt den neuen State zurück)

```js
const state1 = [
  { id: 1, title: 'groceries', completed: false },
];
const state2 = todosReducer(state1, {
  type: 'ADD_TODO',
  title: 'gardening',
});
const state3 = todosReducer(state2, {
  type: 'DELETE_TODO',
  id: 1,
});
console.log(state3);
// [{id: 2, title: "gardening", completed: false}]
```
