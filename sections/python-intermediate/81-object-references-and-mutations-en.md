# Object references and mutations

## Object references and mutations

Reacap: What will be the value of `a` after this code has run?

```py
a = [1, 2, 3]
b = a
b.append(4)
```

## Object references and mutations

An assignment (e.g. `b = a`) assigns a new (additional) name to an object.

The object in the background is the same.

## Object references and mutations

The statement `b = a` creates a new reference that refers to the same object.

Operations that create new references:

- assignments (`b = a`)
- function calls (`myfunc(a)` - a new internal variable will be created)
- insertions into collections (e.g. `mylist.append(a)`)
- ...

## Object references and functions

Passing an object into a function will create a new reference to that same object (_call by sharing_).

```py
def foo(a_inner):
    print(id(a_inner))

a_outer = []
foo(a_outer)
print(id(a_outer))
```
