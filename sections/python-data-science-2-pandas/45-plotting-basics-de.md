# Plotting-Grundlagen

## Plotting-Grundlagen

Plotting-Funktionalität von _pandas_ basiert auf _pyplot_ (ähnliche Befehle)

## Einfacher Plot mit Pyplot

grundlegende Funktionalität von _pyplot_:

```py
import numpy as np
import matplotlib.pyplot as plt

x = np.array([0, 1, 2, 3])

y1 = x*2
y2 = x**2

plt.plot(x, y1)
plt.plot(x, y2)
```

## Einfacher Plot mit Pyplot

Resultat:

<img src="assets/pyplot-simple-graphs.png" alt="Simple plot in pyplot" />

## Arten von Plots

grundlegende Arten von Plots:

- Liniendiagramm / Graph
- Säulendiagramm (bar chart)
- Histogramm
- Box-Plot
- Streudiagramm (scatter plot)
- Tortendiagramm (pie chart)

## Optionen für das Plotting

Beispiel für Pyplot-Optionen:

```py
plt.plot(x, y1, color="C3", marker="X", linestyle="dashed")
```
