import matplotlib.pyplot as plt
import numpy as np

roses = [(2, 1, 2 * np.pi), (3, 1, 1 * np.pi), (3, 2, 4 * np.pi), (3, 4, 8 * np.pi)]

for index, combination in enumerate(roses):
    ax = plt.subplot(2, 2, index + 1)
    ax.axis("equal")
    n, d, max_t = combination
    t = np.linspace(0, max_t, 300)
    x = np.cos(n / d * t) * np.cos(t)
    y = np.cos(n / d * t) * np.sin(t)
    ax.plot(x, y)

plt.show()
