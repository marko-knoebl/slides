# use the trained model to predict more results

import os
import pickle

directory = os.path.dirname(__file__)
with open(directory + "/classifier.pickle", "rb") as file:
    classifier = pickle.load(file)

test_data = [
    [5.3, 3.4, 1.9, 0.6],
    [6.0, 3.0, 4.7, 1.5],
    [6.5, 3.1, 5.0, 1.7]
]

print(classifier.predict(test_data))
