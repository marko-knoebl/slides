# Accessing an Atlas database

## Accessing an Atlas database

to connect to an Atlas project from node:

- allow (_whitelist_) IP addresses
- add database users
- get a database URL

## Atlas: allowed IP addresses

in the sidebar, select _Network Access_

add IP addresses that are permitted to access the cluster

## Atlas: users

in the sidebar, select _Database Access_

add a user that can be authenticated via username and password

## Atlas: connection URL

in the sidebar, select _Clusters_

click _connect_ and choose _connect your application_

note down the URL as:

```
mongodb+srv://<user>:<password>@<clusterurl>/<dbname>
```

(we can choose any _dbname_ to create a new database)
