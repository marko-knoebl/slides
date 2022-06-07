# Plotting

## Plotting

Basic (low-level) library for plotting: _matplotlib_

Higher-level interfaces:

- _pyplot_ (contained in matplotlib, similar to matlab's plotting interface)
- _pandas_ plotting functions (based on pyplot)
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

## Example

We'll create a plot that shows the sine and cosine functions in the interval from _0_ to _2π_

## Example

```py
x = np.linspace(0, 2*3.1415, 200)

plt.plot(x, np.sin(x))
plt.plot(x, np.cos(x))
```

## Exercise

Create a Python function that plots a [gaussian function](https://en.wikipedia.org/wiki/Gaussian_function) based on its parameters _mu_ and _sigma_:

```py
plot_gaussian_function(mu, sigma)
```
