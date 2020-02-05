# Memoization

## Memoization

memoized class components:

by inheriting from `PureComponent` instead of `Component` (memoized _props_ and _state_)

## Memoization

```js
import { PureComponent } from 'react';

class Rating extends PureComponent {...}

export default Rating;
```
