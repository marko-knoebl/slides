# Pyplot: Gundlegende Plots

## Grundlegende Plots

- Graph: `plt.plot(x, y)` / `plt.plot(y)`
- Säulen- und Balkendiagramm: `plt.bar(x, y)`
- Scatter Plot: `plt.plot(x, y, ".")` / `plt.scatter(x, y, size, color)`
- Histogramm: `plt.hist(x)`
- Box Plot: `plt.boxplot(x)`
- Tortendiagramm: `plt.pie(x, labels=...)`

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

y1 = [1, 2, 3, 4]
y2 = [3, 0 , 1, 0]

plt.plot(x, [y1, y2])
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

Erstellt Datenpunkte mit zwei (oder mehr) zugehörigen Werten - einer auf der x- und einer auf der y-Achse

Einfach:

```py
plt.plot(x, y, ".")
```

Fortgeschritten:

```py
plt.scatter(x, y, size, color)
```

## Histogramm

Zählt die Häufigkeit von bestimmten Werten / Wertebereichen

```py
plt.hist(
    body_heights_men,
    bins=[150, 160, 170, 180, 190, 200]
)
```

```py
plt.hist(
    body_heights_men,
    bins=[150, 170, 180, 200],
    density=True
)
```

## Box Plot

Visualisierung von statistischen Daten in einem Diagramm (Minimum, Median, Maximum, ...)

```py
plt.boxplot(
    [body_heights_men, body_heights_women],
    labels=["men", "women"]
)
```

## Tortendiagramm

```py
plt.pie([3, 10, 17, 9], labels=["a", "b", "c", "d"])

plt.pie([3, 10, 17, 9], explode=[0, 0, 0, 0.1])
```
