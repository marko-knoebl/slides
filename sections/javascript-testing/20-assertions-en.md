# Assertions

## Assertions

Assertions can be written in two main styles:

**assert**:

```js
assert.equal(a, b);
```

**expect** (sometimes called _behavior-driven_):

```js
expect(a).toEqual(b);
```

## Assertions in node.js

assert (node):

```js
assert.equal(a, b);
assert.deepEqual(a, b);
assert.throws(() => JSON.parse(''));
// ...
```

## Assertions with Chai

```js
expect(a).to.equal(4);
expect(a).not.to.equal(2);
expect(a).to.be.greaterThan(3);
expect(a).to.be.a('number');
expect(() => JSON.parse('')).to.throw();
```

## Assertions with Jest

```js
expect(a).toEqual(4);
expect(a).not.toEqual(2);
expect(a).toBe(4);
expect(a).toBeGreaterThan(3);
expect(a).toBeInstanceOf(Number);
expect(() => JSON.parse('')).toThrow();
```

## Assertions with Jest

`.toEqual`: may be used with both primitives and objects

`.toBe`: behaves like `===` - may be used with primitives (or for asserting object identity)
