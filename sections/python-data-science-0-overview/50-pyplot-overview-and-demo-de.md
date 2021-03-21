# Pyplot: Überblick und Demo

## Pyplot: Überblick und Demo

_Pyplot_: Interface zum Darstellen von Daten - in matplotlib beinhaltet, aus _pandas_ aufrufbar

## Pyplot: Überblick und Demo

direktes Verwenden von pyplot:

```py
import matplotlib.pyplot as plt

plt.hist(
    titanic["pclass"],
    bins=[1, 2, 3, 4],
    align="left",
)
plt.xticks([1, 2, 3])
```

pyplot aus pandas heraus verwenden:

```py
titanic["pclass"].plot.hist(
    bins=[1, 2, 3, 4],
    align="left",
    xticks=[1, 2, 3],
)
```

## Pyplot: Überblick und Demo

```py
titanic["age"].plot.box(whis=[0, 100])
```

## Pyplot: Überblick und Demo

```py
plt.hist(
    titanic["age"],
    bins=[0, 10, 20, 30, 40, 50, 60, 70, 80],
    color="C1",
)
```
