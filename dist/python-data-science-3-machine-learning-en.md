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

# Libraries

## Libraries

Python libraries for machine learning:

- _scikit-learn_
- _keras_
- _pytorch_

## Libraries

**scikit-learn**:

- supports many different classes of algorithms (including very basic neural networks)
- based on _NumPy_

**keras**:

- implements neural networks
- based on the _TensorFlow_ library
- can run on the GPU or TPU (tensor processing unit)

**pytorch**:

- implements neural networks
- low-level

# Supervised learning

## Supervised learning procedure

steps:

- collect and prepare training data (input data and associated output data)
- train an algorithm based on the input and output (can take time)
- validate the algorithm's accuracy
- use the algorithm to predict outputs for new data

## Algorithms for supervised learning

Classification:

- _neural networks_
- k-nearest-neighbors
- logistic regression
- naive Bayes
- support vector machines
- decision trees and random forests

Regression:

- _neural networks_
- linear regression
- polynomial regression

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

task: use other classifiers, e.g.:

- `sklearn.neural_network.MLPClassifier`
- `sklearn.svm.SVC`
- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.naive_bayes.GaussianNB`

# Supervised learning in keras

## Supervised learning in keras

steps:

- create an input array `x` and a target array `y`
- build a model from various layers (e.g. preprocessing layers, neural layers, ...)
- compile via `model.compile()` and "learn" via `model.fit(x, y)`
- predict more results via `model.predict(...)`

## Example

loading data:

```py
from sklearn import datasets

iris = datasets.load_iris()

x = iris.data
y = iris.target
```

## Example

Training the neural network:

```py
import keras

model = keras.Sequential([
    keras.layers.Dense(12, activation="relu"),
    keras.layers.Dense(3, activation="softmax")
])
model.compile(
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)
model.fit(x, y, epochs=300, validation_split=0.1)
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
# [[1.  0.  0. ]
#  [0.  0.8 0.2]
#  [0.  0.7 0.3]]
```

# Example: digit recognition

## Digit recognition with scikit-learn

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

## Digit recognition with keras

```py
import keras

(x_train, y_train), (x_test, y_test) =
    keras.datasets.mnist.load_data()

model = keras.Sequential([
    keras.layers.experimental.preprocessing.Rescaling(1 / 255),
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dense(10, activation="softmax"),
])
model.compile(loss="sparse_categorical_crossentropy")
model.fit(x_train, y_train, epochs=5, validation_split=0.1)

print(model.evaluate(x_test, y_test))
```

# Preparing data

## Preparing data

usually:

- _X_: two-dimensional array with numeric input data
- _y_ / _Y_: one- or two-dimensional array with numeric results

## Preparing data

tasks:

- flattening nested arrays
- scaling values
- handling missing data
- encoding categorical data as numerical data
- encoding text data as numerical data

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

## Cross validation

Data are repeatedly split into different training and test sets so each entry appears in a test set once

```py
from sklearn.model_selection import cross_validate

