# Tkinter

## Example

```py
import tkinter

window = tkinter.Tk()

window.mainloop()
```

## Displaying text

```py
import tkinter

window = tkinter.Tk()

hello_label = tkinter.Label(master=window, text="Hello!")
hello_label.pack()

window.mainloop()
```

## Modifying elements

```py
time_label = tkinter.Label(master=window, text="")
time_label.config(text="Hello!")
```

## User interactions

```py
...

message_label = tkinter.Label(master=window, text="")
message_label.pack()

def display_message():
    message_label.config(text="Hello!")

hello_button = tkinter.Button(master=window,
                              text="Say Hello!",
                              command=display_message)
hello_button.pack()

...
```

## Example: counter

Implement a button that starts at 0 and counts the number of clicks

## Widget configuration

config options:

- `height`
- `width`
- `borderwidth`
- `background` (background color)
- `foreground` (text color)
- `justify` (text alignments, values: `CENTER`, `LEFT`, `RIGHT`)
- `padx`, `pady` (distance between the border and the content)

## Widgets

- `Label`
- `Button`
- `Frame`

## Examples

- Snellen chart
