# Beispiel: Ziffernerkennung

## Beispiel: Ziffernerkennung

Eingangsdaten: Graustufenbilder von 1797 handgeschriebenen Ziffern

Zieldaten: Ziffer (z.B. 0, 1, 2, 3, ...)

## Laden von Zifferndaten

```py
from sklearn import datasets

digits = datasets.load_digits()
```

Bilder in `digits.images`

Label in `digits.target`

## Visualisierung von Ziffern

Aufgabe:

Zeige manche der Bilder und ihre zugehörigen Labels mittels der Funktion `imshow` von _pyplot_

## Visualisierung von Ziffern

Einfache Lösung:

```py
plt.imshow(digits.images[3], cmap="gray")
plt.axis("off")
plt.title(digits.target[3])
```

## Vorbereiten von Daten

Aufgabe:

"flattening" des Eingangsarray von 1797x8x8 zu 1797x64

## Vorbereiten von Daten

explizite Lösung:

```py
x = digits.images.reshape(1797, 64)
```

robuste Lösung:

```py
x = digits.images.reshape(digits.images.shape[0], -1)
```

## Trainieren

Aufgabe: Wähle die ersten 1500 Einträge als Trainingsdaten und trainiere das Modell

## Trainieren

Lösung:

```py
from sklearn.neighbors import KNeighborsClassifier

x_train = x[:1500]
y_train = y[:1500]

model = KNeighborsClassifier(1)
model.fit(x_train, y_train)
```

## Testen

Aufgabe: Verwende die verbleibenden Einträge als Testdaten und berechte den Prozentsatz an richtigen Klassifizierungen

## Testen

Lösung:

```py
x_test = x[1500:]
y_test = y[1500:]

y_pred = model.predict(x_test)

import numpy as np

num_correct = np.sum(y_pred == y_test)

print(num_correct / y_test.size)
```
