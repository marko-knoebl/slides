# Abstraction

## Abstraction

- pipelines
- custom classes

## Abstraction

_pipelines_ can abstract the processing of input values _x_

custom classes can abstract the processing of both _x_ and _y_

## Abstraction

direct model usage to predict survival on the Titanic:

```py
model.predict([[2, 0, 28.0, 0]])
# [0]
```

abstracted interface:

```py
classifier.predict_survival(
    pclass=2, sex="male", age=28.0, sibsp=0
)
# False
```
