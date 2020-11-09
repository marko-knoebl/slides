def gtin_check_digit(gtin_without_check):
    gtin_without_check = str(gtin_without_check)
    s = 0
    # go through the digits starting with the last
    length = len(gtin_without_check)
    for i in range(length):
        digit = gtin_without_check[-i - 1]
        value = int(digit)
        if i % 2 == 0:
            value = value * 3
        s += value
    s = s % 10
    return 10 - s
