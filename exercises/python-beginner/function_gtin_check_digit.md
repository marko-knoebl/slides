# Function: gtin_check_digit

The _Global Trade Item Number_ is often written under product bar codes

Its last digit is a check digit that can verify if the number was read correctly

Write a function that can compute the check digit if given the rest of the number

```py
gtin_check_digit("211025400322")
# result: 6
```

## Computing the check digit

example GTIN: `2110254003226`

1\. start with the last digit removed

example: `211025400322`

2\. starting from the right, triple every other digit

example: `2 3 1 0 2 15 4 0 0 9 2 6`

3\. compute the sum

example: 44

4\. get the remainder when dividing by 10

example: 4

5\. subtract from 10

example: 6
