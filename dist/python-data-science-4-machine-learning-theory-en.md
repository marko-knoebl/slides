# Machine learning: theory

## Topics

- overview of methods
- libraries
- overview of machine learning
- algorithms for supervised learning
- preparing training data
- training a model
- validating a model

# Overview of methods

## Overview of methods

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

# Example datasets and tasks

## Example datasets

- [Wikipedia: List of datasets for machine-learning research](https://en.wikipedia.org/wiki/List_of_datasets_for_machine-learning_research)
- [UCI machine learning repository](https://archive.ics.uci.edu/ml)
- [scikit-learn datasets](https://scikit-learn.org/stable/datasets/index.html)
- [keras datasets](https://keras.io/api/datasets/)
- [TensorFlow datasets](https://www.tensorflow.org/datasets/overview)

## Possible tasks

- image data: e.g. facial recognition, handwriting recognition
- text data: e.g. sentiment analysis
- speech data: e.g. speech recognition

## Commonly-used datasets

- [Iris flower data set](https://en.wikipedia.org/wiki/Iris_flower_data_set)
- [MNIST database of handwritten digits](https://en.wikipedia.org/wiki/MNIST_database)
- [Boston house prices](http://lib.stat.cmu.edu/datasets/boston)
- [Labeled Faces in the Wild](vis-www.cs.umass.edu/lfw)

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

# Supervised learning procedure

## Supervised learning procedure

steps:

- collect and prepare training data (input data and associated output data)
- train a model based on the input and output (can take time)
- validate the model's accuracy
- use the model to predict outputs for new data

# Iris dataset

## Iris dataset

_Iris dataset_: simple example dataset for machine learning / data science

contains measurements of 150 iris plants: 3 different species with 50 samples each

## Iris dataset

example CSV data from <http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data>:

```txt
5.1,3.5,1.4,0.2,Iris-setosa
4.9,3.0,1.4,0.2,Iris-setosa
4.7,3.2,1.3,0.2,Iris-setosa
```

## Iris dataset

data loaded via helper function `sklearn.datasets.load_iris()`:

measurements in `.data`

species in `.target` (setosa=0, versicolor=1, virginica=2)

```py
# .data
array([[5.1, 3.5, 1.4, 0.2],
       [4.9, 3. , 1.4, 0.2],
       [4.7, 3.2, 1.3, 0.2],
       # ...
      ])
# .target
array([0, 0, 0, ...])
```

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

# Example: iris classification in keras

<!-- duplicate in machine-learning-theory and neural-networks-with-keras -->

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
from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(8),
    keras.layers.Activation("relu"),
    keras.layers.Dense(3),
    keras.layers.Activation("softmax")
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
# [[0.9 0.1 0. ]
#  [0.  0.8 0.2]
#  [0.  0.7 0.3]]
```

# Algorithms for supervised learning

## Algorithms for supervised learning

Regression:

- _neural networks_
- linear regression, polynomial regression, ...

Classification:

- _neural networks_
- k-nearest-neighbors
- decision trees
- logistic regression
- naive Bayes
- support vector machines

# Linear regression

## Linear regression

Linear regression: a linear function is fitted to given data points (usually via least squares)

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
1, 1 → 5.00
2, 3 → 13.50
3, 2 → 10.90
0, 0 → 0.00
```

result of a linear regression:

```txt
price = 0.05 + 1.13*x + 3.73*y
```

# Neural networks

<!--
duplicates in machine-learning-theory and
neural-networks-with-keras
-->

## Neural networks

Machine learning strategy that vaguely resembles how neurons in the brain interact

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

# Classification algorithms

## Classification algorithms

- _neural networks_
- k-nearest-neighbors
- decision trees
- logistic regression
- naive Bayes
- support vector machines

## k-nearest-neighbors

classification algorithm that assigns a class to a data point by looking at similar data points with a known classification

## Decision trees

Example decision tree for iris classification:

- is the _petal length_ less than 2.5?
  - yes: **setosa**
  - no: is the _petal width_ less than 1.8?
    - yes: is the _petal length_ smaller than 5.1?
      - yes: **versicolor**
      - no: **virginica**
    - no: **virginica**

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

## Classification algorithms

[overview of classification algorithms in scikit-learn](https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html)

# Example: iris classification with various algorithms

## Example: iris classification with various algorithms

task: use other classifiers, e.g.:

- `sklearn.tree.DecisionTreeClassifier`
- `sklearn.svm.SVC`
- `sklearn.naive_bayes.GaussianNB`
- `sklearn.neural_network.MLPClassifier`

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

# Example: loading and preparing iris data

## Example: loading data

```py
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/" +
    "machine-learning-databases/iris/iris.data",
    header=None)
iris_measures = iris.iloc[:, :4].to_numpy()
iris_species = iris.iloc[:, 4].to_numpy()
```

## Example: preparing data

```py
encoder = LabelBinarizer()
encoder.fit(iris_species)
iris_species_one_hot = encoder.transform(iris_species)
```

```py
scaler = StandardScaler()
scaler.fit(iris_measures)
iris_measures_scaled = scaler.transform(iris_measures)
```

```py
x = iris_measures_scaled
y = iris_species_one_hot
```

# Model validation and selection

## Train data and validation data

In order to verify the results of an algorithm:

Data are split into _training data_ and _test data_ / _validation data_

## Train data and validation data

for iterative algorithms (e.g. neural networks in _keras_):

- _train data_
- _test data_ (used during iterative training)
- _validation data_ (used for validating the final model)

for other alogirthms (e.g. _sklearn_):

- _train data_
- _validation data_ or _test data_ (used for validating the model)

## Model validation and selection

To find the best model:

- test multiple algorithms
- test multiple parameters for the algorithm
- test if more input data leads to better results

see [Python Data Science Handbook → Hyperparameters and Model Validation → Selecting the Best Model](https://jakevdp.github.io/PythonDataScienceHandbook/05.03-hyperparameters-and-model-validation.html#Selecting-the-Best-Model)

# Basic validation metrics

## Basic validation metrics

classification metrics:

- accuracy
- confusion matrix

regression metrics:

- mean squared error
- coefficient of determination (R²)

## Basic classification metrics

example:

a basket of fruits contains 10 apples, 10 oranges and 10 peaches

a classification algorithm yields these results:

- classification of apples: 8 as apples, 0 as oranges, 2 as peaches
- classification of oranges: 10 as oranges
- classification of peaches: 1 as an apple, 0 as oranges, 9 as peaches

## Basic classification metrics

**accuracy**: relative amount of correct classifications (in our example: 27/30=0.9)

**confusion matrix**: table of classifications for each category

|         | apples | oranges | peaches |
| ------- | ------ | ------- | ------- |
| apples  | 8      | 0       | 2       |
| oranges | 0      | 10      | 0       |
| peaches | 1      | 0       | 9       |

## Basic regression metrics

**mean squared error**

**coefficient of determination (R²)**:

compares the mean squared error of the regression with the variance of the dataset

- R²=1 - perfect interpolation
- R²=0 - interpolation is no better than taking the average of all data
- R²&lt;0 - worse than taking the average of all data

# Classification metrics

## Classification metrics

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

## Probabilistic metrics

**cross entropy** (log loss): measures how well a model of a probability distribution approximates the actual probability distribution

relevant for _neural networks_ and _logistic regression_

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
- randomly disable some neuron outputs during learning (dropout)
- combining multiple decision trees (random forest)
- "penalize" large coefficients in polynomial regression (L2- and L1-regulatization)

for polynomial regression see: [Data Science Handbook - Regularization](https://jakevdp.github.io/PythonDataScienceHandbook/05.06-linear-regression.html#Regularization)

# Example: iris validation in scikit-learn

## Example: iris validation in scikit-learn

manual train-test split:

```py
rng = np.random.default_rng(seed=1)

random_indexes = rng.permutation(x.shape[0])
# e.g. [65, 44, 22, 133, 47, ...]

x_train = x[random_indexes[:120]]
y_train = y[random_indexes[:120]]

x_test = x[random_indexes[120:]]
y_test = y[random_indexes[120:]]
```

## Example: iris validation in scikit-learn

automated train-test split via scikit-learn:

```py
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y)
```

## Example: iris validation in scikit-learn

validation based on test data:

```py
from sklearn import metrics

y_pred = model.predict(x_test)
score = metrics.accuracy_score(y_pred, y_test)
print("accuracy:", score)
```

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
print("accuracy:", score)

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
