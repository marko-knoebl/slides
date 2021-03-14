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
