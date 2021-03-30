# Object-oriented programming and classes

## Object orientation in Python: "Everything is an object"

```py
a = 20

a.to_bytes(1, "big")

"hello".upper()
```

## Types and instances

```py
message = "hello"

type(message)

isinstance(message, str)
```

## Classes

Classes may represent _various_ things, e.g.:

- a Message inside an e-mail program
- a user of a website
- a car in a racing game
- a shopping basket in an online shop
- a bank account
- a data set to be analysed
- ...

## Classes

The definition of a class usually encompasses:

- a "data structure" (attributes)
- a "behavior" (methods)

## Classes

example: class `TextIOWrapper` can represent a text file (is created when calling `open()`)

attributes:

- _closed_
- _encoding_
- _mode_ (e.g. r=read, w=write)
- _name_ (filename)
- ...

methods:

- _close()_
- _read()_
- _write()_
- ...

## Classes

example: class `BankAccount`

- "data structure" (attributes)
- "behavior" (methods)

## Defining classes

```py
class MyClass():

    # the method __init__ initializes the object
    def __init__(self):
        # inside any method, self will refer
        # to the current instance of the class
        self.message = "hello"

instance = MyClass()
instance.message # "hello"
```

## Private attributes and methods

Attributes and methods that should not be used from the outside are prefixed with `_`

We're all consenting adults here: https://mail.python.org/pipermail/tutor/2003-October/025932.html

## Example: class "Length"

```py
a = Length(2.54, "cm")
b = Length(3, "in")

a.unit
a.value
```

## Exercise: classes "TodoList" and "Todo"

```py
tdl = TodoList("groceries")

tdl.add("milk")
tdl.add("bread")

print(tdl.todos)
tdl.todos[0].toggle()

tdl.stats() # {open: 1, completed: 1}
```
