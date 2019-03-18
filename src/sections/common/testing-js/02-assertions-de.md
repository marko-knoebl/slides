# Testen: assertions

## Testen: assertions

Assertions können auf zwei Arten geschrieben werden:

assert:

```js
assert.equal(a, b);
```

expect (behaviour-driven):

```js
expect(a).toEqual(b);
```

## Testen: assertions

assert:

- assert-modul in node
- chai

expect (behaviour-driven)

- jest
- jasmine
- chai
- enzyme

## Testen: assertions

assert (node):

```js
assert.equal(a, b);
assert.deepEqual(a, b);
// ...
```

assert (chai):

```js
assert.equal(a, b);
assert.typeOf(foo, 'string');
assert.lengthOf(foo, 3);
assert.throws(() => {
  1 / 0;
});
```

## Testen: assertions

expect (jest):

```js
expect(4).toBeGreaterThan(3);
expect(() => {
  1 / 0;
}).toThrow();
expect(3).not.toEqual(4);
```

expect (chai):

```js
expect(foo).to.be.a('string');
expect(() => {
  1 / 0;
}).to.throw();
expect(foo).to.equal('bar');
```
