# Python & Data Science

## Slides

<https://marko-knoebl.github.io/slides/>

## Your Trainer

Marko Knöbl

- based in Vienna
- former math teacher
- programming topics:
  - JavaScript, TypeScript and React
  - Python, data science

## Introduction of Participants

- current projects
- prior knowledge
- expectations

## Organizational

- duration
- breaks
- lunch
- materials
- questions, feedback?

## Code

Code available at: <https://github.com/marko-knoebl/courses-code>

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

Jupyter notebook = file format (_.ipynb_) that represents an interactive Python document where cells may be evaluated individually; interactivity is based on IPython

## Jupyter interfaces

- _Jupyter Notebook_: web-based interface that can run on a remote server or locally
- _JupyterLab_: successor to _Jupyter Notebook_
- _VS Code_: supports jupyter notebooks

## Jupyter notebooks - online

Try Jupyter online:

### Google Colab (Google account needed)

- Go to <https://colab.research.google.com>
- Select _File_ - _New Python 3 Notebook_

### Binder (limited sessions)

- Go to <https://jupyter.org/try>
- Select _Try Classic Notebook_
- wait ...
- Select _File_ - _New Notebook_ - _Python 3_

## Jupyter notebooks - VS Code

install _ipykernel_ and its dependencies (_ipython_, _jupyter-core_, _jupyter-client_):

<!-- will install ipython, jupyter-core, jupyter-client -->

```bash
pip install ipykernel
```

In VS Code's command pallette (F1), search for: _Python: Create New Blank Jupyter Notebook_

## Jupyter notebooks - locally

Launching Jupyter: Entry _Jupyter Notebook_ in the start menu / terminal command `jupyter notebook`

