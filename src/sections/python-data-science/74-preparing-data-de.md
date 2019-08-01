# Daten vorbereiten

## Daten vorbereiten

üblicherweise:

- `X`: zweidimensionales Array mit Eingangsdaten
- `y`: eindimensionales Array mit Resultaten

Die Arrays `X` und `y` sollten numerische Daten enthalten

## Fehlende Daten

Fehlende Daten werden häufig in der Form von `NaN`s auftreten.

Mögliche Behandlungen:

- Löschen aller Zeilen, die an irgendeiner Stelle undefinierte Werte enthalten
- Interpolieren der fehlenden Werte durch andere Daten

## Skalieren von Werten

Welche dieser beiden Sterne ist der Sonne am ähnlichsten?

```py
# data: radius (km), mass (kg), temparature (K)
sun =    [7.0e7, 2.0e30, 5.8e3]

star_a = [6.5e7, 3.0e30, 5.2e3]
star_b = [7.0e8, 2.5e30, 8.1e3]
```

Machine Learning Algorithmen wie z.B. k-Nearest-Neighbor betrachten Absolutwerte. Hier würde vom Algorithmus im wesentlichen nur die Masse herangezogen worden, da alle anderen Werte im Vergleich verschwindend gering sind.

## Skalieren von Werten

Lösung: Die Werte werden zentriert und skaliert, sodass ihr Mittelwert 0 und die Standardabweichung 1 ist

```py
from sklearn import preprocessing
import numpy as np
X_train = np.array([[ 7.0e7, 2.0e30, 5.8e3],
                    [ 6.5e7, 3.0e30, 5.2e3],
                    [ 7.0e9, 2.5e30, 3.1e3]])
X_scaled = preprocessing.scale(X_train)
```

Resultat:

```py
array([[-0.70634165, -1.22474487,  0.95025527],
       [-0.70787163,  1.22474487,  0.43193421],
       [ 1.41421329,  0.        , -1.38218948]])
```

## Kategoriedaten

Manchmal sind Kategorien als Daten angegeben - z.B. `iris setosa`, `iris virginica`, `iris versicolor`

## Textdaten

## Pipelines

- `Imputer`
- `StandardScaler`
- (`PolynomialFeatures` - mehr dazu später)
