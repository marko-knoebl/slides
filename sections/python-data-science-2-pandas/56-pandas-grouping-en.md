# Grouping

## Grouping

splitting data into groups / categories and computing values based on these groups

## Grouping

example: average of the iris data

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

## Grouping

Exercise: average USD exchange rates for each currency in the 90s
