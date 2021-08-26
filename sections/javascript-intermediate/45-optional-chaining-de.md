# Optional chaining

## Optional Chaining

Beispiel für _optional chaining_:

```js
const userNickname = user?.nickname;
```

wenn `user` definiert ist, lies dessen `.nickname` Property, andernfalls verwende `undefined`

"konventionelle" Langform:

```js
const userNickname = user ? user.nickname : undefined;
```

## Optional Chaining

_Optional chaining_ mit Funktionsaufrufen:

```js
props.onClick?.();
```

wenn `props.onClick` definiert ist, wird es aufgerufen, andernfalls wird der Ausdruck zu `undefined` ausgewertet
