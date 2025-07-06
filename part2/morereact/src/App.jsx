/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note.jsx";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const toggleImportanceOf = (id) => {
    console.log("importance of " + id + " needs to be toggled");
  };

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((res) => {
      console.log("promise fufilled");
      setNotes(res.data);
    });
  };

  useEffect(hook, []);
  /**
   * Now we can see more clearly that the function useEffect takes two parameters.
   * The first is a function, the effect itself. According to the documentation:
   *** By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
   */

  console.log("render", notes.length, "notes");
  /**
   * Fetch
   */
  /**
   * setup: The setup is the function with the Effect's logic. Setup may also optionally return a cleanup function.
   * dependencies: list of all reactive values referenced inside the setup code.
   *
   * useEffect returns undefined
   * useEffect is a hook, so you only call it at the top level of your component
   *
   * By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
   * This means by default, the effect is always run after the component has been rendered. In our case,
   * however, we only want to execute the effect along with the first render.
   *
   * The second parameter of useEffect is used to specify how often the effect is run.
   * If the second parameter is an empty array [], then the effect is only run along with the first render of the component.
   */

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      // id: String(notes.length) + 1,
    };
    // setNotes(notes.concat(noteObject));
    // setNewNote("");
    // console.log("button clicked", event.target);
    axios.post("http://localhost:3001/notes", noteObject).then((res) => {
      console.log(res);
      setNotes(notes.concat(res.data));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};
export default App;
