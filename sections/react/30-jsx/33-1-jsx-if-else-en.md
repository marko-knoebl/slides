# JSX: if / else

## if / else

inline condition:

```jsx
<div>
  {gameActive ? (
    <span>score: {score}</span>
  ) : (
    <span>Game over. Final score: {score}</span>
  )}
</div>
```

## if / else

if / else statement:

```jsx
let statusMessage;
if (gameActive) {
  statusMessage = <span>score: {score}</span>;
} else {
  statusMessage = (
    <span>Game over. Final score: {score}</span>
  );
}

return <div>{statusMessage}</div>;
```

## if

```jsx
<div>{isError ? <div>{errorMessage}</div> : null}</div>
```

## if

shorter version that could be used:

```jsx
<div>{isError && <div>{errorMessage}</div>}</div>
```

The operator `&&` in JavaScript:

```js
true && 'my message'; // 'my message'

false && 'my message'; // false
```
