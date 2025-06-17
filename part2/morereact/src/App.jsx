// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import Note from "./components/Note.jsx";

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes);
//   const [newNote, setNewNotes] = useState("a new note ...");
//   const [showAll, setShowAll] = useState(true);

//   // The result variable will be set to the value val1 if the condition is true. if condition is fasle, the reulst vairable will be set to the value of val 2
//   /*** const result = condition ? val1 : val2 */
//   const notesToShow = showAll ? notes : notes.filter((note) => note.important);

//   const addNote = (event) => {
//     event.preventDefault();
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: String(notes.length + 1),
//     };
//     setNotes(notes.concat(noteObject));
//     setNewNotes("");
//     console.log("button clicked", event.target);
//   };

//   const handleNoteChange = (event) => {
//     console.log(event.target.value);
//     setNewNotes(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? "important" : "all"}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map((note) => (
//           <Note key={note.id} note={note} />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   );
// };

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length) + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
    console.log("button clicked", event.target);
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
          <Note key={note.id} note={note} />
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
