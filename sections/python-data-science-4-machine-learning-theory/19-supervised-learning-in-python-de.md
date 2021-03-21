# Überwachtes Lernen in Python

## Überwachtes Lernen in Python

Überblick über den grundlegenden Prozess in _scikit-learn_ / _keras_

## Trainieren des Modells

Erstelle und Trainiere ein Modell:

```py
model = MyClassifier()

model.fit(train_input, train_target)
```

Beispiel:

`train_input`: Abmessungen von Iris-Blüten

`train_target`: Zugehörige Spezies der Pflanzen

## Vorhersagen neuer Resultate

Vorhersagen von Resultaten für neue Inputs:

```py
model.predict(new_inputs)
```

## Evaluieren des Modells

Bevor wir ein trainiertes Modell zum Vorhersagen neuer Resultate nutzen, sollten wir es mit separaten Testdaten evaluieren:

```py
model.score(test_input, test_target)
# e.g. 0.95 = 95%
```
