# Neuronale Netze mit Keras: Überblick

# TensorFlow und Keras

## TensorFlow und Keras

_TensorFlow_: Library für neuronale Netze, die von Google entwickelt wird

_Keras_: Python API für _TensorFlow_, wurde mittlerweile in _TensorFlow_ integriert

## TensorFlow and Keras

äquivalente Imports (seit TensorFlow 2.4):

```py
import keras
```

```py
from tensorflow import keras
```

# Beispiel: Iris-Klassifizierung in Keras

<!-- duplicate in machine-learning-theory and neural-networks-with-keras -->

## Überwachtes Lernen in Keras

Schritte:

- Erstellen eines Input-Arrays `x` und eines Ziel-Arrays `y`
- Erstellen eines Modells aus verschiedenen Layern (z.B. Preprocessing-Layer, Neuronen-Layer, ...)
- Kompilieren via `model.compile()` und "Lernen" via `model.fit(x, y)`
- Vorhersagen weiterer Ergebnisse via `model.predict(...)`

## Beispiel

Laden von Daten:

```py
from sklearn import datasets

iris = datasets.load_iris()

x = iris.data
y = iris.target
```

## Beispiel

Trainieren des Netzwerks:

```py
from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(8),
    keras.layers.Dense(3),
    keras.layers.Activation("softmax")
])
model.compile(
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)
model.fit(x, y, epochs=100, validation_split=0.1)
```

## Beispiel

Anwenden der Klassifikation auf neue Daten:

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

# Neuronale Netzwerke

<!--
duplicates in machine-learning-theory and
neural-networks-with-keras
-->

## Neuronale Netzwerke

Mchine Learning Verfahren, dass in etwa die Interaktion von Neuronen im Gehirn nachahmt

## Neuronale Netzwerke

<figure style="width: 70%; margin: 0 auto;">
  <img src="assets/wikimedia-Neural_network.svg" alt="diagram of a neural network">
  <figcaption>Diagrammm eines neuronalen Netzwerks mit zwei Inputs, fünf Neuronen in der Zwischenschicht und einem Output <small>(Quelle: <a href="https://commons.wikimedia.org/wiki/File:Neural_network.svg" title="via Wikimedia Commons">Dake, Mysid via Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by/1.0">CC BY</a>)</small></figcaption>
</figure>

## Neuronen

<figure>
  <img src="assets/wikimedia-ArtificialNeuronModel_english.png">
  <figcaption>Modell eines einzelnen Neurons mit mehreren Inputs und einem Output</figcaption>
</figure>

## Aktivierungsfunktionen

- ReLU (Rectified Linear Unit)
- Softmax - often used in the last layer for classification
- Sigmoid - often used in the last layer for "tagging" (tags may overlap)

## Ressource

- <https://victorzhou.com/blog/intro-to-neural-networks/>

# Layer

## Arten von Layern

- Aktivierungslayer (Outputs: einzelnes Anwenden einer Aktivierungsfunktion auf jeden Input)
- Dense Layer (Outputs: individuelle gewichtete Summe aller Inputs)
- Convolution Layer (Outputs: gewichtete Summe benachbarter Inputs)
- Pooling Layer (Outputs: z.B. Maximum oder Durchschnitt benachbarter Inputs)
- Dropout Layer (für individuelle Outputs: entweder gleich dem Input oder 0)
- Normalisierungslayer (z.B. um das Mittel nahe bei 0 und die Standardabweichung nahe bei 1 zu behalten)

manche Layer (z.B. Dense, Convolution) können optional eine eingebaute (nachgeschaltete) Aktivierungsfunktion haben

## Layer in Keras

- `Activation`
- `Dense`
- `Conv1D`, `Conv2D`, `Conv3D`
- `MaxPooling1D`, `MaxPooling2D`, `MaxPooling3D`
- `Dropout`
- `BatchNormalization`

# Sequenzielles und functionales API

## Sequenzielles API

sequenzielles API (erlaubt nur lineare Verarbeitung - jeder Layer hat einen Input und einen Output):

```py
model = keras.models.Sequential([
    keras.layers.Dense(256, activation="relu"),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dense(10, activation="softmax"),
])
```

oder

```py
model = keras.models.Sequential()
model.add(keras.layers.Dense(256, activation="relu"))
model.add(keras.layers.Dense(128, activation="relu"))
model.add(keras.layers.Dense(10, activation="softmax"))
```

## Functionales API

Funktionales API (erlaubt komplexere Verarbeitung):

```py
inputs = keras.layers.Input(shape=[28, 28])
x = keras.layers.Dense(256, activation="relu")(inputs)
x = keras.layers.Dense(128, activation="relu")(x)
outputs = keras.layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs, outputs)
```

# Beispiel: MNIST Ziffernklassifikation

## Daten laden

Daten laden:

```py
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
```

## Erstellen eines Modells

sequenzielles API:

```py
model = keras.Sequential([
    keras.layers.Flatten(input_shape=[28, 28]),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dense(10, activation="softmax"),
])
```

funktionales API:

```py
inputs = keras.layers.Input(shape=[28, 28])
x = keras.layers.Flatten()(x)
x = keras.layers.Dense(128, activation="relu")(x)
outputs = keras.layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs, outputs)
```

## Kompilierung und Training

```py
model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"],
)
model.fit(x_train, y_train, epochs=15, validation_split=0.1)
```

## Verbesserungen

Hinzufügen eines Rescaling-Layers:

```py
keras.layers.experimental.preprocessing.Rescaling(1/255)
```
