# JSX: if / else

## if / else

Möglichkeiten, um if / else in JSX zu verwenden:

- Verwenden des ternären Operators (`?`) im Template
- Vorbereiten von Werten mittels if / else _bevor zu XML gewechselt wird_
- if / else, welches mehrere return-Statements beinhaltet - mit verschiedenen XML-Inhalten

## if / else

inline-Bedingung:

```jsx
<div>
  <h1>Foo Game</h1>
  {gameActive ? (
    <div>score: {score}</div>
  ) : (
    <div>Game over. Final score: {score}</div>
  )}
</div>
```

## if / else

if / else Statement vor dem Template:

```jsx
let statusMessage;
if (gameActive) {
  statusMessage = <div>score: {score}</div>;
} else {
  statusMessage = (
    <div>Game over. Final score: {score}</div>
  );
}

return (
  <div>
    <h1>FooGame</h1>
    {statusMessage}
  </div>
);
```

## if / else

mehrere return-Statements:

```jsx
if (gameActive) {
  return (
    <div>
      <h1>FooGame</h1>
      <div>score: {score}</div>
    </div>
  );
} else {
  return (
    <div>
      <h1>FooGame</h1>
      <div>Game over. Final score: {score}</div>
    </div>
  );
}
```

## if

if - ohne else:

```jsx
<div>{isError ? <div>{errorMessage}</div> : null}</div>
```

## if

möglichere kürzere Version:

```jsx
<div>{isError && <div>{errorMessage}</div>}</div>
```

Der Operator `&&` in JavaScript:

```js
true && 'my message'; // 'my message'

false && 'my message'; // false
```

Die Werte `true` und `false` werden in JSX nicht dargestellt (genauso wie `null`)

## Übung

Übung: In der Slideshow, verstecke Buttons, die nicht angeklickt werden können (z.B. den _previous_-Button wenn der Benutzer beim ersten Bild ist)
