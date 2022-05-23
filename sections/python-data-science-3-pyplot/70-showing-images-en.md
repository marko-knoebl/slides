# Showing images

## Showing images

a grayscale image with 3x3 pixels:

```py
image = np.array([[0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8]])
plt.imshow(image, cmap="gray")
```

an RGB image with 2x2 pixels:

```py
colors = np.array([[[255, 0, 0], [0, 255, 0]],
                   [[0, 0, 255], [0, 0, 0]]])
plt.imshow(colors)
```
