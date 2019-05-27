# Importing and exporting data

## Importing and exporting data

data formats:

- CSV
- Excel
- JSON
- HDF5 (efficient binary format)
- SQL tables (via _SQLAlchemy_)

## Importing and exporting data

import: `pd.read_csv`, `pd.read_excel`, ...

export: `df.to_csv`, `df.to_excel`, ...

## Importing and exporting data

```py
df.to_excel('iris.xlsx')
```

```py
data = pd.read_excel('iris.xlsx', index_col=0)
```

## Importing and exporting data

HDF5:

- via _pytables_ (must me installed)

```py
df.to_hdf('data.hdf5', 'iris')
```

```py
pd.read_hdf('data.hdf5', 'iris')
```