Stopping Jupyter: Press _Quit_ in the top right corner of the directory tree view (usually under http&#x3A;//localhost:8888/tree)

Python packages: _notebook_ or _jupyterlab_

## Notebook files

Jupyter notebook files can be created via _new_ - _Notebook: Python 3_

Will be saved under _notebook.ipynb_

_Ipynb_: File format that can contain Python code, outputs, text documentation

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

In order to restart the notebook and re-evaluate all cells, press ⏩

## Accessing the last output

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

```
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

- `a3d.ndim`: 3
- `a3d.shape`: (2, 2, 2)
- `a3d.size`: 8

# Creating arrays

## Creating arrays

creating a 2x6 array filled with 0:

```py
np.zeros((2, 6))
# or
np.full((2, 6), 0.0)
```

creating a 3x3 array of random values

```py
# floats between 0 and 1:
np.random.random((3, 3))
# integers between 1 and 6:
np.random.randint(1, 7, (3, 3))
```

## Creating arrays

creating the sequence _0.0, 0.5, 1.0, 1.5_:

fixed step width (0.5):

```py
a = np.arange(0, 2, 0.5)
```

fixed number of entries (4):

```py
b = np.linspace(0, 1.5, 4)
```

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
a = np.array([1, 2, 3])
b = np.array([2, 2, 2])

-a
# np.array([-1, -2, -3])
a + b
# np.array([3, 4, 5])
a * b
# np.array([2, 4, 6])
```

## Operators

element-wise comparison of arrays:

```py
a < b
# np.array([True, False, False])
a == b
# np.array([False, True, False])
```

Warning: `a == b` cannot be used reasonably in if statements - use `np.array_equal(a, b)`

## Operators

operations with single numbers (broadcasting):

```py
a = np.array([1, 2, 3])

print(a + 1)
# np.array([2, 3, 4])
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
a = np.array([0, 1, 2, 3])

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
- ...

## Aggregation functions

_Aggregations_ compute scalar values for an entire array or for each of its rows / columns / ...

sum over all entries:

```py
np.sum(a2d)
```

sum along axis 0 ("vertical"):

```py
np.sum(a2d, axis=0)
```

sum along axis 1 ("horizontal"):

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

- prices and amounts -> total price
- centroid of a triangle
- sine and cosine - value table

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

# Numeric types

## Numeric types

- **int**
- **float**
- decimal

## Int

an _int8_ consists of 8 bits and can store 256 different numbers

integers of different bit sizes can represent different amounts of numbers:

- _int8_: 256 numbers (-128 to +127)
- _int16_: 65,536 numbers (-32,768 to +32,767)
- _int32_: 4,294,967,296 numbers
- _int64_: 18,446,744,073,709,551,616 numbers

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

examples in the decimal system: 1/3, 1/7

examples in the binary system: 1/10, 1/5, 1/3

example: `0.1 + 0.2` evaluates to `0.30000000000000004` when using 64 bit floats

## Float

Special values in IEEE 754:

- `inf` and `-inf` (infinite values)
- `nan` (not-a-number: undefined / unknown value)

# Floats in IEEE 754

## Floats in IEEE 754

storage format:

```txt
(-) s * 2^e
```

- s ... _significand_ / _coefficient_
- e ... _exponent_

## Examples

pi as _float32_:

`0 10000000 10010010000111111011011`

2\*pi as _float32_:

`0 10000001 10010010000111111011011`

pi/2 as _float32_:

`0 01111111 10010010000111111011011`

## Examples

numbers _0.20000000_ to _0.20000005_ expressed as closest _float32_ numbers:

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

## Float: special values

inf: `0 11111111 00000000000000000000000`

nan: `x 11111111 00000000000000000000001`

# Array types

## Array types

Each array can only hold data of one type (e.g. only 64 bit floats or only bytes)

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

## Integer types

An _int8_ can represent 2^8 (256) different numbers

number of representable values for integer types:

- _int8_: 256 (-128 to +127)
- _int16_: 65,536 (-32768 to +32769)
- _int32_: 4,294,967,296
- _int64_: 18,446,744,073,709,551,616

## Integer types

```py
np.array([127, 128, 129], dtype="int8")
```

output (integer overflow):

```py
array([127, -128, -127])
```

## Float types

precision for float types:

- _float16_: ~3 decimal digits
- _float32_: ~7 decimal digits
- _float64_: ~16 decimal digits

floats are also limited in how big or small they can be

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

# Advanced indexing and filtering

## Boolean indexing

```py
a = np.array([4.1, 2.7, -1, 3.8, -1])

a_valid = a > 0
# array([True, True, False, True, False])
a_filtered = a[a_valid]
# array([4.1, 2.7, 3.8])

a_invalid = a < 0
a_with_nans = a.copy()
a_with_nans[a_invalid] = np.nan
# array([4.1, 2.7, nan, 3.8, nan])
```

## Boolean indexing (short form)

```py
a = np.array([4.1, 2.7, -1, 3.8, -1])

a_filtered = a[a > 0]

a_with_nans = a.copy()
a_with_nans[a < 0] = np.nan
```

# NumPy advanced

## Reshaping arrays

```py
array_1d = array_3d.ravel()
array_1d = array_3d.reshape(8)
array_2d = array_3d.reshape(2, 4)
array_2d = array_3d.reshape(2, -1) # automatic second dimension
array_2d_transposed = array_2d.T
```

## Adding an extra dimension

Adding an extra dimension of length 1: turning a 2 x 2 array into a 2 x 2 x 1 array:

```py
array_2d = np.array([[1, 2], [3, 4]])
array_3d = np.expand_dims(array_2d, 2)
# [[[1], [2]], [[3], [4]]]
```

alternative:

```
array_3d = array_2d[:, :, np.newaxis]
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

Arrays can be copied via `array.copy()`

## Concatenating arrays

concatenating along an axis (axis 0 by default):

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
np.concatenate([a2d, a2d], axis=1)
```

## Matrix multiplication

via the binary Operator `@`

```py
a = np.array([1, 1])

M = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(a @ M)
# array([0.   , 1.414])
```

## Matrix multiplication

example: rotating several points by 45° (counterclockwise):

```py
points = np.array([[0, 0], [0, 1], [1, 1], [1, 0]])

M = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(points @ M)
```

## Matrix multiplication

example:

known data: prices of various products, number of items in stock for different stores

```py
prices = np.array([3.99, 12.99, 5.90, 15])
quantities = np.array([[0, 80, 80, 100],
                       [100, 0, 0, 0],
                       [50, 0, 0, 50]])
```

wanted: total value for each of the three stores

# Plotting

### Data visualization

## Plotting

Basic (low-level) library for plotting: _matplotlib_

Higher-level interfaces:

- _pyplot_ (contained in matplotlib, similar to matlab's plotting interface)
- _pandas_ plotting functions
- _seaborn_

## Simple plot with pyplot

```py
import numpy as np
import matplotlib.pyplot as plt

x = np.array([0, 1, 2, 3])

y1 = x*2
y2 = x**2

plt.plot(x, y1)
plt.plot(x, y2)
```

In Jupyter plots are shown automatically

In a regular terminal / program:

```py
plt.show()
```

## Simple plot with pyplot

results:

<img src="assets/pyplot-simple-graphs.png" alt="Simple plot in pyplot" />

## Exercise

Create a plot that shows the sine and cosine functions in the interval from _0_ to _2π_

## Exercise

```py
x = np.linspace(0, 2*3.1415, 200)

plt.plot(x, np.sin(x))
plt.plot(x, np.cos(x))
```

## Exercise

Create a Python function that plots a _gaussian function_ based on its parameters _mu_ and _sigma_:

```py
plot_gaussian_function(mu, sigma)
```

# Pyplot: Configuration and Styling

## Styling

Predefined stylesheets are available via:

```py
plt.style.use("stylename")
```

[Reference of available styles](https://matplotlib.org/3.3.0/gallery/style_sheets/style_sheets_reference.html)

## Styling graphs

short form:

```py
plt.plot(x, y, "C0X--")
```

long form:

```py
plt.plot(x, y, color="C0", marker="X", linestyle="dashed")
```

The long form enables more detailed specification of color and size

## Styling graphs

specifying colors:

- theme color (_C0_ ... _C10_)
- color name (_green_ / _lightblue_ / ...)
- short name (_r_ / _g_ / _b_ / _c_ / _m_ / _y_ / _k_)
- hex code (e.g. _#FFAA00_)
- RGB tuple (e.g. `(1, 0.7, 0)`)

## Styling graphs

line styles:

- `""` (_none_)
- `"-"` (_solid_)
- `"--"` (_dashed_)
- `":"` (_dotted_)
- `"-."` (_dashdot_)

## Styling graphs

markers:

- `""` (none)
- `","` (small dot)
- `"."` (medium dot)
- `"o"` (large dot)
- `"s"` (square)
- `"X"`
- `"+"`
- ...

## Styling graphs

important parameters:

- `color`
- `linestyle`
- `linewidth`
- `marker`
- `markersize`

## Labels

- `plt.title("Trigonometric functions")`
- `plt.xlabel("x (radians)")`
- `plt.ylabel("y")`

## Labels

labelling multiple graphs:

```py
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')

plt.legend()
```

## Axes

disabling axes:

```py
plt.axis("off")
```

## Axes limits

Fit axes (without gaps):

```py
plt.axis("tight")
```

Show a specific region:

```py
plt.axis([-1, 1, -1, 1])
```

Show a specific region of one axis:

```py
plt.xlim(-1, 1)
```

## Scaling

Equal distances on both axes:

```py
plt.axis("equal")
```

Equal distances on both axes, restricting plot area to used data ranges:

```py
plt.axis("scaled")
```

## Grid

```py
plt.grid(True)
```

## Ticks

```py
plt.yticks([-1, 0, 1])
plt.xticks(np.linspace(0, 2*np.pi, 5))
```

## Exercises

- sine and cosine with extended options
- n-th prime and approximation via _n \* ln(n)_
- estimating pi via random points

## Exercise: sine and cosine with extended options

possible result:

<img src="assets/pyplot-sine-cosine-advanced.png" alt="Advanced plot of sine and cosine" />

## Exercise: sine and cosine with extended options

```py
import matplotlib.pyplot as plt
import numpy as np

plt.style.use("seaborn")

x = np.linspace(0, 2*np.pi, 100)
sin = np.sin(x)
cos = np.cos(x)
plt.plot(x, sin, "C0--", label="sin(x)")
plt.plot(x, cos, "C1:", label="cos(x)")

pi_multiples = np.array([0, 0.5, 1, 1.5, 2]) * np.pi
sin_points = np.sin(pi_multiples)
cos_points = np.cos(pi_multiples)
plt.plot(pi_multiples, sin_points, "C0o")
plt.plot(pi_multiples, cos_points, "C1o")

plt.title("Trigonometric functions")
plt.xlabel("x (radians)")
plt.xticks(np.linspace(0, 2*np.pi, 5))
plt.legend()
plt.axis("scaled")
```

## Resource

see [Python Data Science Handbook: Simple Line Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.01-simple-line-plots.html)

# Pyplot: basic plot types

## Basic plot types

- graph: `plt.plot(x, y)` / `plt.plot(y)`
- bar chart: `plt.bar(x, y)`
- scatter plot: `plt.plot(x, y, ".")` / `plt.scatter(x, y, size, color)`
- histogram: `plt.hist(x)`
- box plot: `plt.boxplot(x)`
- pie chart: `plt.pie(x, labels=...)`

## Graph

Graph of associated values of x and y:

```py
plt.plot(x, y)
```

Graph with automatic x (0, 1, ...):

```py
plt.plot(y)
```

## Graph

multiple data sets:

```py
x = [1, 2, 3, 4]

y1 = [1, 2, 3, 4]
y2 = [3, 0 , 1, 0]

plt.plot(x, [y1, y2])
```

## Bar charts

```py
plt.bar(x, y, width=0.6)
plt.bar(x, y, width=1, align="edge")

plt.bar(
    [0, 1, 2],
    [9.6, 17, 9.8],
    tick_label=["China", "Russia", "USA"]
)

plt.barh([0, 1, 2], [9.6, 17, 9.8])
```

## Scatter plot

creates data points with two (or more) values - one on the x-axis and the other on the y-axis

simple:

```py
plt.plot(x, y, ".")
```

advanced:

```py
plt.scatter(x, y, size, color)
```

## Histogram

Counts the occurence of certain values / ranges

```py
plt.hist(many_simulated_dice_rolls_with_10_dice)
```

```py
plt.hist(
    many_simulated_dice_rolls_with_10_dice,
    bins=[15, 20, 25, 30, 35, 40, 45, 50, 55]
)
```

```py
plt.hist(
    many_simulated_dice_rolls_with_10_dice,
    density=True
)
```

## Box plot

Visualization of statistical data in a diagram (minimum, median, maximum, ...)

```py
plt.boxplot(dice_simulation_1)
```

```py
plt.boxplot(
    [dice_simulation_1, dice_simulation_2],
    labels=["simulation 1", "simulation 2"]
)
```

## Pie chart

```py
plt.pie([3, 10, 17, 9], labels=["a", "b", "c", "d"])

plt.pie([3, 10, 17, 9], explode=[0, 0, 0, 0.1])
```

# Visualizing iris data

## Iris data set

**Iris data set**: measurements of 150 Iris flowers (50 of type _iris setosa_, 50 of type _iris versicolor_ and 50 of type _iris virginica_)

data entries: _sepal length_, _sepal width_, _petal length_, _petal width_

## Loading the data

```py
import pandas as pd
iris = pd.read_csv(
    "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
)
# get all rows and the first four columns as numpy data
iris = iris.iloc[:,:4].to_numpy()

sepal_length = iris[:,0]
sepal_width = iris[:,1]
petal_length = iris[:,2]
petal_width = iris[:,3]
```

## Scatter plot I

scatter plot of petal_length and petal_width

plot the first 50, the second 50 and the thrid 50 data points separately (in separate colors)

## Scatter plot II

scatter plot of all four iris properties

use the color and size to visualize _sepal length_ and _sepal width_

## Histogram and boxplot

histogram of the _petal length_

boxplot of all four measurements

## Scatter plot: solutions

```py
plt.plot(petal_length[:50], petal_width[:50], ".", label="setosa")
plt.plot(petal_length[50:100], petal_width[50:100], ".", label="versicolor")
plt.plot(petal_length[100:150], petal_width[100:150], ".", label="virginica")

plt.legend()
```

```py
plt.scatter(petal_length, petal_width, sepal_length*10, sepal_width)
```

## Histogram and boxplot: solutions

```py
plt.hist(
    petal_length,
    bins=np.arange(0.5, 7.5, 0.5)
)
```

```py
plt.boxplot(
    [petal_length, petal_width, sepal_length, sepal_width],
    labels=["petal length", "petal width", "sepal length", "sepal width"]
)
```

# Advanced plot types

## Advanced plot types

- plotting data points with more than 2 features
- plotting z = f(x, y)
- plotting density of some distribution (1D and 2D)

## Plotting data points with more than 2 features

- advanced scatter plot (size, color) - pyplot, pandas, seaborn
- scatter matrix - pandas, seaborn

## Plotting z = f(x, y)

- contour plots - pyplot, pandas, seaborn
- 3d plots - matplotlib

<!-- list separator -->

- [Python Data Science Handbook: Density and Contour Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.04-density-and-contour-plots.html)
- [Python Data Science Handbook: Three-Dimensional Plotting in Matplotlib](https://jakevdp.github.io/PythonDataScienceHandbook/04.12-three-dimensional-plotting.html)

## Plotting density of some distribution

- (histogram)
- (box plot)
- KDE (kernel density estimation) - pandas, seaborn
- violin plot - seaborn
- 2D histogram - pyplot (hist2d, hexbin)
- 2D KDE - seaborn

see [Python Data Science Handbook: Histograms, Binnings, and Density](https://jakevdp.github.io/PythonDataScienceHandbook/04.05-histograms-and-binnings.html)

# Pyplot: figure, axes & subplots

## Figure & axes

Figure = entire drawing

Axes = coordinate system that can display data

A figure can contain multiple axes objects next to one another

## Figure

Every drawing in _pyplot_ is created via a _figure_ object (the figure is usually created automatically when plotting)

Manually creating a figure of size 800 x 600 px (assuming 100 dpi):

```py
fig = plt.figure(
    figsize=(8, 6),
    facecolor="#eeeeee"
)
```

This will automatically become the active figure.

## Figure objects

exporting a figure:

```py
fig.savefig("myplot.png")
fig.savefig("myplot.svg")
```

## Axes objects

Getting the active _axes_ object:

```py
ax = plt.gca() # get current axes
```

The Methods of `plt` that we've previously seen call methods of the active _Axes_ object in the background:

```py
ax.plot(...)
ax.set_title(...)
ax.set_xlabel(...)
ax.legend()
ax.set_aspect("equal")
```

## Axes objects

Task: Create a sine and cosine plot via _Axes_

## Axis and Axes

naming to keep in mind:

- `plt.axis`: e.g. for setting scaling
- `plt.axes`: for creating a nex coordinate system

actual meaning (from Lating): _axis_ = singular, _axes_ = plural

## Subplots

Creating multiple _Axes_ objects in a grid (here: 2 rows, 3 columns):

```py
fig, ax = plt.subplots(2, 3)

ax0 = ax[0, 0]
ax1 = ax[0, 1]
ax5 = ax[1, 2]
```
