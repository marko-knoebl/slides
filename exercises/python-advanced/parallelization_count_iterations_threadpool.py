from concurrent.futures import ThreadPoolExecutor

previous_thread = 0
current_iterations = 0

def count_iterations(id):
    global current_iterations
    global previous_thread
    for i in range(1_000_000):
        if id == previous_thread:
            # same thread as before
            current_iterations += 1
        else:
            # thread changed
            print(f"{current_iterations} iterations in thread {(id + 1) % 2}")
            current_iterations = 0
            previous_thread = id

with ThreadPoolExecutor() as executor:
    executor.submit(count_iterations, 0)
    executor.submit(count_iterations, 1)
