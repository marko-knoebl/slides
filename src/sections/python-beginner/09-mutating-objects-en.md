## Mutating objects

In Python lists can be changed - e.g. by appending a new entry

Many other objects - e.g. str, int, float - cannot be modified. However it's always possible to create new, modified objects based on existing ones

## Mutating objects

```py
a = [1, 2, 3]
# creating a new object
a = a + [4]

a = [1, 2, 3]
# a is modified directly
a.append(4)
```

## Mutating objects

What will be the output of the following program?

```py
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

## Mutating objects

An assignment (`b = ...`) will attach a new (additional) name to an existing object.

Behind the scenes there's still only one object
