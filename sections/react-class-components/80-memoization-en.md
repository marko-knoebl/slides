# Memoization

## Memoization

the rerendering of a component will usually cause the rerendering of _all subcomponents_

\- this can be optimized!

## Memoization

If only those subcomponents whose props or state have changed should rerender:

Subcomponents should inherit from `PureComponent` instead of `Component`

## Memoization

```js
import { PureComponent } from 'react';

class Rating extends PureComponent {
  //...
}

export default Rating;
```