test_results = cross_validate(
    model, X, y, cv=5, scoring="accuracy"
)
print(test_results["test_score"])
```

## Validation metrics

classification metrics:

- accuracy metrics
  - accuracy
  - confusion matrix
- metrics based on true/false positives/negatives
  - precision
  - recall
  - f-score
  - ROC and AUC
- probabilistic metrics
  - cross entropy

regression metrics:

- mean squared error
- coefficient of determination (R²)

## Classification metrics

example:

a basket of fruits contains 10 apples, 10 oranges and 10 peaches

a classification algorithm yields these results:

- classification of apples: 8 as apples, 0 as oranges, 2 as peaches
- classification of oranges: 10 as oranges
- classification of peaches: 1 as an apple, 0 as oranges, 9 as peaches

## Accuracy metrics

**accuracy**: relative amount of correct classifications (in our example: 27/30=0.9)

**confusion matrix**: table of classifications for each category

|         | apples | oranges | peaches |
| ------- | ------ | ------- | ------- |
| apples  | 8      | 0       | 2       |
| oranges | 0      | 10      | 0       |
| peaches | 1      | 0       | 9       |

## Metrics based on true/false positives/negatives

binary classification: is a fruit an apple or is it not an apple?

- true positive: an apple is classified as an apple
- true negative: a peach is classified as _not_ an apple
- false positive: a peach is classified as an apple (type I error)
- false negative: an apple is classified as _not_ an apple (type II error)

## Metrics based on true/false positives/negatives

**precision** = 8/9=0.889 (8 out of 9 fruits that were classified as apples are _actually_ apples)

**recall** = 8/10=0.8 (8 out of 10 apples were recognized as apples)

precision = true positives / predicted positives

recall = true positives / condition positives

see also: [precision and recall on Wikipedia](https://en.wikipedia.org/wiki/Precision_and_recall)

## Metrics based on true/false positives/negatives

_precision_ and _recall_ have different relevance in different scenarios

example: when classifying emails as spam, _precision_ is very important (avoiding classifying a regular email as spam)

## Metrics based on true/false positives/negatives

**f-score** = harmonic mean of _precision_ and _recall_

## Metrics based on true/false positives/negatives

**ROC** (receiver operating characteristic)

= metric that represents _true positives_ and _false positives_

a classification algorithm could be fine-tuned in respect to its true positives rate and false positives rate:

- option 1: 60% true positives rate, 0% false positives rate
- option 2: 70% true positives rate, 5% false positives rate
- option 3: 80% true positives rate, 25% false positives rate
- option 4: 90% true positives rate, 55% false positives rate
- option 5: 95% true positives rate, 90% false positives rate

## Metrics based on true/false positives/negatives

The ROC may be displayed as a curve; the bigger the area under the curve (AUC), the better the classification

## Metrics based on true/false positives/negatives

computing the ROC with scikit-learn:

```py
false_positive_rates, true_positive_rates, thresholds = metrics.roc_curve(
    y_test,
    classifier.predict_proba(X_test)[: 1]
)
```

plotting the ROC:

```py
plt.plot(false_positive_rate, true_positive_rate)
```

determining the AUC:

```py
auc = metrics.auc(false_positive_rates, true_positive_rates)
```

## Probabilistic metrics

**cross entropy** (log loss): measures how well a model of a probability distribution approximates the actual probability distribution

relevant for _neural networks_ and _logistic regression_

## Regression metrics

**mean squared error**

**coefficient of determination (R²)**:

compares the mean squared error of the regression with the variance of the dataset

- R²=1 - perfect interpolation
- R²=0 - interpolation is no better than taking the average of all data
- R²&lt;0 - worse than taking the average of all data

## Validation metrics in scikit-learn

classification:

- _accuracy_score_
- _confusion_matrix_
- _precision_recall_fscore_support_
- _log_loss_
- _roc_curve_
- _roc_auc_

regression:

- _mean_squared_error_
- _r2_score_

See also <https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics>

## Validation metrics in keras

- _accuracy_
- _categorical_crossentropy_
- _sparse_categorical_crossentropy_
- _precision_
- _recall_
- _auc_
- _mean_squared_error_

See also <https://keras.io/api/metrics/>

## Validation

Exercise: validation of iris classification

# Iris classification in scikit-learn - complete

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

# Datasets for machine learning

## Datasets for machine learning

- [Wikipedia: List of datasets for machine-learning research](https://en.wikipedia.org/wiki/List_of_datasets_for_machine-learning_research)
- [UCI machine learning repository](https://archive.ics.uci.edu/ml)
- [scikit-learn datasets](https://scikit-learn.org/stable/datasets/index.html)
- [keras datasets](https://keras.io/api/datasets/)

## Datasets in scikit-learn

- [Iris flower data set](https://en.wikipedia.org/wiki/Iris_flower_data_set)
- [Boston house prices](http://lib.stat.cmu.edu/datasets/boston)
- [Labeled Faces in the Wild](vis-www.cs.umass.edu/lfw)
- [Handwritten digits](https://archive.ics.uci.edu/ml/datasets/Optical+Recognition+of+Handwritten+Digits)
- ...

## Datasets in keras

- MNITS digits
- MNITS fashion
- Boston housing prices
- ...

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

# Algorithms for supervised learning

## Algorithms for supervised learning

Regression:

- _neural networks_
- linear regression, polynomial regression, ...

Classification:

- _neural networks_
- k-nearest-neighbors
- logistic regression
- naive Bayes
- support vector machines
- decision trees and random forests

## Neural networks

Machine learning algorithm that vaguely resembles how neurons in brains interact

<figure style="width: 60%; margin: 0 auto;">
  <img src="assets/wikimedia-Neural_network.svg" alt="diagram of a neural network">
  <figcaption>diagram of a neural network with two inputs, five intermediate neurons and one output <small>(source: <a href="https://commons.wikimedia.org/wiki/File:Neural_network.svg" title="via Wikimedia Commons">Dake, Mysid via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Regression

Linear regression: a linear function is fitted to given data points (usually via least squares)

## Linear regression

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

## k-nearest-neighbors

classification algorithm that assigns a class to a data point by looking at similar data points with a known classification

## Logistic regression

At the boundary of two classes a _logistic function_ is used to determine how likely it is that the data point belongs to the one or the other class

The logisitic function itself is determined via regression (hence the name)

## Naive Bayes

Data points are assumed to be part of a specific probability distribution; these distributions are derived from the training data.

For a new data point, the algorithm determines under which of the distributions it would most likely occur.

two important distributions:

- normal distribution (continuous values)
- multinomial distribution (discrete values)

## Support vector machines

Simplest case: separation of classes via lines / planes / hyperplanes - these separators should have maximum distance from the separated points

Borders may take different shapes by using kernel functions - e.g. conic sections or other curves

## Decision trees

Example decision tree for iris classification:

- is the _petal length_ less than 2.5?
  - yes: **setosa**
  - no: is the _petal width_ less than 1.8?
    - yes: is the _petal length_ smaller than 5.1?
      - yes: **versicolor**
      - no: **virginica**
    - no: **virginica**

## Classification algorithms

[overview of classification algorithms in scikit-learn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)

# Linear regression

## Linear regression

Example: various purchases in different supermarkets:

- 1 l of milk, 1 kg of bread: 5.00€
- 2 l of milk, 3 kg of bread: 13.50€
- 3 l of milk, 2 kg of bread: 10.90€
- (0 l of milk, 0 kg of bread: 0€)

task: estimate prices of:

- 1 l of milk
- 1 kg of bread
- 2 l of milk and 2 kg of bread

This may be solved via regression

## Linear regression

input data:

```txt
1, 1 ➡ 5.00
2, 3 ➡ 13.50
3, 2 ➡ 10.90
0, 0 ➡ 0.00
```

result of a linear regression:

```txt
price = 0.05 + 1.13*x + 3.73*y
```

# Neural networks

## Neural networks

Machine learning strategy that vaguely resembles how neurons in brains interact

## Neural networks

<figure style="width: 70%; margin: 0 auto;">
  <img src="assets/wikimedia-Neural_network.svg" alt="diagram of a neural network">
  <figcaption>diagram of a neural network with two inputs, five intermediate neurons and one output <small>(source: <a href="https://commons.wikimedia.org/wiki/File:Neural_network.svg" title="via Wikimedia Commons">Dake, Mysid via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Neurons

<figure>
  <img src="assets/wikimedia-ArtificialNeuronModel_english.png">
  <figcaption>model of a single neuron with multiple inputs and one output</figcaption>
</figure>

## Activation functions

- ReLU (Rectified Linear Unit)
- Softmax - often used in the last layer for classification
- Sigmoid - often used in the last layer for "tagging" (tags may overlap)

## Resource

- <https://victorzhou.com/blog/intro-to-neural-networks/>

# Supervised learning algorithms in scikit-learn

## Algorithms in scikit-learn

regression:

- `sklearn.linear_model.LinearRegression`
- `sklearn.neural_network.MLPRegressor`

classification:

- `sklearn.neighbors.KNeighborsClassifier`
- `sklearn.naive_bayes.GaussianNB`
- `sklearn.naive_bayes.MultinomialNB`
- `sklearn.linear_model.LogisticRegression`
- `sklearn.svm.SVC`
- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.ensemble.RandomForestClassifier`
- `sklearn.neural_network.MLPClassifier`

