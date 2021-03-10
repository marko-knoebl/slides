# Example: iris classification in keras

<!-- duplicate -->

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
model.fit(x, y, epochs=100, validation_split=0.1)
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

# Example: iris classification

## Example: iris classification

```py
import pandas as pd
import sklearn

import keras
```

load and prepare dataset:

```py
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/" +
    "machine-learning-databases/iris/iris.data",
    header=None)
iris_measures = iris.iloc[:, :4].to_numpy()
iris_species = iris.iloc[:, 4].to_numpy()
```

```py
encoder = sklearn.preprocessing.LabelBinarizer()
encoder.fit(iris_species)
iris_species_binarized = encoder.transform(iris_species)
```

```py
x = iris_measures
y = iris_species_binarized
```

```py
model = keras.Sequential([
    keras.layers.Dense(8, activation="relu"),
    keras.layers.Dense(3, activation="softmax")
])

model.compile(
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)
```

```py
model.fit(x, y, epochs=100, validation_split=0.1)
```

```py
model.evaluate(x, y)
```

```py
model.predict([[5, 3, 1.5, 0.2]]) # category should be 0
```

# Sequential and functional API

## Sequential API

sequential API (only allows linear data processing - each layer has one input and one output):

```py
model = keras.models.Sequential([
    keras.layers.Dense(256, activation="relu"),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dense(10, activation="softmax"),
])
```

or

```py
model = keras.models.Sequential()
model.add(keras.layers.Dense(256, activation="relu"))
model.add(keras.layers.Dense(128, activation="relu"))
model.add(keras.layers.Dense(10, activation="softmax"))
```

## Functional API

functional API (allows more complex processing):

```py
inputs = keras.layers.Input(shape=[28, 28])
x = keras.layers.Dense(256, activation="relu")(inputs)
x = keras.layers.Dense(128, activation="relu")(x)
outputs = keras.layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs, outputs)
```

# Layers

## Layers

- activation layers

- dense layers

- convolution layers (local processing)

- pooling layers (local pooling)

- dropout layers

- Dense

- Conv1D

- Conv2D

# Example: MNIST digit classification

## Loading data

```py
import keras
```

loading data:

```py
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
```

## Building a model

sequential API (simpler):

```py
model = keras.Sequential(
    [
        keras.layers.Flatten(input_shape=[28, 28]),
        keras.layers.Dense(128, activation="relu"),
        keras.layers.Dense(10, activation="softmax"),
    ]
)
```

functional API (more flexible):

```py
inputs = keras.layers.Input(shape=[28, 28])
x = keras.layers.experimental.preprocessing.Rescaling(1 / 255)(inputs)
x = keras.layers.Flatten(input_shape=[28, 28])(x)
x = keras.layers.Dense(128, activation="relu")(x)
outputs = keras.layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs, outputs)
```

## Compilation and training

```py
model.compile(
    optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"]
)
model.fit(x_train, y_train, epochs=15, validation_split=0.1)
```

## Improvements

adding a rescaling layer:

```py
keras.layers.experimental.preprocessing.Rescaling(1/255)
```

# Preparing data

## Preparing data

input data types:

- _NumPy_ arrays
- TensorFlow `Dataset` objects - for big data sets that do not fit in memory
- Python generators that yield batches of data

## Preparing data

desired data format:

- _x_: _NumPy_ array or `tf.data.Dataset` object
-

## Helper functions

- `tf.keras.preprocessing.image_dataset_from_directory`
- `tf.keras.preprocessing.text_dataset_from_directory`

## Validation metrics

classification:

- _categorical crossentropy_ (~ probability of misclassification, based on _Kullback–Leibler divergence_)

regression

- _mean squared error_

# Example: california housing

for comparison: linear regression - <http://www.clungu.com/scikit-learn/tutorial/Scikit-learn/>

load and prepare dataset:

```py
from sklearn import datasets
from sklearn import utils
from sklearn import model_selection
from sklearn import preprocessing

housing = datasets.fetch_california_housing()

scaler = preprocessing.StandardScaler().fit(housing.data)

X = scaler.transform(housing.data)
y = housing.target

X, y = utils.shuffle(X, y)
```

create model:

```py
from keras.models import Sequential
from keras.layers import Dense

model = Sequential()
model.add(Dense(16, activation="relu"))
model.add(Dense(16, activation="relu"))
model.add(Dense(1, activation="linear"))

model.compile(loss="mean_squared_error")
```

learn:

```py
model.fit(X, y, epochs=100, validation_split=0.25, verbose=1)
```

evaluate:

```py
model.evaluate(X, y)
```

# Example: Cat or dog - image classification

see <https://keras.io/examples/vision/image_classification_from_scratch/>

# Example: digit recognition

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

# Example: inspecting the NN for iris classification

```py
layer_0 = model.get_layer(index=0)
layer_1 = model.get_layer(index=1)

print(layer_0.weights)
print(layer_1.weights)

print("setosa")
setosa_input = np.array([[5.1,3.5,1.4,0.2]])
setosa_1 = layer_0(setosa_input)
print(setosa_1)
setosa_2 = layer_1(setosa_1)
print(setosa_2)

versicolor_input = np.array([[7.0,3.2,4.7,1.4]])
versicolor_1 = layer_0(versicolor_input)
print(versicolor_1)
versicolor_2 = layer_1(versicolor_1)
print(versicolor_2)

virginica_input = np.array([[6.3,3.3,6.0,2.5]])
virginica_1 = layer_0(virginica_input)
print(virginica_1)
virginica_2 = layer_1(virginica_1)
print(virginica_2)
```

## Scaling values

```py
from keras.layers.experimental.preprocessing import Rescaling

Rescaling(1/255, offset=-0.5)
```
