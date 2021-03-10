# Example: loading and preparing iris data

## Example: loading data

```py
iris = pd.read_csv(
    "http://archive.ics.uci.edu/ml/" +
    "machine-learning-databases/iris/iris.data",
    header=None)
iris_measures = iris.iloc[:, :4].to_numpy()
iris_species = iris.iloc[:, 4].to_numpy()
```

## Example: preparing data

```py
encoder = LabelBinarizer()
encoder.fit(iris_species)
iris_species_one_hot = encoder.transform(iris_species)
```

```py
scaler = StandardScaler()
scaler.fit(iris_measures)
iris_measures_scaled = scaler.transform(iris_measures)
```

```py
x = iris_measures_scaled
y = iris_species_one_hot
```
