# OOP: Properties

## Properties

Getters & setters (not common in Python):

```py
r = Rectangle(length=3, width=4)
print(r.get_area()) # 12
r.set_length(4)
print(r.get_area()) # 16
```

Using properties in Python:

```py
r = Rectangle(length=3, width=4)
print(r.area) # 12
r.length = 4
print(r.area) # 16
```

## Properties

Exercise: Implement a class called `Rectangle_gs` that uses getters and setters

## Properties

```py
class Rectangle_gs:
    def __init__(self, length, width):
        self._length = length
        self._width = width

    def get_length(self):
        return self._length

    def set_length(self, new_length):
        self._length = new_length

    def get_width(self):
        return self._width

    def set_width(self, new_width):
        self._width = new_width

    def get_area(self):
        return self._length * self._width
```

## Properties

With properties we can "redirect" reading and writing of attributes to a function - so accessing `r.area` can lead to the execution of a getter or setter function.

## Properties

```py
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def _get_area(self):
        return self.length * self.width
    
    area = property(_get_area)
```

`property` is a built-in, so it's always available

## Properties

Extension: Setter for _area_

```py
class Rectangle:
    ...

    def _set_area(self, new_area):
        # adjust the length
        self.length = new_area / self.width
    
    area = property(_get_area, _set_area)
```

## Properties

Alternative way to create Properties via decorators:

```py
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    @property
    def area(self):
        return self.length * self.width
    
    @area.setter
    def area(self, new_area):
        self.length = new_area / self.width
```
