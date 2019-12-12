# Actions im Detail

## Actions

- Beschreiben eine Zustandsänderung
- Sind js-Objekte mit einer _type_-Property
- Der _type_ wurde usrsprünglich meist groß geschrieben (z.B. `ADD_TODO`), heute sind auch andere Schreibweisen üblich (z.B. `addTodo`)
- Actions werden oft nach dem _FSA_-Standard definiert, der eine `payload`-Property definiert, sowie `error` und `meta`

## Actions - Beispiele

```js
const action = {
  type: 'addTodo',
  title: 'Build my first Redux app',
};
```

```js
const action = {
  type: 'addTodo',
  payload: {
    title: 'Build my first Redux app',
  },
};
```

## Actions - Beispiele

```js
const action = {
  type: 'toggleTodo',
  id: 2,
};
```

```js
const action = {
  type: 'toggleTodo',
  payload: {
    id: 2,
  },
};
```
