import matplotlib.pyplot as plt
import numpy as np
import os
import urllib.request
import zipfile


class CaliforniaHousing:
    def download_data_file(self):
        """Download data to ca_housing.txt"""
        urllib.request.urlretrieve(
            "http://lib.stat.cmu.edu/datasets/houses.zip",
            "ca_housing.zip",
        )
        archive = zipfile.ZipFile("ca_housing.zip")
        archive.extract("cadata.txt")
        archive.close()
        os.remove("ca_housing.zip")
        os.remove("ca_housing.txt")
        os.rename("cadata.txt", "ca_housing.txt")

    def load_data(self):
        data = np.loadtxt("ca_housing.txt", skiprows=27)
        self.data = data

    def plot_map(self):
        plt.scatter(
            self.data[:, 8],
            self.data[:, 7],
            s=self.data[:, 5] / 200,
            c=self.data[:, 0],
            alpha=0.4,
            cmap="inferno",
        )
        plt.show()


california_housing = CaliforniaHousing()

california_housing.download_data_file()
california_housing.load_data()
california_housing.plot_map()
