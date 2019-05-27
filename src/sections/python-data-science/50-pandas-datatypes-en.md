# Pandas: data types

## Pandas: data types

One data type per series (for all its entries)

Each series (column) in a data frame can have a different data type

Most generic data type: `object` - can hold any data, but will be inefficient

```py
dates = usd_eur['Date'].astype('datetime64[ns]')
```
