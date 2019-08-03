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

## Tkinter - pack und grid

Mit `pack`: Einfache Zeilen- oder Spaltenlayouts

```py
hello_label.pack()
```

Mit `grid`: Komplexere Ausrichtungen an einem Raster sind möglich

```py
hello_label.grid(column=0, row=0)
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

- `height` (in Pixeln oder relativ zur Schriftgröße)
- `width`
- `borderwidth`
- `background` (Hintergrundfarbe)
- `foreground` (Textfarbe)
- `justify` (Textausrichtung, Werte: `tkinter.CENTER`, `tkinter.LEFT`, `tkinter.RIGHT`)
- `padx`, `pady` (Abstand Rahmen zu Inhalt)

## Tkinter - Widgets

- `Label`
- `Button`
- `Frame`
- `Entry`

## Tkinter - Beispiele

- zufälliger Sehtest (Snellen Chart)
- Tic-Tac-Toe
