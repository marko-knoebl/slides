users = [
    {"username": "Alice", "password": "1234"},
    {"username": "Bob", "password": "pwd"},
    {"username": "Charlie", "password": "paris41"}
]

# get username

while True:
    username = input("Username: ")
    user = None
    for potential_user in users:
        if username == potential_user["username"]:
            user = potential_user
    if user:
        break
    else:
        print("No such user")

# get password

while True:
    password = input("Password: ")
    if password == user["password"]:
        break
    else:
        print("Incorrect password")

print("Welcome!")
