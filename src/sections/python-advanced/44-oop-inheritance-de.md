# OOP: Vererbung

## Unterklassen und Vererbungsreihenfolge

## super()

Proxy zu den Elternklassen

## super()

ohne super:

```py
class Child(A, B):
    def __init__(self, x, y):
        A.__init__(self, x, y)
        B.__init__(self, x, y)
```

## super()

Mit super:

```py
class Child(A, B):
    def __init__(self, x, y):
        super().__init__(x, y)
```
