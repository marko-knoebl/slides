# Abstraktion

## Abstraktion

- Pipelines
- eigene Klassen

## Abstraktion

_Pipelines_ können das Verarbeiten von Eingangswerten _x_ abstrahieren

Eigene Klassen können das Verarbeiten von sowohl _x_ als auch _y_ abstrahieren

## Abstraktion

direkte Verwendung eines Modells, um Überleben auf der Titanic vorherzusagen:

```py
model.predict([[2, 0, 28.0, 0]])
# [0]
```

abstrahiertes Interface:

```py
classifier.predict_survival(
    pclass=2, sex="male", age=28.0, sibsp=0
)
# False
```
