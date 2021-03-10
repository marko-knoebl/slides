# Iris classification in scikit-learn - complete

## Iris classification - complete

```py
import pandas as pd
from sklearn.preprocessing import (
    LabelBinarizer,
    StandardScaler,
)
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn import metrics

# loading data

iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/" +
    "machine-learning-databases/iris/iris.data",
    header=None)
iris_measures = iris.iloc[:, :4].to_numpy()
iris_species = iris.iloc[:, 4].to_numpy()

# preparing data

encoder = LabelBinarizer()
encoder.fit(iris_species)
iris_species_one_hot = encoder.transform(iris_species)

scaler = StandardScaler()
scaler.fit(iris_measures)
iris_measures_scaled = scaler.transform(iris_measures)

X = iris_measures_scaled
Y = iris_species_one_hot

# train-test-split

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)

# training

model = KNeighborsClassifier()
model.fit(X_train, Y_train)

# validation

Y_prediction = model.predict(X_test)
score = metrics.accuracy_score(Y_prediction, Y_test)
print("accuracy:", score)

# predicting further species

new_iris_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]
new_iris_predictions = model.predict(
    scaler.transform(new_iris_data)
)
print("prediction data:")
print(new_iris_predictions)
predicted_labels = encoder.inverse_transform(
    new_iris_predictions
)
print("predicted labels:")
print(predicted_labels)
```
