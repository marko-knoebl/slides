# Supervised learning with scikit-learn

# Example: iris classification in scikit-learn

<!-- duplicate section in machine-learning-theory and scikit-learn -->

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

loading data:

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

task: use other classifiers, e.g.:

- `sklearn.neural_network.MLPClassifier`
- `sklearn.svm.SVC`
- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.naive_bayes.GaussianNB`

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

# Pipelines

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

## Pipelines

task:

create a pipeline that categorizes iris data

# Saving and loading models

## Saving and loading models

A trained model can be saved for later use

In Python, objects can be saved and loaded via the `pickle` module

## Saving models

```py
import pickle

with open("model.pickle", mode="wb") as picklefile:
    pickle.dump(model, picklefile)
```

## Loading models

```py
import pickle

with open("model.pickle", mode="rb") as picklefile:
    model = pickle.load(picklefile)

model.predict(data)
```

# Supervised learning algorithms in scikit-learn

## Algorithms in scikit-learn

regression:

- `sklearn.linear_model.LinearRegression`
- `sklearn.neural_network.MLPRegressor`

classification:

- `sklearn.neighbors.KNeighborsClassifier`
- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.ensemble.RandomForestClassifier`
- `sklearn.linear_model.LogisticRegression`
- `sklearn.naive_bayes.GaussianNB`
- `sklearn.naive_bayes.MultinomialNB`
- `sklearn.svm.SVC`
- `sklearn.neural_network.MLPClassifier`

## K-nearest-neighbors

`sklearn.neighbors.KNeighborsClassifier`

The number `k` of neighbors can be chosen (default: 5)

See: <https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html>

## Decision trees

see: [Python Data Science Handbook - Decision Trees and Random Forests](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html)

random forests: data are split into different subsets; for each subset a separate decision tree is created; all decision trees are combined into a so-called _random forest_

```py
RandomForestClassifier(n_estimators=100)
```

## Logistic regression

See: <https://scikit-learn.org/stable/auto_examples/linear_model/plot_logistic.html>

```py
LogisticRegression(solver="liblinear", multi_class="auto")
```

## Naive Bayes

see: [Python Data Science Handbook - Naive Bayes](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html)

## Support vector machines

see:

