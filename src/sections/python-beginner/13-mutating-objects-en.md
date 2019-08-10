# Object references and mutations

## Mutations

Some objects can be mutated (changed) directly - e.g. we can add entries to lists and dicts.

Other objects cannot be mutated directly - however, we can create new, derived objects based on them.

## Mutations

Changing a list directly:

```py
primes = [2, 3, 5, 7]
primes.append(11)
```

Creating a new string based on an existing string (but assigning it to the same name as before):

```py
greeting = "Hello"
greeting = greeting + "!"
```

## Mutations and object references

What will be the value of `a` at the end of this code?

```py
a = [1, 2, 3]
b = a
b.append(4)
```

## Mutations and object references

An assignment (e.g. `b = a`) assigns a new (additional) name to an object.

The object in the background is the same.
