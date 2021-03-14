# Neural networks with Keras: overview

# TensorFlow and Keras

## TensorFlow

_TensorFlow_:

- neural network library developed by Google
- based on tensors (multi-dimensional arrays) and array multiplication

## Keras

_Keras_: Python API for _TensorFlow_, has been integrated into _TensorFlow_

## TensorFlow and Keras

equivalent imports (since TensorFlow 2.4):

```py
import keras
```

```py
from tensorflow import keras
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

# Layers

## Types of layers

- activation layers (outputs: apply an activation function to every input in isolation)
- dense layers (outputs: weighed sum of inputs)
- convolution layers (outputs: weighed sum of nearby inputs)
- pooling layers (outputs: e.g. maximum or average or nearby inputs)
- dropout layers (individual outputs: either same as input or 0)
- normalization layers (e.g. to keep mean close to 0 and standard deviation close to 1)

some layers (e.g. dense, convolution) can optionally have a built-in activation function

## Layers in keras

- `Activation`
- `Dense`
- `Conv1D`, `Conv2D`, `Conv3D`
- `MaxPooling1D`, `MaxPooling2D`, `MaxPooling3D`
- `Dropout`
- `BatchNormalization`

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

# Example: MNIST digit classification

## Loading data

loading data:

```py
(
    (x_train, y_train),
    (x_test, y_test),
) = keras.datasets.mnist.load_data()
```

## Building a model

sequential API:

```py
model = keras.Sequential([
    keras.layers.Flatten(input_shape=[28, 28]),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dense(10, activation="softmax"),
])
```

functional API:

```py
inputs = keras.layers.Input(shape=[28, 28])
x = keras.layers.Flatten()(x)
x = keras.layers.Dense(128, activation="relu")(x)
outputs = keras.layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs, outputs)
```

## Compilation and training

```py
model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"],
)
model.fit(x_train, y_train, epochs=15, validation_split=0.1)
```

## Improvements

adding a rescaling layer:

```py
keras.layers.experimental.preprocessing.Rescaling(1/255)
```

# Inspecting the iris classification network

## Creating and training the network

```py
from sklearn import datasets
from sklearn import model_selection

iris = datasets.load_iris()

x = iris.data
y = iris.target

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
model.fit(x, y, epochs=300, validation_split=0.1, verbose=False)
```

## Inspecting the network

```py
layer_0 = model.get_layer(index=0)
layer_1 = model.get_layer(index=1)
layer_2 = model.get_layer(index=2)
layer_3 = model.get_layer(index=3)
```

## Inspecting the network

```py
# input values for an iris setosa flower
values_0 = np.array([[5.1, 3.5, 1.4, 0.2]])
```

## Inspecting the network

getting the values after `layer_0` (dense layer):

```py
values_1 = layer_0(values_0)
```

what happens behind the scenes (possible implementation in numpy):

```py
values_1 = values_0 @ layer_0.kernel + layer_0.bias
```

(matrix multiplication and addition)

## Inspecting the network

getting the values after `layer_1` (RELU activation layer):

```py
values_2 = layer_1(values_1)
```

what happens behind the scenes (possible implementation in numpy):

```py
values_2 = np.maximum(values_1, 0)
```

(replace negative values with 0)

## Inspecting the network

getting the values after `layer_2` (dense layer):

```py
values_3 = layer_2(values_2)
```

what happens behind the scenes (possible implementation in numpy):

```py
values_3 = values_2 @ layer_2.kernel + layer_2.bias
```

## Inspecting the network

getting the values after `layer_3` (softmax activation layer):

```py
values_4 = layer_3(values_3)
```

what happens behind the scenes (possible implementation in Python):

```py
from scipy.special import softmax
# from sklearn.utils.extmath import softmax

values_4 = softmax(values_3)
```

## Inspecting the network

function that predicts results and prints intermediate values:

```py
def predict_and_log(values_0):
    print(values_0, end="\n\n")
    values_1 = layer_0(values_0)
    print(values_1, end="\n\n")
    values_2 = layer_1(values_1)
    print(values_2, end="\n\n")
    values_3 = layer_2(values_2)
    print(values_3, end="\n\n")
    values_4 = layer_3(values_3)
    print(values_4, end="\n\n")
```

## Inspecting the network

```py
predict_and_log(np.array([[5.1, 3.5, 1.4, 0.2]]))
predict_and_log(np.array([[7.0, 3.2, 4.7, 1.4]]))
predict_and_log(np.array([[6.3, 3.3, 6.0, 2.5]]))
```

# Example: California housing prices

## Example: California housing prices

for comparison: linear regression - <http://www.clungu.com/scikit-learn/tutorial/Scikit-learn/>

## Example: California housing prices

load and prepare dataset:

```py
from sklearn import datasets
from sklearn import utils
from sklearn import model_selection
from sklearn import preprocessing

housing = datasets.fetch_california_housing()

scaler = preprocessing.StandardScaler().fit(housing.data)

x = scaler.transform(housing.data)
y = housing.target
```

## Example: California housing prices

create and train model:

```py
from keras.models import Sequential
from tensorflow.keras import layers

model = Sequential([
    layers.Dense(16, activation="relu"),
    layers.Dropout(0.1),
    layers.Dense(16, activation="relu"),
    layers.Dropout(0.1),
    layers.Dense(1, activation="linear"),
])
model.compile(loss="mean_squared_error")

model.fit(x, y, epochs=100, validation_split=0.25, verbose=1)
```

## Example: California housing prices

evaluate:

```py
model.evaluate(x, y)
```

# Example: digit recognition

## Example: digit recognition

```py
from tensorflow import keras

(
    (x_train, y_train),
    (x_test, y_test),
) = keras.datasets.mnist.load_data()

model = keras.Sequential([
    keras.layers.experimental.preprocessing.Rescaling(
        1 / 255, input_shape=(28, 28)
    ),
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dense(10, activation="softmax"),
])
model.compile(
    loss="sparse_categorical_crossentropy",
    metrics=["sparse_categorical_accuracy"],
)
model.fit(x_train, y_train, epochs=5, validation_split=0.1)

print(model.evaluate(x_test, y_test))
```

# Example: image classification - cat or dog

## Example: image classification - cat or dog

see <https://keras.io/examples/vision/image_classification_from_scratch/>
