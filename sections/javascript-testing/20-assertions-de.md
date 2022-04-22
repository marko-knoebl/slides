# Assertions

## Assertions

Assertions können auf verschiedene Arten geschrieben werden:

**assert**:

```js
assert.equal(a, b);
```

**expect** (Beispiel aus _Jest_):

```js
expect(a).toEqual(b);
```

**should** (Beispiel aus _Cypress_):

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

## Assertions

"deep equality": vergleicht _Inhalte_ con Objekten / Arrays

```js
assert.deepEqual([1, 2], [1, 2]);
expect([1, 2]).to.eql([1, 2]);
expect([1, 2]).toEqual([1, 2]);
```

"strict equality": verhält sich wie `===` - kann zum Vergleichen von Primitiven verwendet werden (oder zum Identitätsvergleich bei Objekten)

```js
assert.equal('abc', 'abc');
expect('abc').to.equal('abc');
expect('abc').toBe('abc');
```