- <https://scikit-learn.org/stable/modules/svm.html>
- [Python Data Science Handbook - Support Vector Machines](https://jakevdp.github.io/PythonDataScienceHandbook/05.07-support-vector-machines.html)

## Examples

- [classification of newsgroup postings (via naive bayes, logistic regression or decision trees)](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html#Multinomial-Naive-Bayes)
- [digit classification (random forest)](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html#Example:-Random-Forest-for-Classifying-Digits)

# Linear regression with scikit-learn

## Linear regression with scikit-learn

Example: various purchases in different supermarkets:

- 1 l of milk, 1 kg of bread: 5.00€
- 2 l of milk, 3 kg of bread: 13.50€
- 3 l of milk, 2 kg of bread: 10.90€
- (0 l of milk, 0 kg of bread: 0€)

## Linear regression with scikit-learn

```py
from sklearn.linear_model import LinearRegression

X = [[1, 1], [2, 3], [3, 2], [0, 0]]
y = [5.00, 13.50, 10.90, 0.0]

model = LinearRegression()
model.fit(X, y)

yfit = model.predict([[1, 0], [0, 1], [2, 2]])
print(yfit)
# [1.18333333 3.78333333 9.78333333]
```

## Linear regression with scikit-learn

characteristic numbers of the regression:

- `model.coef_`
- `model.intercept_`

## Linear regression with scikit-learn

Iris data: Estimate the _petal width_ (column 3) based on the _petal length_ (column 2)

```py
from sklearn import datasets
iris = datasets.load_iris()
```

## Examples

- diabetes prediction
- ([bicycle traffic](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Example:-Predicting-Bicycle-Traffic))

# Polynomial regression with scikit-learn

## Polynomial regression with scikit-learn

Some data won't fit a linear relation like:

`y = a*x + b`

We could try a polynomial relation, e.g.:

`y = a*x^2 + b*x + c`

`y = a*x^3 + b*x^2 + c*x + d`

## Polynomial regression with scikit-learn

scikit-learn offers a _preprocessor_ called `PolynomialFeatures`

```py
from sklearn.preprocessing import PolynomialFeatures

poly_model = make_pipeline(
    PolynomialFeatures(2),
    LinearRegression()
)

poly_model.fit(x, y)
```

## Exercises

- use a polynomial regression instead of a linear regression for one of the previous examples
- use a polynomial regression for dataset _II_ of the so-called anscombe data (can be loaded via the _seaborn_ library)

# Regression via a neural network

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

# Validation

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

optional parameters:

- `test_size` (default value: `0.25`)
- `random_state` (integer seed for shuffling)

## Cross validation

Data are repeatedly split into different training and test sets so each entry appears in a test set once

```py
from sklearn.model_selection import cross_validate

test_results = cross_validate(
    model, X, y, cv=5, scoring="accuracy"
)
print(test_results["test_score"])
```

## Example: ROC of the iris classification

computing the ROC with scikit-learn:

```py
# false positive rates, true positive rates, thresholds
fpr, tpr, thresholds = metrics.roc_curve(
    y_test,
    classifier.predict_proba(X_test)[:, 0]
)
```

ideal combination: _false positive rate_ = 0, _true positive rate_ = 1

## Example: ROC of the iris classification

plotting the ROC:

```py
plt.plot(fpr, tpr, marker="o")
```

determining the AUC:

```py
auc = metrics.auc(fpr, tpr)
```

# Example: digit recognition

## Example: digit recognition

```py
from sklearn.neighbors import KNeighborsClassifier
from sklearn import datasets, model_selection, metrics

digits = datasets.load_digits()
# flatten array from 1797x8x8 to 1797x64
X = digits.images.reshape(digits.images.shape[0], -1)
y = digits.target

X_train, X_test, y_train, y_test =
    model_selection.train_test_split(X, y)

model = KNeighborsClassifier()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(metrics.accuracy_score(y_test, y_pred))
```

# Example: labeled faces with scikit-learn

## Example: labeled faces

[data source example](http://vis-www.cs.umass.edu/lfw/number_11.html)

input data: greyscale images of famous people (sized 62 x 47) and their names

goal: train a neural network to recognize a person

## Getting data

```py
from sklearn.datasets import fetch_lfw_people
faces = fetch_lfw_people(min_faces_per_person=60)
```

entries:

- `faces.images`: array of images (size: 1248 x 62 x 47)
- `faces.target`: array of numeric labels (1, 3, 3, 3, 5, ...)
- `faces.target_names`: array of label names (0="Ariel Sharon", 1="Colin Powell", ...)

## Preparing data

```py
num_images = faces.images.shape[0]
num_pixels = faces.images.shape[1] * faces.images.shape[2]
X = faces.images.reshape(num_images, num_pixels)

from sklearn.preprocessing import LabelBinarizer
encoder = LabelBinarizer().fit(faces.target)
Y = encoder.transform(faces.target)
```

## Train-test split

```py
from sklearn.model_selection import train_test_split

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)
```

## Create a classifier and train it

```py
from sklearn.neural_network import MLPClassifier

model = MLPClassifier(hidden_layer_sizes=(250, 150, 100),
                      early_stopping=True,
                      n_iter_no_change=100,
                      max_iter=2000,
                      verbose=True)
model.fit(X_train, Y_train)
```

algorithm configuration:

- three layers of neurons with 250, 150 and 100 neurons each
- algorithm will stop if the last 100 iterations did not yield improvements
- algorithm will stop after a maximum of 2000 iterations

## Test the classifier

```py
from sklearn import metrics

real_labels = Y_test.argmax(axis=1)
pred_labels = model.predict_proba(X_test).argmax(axis=1)

print(metrics.accuracy_score(real_labels, pred_labels))
```

`argmax` returns the index of the biggest entry in the array

## Test the classifier

Display a random face and print the real name and the predicted name:

```py
import matplotlib.pyplot as plt
from random import randrange

# randomly select a face
index = randrange(X_test.shape[0])

plt.imshow(X_test[index].reshape(62, 47), cmap="gray")

real_label = real_labels[index]
pred_label = pred_labels[index]

print("real name:", faces.target_names[real_label])
print("predicted name:", faces.target_names[pred_label])
```

# Abstraction

## Abstraction

- pipelines
- custom classes

## Abstraction

_pipelines_ can abstract the processing of input values _x_

custom classes can abstract the processing of both _x_ and _y_

## Abstraction

direct model usage to predict survival on the Titanic:

```py
model.predict([[2, 0, 28.0, 0]])
# [0]
```

abstracted interface:

```py
classifier.predict_survival(
    pclass=2, sex="male", age=28.0, sibsp=0
)
# False
```
