# Preparing data

## Preparing data

desired data format for machine learning algorithms:

- _x_ or _X_: array with numeric input data (2-dimensional for _scikit-learn_, can be higher-dimensional for _keras_)
- _y_ or _Y_: one- or two-dimensional array with numeric results

## Preparing data

tasks:

- flattening nested arrays
- scaling values
- handling missing data
- encoding categorical data as numerical data
- encoding text data as numerical data

## Scaling values

Which of these stars is more similar to the sun?

```py
# data: radius (km), mass (kg), temperature (K)
sun =    [7.0e7, 2.0e30, 5.8e3]

star_a = [6.5e7, 2.2e30, 5.2e3]
star_b = [7.0e8, 2.1e30, 8.1e3]
```

some machine learning algorithms (like k-Nearest-Neighbors) use absolute values.

Here the algorithm would only take into account the mass as all other values are tiny in comparison

## Scaling values

Solution: Before applying an algorithm, the values are centered and scaled (e.g. so their mean is 0 and the standard deviation is 1)

## Missing data

Missing data will often appear as `NaN`s

possible handling:

- deleting any rows that contain undefined values somewhere
- interpolating missing values by other values

## Categories as data

input or output data may be categorical data - e.g. country, occupation, measuring method

example input data:

```py
[["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
```

desired result: encoding as numeric values

## Categories as data

input data:

```py
[["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
```

encoding as ordinals (not appropriate for all algorithms, as there is an implicit order):

```py
[[0., 0.], [1., 0.], [2., 1.]]
```

## Categories as data

input data:

```py
[["fr", "chrome"],
 ["uk", "chrome"],
 ["us", "firefox"]]
```

one-hot-encoding:

```py
# fr?, uk?, us?, chrome?, firefox?
[[1., 0., 0., 1., 0.],
 [0., 1., 0., 1., 0.],
 [0., 0., 1., 0., 1.]]
```

## Text data

example preprocessing for text classification: counting words
