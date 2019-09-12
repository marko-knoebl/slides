# OOP: Inheritance

## Subclasses and order of inheritance

## super()

Proxy for parent classes

## super()

without super:

```py
class Child(A, B):
    def __init__(self):
        A.__init__(self)
        B.__init__(self)
```

## super()

with super:

```py
class Child(A, B):
    def __init__(self):
        super().__init__()
```
