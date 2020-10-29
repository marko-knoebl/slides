import sqlite3
import datetime

connection = sqlite3.connect(":memory:", detect_types=sqlite3.PARSE_DECLTYPES)
cursor = connection.cursor()

cursor.execute(
    """
    CREATE TABLE person (
        firstname VARCHAR(50),
        lastname VARCHAR(50),
        dob DATE
    );
    """
)
cursor.execute(
    """INSERT INTO person(firstname, lastname, dob) VALUES (?, ?, ?)""",
    ("John", "Doe", "2003-06-25"),
)
cursor.execute(
    """INSERT INTO person(firstname, lastname, dob) VALUES (?, ?, ?)""",
    ("Jane", "Doe", datetime.date(2005, 8, 10))
)

cursor.execute("""SELECT * FROM person;""")
print(cursor.fetchall())
