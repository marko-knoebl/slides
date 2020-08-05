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

# Example: iris classification

load and prepare dataset:

```py
import numpy as np

from sklearn import datasets
from sklearn.preprocessing import LabelBinarizer, StandardScaler

iris = datasets.load_iris()

X = StandardScaler().fit_transform(iris.data)
Y = LabelBinarizer().fit_transform(iris.target[:, np.newaxis])
```

build model:

```py
from keras.models import Sequential
from keras.layers import Dense

model = Sequential()
model.add(Dense(8, activation="relu"))
model.add(Dense(8, activation="relu"))
model.add(Dense(3, activation="softmax"))

model.compile(
    optimizer="adam",
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)

model.fit(X, Y, batch_size=5, epochs=100, verbose=0)
```

verify model:

```py
model.evaluate(X, Y)

model.predict([[5, 3, 1.5, 0.2]]) # category should be 0
```
