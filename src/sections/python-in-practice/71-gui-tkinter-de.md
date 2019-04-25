# Tkinter

## Tkinter - Beispiel

```py
# simple.pyw
import tkinter

# ein Objekt vom Typ "Tk" erstellen
window = tkinter.Tk()
# Programm (event loop) starten
#   (auf Benutzerinteraktion warten)
window.mainloop()
```

## Tkinter - Text anzeigen

```py
import tkinter

window = tkinter.Tk()

hello_label = tkinter.Label(master=window, text="Hello!")
hello_label.pack()

window.mainloop()
```

## Tkinter - Elemente nachträglich ändern

```py
time_label = tkinter.Label(master=window, text="")
time_label.config(text="Hello!")
```

## Tkinter - Benutzerinteraktion

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

## Beispiel: Counter

Button, der bei 0 startet und die Klickanzahl mitzählt und anzeigt

## Tkinter - Widget-Konfiguration

Möglichkeiten:

- `height`
- `width`
- `borderwidth`
- `background` (Hintergrundfarbe)
- `foreground` (Textfarbe)
- `justify` (Textausrichtung, Werte: `CENTER`, `LEFT`, `RIGHT`)
- `padx`, `pady` (Abstand Rahmen zum Inhalt)

## Tkinter - Widgets

- `Label`
- `Button`
- `Frame`

## Tkinter - Beispiele

- zufälliger Sehtest
