# Example: digit recognition

## Digit recognition with scikit-learn

```py
from sklearn.neighbors import KNeighborsClassifier
from sklearn import datasets, model_selection, metrics

digits = datasets.load_digits()
# flatten array from 1797x8x8 to 1797x64
X = digits.images.reshape(digits.images.shape[0], -1)
y = digits.target

X_train, X_test, y_train, y_test =
    model_selection.train_test_split(X, y)

model = KNeighborsClassifier()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(metrics.accuracy_score(y_test, y_pred))
```

## Digit recognition with keras

```py
import keras

(x_train, y_train), (x_test, y_test) =
    keras.datasets.mnist.load_data()

model = keras.Sequential([
    keras.layers.experimental.preprocessing.Rescaling(1 / 255),
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dense(10, activation="softmax"),
])
model.compile(loss="sparse_categorical_crossentropy")
model.fit(x_train, y_train, epochs=5, validation_split=0.1)

print(model.evaluate(x_test, y_test))
```
