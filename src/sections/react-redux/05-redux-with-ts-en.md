# Redux with TypeScript

---

## installing type definitions for react-redux

```bash
npm install @types/react-redux
```

---

## Redux devtools

```ts
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;
```

---

## React-Redux

```ts
import { Action, Dispatch } from 'redux';

const mapDispatchToProps = (
  dispatch: Dispatch<Action>
) => ({
  decrement: () => {
    dispatch({ type: 'DECREMENT' });
  },
  increment: () => {
    dispatch({ type: 'INCREMENT' });
  },
});
```
