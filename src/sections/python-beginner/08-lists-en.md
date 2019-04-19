# Lists

## Lists

Lists are a data type that represents a sequence of other objects

## Creating lists

with square brackets:

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## retrieving list elements

via a list index (starting at 0)

```py
users = ["Alice", "Bob", "Charlie"]

print(users[0])
print(users[2])
print(users[-1])

print(len(users))
```

## operations on lists

- overwriting an element: `users[0] = "Andrew"`
- appending an element: `users.append("Dan")`
- removing the last element: `users.pop()`
- removing an element by index: `users.pop(2)`
- length: `len(users)`
- concatenating lists: `primes + users`
- checking whether an element is included in a list: `if "Andrew" in users:`

## Exercise: shopping list

Example:

```text
enter an item or "x" to quit:
milk
enter an item or "x" to quit:
bread
enter an item or "x" to quit:
apples
enter an item or "x" to quit:
x
your shopping list is:
["milk", "bread", "apples"]
```
