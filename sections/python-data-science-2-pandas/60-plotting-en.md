# Plotting

## Plotting

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

In Jupyter plots are shown automatically

In a regular terminal / program:

```py
plt.show()
```

## Simple plot with pyplot

result:

<img src="assets/pyplot-simple-graphs.png" alt="Simple plot in pyplot" />

## Plotting

wrappers for _pyplot_ functions that exist on _Series_ and _DataFrame_ objects:

- `data.plot()` or `data.plot.line()`
- `data.plot.bar()`
- `data.plot.scatter()`
- `data.plot.hist()`
- `data.plot.box()`
- `data.plot.pie()`

## Plotting

interface of the pandas plot functions:

similar to _pyplot_ - except data doesn't have to be passed explicitly:

```py
# pyplot
plt.plot(data, color="C0", marker="o", linestyle="--")
```

```py
# pandas
data.plot(color="C0", marker="o", linestyle="--")
```

## Plotting

For a DataFrame, we can pass lists of configurations for individual graphs (only works for some of the options):

```py
df.plot(color=["C0", "C1"], style=["o--", "X--"])
```
