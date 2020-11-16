# Example: inspecting the NN for iris classification

```py
layer_0 = model.get_layer(index=0)
layer_1 = model.get_layer(index=1)

print(layer_0.weights)
print(layer_1.weights)

print("setosa")
setosa_input = np.array([[5.1,3.5,1.4,0.2]])
setosa_1 = layer_0(setosa_input)
print(setosa_1)
setosa_2 = layer_1(setosa_1)
print(setosa_2)

versicolor_input = np.array([[7.0,3.2,4.7,1.4]])
versicolor_1 = layer_0(versicolor_input)
print(versicolor_1)
versicolor_2 = layer_1(versicolor_1)
print(versicolor_2)

virginica_input = np.array([[6.3,3.3,6.0,2.5]])
virginica_1 = layer_0(virginica_input)
print(virginica_1)
virginica_2 = layer_1(virginica_1)
print(virginica_2)
```
