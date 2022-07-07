# State

## State in Klassenkomponenten

In Klassenkomponenten repräsentiert `this.state` den aktuellen state

`this.state` ist immer ein JavaScript-Objekt mit verschiedenen Einträgen (Properties)

Zustandsänderungen erfolgen über `this.setState()`

## Struktur von this.state

_this.state_ ist ein JavaScript-Objekt:

```json
{
  "todos": [],
  "loadingStatus": "idle"
}
```

## Typendeklaration

```ts
type TodoAppProps = {};
type TodoAppState = {
  todo: Array<Todo>;
  loadingStatus: string;
};

class TodoApp extends Component<
  TodoAppProps,
  TodoAppState
> {
  // ...
}
```

## Initialisierung des States

Der State muss im Konstruktor initialisiert werden

Der Konstruktor erhält auch die Props der Komponente als Argument

## Initialisierung des States

```ts
constructor(props: TodoAppProps) {
  super(props);
  this.state = {
    todos: [],
    loadingStatus: "idle",
  }
}
```

In JavaScript _muss_ der Konstruktor der Elternklasse (`Component`) im Konstruktor aufgerufen werden (geschieht via `super()`)

## Änderung von State

```js
this.setState({ loadingStatus: 'loading' });
```

setState überschreibt alle angegebenen Einträge im state-Objekt und lässt den Rest unverändert
