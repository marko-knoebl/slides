# Preparing data

## Preparing data

usually:

- _X_: two-dimensional array with numeric input data
- _y_ / _Y_: one- or two-dimensional array with numeric results

## Preparing data

tasks:

- scaling values
- adding missing data
- encode categorical data as numerical data
- encode text data as numerical data

## Preparing data

Classes for preparing data have these methods:

- `.fit`: creates a data transformation based on existing input data (`X1`)
- `.transform`: transforms input data (`X2`) based on the transformation
- `.fit_transform`: does both in one step (for the same data)
- `.inverse_transfrom`: reverses a transformation (not available for all transformations)

## Scaling values

Which of these stars is more similar to the sun?

```py
# data: radius (km), mass (kg), temperature (K)
sun =    [7.0e7, 2.0e30, 5.8e3]

star_a = [6.5e7, 2.2e30, 5.2e3]
star_b = [7.0e8, 2.1e30, 8.1e3]
```

Machine learning algorithms (like k-Nearest-Neighbor) use absolute values.

Here the algorithm would only take into account the mass as all other values are tiny in comparison

## Scaling values

Solution: The values are centered and scaled so their mean is 0 and the standard deviation is 1

```py
from sklearn import preprocessing
import numpy as np

stars = np.array([[ 7.0e7, 2.0e30, 5.8e3],
                  [ 6.5e7, 2.2e30, 5.2e3],
                  [ 7.0e9, 2.1e30, 3.1e3]])

scaler = preprocessing.StandardScaler().fit(stars)
X = scaler.transform(stars)
```

## Scaling values

scaled values:

```py
array([[-0.70634165, -1.22474487,  0.95025527],
       [-0.70787163,  1.22474487,  0.43193421],
       [ 1.41421329,  0.        , -1.38218948]])
```

## Missing data

Missing data will often appear as `NaN`s.

possible handling:

- deleting any rows that contain undefined values somewhere
- interpolating missing values by other values

## Missing data

interpolation:

```py
import numpy as np
from sklearn.impute import SimpleImputer

X = np.array([[ np.nan, 0,   3  ],
              [ 3,   7,   9  ],
              [ 3,   5,   2  ],
              [ 4,   np.nan, 6  ],
              [ 8,   8,   1  ]])

imputer = SimpleImputer(strategy="mean").fit(X)

imputer.transform(X)
imputer.transform(np.array([[np.nan, 1, 1]]))
```

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
[["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
```

one-hot-encoding:

```py
# fr?, uk?, us?, chrome?, firefox?
[[1., 0., 0., 1., 0.],
 [0., 1., 0., 1., 0.],
 [0., 0., 1., 0., 1.]]
```

## Categories as data

preprocessors:

- `OrdinalEncoder` (ordinals for input categories)
- `LabelEncoder` (ordinals for target categories)
- `OneHotEncoder` (one-hot-encoding for input categories, sparse by default)
- `LabelBinarizer` (one-hot-encoding for target categories)

## Categories as data

example:

```py
from sklearn.preprocessing import LabelBinarizer

encoder = LabelBinarizer().fit(iris_species)
iris_species_one_hot = encoder.transform(iris_species)
```

## Text data

example for preprocessing text data: counting words

```py
from sklearn.feature_extraction.text import CountVectorizer

sample = ['problem of evil',
          'evil queen',
          'horizon problem']

vectorizer = CountVectorizer().fit(sample)
print(vectorizer.vocabulary_)
X = vectorizer.transform(sample)
print(X)
print(X.todense())
```

## Pipelines

Pipelines can be composed from several transforming algorithms and one predicting algorithm:

```py
from sklearn.pipeline import make_pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression

model = make_pipeline(
    SimpleImputer(strategy='mean'),
    StandardScaler(),
    LinearRegression()
)
```

## Task: preparing iris data

```py
import pandas as pd
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",
    header=None)
```

first line: `5.1,3.5,1.4,0.2,Iris-setosa`

tasks:

- represent categories via one-hot-encoding
- scale input data
- compare k-nearest-neighbor classification on scaled and unscaled data
