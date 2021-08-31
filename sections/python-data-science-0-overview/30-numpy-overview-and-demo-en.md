# NumPy: overview and demo

## NumPy

_NumPy_: library for efficient processing of numerical data - based on multidimensional arrays

## NumPy: overview and demo

```py
import numpy as np

# create a 2-dimensional array
iris = np.array([[5.1, 3.5, 1.4, 0.2],
                 [4.9, 3.0, 1.4, 0.2],
                 [4.7, 3.2, 1.3, 0.2],
                 [4.6, 3.1, 1.5, 0.2],
                 [5.0, 3.6, 1.4, 0.2]])
```

## NumPy: overview and demo

```py
# get the first column
iris[:, 0]  # [5.1, 4.9, 4.7, 4.6, 5.0]
# get the second column
iris[:, 1]  # [3.5, 3.0, 3.2, 3.1, 3.6]
```

## NumPy: overview and demo

```py
# get the mean value of the first column
iris[:, 0].mean()  # 4.86

# divide the entries in the first column by the entries
# in the second column
iris[:, 0] / iris[:, 1]  # [1.46, 1.63, 1.47, 1.48, 1.39]
```
