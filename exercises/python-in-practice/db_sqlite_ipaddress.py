import sqlite3
import ipaddress

def adapt_ipaddress(address):
    return str(address)

def convert_ipaddress(address):
    return ipaddress.IPv4Address(address.decode("utf-8"))

sqlite3.register_adapter(ipaddress.IPv4Address, adapt_ipaddress)
sqlite3.register_converter("IPADDRESS", convert_ipaddress)

connection = sqlite3.connect(":memory:", detect_types=sqlite3.PARSE_DECLTYPES)
cursor = connection.cursor()

cursor.execute(
    """CREATE TABLE website(
        url VARCHAR(100),
        ip IPADDRESS
    );
    """
)

cursor.execute(
    """INSERT INTO website(url, ip)
    VALUES (?, ?)""",
    ("google.com", ipaddress.IPv4Address("172.217.21.110"))
)

cursor.execute("""SELECT url, ip FROM website;""")
print(cursor.fetchall())
