# Plotting

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

## Plotting

If we are not in a Jupyter notebook we still have to call:

```py
import matplotlib.pyplot as plt

plt.show()
```
