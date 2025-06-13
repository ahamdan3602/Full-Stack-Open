// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import Note from "./components/Note";

const App = ({ notes }) => {
  // map will always create a new array of whic have been created from elements of the original array by mapping
  // -> using the function given as a paramete to the map method

  /**
   * Full form would be
   * const res = notes.map((note) => {
   *    return note.id
   * })
   */
  const res = notes.map((note) => note);
  console.log(res);
  // returns an array containng the contents of the notes

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default App;
