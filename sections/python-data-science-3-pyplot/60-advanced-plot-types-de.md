# Weitere Plots

## Weitere Plots

- Plotten von Datenpunkten mit mehr als 2 Merkmalen
- Plotten von z = f(x, y)
- Plotten der Dichtefunktion einer Verteilung (1D und 2D)

## Plotten von Datenpunkten mit mehr als 2 Merkmalen

- erweiterter Scatter Plot (Größe, Farbe) - pyplot, pandas, seaborn
- Scatter Matrix - pandas, seaborn

## Scatter Matrix

Zusätzliche Plot-Funktion in _pandas_: Scatter Matrix

Erstellt mehrere Scatter Plots in einem Raster

Bei 4 Datenserien werden 4x4=16 Plots erstellt (Scatter Plots und Histogramme)

```py
from pandas.plotting import scatter_matrix

scatter_matrix(iris)
```

## Plotten von z = f(x, y)

- Contour Plots - pyplot, pandas, seaborn
- 3D Plots - matplotlib

<!-- list separator -->

- [Python Data Science Handbook: Density and Contour Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.04-density-and-contour-plots.html)
- [Python Data Science Handbook: Three-Dimensional Plotting in Matplotlib](https://jakevdp.github.io/PythonDataScienceHandbook/04.12-three-dimensional-plotting.html)

## Plotten der Dichtefunktion einer Verteilung

- (Histogramm)
- (Box Plot)
- KDE (Kernel Density Estimation) - pandas, seaborn
- Violin Plot (Box Plot + KDE) - seaborn
- 2D Histogramm - pyplot (hist2d, hexbin)
- 2D KDE - seaborn

siehe [Python Data Science Handbook: Histograms, Binnings, and Density](https://jakevdp.github.io/PythonDataScienceHandbook/04.05-histograms-and-binnings.html)
