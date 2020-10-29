from urllib import request
import os
from os import path
import time
from threading import Thread

download_dir = "downloads"

if not path.exists(download_dir):
    os.mkdir(download_dir)

topics = ["os", "sys", "urllib", "pprint", "math", "time", "datetime"]


def download_page(url, savepath):
    content = request.urlopen(url).read()
    with open(savepath, "wb") as f:
        f.write(content)


def download_python_doc(topic):
    url = f"https://docs.python.org/3/library/{topic}.html"
    download_page(url, f"downloads/{topic}.html")


def download_python_doc_multiple(topics):
    start = time.time()
    for topic in topics:
        download_python_doc(topic)
    end = time.time()
    print(f"Download finished in {end-start} seconds.")


download_python_doc_multiple(topics)
