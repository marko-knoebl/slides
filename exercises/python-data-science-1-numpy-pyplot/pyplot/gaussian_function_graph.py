import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-4, 4, 100)

y = 1 / np.sqrt(2 * np.pi) * np.exp(-0.5 * x ** 2)

plt.plot(x, y)
plt.show()