## K-nearest-neighbors

`sklearn.neighbors.KNeighborsClassifier`

The number `k` of neighbors can be chosen (default: 5)

See: <https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html#sklearn.neighbors.KNeighborsClassifier>

## Logistic regression

See: <https://scikit-learn.org/stable/auto_examples/linear_model/plot_logistic.html#sphx-glr-auto-examples-linear-model-plot-logistic-py>

```py
LogisticRegression(solver="liblinear", multi_class="auto")
```

## Naive Bayes

see: [Python Data Science Handbook - Naive Bayes](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html)

## Support vector machines

see:

- <https://scikit-learn.org/stable/modules/svm.html>
- [Python Data Science Handbook - Support Vector Machines](https://jakevdp.github.io/PythonDataScienceHandbook/05.07-support-vector-machines.html)

## Decision trees

see: [Python Data Science Handbook - Decision Trees and Random Forests](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html)

random forests: data are split into different subsets; for each subset a separate decision tree is created; all decision trees are combined into a so-called _random forest_

```py
RandomForestClassifier(n_estimators=100)
```

## Examples

- [classification of newsgroup postings (via naive bayes, logistic regression or decision trees)](https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html#Multinomial-Naive-Bayes)
- [digit classification](https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html#Example:-Random-Forest-for-Classifying-Digits)

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

poly_model.fit(X, y)
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

# Overfitting

## Overfitting

possible problem for machine learning algorithms: The algorithm is too flexible and recognizes apparent patterns in the training data

Algorithms that are vulnerable to overfitting:

- neural networks
- polynomial regression
- decision trees

## Overfitting

<figure>
  <img src="assets/wikimedia-Overfitting.svg.png" alt="visualization of an algorithm overfitting 2D data" style="width: 45%">
  <figcaption>Visualization of overfitting when categorizing 2D data <small>(source: <a href="https://commons.wikimedia.org/wiki/File:Overfitting.svg" >Chabacano via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Overfitting - solutions

- expand the set of learning data
- reduce model flexibility (e.g. degree of the polynomial, size of a neural network / decision tree)
- randomly disable some neurons during learning (dropout)
- combining multiple decision trees (random forest)
- "penalize" large coefficients in polynomial regression (L2- and L1-regulatization)

for polynomial regression see: [Data Science Handbook - Regularization](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Regularization)

# Model validation and selection

## Model validation and selection

To find the best model:

- testing multiple algorithms
- testing multiple parameters for the algorithm
- testing if more input data leads to better results

see [Python Data Science Handbook → Hyperparameters and Model Validation → Selecting the Best Model](https://jakevdp.github.io/PythonDataScienceHandbook/05.03-hyperparameters-and-model-validation.html#Selecting-the-Best-Model)

# Clustering

## Clustering

Clusterings falls in the category of _unsupervised learning_

For unsupervised learning there are no target data (_y_); instead the algorithms looks for patterns in the input data

The goal of clustering is finding clusters in input data

## Clustering

- _k-means clustering_
- _gaussian mixture models_

## k-means clustering

process: Cluster centers are determined in n-dimensional space. A data point is associated to the cluster whose center is closest

determining the cluster centers:

random initialization of centers

repeatedly:

- classify each data point according to the closest cluster center
- recompute the cluster centers as the mean of all associated points

This process converges

[Python Data Science Handbook - k-Means Clustering](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html)

## k-means clustering

examples:

- [clustering for handwritten digits](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-1:-k-means-on-digits)
- [color compression of images](https://jakevdp.github.io/PythonDataScienceHandbook/05.11-k-means.html#Example-2:-k-means-for-color-compression)
