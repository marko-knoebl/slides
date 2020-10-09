# Digit classification with keras

The [MNIST digit dataset](https://en.wikipedia.org/wiki/MNIST_database) contains images of handwritten digits along with their correct label.

The dataset can be loaded via:

```py
import keras

(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
```

Train a neural network to recognize the digits
