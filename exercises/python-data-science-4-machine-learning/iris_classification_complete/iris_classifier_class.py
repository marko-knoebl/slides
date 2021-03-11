import pickle

import matplotlib.pyplot as plt
import pandas as pd
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import make_pipeline
from sklearn import preprocessing

class IrisClassifier():
    """Iris classifier based on k-nearest-neighbor algorithm

    internals are available as:
    - classifier.model
    - classifier.y_encoder
    - classifier.x_scaler

    Training:
    >>> classifier = IrisClassifier()
    >>> classifier.load_data()
    >>> classifier.fit()

    Prediction:
    >>> test_data = [
        [5.3, 3.4, 1.9, 0.6],
        [6.0, 3.0, 4.7, 1.5],
        [6.5, 3.1, 5.0, 1.7],
    ]
    >>> classifier.predict(test_data)
    """

    def load_data(self):
        iris = pd.read_csv(
            "http://archive.ics.uci.edu/ml/" +
            "machine-learning-databases/iris/iris.data",
            header=None)
        self.iris_measures = iris.iloc[:, :4].to_numpy()
        self.iris_species = iris.iloc[:, 4].to_numpy()

    def fit(self):
        self.y_encoder = preprocessing.LabelEncoder()
        self.y_encoder.fit(self.iris_species)
        self.y = self.y_encoder.transform(self.iris_species)

        self.x_scaler = preprocessing.StandardScaler()
        self.x_scaler.fit(self.iris_measures)
        self.x = self.x_scaler.transform(self.iris_measures)
        
        x_train, x_test, y_train, y_test = train_test_split(self.x, self.y, random_state=1)
        self.x_train = x_train
        self.x_test = x_test
        self.y_train = y_train
        self.y_test = y_test

        self.model = KNeighborsClassifier()
        self.model.fit(self.x_train, self.y_train)

    def predict(self, x):
        x_scaled = self.x_scaler.transform(x)
        y = self.model.predict(x_scaled)
        y_labels = self.y_encoder.inverse_transform(y)
        return y_labels

    def validate(self):
        y_pred = self.model.predict(self.x_test)
        self.score = metrics.accuracy_score(y_pred, self.y_test)
        print("validation score:", self.score)
        self.confusion_matrix = metrics.confusion_matrix(y_pred, self.y_test)
        print("confusion matrix:")
        print(self.confusion_matrix)
        precision, recall, fscore, support = metrics.precision_recall_fscore_support(y_pred, self.y_test)
        print("precision:")
        print(precision)
        print("recall:")
        print(recall)
        print("f-score:")
        print(fscore)
        print("support")
        print(support)

    def validate_versicolor_roc(self):
        # validate the classification as versicolor
        # via a ROC
        y_pred_proba = self.model.predict_proba(self.x_test)
        fpr, tpr, thresholds = metrics.roc_curve(
            self.y_test == 2,
            y_pred_proba[:, 2]
        )
        plt.plot(fpr, tpr, marker="o")
        plt.xlabel("false positive rate")
        plt.ylabel("true positive rate")
        plt.show()
