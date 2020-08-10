# Lists

## Lists

Lists are mutable sequences of objects; they are usually used to store homogenous entries of the same type and structure

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## Operations on lists

The following operations will also work on other _sequences_ - e.g. tuples, strings or bytes

- accessing elements (via index): `users[2]`
- accessing multiple elements (sublist): `users[2:4]`
- concatenation: `users + users`
- repetition: `3 * users`
- length: `len(users)`
- for loop: `for user in users:`
- if clause : `if 'Tim' in users:`

## Operations on lists - mutations

Lists can be mutated directly (while strings and tuples can't be):

- appending: `users.append("Dan")`
- removing the last element: `users.pop()`
- removing an element by index: `users.pop(2)`

## Sorting lists

```py
l.sort()
```

```py
l.sort(key=...)
```

## Exercises

- shuffling cards
- list of prime numbers
