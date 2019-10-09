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

## Elemente nachträglich ändern

```py
hello_label = tkinter.Label(master=window, text="Hello!")
hello_label.config(text="Hi!")
```

## Benutzerinteraktion

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

## Anwendungszustand und Benutzerinteraktionen

Der Anwendungszustand wird am besten in einer Klasse gespeichert und verwaltet.

## Anwendungszustand und Benutzerinteraktionen

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

## Anwendungszustand und Benutzerinteraktionen

Aufgabe: Einen _Reset_-Button zum demonstrierten Counter hinzufügen.

## Layouts

Mit `pack`: Einfache Zeilen- oder Spaltenlayouts

```py
label.pack()
```

Mit `grid`: Komplexere Ausrichtungen an einem Raster sind möglich

```py
label_a.grid(column=0, row=0)
label_b.grid(column=0, row=1)
```

## Tkinter - Widget-Konfiguration

Möglichkeiten:

- `height` (in Pixeln oder relativ zur Schriftgröße)
- `width`
- `borderwidth`
- `background` (Hintergrundfarbe)
- `foreground` (Textfarbe)
- `justify` (Textausrichtung, Werte: `tkinter.CENTER`, `tkinter.LEFT`, `tkinter.RIGHT`)
- `padx`, `pady` (Abstand Rahmen zu Inhalt)
- `font` (z.B.: `("Arial", 16)`)

## Tkinter - Widgets

- `Label`
- `Button`
- `Frame`
- `Entry`

## Tkinter - Beispiele

- zufälliger Sehtest (Snellen Chart)
- Tic-Tac-Toe
