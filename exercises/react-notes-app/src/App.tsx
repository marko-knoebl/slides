import { useState } from "react";
import "./App.css";

type Note = {
  id: number;
  text: string;
  category: string;
};

const noteClasses: Record<string, string> = {
  personal: "Note--Personal",
  work: "Note--Work",
};

export default function App() {
  const [notes, setNotes] = useState<Array<Note>>([]);

  function addNote() {
    let maxId = 0;
    for (let note of notes) {
      maxId = Math.max(maxId, note.id);
    }
    const newNote = { id: maxId + 1, text: "", category: "personal" };
    setNotes([...notes, newNote]);
  }

  function updateText(id: number, text: string): void {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: text } : note))
    );
  }

  function updateCategory(id: number, category: string): void {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, category: category } : note
      )
    );
  }

  function deleteNote(id: number): void {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="App">
      <div className="AppBar">
        <h1 className="AppBar__Heading">Notes</h1>
        <button className="AppBar__NewButton" onClick={() => addNote()}>
          New
        </button>
      </div>
      <div className="NotesCanvas">
        {notes.map((note) => (
          <div key={note.id} className={`Note ${noteClasses[note.category]}`}>
            <textarea
              value={note.text}
              onChange={(event) => updateText(note.id, event.target.value)}
              className="Note__Textarea"
            />
            <div className="Note__Footer">
              <select
                value={note.category}
                onChange={(event) =>
                  updateCategory(note.id, event.target.value)
                }
                className="Note__Dropdown"
              >
                <option value="personal">personal</option>
                <option value="work">work</option>
              </select>
              <button
                className="Note__Button"
                onClick={() => deleteNote(note.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
