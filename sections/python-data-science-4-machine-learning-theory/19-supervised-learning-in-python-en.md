# Supervised learning in Python

## Supervised learning in Python

overview of the basic process for _scikit-learn_ / _keras_

## Training a model

create and train a model:

```py
model = MyClassifier()

model.fit(train_input, train_target)
```

example:

`train_input`: measurements of iris flowers

`train_target`: corresponding species of flowers

## Predicting new results

predict results for new inputs:

```py
model.predict(new_inputs)
```

## Evaluating the model

before using a trained model to predict new results, it should be evaluated with separate test data:

```py
model.score(test_input, test_target)
# e.g. 0.95 = 95%
```
