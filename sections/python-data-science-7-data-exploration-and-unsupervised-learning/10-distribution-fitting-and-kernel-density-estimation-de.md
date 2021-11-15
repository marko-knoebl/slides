# "Distribution fitting" und "kernel density estimation"

## "Distribution fitting" und "kernel density estimation"

Ziel: aus gegebenen Stichproben einer Wahrscheinlichkeitsverteilung die Verteilung herleiten

Beispiel: Altersverteilung der Titanic-Daten

```py
titanic["Age"].plot.hist(density=True, bins=20)
```

## Kernel Density Estimation

Visualisierung der _Kernel Density Estimation_ (_KDE_):

```py
titanic["Age"].plot.kde(xlim=(0, 80))
```

_Kernel Density Estimation_ = Approximation einer Dichtefunktion durch kombinieren (summieren) vieler Basisfunktionen (z.B. Normalverteilungen)

siehe: [Python Data Science Handbook: Kernel Density Estimation](https://jakevdp.github.io/PythonDataScienceHandbook/05.13-kernel-density-estimation.html)

## Distribution fitting

Paket `scipy.stats`: Erlaubt es, aus Beispieldaten verschiedene Arten von Verteilungen zur Approximation herzuleiten:

- _normal_
- _skew normal_
- _log-normal_
- _gamma_
- ...

## Distribution fitting

Approximierung einer Distribution - via _normal_ oder _skew normal_:

```py
from scipy import stats

# location=mu, scale=sigma
(location, scale) = stats.norm.fit(titanic["Age"].dropna())
dist_norm = stats.norm(location, scale)

(shape, location, scale) = stats.skewnorm.fit(titanic["Age"].dropna())
dist_skewnorm = stats.skewnorm(shape, location, scale)
```

## Distribution fitting

Visualisierung:

```py
x = np.linspace(0, 80, 100)
plt.plot(x, dist_norm.pdf(x))
plt.plot(x, dist_skewnorm.pdf(x))
titanic["Age"].plot.hist(density=True, bins=20)
```

## Distribution fitting

Aufgabe: Verwende weitere Verteilungen (z.B. _lognorm_, _gamma_, ...)

## Distribution fitting

Evaluierung (_Kolmogorov-Smirnov_-Test):

```py
stats.kstest(titanic["Age"].dropna(), dist_norm.cdf)

# KstestResult(statistic=0.054, pvalue=0.029)
```
