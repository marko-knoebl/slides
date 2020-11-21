from concurrent.futures import ThreadPoolExecutor

def is_prime(n):
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def keep_if_prime(n):
    return n if is_prime(n) else None

def prime_range(start, stop):
    with ThreadPoolExecutor() as executor:
        res = executor.map(
            keep_if_prime, range(start, stop)
        )
        primes = [n for n in res if n is not None]
    return primes

if __name__ == "__main__":
    print(prime_range(100_000_000_000_000, 100_000_000_000_100))
