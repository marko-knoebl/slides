# Plotting basics

## Plotting basics

plotting functionality of _pandas_ is based on _pyplot_ (similar commands)

## Simple plot with pyplot

basic functionality of _pyplot_:

```py
import numpy as np
import matplotlib.pyplot as plt

x = np.array([0, 1, 2, 3])

y1 = x*2
y2 = x**2

plt.plot(x, y1)
plt.plot(x, y2)
```

## Simple plot with pyplot

result:

<img src="assets/pyplot-simple-graphs.png" alt="Simple plot in pyplot" />

## Plot types

Basic plot types:

- line plot / graph
- bar chart
- histogram
- box plot
- scatter plot
- pie chart

## Plotting options

example pyplot options:

```py
plt.plot(x, y1, color="C3", marker="X", linestyle="dashed")
```
