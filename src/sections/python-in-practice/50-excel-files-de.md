# Arbeiten mit Excel-Dateien

## Arbeiten mit Excel-Dateien

PIP-Paket _openpyxl_

## Openpyxl

Erstellen, Speichern, Laden:

```py
import openpyxl

wb = openpyxl.Workbook()
wb.save("wb.xlsx")

wb2 = openpyxl.load_workbook("wb.xlsx")
```

## Openpyxl

Erstellen und Abfragen von Worksheets:

```py
ws1 = wb.worksheets[0]
print(wb.sheetnames) # ["Sheet"]
ws1 = wb["Sheet"]

# new sheet 0
wb.create_sheet("Sheet2", 0)
ws2 = wb["Sheet2"]
```

## Openpyxl

Arbeiten mit Worksheets

```py
ws = wb.worksheets[0]

ws.title = "times table"
```

## Openpyxl

Arbeiten mit Zellen

```py
a1 = ws.cell(1, 1)
a1 = ws["A1"]

a1.value # None
a1.value = 3

a1.row # 1
a1.column # 1
a1.coordinate # "A1"
```

## Openpyxl

Beispiel: Erstellen der folgenden Tabelle:

| product | price | stock |
| ------- | ----- | ----- |
| apple   | 1.00  | 10    |
| banana  | 0.70  | 20    |
| pear    | 0.80  | 20    |

## Resourcen

- [openpyxl documentation - Simple usage](https://openpyxl.readthedocs.io/en/stable/usage.html)
- [openpyxl documentation - Key Classes](https://openpyxl.readthedocs.io/en/stable/#key-classes)
- [Automate the Boring Stuff with Python - Chapter 12](http://automatetheboringstuff.com/chapter12/)

