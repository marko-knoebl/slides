# NumPy

## NumPy

Library for efficient data processing

Data are stored in multidimensional arrays of numeric values which are implemented in an efficient way:

- smaller memory use than e.g. lists of numbers in Python
- much faster execution of operations like element-wise addition of arrays

Data can represent images, sound, measurements and much more

## NumPy

common import convention:

```python
import numpy as np
```

## Arrays

creating a 2-dimensional array:

```py
a2d = np.array([[1, 2, 3], [2, 4, 6], [3, 6, 9]])
```

output:

```py
array([[1, 2, 3],
       [2, 4, 6],
       [3, 6, 9]])
```

## Arrays

creating a 3-dimensional array:

```py
a3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7,8]]])
```

output:

```py
array([[[1, 2],
        [3, 4]],

       [[5, 6],
        [7, 8]]])
```

## Arrays

NumPy arrays vs Python lists:

Arrays are implemented in C, the numeric entries are not full Python Objects and require less resources

## NumPy

NumPy Arrays vs Python lists:

```py
# Python lists (with references to Python integer objects)
list_a = [1, 2]
list_b = [3, 4]

# NumPy array
# data are contained within the array without referencing
# Python integers
array_a = numpy.array(list_a)
array_b = numpy.array(list_b)

# fast multiplication (implemented in C)
array_a * array_b
```

## Array shape

We can query these attributes:

- `a3d.ndim`: 3
- `a3d.shape`: (2, 2, 2)
- `a3d.size`: 8
