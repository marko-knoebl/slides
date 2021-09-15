from typing import Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import json


class Contact(BaseModel):
    id: int
    first_name: str
    last_name: str
    phone_nr: str


app = FastAPI()


def load_contacts():
    with open("./data.json", encoding="utf-8") as data_file:
        contents = json.load(data_file)
    contacts = contents["contacts"]
    return contacts


def save_contacts(contacts):
    with open("./data.json", "w", encoding="utf-8") as data_file:
        json.dump({"contacts": contacts}, data_file, indent=2)


@app.get("/")
def read_contacts(first_name: str = None):
    result = []
    contacts = load_contacts()
    if first_name:
        for contact in contacts:
            if first_name.lower() in contact["first_name"].lower():
                result.append(contact)
        return result
    else:
        return contacts


@app.get("/{contact_id}")
def read_contact(contact_id: int):
    contacts = load_contacts()
    for contact in contacts:
        if contact["id"] == contact_id:
            return contact
    raise HTTPException(status_code=404, detail="item not found")


@app.post("/")
def add_contact(first_name: str, last_name: str, phone_nr: str):
    contacts = load_contacts()
    max_id = 0
    for c in contacts:
        if c["id"] > max_id:
            max_id = c["id"]
    contact = {
        "id": max_id + 1,
        "first_name": first_name,
        "last_name": last_name,
        "phone_nr": phone_nr,
    }
    contacts.append(contact)
    save_contacts(contacts)


@app.put("/{contact_id}")
def replace_contact(contact_id: int, first_name: str, last_name: str, phone_nr: str):
    contacts = load_contacts()
    for (i, contact) in enumerate(contacts):
        if contact["id"] == contact_id:
            contacts[i] = {
                "id": contact_id,
                "first_name": first_name,
                "last_name": last_name,
                "phone_nr": phone_nr,
            }
            break
    save_contacts(contacts)


@app.patch("/{todo_id}")
def modify_contact(
    contact_id: int, first_name: str = None, last_name: str = None, phone_nr: str = None
):
    contacts = load_contacts()
    for contact in contacts:
        if contact["id"] == contact_id:
            if first_name:
                contact["first_name"] = first_name
            if last_name:
                contact["last_name"] = last_name
            if phone_nr:
                contact["phone_nr"] = phone_nr
            break
    save_contacts(contacts)


@app.delete("/{todo_id}")
def delete_contact(contact_id: int):
    contacts = load_contacts()
    new_contacts = [c for c in contacts if c["id"] != contact_id]
    save_contacts(new_contacts)
