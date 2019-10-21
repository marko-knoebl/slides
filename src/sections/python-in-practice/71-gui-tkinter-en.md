# Tkinter

## Tkinter

https://tkdocs.com/

## Displaying a window

```py
import tkinter as tk

window = tk.Tk()

window.mainloop()
```

A window is created as a `Tk` object.

The method `mainloop()` starts the program (and waits for user interaction)

## Displaying text

```py
import tkinter as tk

window = tk.Tk()

hello_label = tk.Label(master=window, text="Hello!")
hello_label.pack()

window.mainloop()
```

## Modifying elements

```py
hello_label = tk.Label(master=window, text="Hello!")
hello_label.config(text="Hi!")
```

## User interactions

```py
...

message_label = tk.Label(master=window, text="")
message_label.pack()

def display_message():
    message_label.config(text="Hello!")

hello_button = tk.Button(master=window,
                              text="Say Hello!",
                              command=display_message)
hello_button.pack()

...
```

## Application state and user interactions

Application state is best stored inside a class.

## Application state and user interactions

```py
import tkinter as tk

class CounterApp:
    def __init__(self):
        self.count = 0

        self.window = tk.Tk()
        self.count_btn = tk.Button(
            master=self.window,
            text=str(self.count),
            command=self.increment_count
        )
        self.count_btn.pack()

    def increment_count(self):
        self.count += 1
        self.count_btn.config(text=str(self.count))

    def run(self):
        self.window.mainloop()

counter = CounterApp()
counter.run()
```

## Application state and user interactions

Task: add a _reset_ button to the counter

## Layouts

Simple layouts in rows and columns via `.pack`:

```py
label.pack()
```

More complex layouts in grids:

```py
label_a.grid(column=0, row=0)
label_b.grid(column=0, row=1)
```

## Widget configuration

config options:

- `height` (in pixels or relative to the font size)
- `width`
- `borderwidth`
- `background` (background color)
- `foreground` (text color)
- `justify` (text alignment, e.g. `tk.CENTER`, `tk.LEFT`, `tk.RIGHT`)
- `padx`, `pady` (distance between the border and the content)
- `font` (e.g.: `("Arial", 16)`)

## Widgets

- `Label`
- `Button`
- `Frame`
- `Entry`

## Examples

- Snellen chart
- Tic-Tac-Toe
