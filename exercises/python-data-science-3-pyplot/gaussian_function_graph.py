import numpy as np
import matplotlib.pyplot as plt

def plot_gaussian_function(mu, sigma):
    """Plot a gaussian function.
    
    Plot a gaussian function in the parameter range mu-4*sigma
    to mu+4*sigma.
    """
    x = np.linspace(mu-4*sigma, mu+4*sigma, 100)
    y = 1 / np.sqrt(2*np.pi*sigma) * np.exp(-0.5 * (x-mu)**2/sigma**2)
    plt.plot(x, y)

x = np.linspace(-4, 4, 100)

y = 1 / np.sqrt(2 * np.pi) * np.exp(-0.5 * x ** 2)

plt.plot(x, y)
plt.show()
