# Pyplot: Überblick und Demo

## Pyplot: Überblick und Demo

_Pyplot_: Interface zum Darstellen von Daten - in matplotlib beinhaltet, aus _pandas_ aufrufbar

## Pyplot: Überblick und Demo

direktes Verwenden von pyplot:

```py
import matplotlib.pyplot as plt

plt.hist(
    titanic["Pclass"],
    bins=[1, 2, 3, 4],
    align="left",
)
plt.xticks([1, 2, 3]);
```

pyplot aus pandas heraus verwenden:

```py
titanic["Pclass"].plot.hist(
    bins=[1, 2, 3, 4],
    align="left",
    xticks=[1, 2, 3],
);
```

## Pyplot: Überblick und Demo

```py
plt.boxplot(
    titanic["Age"].dropna(),
    whis=(0, 100),
    labels=["Age"]
);
```

## Pyplot: Überblick und Demo

```py
plt.hist(
    titanic["Age"],
    bins=[0, 10, 20, 30, 40, 50, 60, 70, 80],
);
```
