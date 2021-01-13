# Python and Data Science 1: Overview and NumPy

# Packages

## Python packages for data science

- _Jupyter_ & _IPython_: interactive Python environments
- _NumPy_: library for efficient processing of numerical data
- _Pandas_: library for data analysis, based on NumPy
- _Matplotlib_: library for data visualization
- _Scikit-Learn_: library for machine learning, based on NumPy
- _Keras_: library for deep learning

## Python packages for data science

installing the most important packages in an existing Python environment:

```bash
pip install jupyter numpy pandas matplotlib sklearn keras
```

Note: Packages like _NumPy_ may take some time before they are available for the newest Python version

## Anaconda

_Anaconda_ = Python distribution that includes many pre-built packages and developer tools

Uses ~ 3 GB of disk space

## Anaconda installation

download from <https://www.anaconda.com/products/individual>

On Windows, the installation path should not contain spaces or underscores (recommendation: `C:/anaconda`) - see <https://docs.anaconda.com/anaconda/user-guide/faq/#distribution-faq-windows-folder>

## Conda

_Conda_ = management tool for Python packages and environments, used by Anaconda

Enables installation of multiple versions of Python and Python packages

Particularly useful for external libraries that are written in a compiled language

## Pyodide

_Pyodide_ = Python distribution that can be run directly in the Browser (via _WebAssembly_)

# Jupyter and IPython

## IPython

IPython = advanced interactive Python console, supports features like autocompletion

## Jupyter notebooks

- interactive Python document (based on IPython)
- file format _.ipynb_
- may contain code, output text / graphics, documentation / notes

## Jupyter interfaces

- _Jupyter Notebook_: web-based interface that can run on a remote server or locally
- _JupyterLab_: successor to _Jupyter Notebook_
- _VS Code_: supports jupyter notebooks

## Jupyter notebook - VS Code

VS Code can connect to the IPython kernel:

In VS Code's command pallette (F1), search for: _Python: Create New Blank Jupyter Notebook_

<!-- pip install ipykernel - will install ipython, jupyter-core, jupyter-client -->

## Jupyter notebook - Anaconda

Launching Jupyter: Entry _Jupyter Notebook_ in the start menu / terminal command `jupyter notebook`

