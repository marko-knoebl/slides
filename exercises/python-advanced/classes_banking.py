class BankAccount:
    def __init__(self, owner, currency, initial_balance=0, iban=None):
        self.owner = owner
        self.initial_balance = initial_balance
        self.iban = iban
        self.transactions = []

    def get_balance(self, date=None):
        """
        Compute the balance at a specific date.

        If no date is passed in, compute the balance that
        includes all transactions.
        """
        date = date or "9999-99-99"
        transaction_sum = sum(
            transaction.amount
            for transaction in self.transactions
            if transaction.date <= date
        )
        return self.initial_balance + transaction_sum

    def add_transaction(self, transaction):
        if not isinstance(transaction, Transaction):
            raise TypeError("Transactions have to be of type 'Transaction'")
        self.transactions.append(transaction)


class Transaction:
    def __init__(self, amount, date, description):
        self.amount = amount
        self.date = date
        self.description = description
