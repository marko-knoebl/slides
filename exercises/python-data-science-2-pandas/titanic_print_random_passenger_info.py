import pandas as pd


def get_random_passenger():
    titanic = pd.read_csv(
        "https://public.opendatasoft.com/"
        + "explore/dataset/titanic-passengers/download",
        delimiter=";",
    )

    # get a random sample of 1 element,
    # then select the first row (which is a series )
    passenger = titanic.sample().iloc[0]
    return passenger


def print_passenger_info(passenger):

    name = passenger["name"]
    age = passenger["age"]
    survived = passenger["survived"]

    if passenger["sex"] == "female":
        pronoun = "she"
    else:
        pronoun = "he"

    print(f"{name} was {age:.0f} when {pronoun} boarded the Titanic.")
    if survived == "Yes":
        print(f"{pronoun.capitalize()} survived.")
    else:
        print(f"{pronoun.capitalize()} did not survive.")


print_passenger_info(get_random_passenger())
