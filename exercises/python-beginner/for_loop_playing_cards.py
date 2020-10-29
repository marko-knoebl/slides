cards = []

for suit in ["♠", "♣", "♥", "♦"]:
    for symbol in ["A", "K", "Q", "J"]:
        cards.append(suit+symbol)
    for number in range(9, 1, -1):
        cards.append(suit + str(number))

print(cards)
