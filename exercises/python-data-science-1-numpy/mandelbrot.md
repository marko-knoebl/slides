# Mandelbrot

Compute the mandelbrot set iteratively

create a sequence `z[0]`, `z[1]`, ... that contains values of the mandelbrot function for that iteration step

plot the points where the absolute value is greater than 2 via:

```py
import matplotlib.pyplot as plt
plt.imshow(np.abs(z[10]) > 2, cmap="gray")
```
