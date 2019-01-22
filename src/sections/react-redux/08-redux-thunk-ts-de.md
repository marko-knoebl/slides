# Redux-Thunk mit TypeScript

---

## Redux-Thunk

Bei Thunk müssen wir immer die gesamte Signatur des dispatchs angeben

```ts
const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, void, IAction>
) => {...};
```

---

## Redux-Thunk

```ts
const myAction = () => (
  dispatch: ThunkDispatch<IState, void, IAction>
) => {...};
```
