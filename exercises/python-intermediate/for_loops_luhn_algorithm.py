replacements = {0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 1, 6: 3, 7: 5, 8: 7, 9: 9}


def luhn(number):
    if type(number) != str:
        raise TypeError("Input must be of type str")

    digits_replaced = []

    for (i, digit_str) in enumerate(reversed(number)):
        digit = int(digit_str)
        if i % 2 == 0:
            digit = replacements[digit]
        digits_replaced.append(digit)

    digits_sum = sum(digits_replaced)
    check_digit = 10 - (digits_sum % 10)
    return check_digit
