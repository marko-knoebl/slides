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
