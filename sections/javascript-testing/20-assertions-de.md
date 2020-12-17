# Assertions

## Assertions

Assertions können auf zwei Arten geschrieben werden:

**assert**:

```js
assert.equal(a, b);
```

**expect** (manchmals als _behavior-driven_ bezeichnet):

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

## Assertions mit Chai

```js
expect(a).to.equal(4);
expect(a).not.to.equal(2);
expect(a).to.be.greaterThan(3);
expect(a).to.be.a('number');
expect(() => JSON.parse('')).to.throw();
```

## Assertions mit Jest

```js
expect(a).toEqual(4);
expect(a).not.toEqual(2);
expect(a).toBe(4);
expect(a).toBeGreaterThan(3);
expect(a).toBeInstanceOf(Number);
expect(() => JSON.parse('')).toThrow();
```

## Assertions mit Jest

`.toEqual`: für Primitive sowie für Objekte geeignet

`.toBe`: verhält sich wie `===` - für Primitive geeignet (sowie zum Identitätsvergleich)
