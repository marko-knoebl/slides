import pandas as pd


class TitanicDataNotLoadedError(Exception):
    pass


class TitanicData:
    """A higher-level interface to titanic passenger data.

    Uses a pandas DataFrame internally.
    """

    def load_data(self):
        self._data = pd.read_csv(
            "https://raw.githubusercontent.com/"
            + "datasciencedojo/datasets/master/titanic.csv",
        )

    def ensure_loaded(self):
        if not hasattr(self, "_data"):
            # throw a more helpful error
            raise TitanicDataNotLoadedError(
                "Passenger data has not been loaded.\nCall .load_data()"
            )

    def get_random_passenger(self):
        self.ensure_loaded()
        passenger = self._data.sample().iloc[0]
        return passenger

    def get_random_passenger_text(self):
        passenger = self.get_random_passenger()
        name = passenger["Name"]
        age = passenger["Age"]
        survived = passenger["Survived"]
        if passenger["Sex"] == "female":
            pronoun = "she"
        else:
            pronoun = "he"
        text = f"{name} was {age:.0f} years old when {pronoun} boarded the Titanic.\n"
        if survived == "Yes":
            text += f"{pronoun.capitalize()} survived.\n"
        else:
            text += f"{pronoun.capitalize()} did not survive.\n"
        return text

    def summary_text(self):
        self.ensure_loaded()
        num_passengers = self._data.shape[0]
        num_women = self._data.query("Sex == 'female'").shape[0]
        num_men = num_passengers - num_women
        num_survived = self._data.query("Survived == 'Yes'").shape[0]
        text = (
            f"{num_passengers} passengers "
            + f"({num_women} women, {num_men} men), {num_survived} survivors\n"
        )
        return text


titanic = TitanicData()
titanic.load_data()

print(titanic.summary_text())
print(titanic.get_random_passenger_text())
