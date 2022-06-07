# 10 years, interest rate = 0.04, yearly payment: 100

balance = 0

for i in range(10):
    # deposit at the start of the year
    balance = balance + 100
    # interest
    interest = balance * 0.04
    balance = balance + interest

print(balance)