Stopping Jupyter: Press _Quit_ in the top right corner of the directory tree view (usually under http&#x3A;//localhost:8888/tree)

Python packages: _notebook_ or _jupyterlab_

## Jupyter notebook - online

free online Jupyter notebooks:

- _Binder_ (limited sessions): <https://jupyter.org/try>
- popular public notebooks on _kaggle_: <https://www.kaggle.com/notebooks?sortBy=voteCount> (login required to edit / create)
- _Google Colab_: <https://colab.research.google.com> (login required)

## Writing and evaluating code

Write code into a cell, e.g.

```py
import time
time.sleep(3)
"hello"
```

and press _Shift_ + _Enter_

## Writing and evaluating code

IPython has numbered inputs, e.g. `[1]`

When a computation is ongoing it will display `[*]`

If the last statement in a cell evaluates to something it will be considered the output and be displayed

## Writing and evaluating code

interface functionality (varies along notebook types):

- run cell
- restart (forgets previous variables and state)
- run all cells / restart and run all cells
- interrupt evaluation

## Writing and evaluating code

accessing the last output:

```py
print(_ * 3)
```

## Writing documentation via markdown

We can add documentation via the standardized _markdown_ language:

Switch from _Code_ to _Markdown_ and try the following code:

```md
# Heading

- item 1
- item 2
```

Run or leave the cell to display the result, double click to edit again

[markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Documentation

displaying documentation in any Python console:

```py
help(str)
```

(navigate through long outputs via _Enter_, exit via _Q_)

shortcut for IPython / Jupyter:

```ipython
str?
```

## Tab completion and wildcard expressions

```ipython
*Error?
```

## Running terminal commands

IPython includes direct access to many terminal commands, e.g. `ls`, `cd`, ...

We can execute any terminal command by prefixing it with `!`

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

creating a 1-dimensional array:

```py
a1d = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

## Arrays

creating a 2-dimensional array:

```py
a2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
```

output:

```py
array([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]])
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

## NumPy arrays vs Python lists

Arrays are implemented in C, the numeric entries are not full Python Objects and require less resources

## NumPy arrays vs Python lists

Python list (with references to Python integer objects):

```py
list_a = [1, 2, 3, 4]
```

NumPy array (data are contained within the array without referencing Python integers):

```py
array_a = np.array(list_a)
```

Fast element-wise operation (implemented in C):

```py
array_a * array_a
```

## Array shape

We can query these attributes:

- `a3d.shape`: (2, 2, 2)
- `a3d.ndim`: 3
- `a3d.size`: 8

# More than one way to do it

## More than one way to do it

from the _Zen of Python_:

> There should be one-- and preferably only one --obvious way to do it.

this philosophy is often _not_ applied in _NumPy_

## More than one way to do it

example: transposing an array

```py
a2d.T
a2d.transpose()
np.transpose(a2d)
```

## NumPy functions vs array methods

many operations available in two ways:

- functions in the `numpy` package
- methods of the `array` class

we will be using mostly functions

## NumPy functions vs array methods

available as functions and methods:

```py
np.max(a2d)
a2d.max()
np.round(a2d)
a2d.round()
```

available as functions only:

```py
np.sin(a2d)
np.exp(a2d)
np.expand_dims(a2d, 2)
```

# Numeric types

## Numeric types

- **int**
- **float**
- decimal

## Int

an _int8_ consists of 8 bits and can store 2^8 (256) different numbers

number of representable values for integer types:

- _int8_: 256 (-128 to +127)
- _int16_: 65,536 (-32,768 to +32,767)
- _int32_: 4,294,967,296
- _int64_: 18,446,744,073,709,551,616

## Int

an _unsigned integer (uint)_ can only represent non-negative numbers

e.g. _uint8_: 0 to 255

## Float

standardized way of representing real numbers in computers: _IEEE 754_

- **binary floating point numbers**
- decimal floating point numbers

## Float

common floating point types:

- _float32_ (_single_): exact for ~7 decimal digits
- _float64_ (_double_): exact for ~16 decimal digits

## Float

**rounding errors**: some numbers cannot be represented as floating point numbers, they will always be approximations

examples in the decimal system: 1/3, 1/7, π

examples in the binary system (i.e. _floats_): 1/10, 1/5, 1/3, π

example: π + π evaluates to `6.2` when using decimal numbers with a precision of 2 (a more exact result would be `6.3`)

example: `0.1 + 0.2` evaluates to ~ `0.30000000000000004` when using 64 bit floats

## Float

some operations result in loss of precision - e.g. subtracting numbers that are close to each other

example:

```
a = 0.001234567 (7 significant decimal places)
b = 0.001234321 (7 significant decimal places)

c = a - b
c = 0.000000246 (3 significant decimal places)
```

## Float

Special values in IEEE 754:

- `inf` and `-inf` (infinite values)
- `nan` (not-a-number: undefined / unknown value)

# Floats in IEEE 754

## Floats in IEEE 754

storage format:

```txt
(-) 2^e * s
```

- e ... _exponent_
- s ... _significand_ / _coefficient_

## Examples

pi as _float32_:

`0 10000000 10010010000111111011011`

2\*pi as _float32_:

`0 10000001 10010010000111111011011`

pi/2 as _float32_:

`0 01111111 10010010000111111011011`

## Examples

numbers _0.20000000_, _0.20000001_, ... _0.20000005_ expressed as closest _float32_ numbers:

- `0 01111100 10011001100110011001101`
- `0 01111100 10011001100110011001101`
- `0 01111100 10011001100110011001110`
- `0 01111100 10011001100110011001111`
- `0 01111100 10011001100110011001111`
- `0 01111100 10011001100110011010000`

## Examples

Avogadro constant (6.02214076 \* 10^23):

`0 11001101 11111110000110001000001`

planck length (1.61625518 \* 10^-35):

`0 00001011 01010111101011110110100`

## Overflow and underflow

largest _float32_ number:

`0 11111110 11111111111111111111111`

`~ 2^127.9999 ~ 3.403e38`

smallest positive _float32_ number with full precision:

`0 00000001 00000000000000000000000`

`= 2^-126 ~ 1.175e-36`

larger numbers will yield `inf`

smaller numbers will lose precision or yield `0.0`

## Special values

inf: `0 11111111 00000000000000000000000`

nan: `0 11111111 00000000000000000000001`

# Array types

## Array types

Each NumPy array can only hold data of one type (e.g. only 64 bit floats or only bytes)

## Array types

Each array has a predefined data type for all entries

```py
a = np.array([1])
a.dtype # int32
b = np.array([1.0])
b.dtype # float64
c = np.array(['abc'])
c.dtype # <U3
d = np.array([b'abc'])
d.dtype # |S3
```

## Array types

Types may be stated explicitly:

```py
a = np.array([1, 2, 3, 4], dtype='int64')
b = np.array([1, 2, 3, 4], dtype='uint8')
```

If possible, types are converted automatically:

```py
c = a + b
c.dtype # int64
```

## Array types

common types:

- _bool_ / <em>bool\_</em> (stored as 8 bits)
- _int8_, _int16_, _int32_, _int64_
- _uint8_, _uint16_, _uint32_, _uint64_
- _float16_, _float32_, _float64_

## Float types

precision for float types:

- _float16_: ~3 decimal digits
- _float32_: ~7 decimal digits
- _float64_: ~16 decimal digits

## Float types

float16: exact for ~3 decimal digits

```py
np.array([2.71828, 0.271828], dtype="float16")
# array([2.719 , 0.2717])
```

## Float types

float16: overflow

```py
np.array([65450, 65500, 65550], dtype="float16")
# array([65440, 65500, inf])
```

float16: underflow

```py
np.array(
    [3.141e-5, 3.141e-6, 3.141e-7, 3.141e-8, 3.141e-9],
    dtype="float16"
)
# array([3.14e-05, 3.16e-06, 2.98e-07, 5.96e-08, 0.00e+00])
```

# Creating arrays

## Creating arrays

creating a 2x6 array filled with 0:

```py
np.zeros((2, 6))
# or
np.full((2, 6), 0.0)
```

## Creating arrays

creating number sequences:

```py
np.linspace(0, 1.0, 11)
# [0.0, 0.1, ... 1.0]
```

```py
np.arange(0, 3.14, 0.1)
# [0.0, 0.1, ... 3.1]
```

## Creating arrays

creating a 2x2 array of random values:

```py
# create a random number generator
rng = np.random.default_rng(seed=1)

# floats between 0 and 1:
rng.random((2, 2))
# integers between 1 and 6:
rng.integers(1, 7, (2, 2))
```

older interface: `np.random.random()` and `np.random.randint()`

# Selecting array entries

## Selecting array entries

```py
a1d[0] # 0
a2d[0, 1] # 2
a2d[0, :] # [1, 2, 3]
a2d[:, 0] # [1, 4, 7]
```

with 2D arrays: _[row index, column index]_

in general:

- last index: counts rightwards
- second to last index (if it exists): counts downwards

## Selecting array entries

```py
a2d[0, :] # [1, 2, 3]
```

shorter form:

```py
a2d[0] # [1, 2, 3]
```

## Slices

```py
a1d[:3] # [0, 1, 2]
a1d[3:6] # [3, 4, 5]
a1d[6:] # [6, 7, 8, 9]
a1d[0:8:2] # [0, 2, 4, 6]
```

```py
a1d[3:0:-1] # [3, 2, 1]
a1d[::-1] # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

```py
a2d[1:, :] # [[5, 6, 7], [8, 9, 10]]
```

also works on Python lists

# Operations on arrays

## Operators

Operators are applied element-wise:

```py
a = np.array([0, 1, 2, 3])
b = np.array([2, 2, 2, 2])

-a
# np.array([0, -1, -2, -3])
a + b
# np.array([2, 3, 4, 5])
a * b
# np.array([0, 2, 4, 6])
```

## Operators

element-wise comparison of arrays:

```py
a < b
# np.array([True, True, False, False])
a == b
# np.array([False, False, True, False])
```

Warning: `a == b` cannot be used reasonably in if statements - use `np.array_equal(a, b)`

## Operators

operations with single numbers (broadcasting):

```py
print(a + 1)
# np.array([1, 2, 3, 4])
```

Some constants are available directly in NumPy:

```py
print(a + np.pi)
print(a + np.e)
print(np.nan)
```

## Element-wise functions

NumPy provides some mathematical functions that are applied element-wise:

```py
print(np.sin(a))
# [0.0, 0.84147098, 0.9... ]
print(np.sqrt(a))
# [0.0, 1.0, 1.414... ]
```

## Element-wise functions

- `abs`
- `sin`
- `cos`
- `sqrt`
- `exp`
- `log`
- `log10`
- `round`
- ...

## Aggregation functions

_Aggregations_ compute scalar values for an entire array or for each of its rows / columns / ...

sum over all entries:

```py
np.sum(a2d)
```

sum along axis 0 ("downwards"):

```py
np.sum(a2d, axis=0)
```

sum along axis 1 ("rightwards"):

```py
np.sum(a2d, axis=1)
```

## Aggregation functions

- `sum`
- `min`
- `max`
- `std`
- `percentile`

## Exercises

(see next slides)

- prices and amounts → total price
- kinetic energy
- centroid of a triangle
- sine and cosine - value table
- dice rolls

## Exercises

given an array of prices and an array of quantities, determine the total price:

```py
prices = np.array([3.99, 4.99, 3.99, 12.99])
# buying the first item 3 times and the last item 2 times
quantities = np.array([3, 0, 0, 2])

# solution: 37.95
```

## Exercise

given an array of masses and velocities of some bodies, determine the kinetic energy of every body and the total kinetic of all bodies together

```py
masses = np.array([1.2, 2.2, 1.5, 2.0])
velocities = np.array([12.0, 14.0, 14.0, 7.5])
```

formula: E = m\*v^2 / 2

## Exercises

given the coordinates of the vertices of a triangle, determine its centroid (arithmetic mean of its vertices)

```py
a = np.array([5, 1])
b = np.array([6, 8])
c = np.array([1, 3])

# solution: [4, 4]
```

## Exercises

create a "value table" for the sine and cosine functions in the interval between 0 and 2\*pi.

result:

```py
# x, sin(x), cos(x)
np.array([[0.0, 0.01, 0.02, ...],
          [0.0, 0.0099998, 0.0199999, ...],
          [1.0, 0.99995, 0.99980, ...]])
```

using this data, verify the following equation: _sin(x)^2 + cos(x)^2 = 1_

## Exercises

Simulate 1 million dice rolls with 10 dice each

# Advanced indexing and filtering

## Boolean indexing

```py
a = np.array([4.1, 2.7, -1, 3.8, -1])

a_valid = a > 0
# array([True, True, False, True, False])
a_filtered = a[a_valid]
# array([4.1, 2.7, 3.8])

a_invalid = a < 0
a_with_nans = np.copy(a)
a_with_nans[a_invalid] = np.nan
# array([4.1, 2.7, nan, 3.8, nan])
```

## Boolean indexing (short form)

```py
a = np.array([4.1, 2.7, -1, 3.8, -1])

a_filtered = a[a > 0]

a_with_nans = np.copy(a)
a_with_nans[a_with_nans < 0] = np.nan
```

# NumPy advanced

## Reshaping arrays

```py
np.reshape(a3d, (8, )) # 1d array
np.reshape(a3d, (2, 4)) # 2d array
```

automatic sizing for one axis:

```py
np.ravel(a3d) # 1d array
np.reshape(a3d, (-1, )) # 1d array
np.reshape(a3d, (2, -1)) # 2d array
```

## Adding an extra dimension

Adding an extra dimension of length 1: turning a 2 x 2 array into a 2 x 2 x 1 array:

```py
np.expand_dims(a2d, 2)
# [[[1], [2], [3]],
#  [[4], [5], [6]],
#  [[7], [8], [9]]]
```

alternative:

```py
a2d[:, :, np.newaxis]
```

## Transposing

reversing order of axes (flipping axes in 2D):

```py
np.transpose(a2d)

a2d.T
```

## Slices as views

In ordinary Python we can make a shallow copy of a list by slicing it - this works differently in NumPy (in order to improve efficiency):

```py
list = [1, 2, 3]
list_copy = list[:]
list_copy[0] = 10 # does NOT change list

array = np.array([1, 2, 3])
array_view = array[:]
array_view[0] = 10 # DOES change array
```

## Copying arrays

Arrays can be copied via `np.copy()`

## Concatenating arrays

concatenating along an axis (axis 0 by default):

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
np.concatenate([a2d, a2d], axis=1)
```

# Linear algebra

## Linear algebra

```py
np.transpose(m)
np.linalg.inv(m)
np.eye(2) # unit matrix
```

## Array multiplication

via the binary Operator `@`

example: rotating several points by 45° / 90° (counterclockwise):

```py
points = np.array([[0, 0], [0, 1], [1, 1], [1, 0]])

m = np.array([[np.sqrt(0.5), np.sqrt(0.5)],
              [-np.sqrt(0.5), np.sqrt(0.5)]])

print(points @ m)
print(points @ m @ m)
```

## Array multiplication

example:

known data: prices of various products, number of items in stock for different stores

```py
prices = np.array([3.99, 12.99, 5.90, 15])
quantities = np.array([[0, 80, 80, 100],
                       [100, 0, 0, 0],
                       [50, 0, 0, 50]])
```

wanted: total value for each of the three stores
