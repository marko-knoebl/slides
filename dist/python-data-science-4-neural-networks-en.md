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
