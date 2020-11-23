import numpy as np
import matplotlib.pyplot as plt

n = 1 * 10 ** 4

# array of n points in 2D space
# each row is a point
# x and y are between -1 and 1
points = np.random.random((n, 2)) * 2 - np.array([1, 1])

# array of distances from the point [0, 0]
r = np.sqrt(points[:, 0] ** 2 + points[:, 1] ** 2)

# array of points within the unit circle
points_inner = points[r <= 1]
# array of points outside the unit circle
points_outer = points[r > 1]

pi_approx = points_inner.shape[0] * 4 / n

# visualization

plt.plot(points_inner[:, 0], points_inner[:, 1], ".")
plt.plot(points_outer[:, 0], points_outer[:, 1], ".", color="lightgrey")

t = np.linspace(0, 2*np.pi, 100)
plt.plot(np.cos(t), np.sin(t))

plt.axis("scaled")
plt.axis([-1, 1, -1, 1])

plt.title(f"Pi is approximately {pi_approx}")

plt.show()
