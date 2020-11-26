# Object references and mutations

## Object references and mutations

Recap: What does this program print?

```py
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

## Object references and mutations

```py
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

The Program prints `[1, 2, 3, 4]`

`a` and `b` refer to the same object.

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

## Object references and functions

recommended principle for functions:

**Functions should not mutate parameters**

or more generally:

**Functions should only interact with the Python environment by receiving parameters and returning values** (They should not have any _side effects_)

## Object references and functions

```py
def remove_middle_element(list_in):
    list_in.pop(len(list_in) // 2)
    return list_in

a = [1, 2, 3, 4, 5]
b = remove_middle_element(a)
print(b)
print(a)
```

What does the above example print?

## Object references and functions

Possible implementations for `remove_middle_element`:

- as a function without side effects
- as a method of `AdvancedList`

Compare: `sorted()` and `list.sort()` in Python

## Functions without side effects

The function does not mutate the list that was passed in - instead it returns a new list.

```py
def remove_middle_element(list_in):
    list_out = list_in.copy()
    list_out.pop(len(list_out) // 2)
    return list_out

a = [1, 2, 3, 4, 5]
b = remove_middle_element(a)
```

## Method in a custom class

Relaxation of the principle for methods: Entries in `self` _may be mutated_.

The following method will change the object internally and return nothing.

```py
class AdvancedList(list):
    def remove_middle_element(self):
        self.pop(len(self) // 2)

a = AdvancedList([1, 2, 3, 4, 5])
a.remove_middle_element()
```

## Object references and functions

Common recommendations (no side effects):

- Don't modify parameters that are passed in (exception: `self`)
- Don't set global variables (Don't use the `global` statement)

Strict rules (pure functions):

- Don't read global variables
- Don't do any I/O (interactions with disk / network / ...)

Pure functions only interact with their environment by receiving parameters and returning values.

The "purer" a function is the easier it is to reuse and test.

## Mutating default arguments

Unexpected behavior in Python when default parameters are mutated:

```py
def register_file_formats(formats=["py", "pyc"]):
    for format in formats:
        formats.append(format.upper())
    # ...
    print(formats)

register_file_formats(["py"]) # ["py", "PY"]
register_file_formats()
# ["py", "pyc", "PY", "PYC"]
register_file_formats()
# ["py", "pyc", "PY", "PYC", "PY", "PYC", "PY", "PYC"]
```

(web search: _mutable default arguments_)
