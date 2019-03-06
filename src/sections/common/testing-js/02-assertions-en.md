# Testing: assertions

## Testing: assertions

Assertions can be written in two main styles:

assert:

```js
assert.equal(a, b);
```

expect (behaviour-driven):

```js
expect(a).toEqual(b);
```

## Testing: assertions

assert:

- built into node
- chai

expect (behaviour-driven)

- jest
- jasmine
- chai
- enzyme

## Testing: assertions

assert: examples

node:

```js
assert.equal(a, b);
assert.deepEqual(a, b);
// ...
```

chai:

```js
assert.equal(a, b);
assert.typeOf(foo, 'string');
assert.lengthOf(foo, 3);
assert.throws(() => {
  1 / 0;
});
```

## Testing: assertions

expect: examples

jest:

```js
expect(4).toBeGreaterThan(3);
expect(() => {
  1 / 0;
}).toThrow();
expect(3).not.toEqual(4);
```

chai:

```js
expect(foo).to.be.a('string');
expect(() => {
  1 / 0;
}).to.throw();
expect(foo).to.equal('bar');
```
