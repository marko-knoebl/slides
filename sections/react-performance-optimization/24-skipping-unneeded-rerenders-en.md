# Skipping unneeded rerenders

## Skipping unneeded rerenders

Note:

If the rendering of a component is the same as before, re-rendering _will generally already be fast_ as React will only recreate the virtual DOM (and will not touch the real DOM)

Often, no further optimization is necessary

## Skipping unneeded rerenders

Generally a component only needs to be rerendered when its props or state actually change

## Skipping unneeded rerenders

what React already does for us:

hooks (state, reducer, context) will _not_ trigger a re-rendering if their value has not changed

what we can add:

if a parent component rerenders, but the child's props haven't changed, don't rerender the child component (memoization)

## Skipping unneeded rerenders

demo: component only rerenders if its state changes

```jsx
function Coin() {
  const [coin, setCoin] = useState('heads');
  const throwCoin = () => {
    setCoin(Math.random() > 0.5 ? 'heads' : 'tails');
  };
  return (
    <div>
      {coin}
      <button onClick={throwCoin}>throw</button>
      <div>last rendering: {new Date().toISOString()}</div>
    </div>
  );
}
```

## Skipping unneeded rerenders

if only those subcomponents whose props have changed should rerender:

- for function components: use React's `memo` function
- for class components: inherit from `PureComponent` instead of `Component`

## Skipping unneeded rerenders

optimized function component:

```jsx
import { memo } from 'react';

function Rating(props) {
  // ...
}

export default memo(Rating);
```

optimized class component:

```jsx
import { PureComponent } from 'react';

class Rating extends PureComponent {
  // ...
}
```

## Skipping unneeded rerenders

the `Rating` component will not be rerendered if its props are the same as before:

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
```

## Skipping unneeded rerenders

[Demo: Sierpinski carpet with and without memo](https://codesandbox.io/s/memo-sierpinski-j5dv9)

## Skipping unneeded rerenders

See also:

- [reactjs.org - Optimizing Performance - Avoid Reconciliation](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)
- [Kent C. Dodds - Fix the slow render before you fix the re-render](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)
