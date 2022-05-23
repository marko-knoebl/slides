# Anzeigen von Bildern

## Anzeigen von Bildern

Ein Graustufenbild mit 3x3 Pixeln:

```py
image = np.array([[0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8]])
plt.imshow(image, cmap="gray")
```

ein RGB-Bild mit 2x2 Pixeln:

```py
colors = np.array([[[255, 0, 0], [0, 255, 0]],
                   [[0, 0, 255], [0, 0, 0]]])
plt.imshow(colors)
```
