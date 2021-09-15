# API-Entwicklung mit FastAPI

## FastAPI

_FastAPI_: Library für API-Entwicklung, die auf Typenannotationen beruht

## FastAPI

grundlegendes Beispiel:

```py
# main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/double")
async def double(number: int):
    return number * 2
```

## FastAPI

ausführen des Beispiels via:

```bash
uvicorn main:app --reload
```

## FastAPI

Anzeigen der Dokumentation und Testumgebung (Swagger) auf: _http://localhost:8000/docs_
