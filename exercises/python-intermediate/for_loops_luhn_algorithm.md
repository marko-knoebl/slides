# For loops: Luhn algorithm

The Luhn algorithm is used to prevent errors in identification numbers, such as credit card numbers

The last digit of these numbers is a check digit which is computed from the other digits

Example: the sequence `7992739871` has a check digit of `3`, so the entire number would be `79927398713`

Task: write a function that computes the check digit for an input (use techniques like `enumerate`)

## Computing the check digit

starting from the right, replace every _other_ digit based on this schema:

0 → 0, 1 → 2, 2 → 4, 3 → 6, 4 → 8,  
5 → 1, 6 → 3, 7 → 5, 8 → 7, 9 → 9

(For example `7992739871` will become `7994769772`)

sum all digits

(For example `7994769772` will sum to 67)

the check digit is the number that's missing from the next full 10

(in this case, it's 3)
