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


class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width
    
    def _get_area(self):
        return self.length * self.width
    
    def _set_area(self, new_area):
        # adjust the length
        self.length = new_area / self.width
    
    area = property(_get_area, _set_area)

r = Rectangle(2, 3)
print(r.length)
print(r.width)
print(r.area)
r.length = 3
print(r.area)
r.area = 12
print(r.length)
