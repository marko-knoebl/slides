# Plotting

## Plotting

Grundlegende (low-level) Library für Plotting: _matplotlib_

Abstrahierende Interfaces zu grundlegenden matplotlib Funktionen:

- _pyplot_ (enthalten in matplotlib, ähnlich zum matlab Plotinterface)
- _pandas_ Plotfunktionen (basieren auf pyplot)
- _seaborn_

## Einfacher Plot mit pyplot

```py
import numpy as np
import matplotlib.pyplot as plt

x = np.array([0, 1, 2, 3])

y1 = x*2
y2 = x**2

plt.plot(x, y1)
plt.plot(x, y2)
```

In Jupyter werden Plots automatisch angezeigt

wenn wir _nicht_ Jupyter verwenden zusätzlich:

```
plt.show()
```

## Einfacher Plot mit pyplot

Ergebnis:

<img src="assets/pyplot-simple-graphs.png" alt="Simple plot in pyplot" />

## Beispiel

Wir erstellen einen Plot, der die Sinus- und Kosinusfunktion im Intervall von _0_ bis _2π_ zeigt.

## Beispiel

```py
x = np.linspace(0, 2*3.1415, 200)

plt.plot(x, np.sin(x))
plt.plot(x, np.cos(x))
```

## Übung

Erstelle eine Python-Funktion, die eine [Gaußsche Glockenkurve](https://en.wikipedia.org/wiki/Gaussian_function) basierend auf ihren Parametern _mu_ und _sigma_ zeichnet:

```py
plot_gaussian_function(mu, sigma)
```
