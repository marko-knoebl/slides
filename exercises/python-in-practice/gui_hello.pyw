import tkinter as tk

window = tk.Tk()

hello_label = tk.Label(master=window, text="Hello!")
hello_label.grid(column=0, row=0)

window.mainloop()
