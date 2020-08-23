# Machine learning

## Methods

- **supervised learning**
  - **regression**
  - **classification**
- unsupervised learning
  - clustering
  - dimensionality reduction / compression
- reinforcement learning
  - optimization

## Regression

Assigning numeric values to numeric input data

examples:

- estimation of distance of galaxy based on its redshift
- prediction of stock price based on economic data

## Classification

Assigning labels to numeric input data

examples:

- classification as spam based occurences of words / phrases
- recognition of objects / persons / symbols in images
- diagnosis of illnesses based on symptoms / medical test data

## Clustering

Recognizing groups / clusters in input data

examples:

- recognizing reoccuring elements in computer vision

## Dimensionality reduction

mapping points in n-dimensional space to points in m-dimensional space (m &lt;&lt; n, mapping is mostly reversible)

## Reinforcement learning

Optimization of strategies within a simulation

examples:

- simulating the progression of an illness, find the best treatment strategy

# Supervised learning strategies

## Regression

- **neural networks**
- linear regression
- polynomial regression

## Classification

- **neural networks**
- k-nearest-neighbors
- logistic regression
- naive Bayes
- support vector machines
- decision trees and random forests

# Libraries

## Libraries

Python libraries for machine learning:

**scikit-learn**: based on _NumPy_; supports many different classes of algorithms (including basic neural networks)

**keras**: based on _TensorFlow_; supports advanced neural networks

# Supervised learning in scikit-learn

## Supervised learning in scikit-learn

steps:

- create an input matrix `X` and a target vector `y` / a target matrix `Y`
- instantiate an algorithm class - e.g. `KNeighborsClassifier`, `MLPClassifier`, `LinearRegression`, ...
- "learn" via `model.fit(X, y)`
- predict more results via `model.predict(...)`

## Example

Example: classification of iris plants

known data: measurements and classification of 150 iris plants

Task: Train an algorithm to classify iris plants based on their measurements

## Example

example data (_sepal length_, _sepal width_, _petal length_, _petal width_, _name_):

- `[5.1, 3.5, 1.4, 0.2]` → `"Iris-setosa"`
- `[7.0, 3.2, 4.7, 1.4]` → `"Iris-versicolor"`
- `[6.3, 3.3, 6.0, 2.5]` → `"Iris-virginica"`

in our data: _setosa_=0, _versicolor_=1, _virginica_=2

## Example

preparing data:

```py
from sklearn import datasets

iris = datasets.load_iris()

X = iris.data
y = iris.target
```

## Example

Training an algorithm (k-nearest-neighbor):

```py
from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier()
model.fit(X, y)
```

## Example

Applying classification to new data:

```py
test_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]

y_pred = model.predict(test_data)
# [0, 1, 1]

y_pred_proba = model.predict_proba(test_data)
# [[1.  0.  0. ]
#  [0.  0.8 0.2]
#  [0.  0.6 0.4]]
```

## Example

tasks: use other classifiers, e.g.:

- `sklearn.neural_network.MLPClassifier`
- `sklearn.svm.SVC`
- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.naive_bayes.GaussianNB`

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

## Scaling values

Which of these stars is more similar to the sun?

```py
# data: radius (km), mass (kg), temparature (K)
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

scaler = preprocessing.StandardScaler()
scaler.fit(stars)
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

imputer = SimpleImputer(strategy="mean")
imputer.fit(X)

imputer.transform(X)
imputer.transform(np.array([[np.nan, 1, 1]]))
```

## Categories as data

input or output data may categorical data - e.g. country, occupation, measuring method

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
- `LabelEncoder` (ordinals für target categories)
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

vectorizer = CountVectorizer()
vectorizer.fit(sample)
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

# Validation

## Train-test split

In order to verify the results of an algorithm:

Data are split into _training data_ and _test data_; test data are only used for validation

## Train-test split

How well does a model categorize iris data?

```py
from sklearn.model_selection import train_test_split
from sklearn import metrics

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)

# ...

Y_prediction = model.predict(X_test)
print(metrics.accuracy_score(Y_test, Y_prediction))
```

optional parameter: `test_size` (default value: `0.25`)

## Validation metrics

classification:

- _accuracy_score_: relative amount of correct classifications
- _confusion_matrix_: relative amount of correct classifications foer each category
- _precision_recall_fscore_support_: summary of important metrics
- _log_loss_\`: also known as cross-entropy, relevant for logistic regression and neural networks

regression:

- _mean-squared_error_
- _r2_score_: R², coefficient of determination

See also <https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics>

## Validation metrics: coefficient of determination

coefficient of determination (R²):

- R²=1 - perfect interpolation
- R²=0 - interpolation is no better than taking the average of all data
- R²&lt;0 - worse than taking the average of all data

## Cross validation

Data are repeatedly split into different training and test sets so each entry appears in a test set once

```py
from sklearn.model_selection import cross_validate

test_results = cross_validate(
    model, X, y, cv=5, scoring="accuracy"
)
print(test_results["test_score"])
```

## Validation

Exercise: validation of iris classification

# Iris classification - complete

## Iris classification - complete

```py
import pandas as pd
from sklearn.preprocessing import (
    LabelBinarizer,
    StandardScaler,
)
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics

