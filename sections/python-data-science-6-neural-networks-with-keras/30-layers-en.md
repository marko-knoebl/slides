# Layers

## Types of layers

- activation layers (outputs: apply an activation function to every input in isolation)
- dense layers (outputs: weighed sum of inputs)
- convolution layers (outputs: weighed sum of nearby inputs)
- pooling layers (outputs: e.g. maximum or average or nearby inputs)
- dropout layers (individual outputs: either same as input or 0)
- normalization layers (e.g. to keep mean close to 0 and standard deviation close to 1)

some layers (e.g. dense, convolution) can optionally have a built-in activation function

## Layers in keras

- `Activation`
- `Dense`
- `Conv1D`, `Conv2D`, `Conv3D`
- `MaxPooling1D`, `MaxPooling2D`, `MaxPooling3D`
- `Dropout`
- `BatchNormalization`
