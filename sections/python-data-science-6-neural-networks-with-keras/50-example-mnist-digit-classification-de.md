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
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dense(10, activation="softmax"),
])
```

funktionales API:

```py
inputs = keras.layers.Input(shape=(28, 28))
x = keras.layers.Flatten()(inputs)
x = keras.layers.Dense(128, activation="relu")(x)
outputs = keras.layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs, outputs)
```

## Kompilierung und Training

```py
model.compile(
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"],
)
model.fit(x_train, y_train, epochs=15, validation_split=0.1)
```

## Verbesserungen

Hinzufügen eines Rescaling-Layers:

```py
keras.layers.Rescaling(1/255)
```

## Speichern und Laden

Speichern eines trainierten Modells:

```py
model.save("path/to/folder")
```

Laden eines Modells:

```py
model = keras.models.load_model("path/to/folder")
```
