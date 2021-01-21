# Databases - intermediate

## Relations between tables

- `1 : 1`
- `1 : n`
- `m : n`

## Relations between tables: examples

- `0..1 : 1..1`  
  department ←manages→ employee  
  A department has 1 manager; each employee manages either 0 or 1 departments
- `0..1 : 0..n`  
  department ←works in→ employee  
  A department can have many employees; an employee can be assigned to 0 or 1 departments;
- `0..m : 0..n`  
  project ←works on→ employee  
  A project can have multiple employees working on it; an employee can work on multiple projects

## Entity-relationship model

https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model

## ACID

Properties of a database that guarantee its validity (protecting against errors):

- _Atomicity_: Data are modified via transactions which either succeed or fail as a whole - a transaction is never applied only partially.
- _Consistency_: There may be constraints that are defined for datasets. A transaction that would violate such a constraint will fail and will not be applied.
- _Isolation_: Transactions that run in parallel will not influence each other.
- _Durability_: If a transaction is reported to have succeeded its result must be available permanently (i.e. not just in RAM).
