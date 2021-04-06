# Titanic class

Create a Python class that can query information on Titanic passengers.

Possible interface:

```py
titanic = TitanicData()
titanic.load_data()

# summary of the available data
print(titanic.summary_text())
# 891 passengers (314 women, 577 men), 342 survivors

# get raw data of a random passenger
print(titanic.get_random_passenger())

# get a description of a passenger
print(titanic.get_random_passenger_text())
# Eustis, Miss. Elizabeth Mussey was 54 years old when she boarded the Titanic.
# She survived.
```
