# Working with Excel files

## Working with Excel files

PIP package _openpyxl_

## Openpyxl

Creating, saving, loading:

```py
import openpyxl

wb = openpyxl.Workbook()
wb.save("wb.xlsx")

wb2 = openpyxl.load_workbook("wb.xlsx")
```

## Openpyxl

Creating and getting worksheets:

```py
ws1 = wb.worksheets[0]
print(wb.sheetnames) # ["Sheet"]
ws1 = wb["Sheet"]

# new sheet 0
wb.create_sheet("Sheet2", 0)
ws2 = wb["Sheet2"]
```

## Openpyxl

Working with worksheets:

```py
ws = wb.worksheets[0]

ws.title = "times table"
```

## Openpyxl

Working with cells:

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

Exercise: Create the followng table:

| product | price | stock |
| ------- | ----- | ----- |
| apple   | 1.00  | 10    |
| banana  | 0.70  | 20    |
| pear    | 0.80  | 20    |

## Resources

- [openpyxl documentation - Simple usage](https://openpyxl.readthedocs.io/en/stable/usage.html)
- [openpyxl documentation - Key Classes](https://openpyxl.readthedocs.io/en/stable/#key-classes)
- [Automate the Boring Stuff with Python - Chapter 12](http://automatetheboringstuff.com/chapter12/)

