# Assertions

## Assertions

Assertions can be written in different styles:

**assert**:

```js
assert.equal(a, b);
```

**expect** (example from _jest_):

```js
expect(a).toEqual(b);
```

**should** (example from _cypress_):

```js
inputField.should('have.value', '');
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

## Assertions

deep equality: compares _contents_ of objects / arrays

```js
assert.deepEqual([1, 2], [1, 2]);
expect([1, 2]).to.eql([1, 2]);
expect([1, 2]).toEqual([1, 2]);
```

strict equality: behaves like `===` - may be used with primitives (or for asserting object identity)

```js
assert.equal('abc', 'abc');
expect('abc').to.equal('abc');
expect('abc').toBe('abc');
```
