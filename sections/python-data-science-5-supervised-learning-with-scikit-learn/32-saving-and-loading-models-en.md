# Saving and loading models

## Saving and loading models

A trained model can be saved for later use

In Python, objects can be saved and loaded via the `pickle` module

## Saving models

```py
import pickle

with open("model.pickle", mode="wb") as picklefile:
    pickle.dump(model, picklefile)
```

## Loading models

```py
import pickle

with open("model.pickle", mode="rb") as picklefile:
    model = pickle.load(picklefile)

model.predict(data)
```
