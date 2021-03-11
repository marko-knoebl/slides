import os
import pickle

from iris_classifier_class import IrisClassifier

classifier = IrisClassifier()

classifier.load_data()
classifier.fit()
classifier.validate()
classifier.validate_versicolor_roc()

directory = os.path.dirname(__file__)

with open(directory + "/classifier.pickle", "wb") as file:
    pickle.dump(classifier, file)
