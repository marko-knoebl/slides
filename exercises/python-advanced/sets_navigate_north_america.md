# Navigate North America

The following data uses sets to represent which countries in North America border each other.

Use the data to write an algorithm that finds the route(s) between two given countries.

```py
countries = {
    "Canada", "USA", "Mexico", "Guatemala", "Belize",
    "El Salvador", "Honduras", "Nicaragua", "Costa Rica",
    "Panama"}

neighbors = [
    {"Canada", "USA"},
    {"USA", "Mexico"},
    {"Mexico", "Guatemala"},
    {"Mexico", "Belize"},
    {"Guatemala", "Belize"},
    {"Guatemala", "El Salvador"},
    {"Guatemala", "Honduras"},
    {"Honduras", "Nicaragua"},
    {"Nicaragua", "Costa Rica"},
    {"Costa Rica", "Panama"}
]
```
