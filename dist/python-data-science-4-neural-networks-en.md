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

# Functional and sequential API

## Functional and sequential API

sequential API (only allows linear data processing):

```py
model = keras.models.Sequential()
model.add(keras.layers.Dense(256, activation="relu"))
model.add(keras.layers.Dense(128, activation="relu"))
model.add(keras.layers.Dense(10, activation="softmax"))
```

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

# Example: iris classification

load and prepare dataset:

```py
import numpy as np
from sklearn import datasets
from sklearn import preprocessing
from sklearn import utils

iris = datasets.load_iris()

X = iris.data
Y = preprocessing.LabelBinarizer().fit_transform(iris.target[:, np.newaxis])

X, Y = utils.shuffle(X, Y)
```

create model:

```py
from keras.models import Sequential
from keras.layers import Dense

model = Sequential()
model.add(Dense(8, activation="relu"))
model.add(Dense(3, activation="softmax"))

model.compile(
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)
```

learn:

```py
model.fit(X, Y, validation_split=0.25, batch_size=5, epochs=100, verbose=1)
```

verify model:

```py
model.evaluate(X, Y)

model.predict([[5, 3, 1.5, 0.2]]) # category should be 0
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
