countries = {
    "Canada", "USA", "Mexico", "Guatemala", "Belize",
    "El Salvador", "Honduras", "Nicaragua", "Costa Rica",
    "Panama"}

neighbors = [
    {"Canada", "USA"},
    {"USA", "Mexico"},
    {"Mexico", "Guatemala"},
    {"Mexico", "Belize"},
    {"Guatemala", "Belize"},
    {"Guatemala", "El Salvador"},
    {"Guatemala", "Honduras"},
    {"Honduras", "Nicaragua"},
    {"Nicaragua", "Costa Rica"},
    {"Costa Rica", "Panama"}
]

def navigate(start, end):
    """Find the shortest paths between two countries."""
    if start == end:
        return [start]
    unvisited = countries.copy()
    unvisited.remove(start)
    found_route = False
    routes = [[start]]
    while not found_route:
        new_routes = []
        for route in routes:
            current_country = route[-1]
            for neighbor_combination in neighbors:
                if current_country in neighbor_combination:
                    new_country_set = neighbor_combination - {current_country}
                    new_country = new_country_set.pop()
                    del new_country_set
                    if new_country in unvisited:
                        new_routes.append([*route, new_country])
        for new_route in new_routes:
            unvisited -= {new_route[-1]}
            if new_route[-1] == end:
                found_route = True
        routes = new_routes
    return [route for route in routes if route[-1] == end]
