# Memoisierung von Komponentenrenderings

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

## Memoisierung von Komponentenrenderings

Wenn nur jene Unterkomponenten neu gerendert werden sollen, deren props sich geändert haben:

- für Funktionskomponenten: verwenden der `memo`-Funktion
- für Klassenkomponenten: Erben von `PureComponent` statt `Component`

## Memoisierung von Komponentenrenderings

memoisierte Funktionskomponente:

```jsx
import { memo } from 'react';

function Rating(props) {
  // ...
}

export default memo(Rating);
```

memoisierte Klassenkomponenten:

```jsx
import { PureComponent } from 'react';

class Rating extends PureComponent {
  // ...
}
```

## Memoisierung von Komponentenrenderings

Die `Rating`-Komponente wird nicht neu gerendert, wenn ihre Props die gleichen sind wie zuvor:

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
```
