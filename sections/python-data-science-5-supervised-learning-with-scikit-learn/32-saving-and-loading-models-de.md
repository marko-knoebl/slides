# Speichern und Laden von Modellen

## Speichern und Laden von Modellen

Ein trainiertes Modell kann für spätere Verwendung gespeichert werden

In Python können Objekte mittels des `pickle`-Moduls gespeichert / geladen werden

## Speichern von Modellen

```py
import pickle

with open("model.pickle", mode="wb") as picklefile:
    pickle.dump(model, picklefile)
```

## Laden von Modellen

```py
import pickle

with open("model.pickle", mode="rb") as picklefile:
    model = pickle.load(picklefile)

model.predict(data)
```
