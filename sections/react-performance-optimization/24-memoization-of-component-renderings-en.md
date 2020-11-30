# Memoization of component renderings

## Preventing unneeded component rerenderings

Generally a component only needs to be rerendered when its props or state actually change

## Preventing unneeded component rerenderings

what React already does for us:

hooks (state, reducer, context) will _not_ trigger a re-rendering if their value has not changed

what we can add:

if a parent component rerenders, but the child's props haven't changed, don't rerender the child component (memoization)

## Preventing unneeded component rerenderings

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

## Memoization of component renderings

if only those subcomponents whose props have changed should rerender:

- for function components: use React's `memo` function
- for class components: inherit from `PureComponent` instead of `Component`

## Memoization of component renderings

memoized function component:

```jsx
import { memo } from 'react';

function Rating(props) {
  // ...
}

export default memo(Rating);
```

memoized class component:

```jsx
import { PureComponent } from 'react';

class Rating extends PureComponent {
  // ...
}
```

## Memoization of component renderings

the `Rating` component will not be rerendered if its props are the same as before:

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
```
