# Advanced plot types

## Advanced plot types

- plotting data points with more than 2 features
- plotting z = f(x, y)
- plotting density of some distribution (1D and 2D)

## Plotting data points with more than 2 features

- advanced scatter plot (size, color) - pyplot, pandas, seaborn
- scatter matrix - pandas, seaborn

## Scatter matrix

Extra function in _pandas_: scatter matrix

creates several scatter plots in a grid

if there are 4 data series it will create 4x4=16 plots (scatter plots and histograms)

```py
from pandas.plotting import scatter_matrix

scatter_matrix(iris)
```

## Plotting z = f(x, y)

- contour plots - pyplot, pandas, seaborn
- 3d plots - matplotlib

<!-- list separator -->

- [Python Data Science Handbook: Density and Contour Plots](https://jakevdp.github.io/PythonDataScienceHandbook/04.04-density-and-contour-plots.html)
- [Python Data Science Handbook: Three-Dimensional Plotting in Matplotlib](https://jakevdp.github.io/PythonDataScienceHandbook/04.12-three-dimensional-plotting.html)

## Plotting density of some distribution

- (histogram)
- (box plot)
- KDE (kernel density estimation) - pandas, seaborn
- violin plot (box plot + KDE) - seaborn
- 2D histogram - pyplot (hist2d, hexbin)
- 2D KDE - seaborn

see [Python Data Science Handbook: Histograms, Binnings, and Density](https://jakevdp.github.io/PythonDataScienceHandbook/04.05-histograms-and-binnings.html)
