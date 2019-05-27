# Pandas: extras

()

`df.at["2009-01-02", "rate"]`: specific row and column (faster than `.loc`)
iat

`df.loc[:, 'col']` -> `df['col']` -> `df.col`

## Filtering entries

- `df[df >= 0]` (all negative entries will be set to `NaN`)
