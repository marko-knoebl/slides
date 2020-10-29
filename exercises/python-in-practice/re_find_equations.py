import re


def find_equations_xyz(text):
    match_iter = re.finditer(r"(-?\d+)x([\+-]\d+)y([\+-]\d+)z=(-?\d+)", text)
    equations = []
    for match in match_iter:
        equations.append({
            "xcoeff": match[1],
            "ycoeff": match[2],
            "zcoeff": match[3],
            "abs": match[4]
        })
    return equations

print(find_equations_xyz("The equations are 34x+7y-1z=9 and -1x+4y+2z=-7"))
