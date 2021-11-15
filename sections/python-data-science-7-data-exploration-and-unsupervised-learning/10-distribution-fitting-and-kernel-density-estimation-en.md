# Distribution fitting and kernel density estimation

## Distribution fitting and kernel density estimation

Given some random results from a probability distribution, we want to determine the distribution

example: age distribution of the titanic data

```py
titanic["Age"].plot.hist(density=True, bins=20)
```

## Kernel density estimation

visualization of the _kernel density estimation_ (KDE):

```py
titanic["Age"].plot.kde(xlim=(0, 80))
```

_kernel density estimation_ = approximation of density by combining (summing) many base functions (e.g. normal distributions)

see: [Python Data Science Handbook: Kernel Density Estimation](https://jakevdp.github.io/PythonDataScienceHandbook/05.13-kernel-density-estimation.html)

## Distribution fitting

package `scipy.stats`: allows for fitting various types of distributions:

- _normal_
- _skew normal_
- _log-normal_
- _gamma_
- ...

## Distribution fitting

approximating a distribution - via _normal_ or _skew normal_:

```py
from scipy import stats

# location=mu, scale=sigma
(location, scale) = stats.norm.fit(titanic["Age"].dropna())
dist_norm = stats.norm(location, scale)

(shape, location, scale) = stats.skewnorm.fit(titanic["Age"].dropna())
dist_skewnorm = stats.skewnorm(shape, location, scale)
```

## Distribution fitting

visualize approximations:

```py
x = np.linspace(0, 80, 100)
plt.plot(x, dist_norm.pdf(x))
plt.plot(x, dist_skewnorm.pdf(x))
titanic["Age"].plot.hist(density=True, bins=20)
```

## Distribution fitting

Task: fit some other distributions (e.g. _lognorm_, _gamma_, ...)

## Distribution fitting

evaluation (_Kolmogorov-Smirnov_-test):

```py
stats.kstest(titanic["Age"].dropna(), dist_norm.cdf)

# KstestResult(statistic=0.054, pvalue=0.029)
```
