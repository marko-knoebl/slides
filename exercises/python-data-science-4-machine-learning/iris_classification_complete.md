# Iris classification - complete

Create a classifier (e.g. k-nearest-neighbors) that can classify iris plants.

The classifier should be implemented as a class that abstracts implementation details.

An example interface could look like this:

training:

```py
classifier = IrisClassifier()

classifier.load_data()
classifier.fit()
classifier.validate()
```

prediction:

```py
test_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]

print(classifier.predict(test_data))
```
