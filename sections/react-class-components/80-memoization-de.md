# Memoisation

## Memoisation

Memoisierte Klassenkomponenten:

Durch Erben von `PureComponent` statt `Component` (memoisierte _props_ und _state_)

## Memoisation

```js
import { PureComponent } from 'react';

class Rating extends PureComponent {...}

export default Rating;
```
