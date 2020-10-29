import tkinter as tk
import random
import string


class Snellen:
    def __init__(self, sizes=[100, 50, 35, 25, 20]):
        self.sizes = sizes
        self.rows = []

        self.window = tk.Tk()
        for size in sizes:
            row = tk.Label(master=self.window, font=("Arial", size))
            self.rows.append(row)
            row.pack()

        self.new_btn = tk.Button(master=self.window, text="new", command=self.new)
        self.new_btn.pack()
        self.new()

    def new(self):
        for i in range(len(self.sizes)):
            letters = []
            for j in range(i + 1):
                letter = random.choice(string.ascii_uppercase)
                letters.append(letter)

            self.rows[i].config(text=" ".join(letters))

    def run(self):
        self.window.mainloop()


if __name__ == "__main__":
    s = Snellen()
    s.run()
