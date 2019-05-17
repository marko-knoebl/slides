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
- ...

## Classes

The definition of a class usually encompasses:

- a "data structure" (attributes)
- a "behaviour" (methods)

## Classes

example: class `BankAccount`

- "data structure" (attributes)
- "behaviour" (methods)

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

## Inheritance

```py
class Person():
    ...

class Admin(Person):
    ...
```

## Example: class "Money"

```py
a = Money('EUR', 10)
b = Money('USD', 10)

a.currency

a.amount
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
