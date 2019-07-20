# OOP: Vererbung

## Unterklassen und Vererbungsreihenfolge

## super()

Proxy zu den Elternklassen

## super()

ohne super:

```py
class Child(A, B):
    def __init__(self):
        A.__init__(self)
        B.__init__(self)
```

## super()

Python 3:

```py
class Child(A, B):
    def __init__(self):
        super().__init__()
```

Python 2:

```py
class Child(A, B):
    def __init__(self):
        super(Child, self).__init__()
```
