import numpy as np

# create a an array "z1"
# that contains imaginary numbers
# in the square from -3-2i to 3+2i
x = np.linspace(-3, 3, 200)
y = np.linspace(-2, 2, 100)
xx, yy = np.meshgrid(x, y)
z1 = xx + yy*1j

# create an array "z"
# that will be filled with further iterations
z = np.array([z1])
for i in range(10):
    z_new = z[i]**2 + z[0]
    z = np.concatenate([z, np.expand_dims(z_new, 0)])

# visualize the points
# where the absolute value is greater than 2
import matplotlib.pyplot as plt
plt.imshow(np.abs(z[10]) > 2, cmap="gray")
