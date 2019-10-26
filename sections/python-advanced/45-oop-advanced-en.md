# OOP: In depth

## Class decoration

```py
@logattraccess
class Foo():
    def __init__(self):
        self.a = 3

f = Foo()

f.a # prints: "get property 'a'"
f.b = 3 # prints: "set propery 'b'"
```

## Instance attributes and slots

In general we can assign any attributes

```py
a.value = 3
```

In order to reduce memory consumption we can define so-called _slots_ in a class:

```py
class Money():
    __slots__ = ['currency', 'amount']
```

## Exercises

- class "Vector"
- class "BankAccount"
- class "Dictionary" (thesaurus)
