# Grundlegende Plots mit pyplot

## Graph

Graph zusammengehöriger x- und y-Werte:

```py
plt.plot(x, y)
```

Graph mit automatischem x (0, 1, ...):

```py
plt.plot(y)
```

## Graph

Mehrere Datensätze:

```py
x = [1, 2, 3, 4]

y = [[1, 2, 3, 4],
     [3, 0, 1, 0]]

plt.plot(x, y)
```

## Säulen- und Balkendiagramm

```py
plt.bar(x, y, width=0.6)
plt.bar(x, y, width=1, align="edge")

plt.bar(
    [0, 1, 2],
    [9.6, 17, 9.8],
    tick_label=["China", "Russia", "USA"]
)

plt.barh([0, 1, 2], [9.6, 17, 9.8])
```

## Scatter Plot

Einfach:

```py
plt.plot(x, y, ".")
```

Fortgeschritten:

```py
plt.scatter(x, y, size, color)
```

## Histogramm

```py
plt.hist(iris[:, 2], bins=[1, 2, 4, 5, 6], density=True)
```

## Box Plot

```py
plt.boxplot(iris[:, :4], labels=["a", "b", "c", "d"])
```

## Tortendiagramm

```py
plt.pie([3, 10, 17, 9], labels=["a", "b", "c", "d"])

plt.pie([3, 10, 17, 9], explode=[0, 0, 0, 0.1])
```
