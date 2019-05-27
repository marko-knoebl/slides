# Daten importieren und exportieren

## Daten importieren und exportieren

Datenformate:

- CSV
- Excel
- JSON
- HDF5 (effizientes Binärformat)
- SQL tables (via _SQLAlchemy_)

## Daten importieren und exportieren

Import: `pd.read_csv`, `pd.read_excel`, ...

Export: `df.to_csv`, `df.to_excel`, ...

## Daten importieren und exportieren

```py
df.to_excel('iris.xlsx')
```

```py
data = pd.read_excel('iris.xlsx', index_col=0)
```

## Daten importieren und exportieren

HDF5:

- via _pytables_ (muss installiert sein)

```py
df.to_hdf('data.hdf5', 'iris')
```

```py
pd.read_hdf('data.hdf5', 'iris')
```
