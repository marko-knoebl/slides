# Neuronale Netze mit Keras: Überblick

# TensorFlow und Keras

## TensorFlow

_TensorFlow_:

- Library für neuronale Netze, die von Google entwickelt wird
- basiert auf Tensoren (multidimensionalen Arrays) und Array-Multiplikation

## Keras

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

Machine Learning Verfahren, das in etwa die Interaktion von Neuronen im Gehirn nachahmt

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
- Softmax - oft im letzen Layer für Klassifikation verwendet
- Sigmoid - oft im letzen Layer für "Tagging" verwendet (Tags können sich überlappen)

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

# Sequenzielles und funktionales API

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

## Funktionales API

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
(
    (x_train, y_train),
    (x_test, y_test),
) = keras.datasets.mnist.load_data()
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

# Inspizieren des Iris-Klassifikationsnetzes

## Erstellen und Trainieren des Netzes

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

## Inspizieren des Netzes

```py
layer_0 = model.get_layer(index=0)
layer_1 = model.get_layer(index=1)
layer_2 = model.get_layer(index=2)
layer_3 = model.get_layer(index=3)
```

## Inspizieren des Netzes

```py
# input values for an iris setosa flower
values_0 = np.array([[5.1, 3.5, 1.4, 0.2]])
```

## Inspizieren des Netzes

Werte nach `layer_0` (_dense_ Layer):

```py
values_1 = layer_0(values_0)
```

was im Hintergrund geschieht (mögliche Implementierung in numpy):

```py
values_1 = values_0 @ layer_0.kernel + layer_0.bias
```

(Matrix-Multiplikation und Addition)

## Inspizieren des Netzes

Werte nach `layer_1` (RELU Aktivierungslayer):

```py
values_2 = layer_1(values_1)
```

was im Hintergrund geschieht (mögliche Implementierung in numpy):

```py
values_2 = np.maximum(values_1, 0)
```

(Ersetzen von negativen Werten durch 0)

## Inspizieren des Netzes

Werte nach `layer_2` (_dense_ Layer):

```py
values_3 = layer_2(values_2)
```

was im Hintergrund geschieht (mögliche Implementierung in numpy):

```py
values_3 = values_2 @ layer_2.kernel + layer_2.bias
```

## Inspizieren des Netzes

Werte nach `layer_3` (Softmax Aktivierungslayer):

```py
values_4 = layer_3(values_3)
```

was im Hintergrund geschieht (mögliche Implementierung in Python):

```py
from scipy.special import softmax
# from sklearn.utils.extmath import softmax

values_4 = softmax(values_3)
```

## Inspizieren des Netzes

Funktion, die Werte voraussagt und Zwischenwerte ausgibt:

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

## Inspizieren des Netzes

```py
predict_and_log(np.array([[5.1, 3.5, 1.4, 0.2]]))
predict_and_log(np.array([[7.0, 3.2, 4.7, 1.4]]))
predict_and_log(np.array([[6.3, 3.3, 6.0, 2.5]]))
```

# Beispiel: Werte von Häusern in Kalifornien

## Beispiel: Werte von Häusern in Kalifornien

zum Vergleich: Lineare Regression - <http://www.clungu.com/scikit-learn/tutorial/Scikit-learn/>

## Beispiel: Werte von Häusern in Kalifornien

Laden und Vorbereiten des Datensatzes:

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

## Beispiel: Werte von Häusern in Kalifornien

Modell erstellen und trainieren:

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

## Beispiel: Werte von Häusern in Kalifornien

Evaluieren:

```py
model.evaluate(x, y)
```

# Beispiel: Ziffernerkennung

## Beispiel: Ziffernerkennung

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

# Beispiel: Bild-Klassifizierung: Katze oder Hund

## Beispiel: Bild-Klassifizierung: Katze oder Hund

see <https://keras.io/examples/vision/image_classification_from_scratch/>
