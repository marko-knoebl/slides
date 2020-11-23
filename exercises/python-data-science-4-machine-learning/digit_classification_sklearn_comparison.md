# Digit classification

The [MNIST digit dataset](https://en.wikipedia.org/wiki/MNIST_database) contains images of handwritten digits along with their correct label.

The dataset (scaled to 8x8) can be loaded via:

```py
from sklearn import datasets

digits = datasets.load_digits()
```

We can inspect the data via:

```
print(digits.images[:5])
print(digits.target[:5])
```

Use various classification algorithms on the data (split into train and test data). Assess their efficiency by printing their _accuracy_ and _confusion matrix_.