# loading data

iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/" +
    "machine-learning-databases/iris/iris.data",
    header=None)
iris_measures = iris.iloc[:, :4].to_numpy()
iris_species = iris.iloc[:, 4].to_numpy()

# preparing data

encoder = LabelBinarizer()
encoder.fit(iris_species)
iris_species_one_hot = encoder.transform(iris_species)

scaler = StandardScaler()
scaler.fit(iris_measures)
iris_measures_scaled = scaler.transform(iris_measures)

X = iris_measures_scaled
Y = iris_species_one_hot

# train-test-split

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)

# training

model = KNeighborsClassifier()
model.fit(X_train, Y_train)

# validation

Y_prediction = model.predict(X_test)
score = metrics.accuracy_score(Y_prediction, Y_test)
print("accuracy: ", score)

# predicting further species

new_iris_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]
new_iris_predictions = model.predict(
    scaler.transform(new_iris_data)
)
print("prediction data:")
print(new_iris_predictions)
predicted_labels = encoder.inverse_transform(
    new_iris_predictions
)
print("predicted labels:")
print(predicted_labels)
```

# Regression - basics

## Example: linear regression

Example: various purchases in different supermarkets:

- 1 l of milk, 1 kg of bread: 4.60€
- 2 l of milk, 3 kg of bread: 13.50€
- 3 l of milk, 2 kg of bread: 12.00€
- (0 l of milk, 0 kg of bread: 0€)

task: estimate prices of:

- 1 l of milk
- 1 kg of bread
- 2 l of milk and 2 kg of bread

This may be solved via regression

## Example: linear regression

```py
from sklearn.linear_model import LinearRegression

X = [[1, 1], [2, 3], [3, 2], [0, 0]]
y = [4.60, 14.50, 12.00, 0.0]

model = LinearRegression()
model.fit(X, y)

yfit = model.predict([[1, 0], [0, 1], [2, 2]])
print(yfit)
# [ 1.14722222  3.64722222 10.46388889]
```

## Example: linear regression

characteristic numbers of the regression:

- `model.coef_`
- `model.intercept_`

## Exercise: linear regression

Iris data: Estimate the _petal width_ (column 3) based on the _petal length_ (column 2)

```py
from sklearn import datasets
iris = datasets.load_iris()
```

## Regression via a neural network

Iris data: Estimate the _sepal length_ (column 0) based on the _sepal width_ (column 1) and _petal length_ (column 2)

```py
from sklearn import datasets
from sklearn.neural_network import MLPRegressor

iris = datasets.load_iris()

X = iris.data[:,1:3]
y = iris.data[:, 0]

model = MLPRegressor(
    hidden_layer_sizes=(8, 8),
    alpha=1.0,
    max_iter=2000
)
model.fit(X, y)
```

## Regression via a neural network

```py
test_data = [
    [3.4, 1.9],
    [3.0, 4.7],
    [3.1, 5.0]
]

y_pred = model.predict(test_data)
print(y_pred)
```

# NumPy advanced

## Reshaping arrays

```py
array_1d = array_3d.ravel()
array_1d = array_3d.reshape(8)
array_2d = array_3d.reshape(2, 4)
array_2d = array_3d.reshape(2, -1) # automatic second dimension
array_2d_transposed = array_2d.T
```

## Adding an extra dimension

Adding an extra dimension of length 1 via `newaxis` - turning a 2 x 2 array into a 2 x 2 x 1 array:

```py
array_2d = np.array([[1, 2], [3, 4]])
array_3d = array_2d[:, :, np.newaxis]
# [[[1], [2]], [[3], [4]]]
```

## Slices as views

In ordinary Python we can make a shallow copy of a list by slicing it - this works differently in NumPy (in order to improve efficiency):

```py
list = [1, 2, 3]
list_copy = list[:]
list_copy[0] = 10 # does NOT change list

array = np.array([1, 2, 3])
array_view = array[:]
array_view[0] = 10 # DOES change array
```

## Copying arrays

Arrays can be copied via `array.copy()`

## Concatenating arrays

concatenating horizontally:

```py
np.concatenate([a1d, a1d])
np.concatenate([a2d, a2d])
```

concatenating vertically:

```py
np.concatenate([a2d, a2d], axis=1)
```

## Matrix multiplication

via the binary Operator `@`

```py
a = np.array([1, 1])

M = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(a @ M)
# array([0.   , 1.414])
```

## Matrix multiplication

example: rotating several points by 45° (counterclockwise):

```py
points = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])

M = np.array([[0.707, 0.707],
              [-0.707, 0.707]])

print(points @ M)
```

## Matrix multiplication

example:

known data: prices of various products, number of items in stock for different stores

```py
prices = np.array([3.99, 12.99, 5.90, 15])
quantities = np.array([[0, 80, 80, 100],
                       [100, 0, 0, 0],
                       [50, 0, 0, 50]])
```

wanted: total value for each of the three stores
