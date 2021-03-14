# Beispiel: Werte von Häusern in Kalifornien

## Beispiel: Werte von Häusern in Kalifornien

zum Vergleich: Lineare Regression - http://www.clungu.com/scikit-learn/tutorial/Scikit-learn/

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
