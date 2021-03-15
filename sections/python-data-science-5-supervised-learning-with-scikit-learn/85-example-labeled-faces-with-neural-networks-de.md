# Beispiel: Gesichtserkennung mit neuronalen Netzen

## Beispiel: Gesichtserkennung

[Beispieldaten](http://vis-www.cs.umass.edu/lfw/number_11.html)

Eingangsdaten: Schwarz-weiß-Bilder bekannter Personen (Größe 62 x 47) und deren Namen

Ziel: erkennen der Personen mittels eines neuronalen Netzwerks

## Daten laden

```py
from sklearn.datasets import fetch_lfw_people
faces = fetch_lfw_people(min_faces_per_person=60)
```

Einträge:

- `faces.images`: Array von Bildern (1248 x 62 x 47)
- `faces.target`: Array von numerischen Labeln (1, 3, 3, 3, 5, ...)
- `faces.target_names`: Array von Labelnamen (0="Ariel Sharon", 1="Colin Powell", ...)

## Daten vorbereiten

```py
num_images = faces.images.shape[0]
num_pixels = faces.images.shape[1] * faces.images.shape[2]
X = faces.images.reshape(num_images, num_pixels)

from sklearn.preprocessing import LabelBinarizer
encoder = LabelBinarizer().fit(faces.target)
Y = encoder.transform(faces.target)
```

## Train-Test Split

```py
from sklearn.model_selection import train_test_split

X_train, X_test, Y_train, Y_test = train_test_split(X, Y)
```

## Erstellen und Trainieren eines Klassifikators

```py
from sklearn.neural_network import MLPClassifier

model = MLPClassifier(hidden_layer_sizes=(250, 150, 100),
                      early_stopping=True,
                      n_iter_no_change=100,
                      max_iter=2000,
                      verbose=True)
model.fit(X_train, Y_train)
```

Konfiguration des Algorithmus:

- drei Schichten an Neuronen mit je 250, 150 und 100 Neuronen
- Algorithmus stoppt, wenn für die letzten 100 Iterationsschritte keine Verbesserung eintrat
- Algorithmus stoppt nach maximal 2000 Iterationen

## Testen

```py
from sklearn import metrics

real_labels = Y_test.argmax(axis=1)
pred_labels = model.predict_proba(X_test).argmax(axis=1)

print(metrics.accuracy_score(real_labels, pred_labels))
```

`argmax` gibt den index des größten Eintrags im Array zurück

## Testen

Anzeigen eines zufälligen Gesichts, des echten Namens und des vorhergesagten Namens:

```py
import matplotlib.pyplot as plt
from random import randrange

# randomly select a face
index = randrange(X_test.shape[0])

plt.imshow(X_test[index].reshape(62, 47), cmap="gray")

real_label = real_labels[index]
pred_label = pred_labels[index]

print("real name:", faces.target_names[real_label])
print("predicted name:", faces.target_names[pred_label])
```
