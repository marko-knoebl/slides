# Actions im Detail

## Actions

- Beschreiben eine Zustandsänderung
- Sind js-Objekte mit einer _type_-Property
- Der _type_ wurde usrsprünglich meist groß geschrieben (z.B. `ADD_TODO`), heute sind auch andere Schreibweisen üblich (z.B. `addTodo`)
- Oft werden in den Typenbezeichnern Namespaces verwendet, z.B. `"todoData/addTodo"` oder `"ui/showAddTodoDialog"`
- Actions werden oft nach dem _FSA_-Standard definiert, der eine `payload`-Property definiert, sowie `error` und `meta`

## Actions - Beispiele

```js
const action = {
  type: 'todoData/todos/addTodo',
  title: 'Build my first Redux app',
};
```

```js
const action = {
  type: 'todoData/todos/toggleTodo',
  payload: 2,
};
```
