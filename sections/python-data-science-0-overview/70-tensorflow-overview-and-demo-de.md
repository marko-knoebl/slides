# TensorFlow: Übersicht und Demo

## TensorFlow: Übersicht und Demo

Übung: Vorhersage von Überleben auf der Titanic mittels eines einfachen neuronalen Netzwerks

## TensorFlow: Übersicht und Demo

Definitieren der Eingabedaten und Ausgabedaten:

```py
passagierdaten = titanic[
    ["Female", "Pclass", "Age", "SibSp", "Parch"]
]
überlebt = titanic["Survived"]
```

## TensorFlow: Übersicht und Demo

Definitieren eines neuronalen Netzwerks in TensorFlow:

```py
from tensorflow import keras

modell = keras.Sequential([
    # versteckte Schicht mit 4 Neuronen
    keras.layers.Dense(4),
    keras.layers.Activation("relu"),
    # Ausgabeschicht mit 2 Neuronen (2 Kategorien)
    keras.layers.Dense(2),
    keras.layers.Activation("softmax")
])
```

(Hinweis: Dieses neuronale Netzwerk ist sehr einfach - aber immer noch komplizierter als für diese Aufgabe erforderlich)

## TensorFlow: Übersicht und Demo

Kompilieren und Trainieren des Modells:

```py
modell.compile(
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

modell.fit(passenger_data, survived, epochs=100, validation_split=0.1)
```

## TensorFlow: Übersicht und Demo

Vorhersage eines Wertes für das Überleben von:

- 40-jährige Frau in der ersten Klasse (ohne Begleitung)
- TensorFlow: overview and demo

```py
new_passenger_data = pd.DataFrame(
    [
        [1, 1, 40, 0, 0],
        [0, 2, 40, 0, 0]
    ],
    columns=["Female", "Pclass", "Age", "SibSp", "Parch"],
)
model.predict(new_passenger_data)
# [[0.16, 0.84], [0.80, 0.20]]
```
