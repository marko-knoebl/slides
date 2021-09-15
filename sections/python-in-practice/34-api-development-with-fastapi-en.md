# API development with FastAPI

## FastAPI

_FastAPI_: library for API development that relies on type annotations

## FastAPI

basic example:

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

run the example via:

```bash
uvicorn main:app --reload
```

## FastAPI

view documentation and testing environment (Swagger) at: _http://localhost:8000/docs_
