# NumPy: Überblick und Demo

## NumPy

_NumPy_: Library zur effizienten Verarbeitung numerischer Daten - basierend auf mehrdimensionalen Arrays

## NumPy: Überblick und Demo

```py
import numpy as np

# create a 2-dimensional array
iris = np.array([[5.1, 3.5, 1.4, 0.2],
                 [4.9, 3.0, 1.4, 0.2],
                 [4.7, 3.2, 1.3, 0.2],
                 [4.6, 3.1, 1.5, 0.2]])
```

## NumPy: Überblick und Demo

```py
# get the first column
col0 = iris[:, 0]  # [5.1, 4.9, 4.7, 4.6]
# get the second column
col1 = iris[:, 1]  # [3.5, 3.0, 3.2, 3.1]
```

## NumPy: Überblick und Demo

```py
# get the mean value of the first column
mean0 = col0.mean()  # 4.825

# divide the entries in the first column by the entries
# in the second column
quot = col0 / col1  # [1.46, 1.63, 1.47, 1.48]
```
