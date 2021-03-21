# Pyplot: overview and demo

## Pyplot: overview and demo

_Pyplot_: data plotting interface - included in matplotlib, accesible from _pandas_

## Pyplot: overview and demo

using pyplot directly:

```py
import matplotlib.pyplot as plt

plt.hist(
    titanic["pclass"],
    bins=[1, 2, 3, 4],
    align="left",
)
plt.xticks([1, 2, 3])
```

using pyplot from pandas:

```py
titanic["pclass"].plot.hist(
    bins=[1, 2, 3, 4],
    align="left",
    xticks=[1, 2, 3],
)
```

## Pyplot: overview and demo

```py
titanic["age"].plot.box(whis=[0, 100])
```

## Pyplot: overview and demo

```py
plt.hist(
    titanic["age"],
    bins=[0, 10, 20, 30, 40, 50, 60, 70, 80],
    color="C1",
)
```
