# Memoisation

## Memoisation

Das Rerendering einer Komponente löst üblicherweise das Rerendering _aller Unterkomponenten_ aus

\- dies kann optimiert werden!

## Memoisation

Wenn nur jene Unterkomponenten neu gerendert werden sollen, deren Props oder State sich geändert haben:

Unterkomponenten erben von `PureComponent` statt `Component`

## Memoisation

```js
import { PureComponent } from 'react';

class Rating extends PureComponent {
  //...
}

export default Rating;
```
