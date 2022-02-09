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
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dense(10, activation="softmax"),
])
```

functional API:

```py
inputs = keras.layers.Input(shape=(28, 28))
x = keras.layers.Flatten()(inputs)
x = keras.layers.Dense(128, activation="relu")(x)
outputs = keras.layers.Dense(10, activation="softmax")(x)
model = keras.Model(inputs, outputs)
```

## Compilation and training

```py
model.compile(
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"],
)
model.fit(x_train, y_train, epochs=15, validation_split=0.1)
```

## Improvements

adding a rescaling layer:

```py
keras.layers.Rescaling(1/255)
```

## Saving and loading

saving a trained model:

```py
model.save("path/to/folder")
```

loading a model:

```py
model = keras.models.load_model("path/to/folder")
```
