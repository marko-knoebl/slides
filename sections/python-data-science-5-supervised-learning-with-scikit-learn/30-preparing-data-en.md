# Preparing data

## Preparing data

desired data format for machine learning algorithms:

- _x_ or _X_: two-dimensional array with numeric input data
- _y_ or _Y_: one- or two-dimensional array with numeric results

## Preparing data

tasks:

- flattening nested arrays
- scaling values
- handling missing data
- encoding categorical data as numerical data
- encoding text data as numerical data

## Preparing data in sklearn

Classes for preparing data have these methods:

- `.fit`: creates a data transformation based on existing input data (`X1`)
- `.transform`: transforms input data (`X2`) based on the transformation
- `.fit_transform`: does both in one step (for the same data)
- `.inverse_transfrom`: reverses a transformation (not available for all transformations)

## Scaling values

Centering and scaling values so the mean is 0 and the standard deviation is 1:

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

## Handling missing data

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
