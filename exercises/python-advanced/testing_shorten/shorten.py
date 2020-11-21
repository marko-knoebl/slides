def shorten(text, maxlength):
    """Shorten a string to a desired maximum length.
    
    >>> shorten("loremipsum", 10)
    'loremipsum'
    >>> shorten("loremipsum", 6)
    'lor...'
    """
    if len(text) > maxlength:
        return text[: maxlength - 3] + "..."
    return text
