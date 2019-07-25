# Databases

## Databases

use: managing big amounts of data

## Tables and schemas

most databases store their data in tables

## Relations between tables

- `1 : 1`
- `1 : n`
- `m : n`

## Relations between tables: examples

- `0..1 : 1..1`  
  department ←manages→ person
- `0..1 : 0..n`  
  department ←works in→ person
- `0..m : 0..n`  
  project ←works on→ person

## Entity-relationship model

https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model

## ACID

Properties of a database that guarantee its validity (protecting against errors):

- _Atomicity_: Data are modified via transactions which either succeed or fail as a whole - a transaction is never applied only partially.
- _Consistency_: There may be constraints that are defined for datasets. A transaction that would violate such a constraint will fail and will not be applied.
- _Isolation_: Transactions that run in parallel will not influence each other.
- _Durability_: If a transaction is reported to have succeeded its result must be available permanently (i.e. not just in RAM).
