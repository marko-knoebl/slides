# Gruppierung

## Gruppierung

Einteilung der Daten in Gruppen / Kategorien und berechnen von Werten auf deren Basis

Beispiel: Durchschnittswerte der Iris-Daten basierend auf dem Namen der Art

```py
iris.groupby(iris.name).mean()
```

```
                 sepal_length  sepal_width  petal_length  petal_width
name                                                                 
Iris-setosa             5.006        3.418         1.464        0.244
Iris-versicolor         5.936        2.770         4.260        1.326
Iris-virginica          6.588        2.974         5.552        2.026
```

## Gruppierung

Aufgabe: Durchschnittliche USD-Wechselkurse für jede Währung in den 90ern
