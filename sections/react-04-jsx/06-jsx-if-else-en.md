# JSX: if / else

## if / else

options for using if / else in JSX:

- use the ternary operator (`?`) in the template
- prepare a value via if / else _before switching to XML_ and use that value in the template
- have an if / else with separate return statements in each branch

## if / else

inline condition:

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

if / else statement before the template:

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

multiple return statements:

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

if - without else:

```jsx
<div>{isError ? <div>{errorMessage}</div> : null}</div>
```

## if

potential shorter version:

```jsx
<div>{isError && <div>{errorMessage}</div>}</div>
```

The operator `&&` in JavaScript:

```js
true && 'my message'; // 'my message'

false && 'my message'; // false
```

the values `true` and `false` are not rendered in JSX (just like `null`)

## Exercise

exercise: in the slideshow, hide buttons which cannot be clicked (e.g. the _previous_-button if the user is viewing the first image)
