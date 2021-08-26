# Preparing data

## Preparing data

input data types:

- _NumPy_ arrays
- TensorFlow `Dataset` objects - for big data sets that do not fit in memory
- Python generators that yield batches of data

## Preparing data

desired data format:

- _x_: _NumPy_ array or `tf.data.Dataset` object
-

## Helper functions

- `keras.preprocessing.image_dataset_from_directory`
- `keras.preprocessing.text_dataset_from_directory`

## Rescaling

```py
keras.layers.Rescaling(1/255, offset=-0.5)
```
