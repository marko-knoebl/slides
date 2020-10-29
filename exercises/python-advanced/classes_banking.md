# Banking (classes)

Create classes named `BankAccount` and `Transaction` which can be used in the following way:

```py
acc1 = BankAccount("Marko Knöbl", "EUR", 1200)
acc1.add_transaction(Transaction(1700, "1997-04-13", "salary"))
acc1.add_transaction(Transaction(-7.99, "1997-04-18", "supermarket"))

print(acc1.get_balance("1997-04-15")) # 2900
print(acc1.get_balance()) # 2892.01
```
