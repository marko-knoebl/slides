# Optional chaining

## Optional chaining

example for _optional chaining_:

```js
const userNickname = user?.nickname;
```

if `user` is defined, get its `.nickname` property, otherwise use `undefined`

"conventional" long form:

```js
const userNickname = user ? user.nickname : undefined;
```

## Optional chaining

optional chaining with methods calls:

```js
props.onClick?.();
```

if `props.onClick` is defined, call it, otherwise evaluate to `undefined`
