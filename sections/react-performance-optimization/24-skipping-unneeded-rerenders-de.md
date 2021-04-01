# Vermeiden unnötiger Rerenderings

## Vermeiden unnötiger Rerenderings

Bemerkung:

Wenn das Rendering einer Komponente das gleiche ist wie zuvor, geschieht das Re-Rendering im Allgemeinen schon schnell, da React nur des virtuelle DOM neu berechnet (und das "echte" DOM nicht ändert)

Oft ist keine weitere Optimierung notwendig

## Vermeiden unnötiger Rerenderings

Im Allgemeinen muss eine Komponente nur neu gerendert werden, wenn sich entweder props oder state tatsächlich ändern

## Vermeiden unnötiger Rerenderings

was React schon für uns erledigt:

Hooks (state, reducer, context) lösen kein Re-Rendering aus, wenn sich ihr Wert nicht geändert hat

was wir beitragen können:

wenn eine Elternkomponente neu gerendert wird, die Props der Kindkomponente sich aber nicht geändert haben, soll die Kindkomponente nicht neu gerendert werden (Memoisation)

## Vermeiden unnötiger Rerenderings

Demo: Komponente rendert sich nur, wenn ihr State sich ändert

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

## Vermeiden unnötiger Rerenderings

Wenn nur jene Unterkomponenten neu gerendert werden sollen, deren props sich geändert haben:

- für Funktionskomponenten: verwenden der `memo`-Funktion
- für Klassenkomponenten: Erben von `PureComponent` statt `Component`

## Vermeiden unnötiger Rerenderings

optimierte Funktionskomponente:

```jsx
import { memo } from 'react';

function Rating(props) {
  // ...
}

export default memo(Rating);
```

optimierte Klassenkomponente:

```jsx
import { PureComponent } from 'react';

class Rating extends PureComponent {
  // ...
}
```

## Vermeiden unnötiger Rerenderings

Die `Rating`-Komponente wird nicht neu gerendert, wenn ihre Props die gleichen sind wie zuvor:

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
```

## Vermeiden unnötiger Rerenderings

[Demo: Sierpinski-Teppich mit und ohne memo](https://codesandbox.io/s/memo-sierpinski-j5dv9)

## Vermeiden unnötiger Rerenderings

Siehe auch:

- [reactjs.org - Optimizing Performance - Avoid Reconciliation](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)
- [Kent C. Dodds - Fix the slow render before you fix the re-render](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)
