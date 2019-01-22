# Redux-Thunk with TypeScript

---

## Redux-Thunk with TypeScript

With Thunk we always have to give the entire signature of the dispatch

```ts
const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, void, Action>
) => {...};
```

---

## Redux-Thunk with TypeScript

```ts
const myAction = () => (
  dispatch: ThunkDispatch<IState, void, IAction>
) => {...};
```
