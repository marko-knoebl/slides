# IP addresses in SQLite

Create a database that can be filled withe entries like these:

```
google.com, 172.217.21.110
en.wikipedia.org, 91.198.174.192
```

The IP addresses should be represented by Python's native `ipaddress.IPv4Address` class.

Make use of `PARSE_DECLTYPES`, `register_adapter` and `register_converter`.
