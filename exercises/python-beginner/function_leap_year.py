def is_leap_year(year):
    """Determine whether a year is a leap year.
    """
    if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
        return True
    else:
        return False
