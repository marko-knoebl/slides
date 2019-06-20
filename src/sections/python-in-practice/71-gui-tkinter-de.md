# Tkinter

## Tkinter

https://tkdocs.com/

## Tkinter - Ein Fenster anzeigen

```py
import tkinter

window = tkinter.Tk()

window.mainloop()
```

Ein Fenster wird als `Tk`-Objekt erstellt

Mit `mainloop()` starten wir das Programm (und warten auf Benutzerinteraktion)

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
hello_label = tkinter.Label(master=window, text="Hello!")
hello_label.config(text="Hi!")
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
- `padx`, `pady` (Abstand Rahmen zu Inhalt)

## Tkinter - Widgets

- `Label`
- `Button`
- `Frame`

## Tkinter - Beispiele

- zufälliger Sehtest (Snellen Chart)
