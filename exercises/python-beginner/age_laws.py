nationality = input("What country are you from? (us / uk / de) ")
age = int(input("How old are you? "))

if age >= 18:
    print("You may vote")
else:
    print("You may not vote")

if nationality == "de" and age >= 16:
    print("You may drink alcohol")
elif nationality == "uk" and age >= 18:
    print("You may drink alcohol")
elif nationality == "us" and age >= 21:
    print("You may drink alcohol")
else:
    print("You may not drink alcohol")
