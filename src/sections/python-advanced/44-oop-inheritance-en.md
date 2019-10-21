# OOP: Inheritance

## Subclasses and order of inheritance

## super()

Proxy for parent classes

## super()

without super:

```py
class Child(A, B):
    def __init__(self, x, y):
        A.__init__(self, x, y)
        B.__init__(self, x, y)
```

## super()

with super:

```py
class Child(A, B):
    def __init__(self, x, y):
        super().__init__(x, y)
```
