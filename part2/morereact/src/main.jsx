import axios from "axios";
import ReactDOM from "react-dom/client";
import App from "./App";

// const promise = axios.get("http://localhost:3001/notes");
// promise.then((res) => {
//   console.log(res);
// });

axios.get("http://localhost:3001/notes").then((res) => {
  const notes = res.data;
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App notes={notes} />
  );
});

// the axios get method returns a promise
/**
 * a promise is an object representing the eventual completion or failure of an asynchronous operation
 *
 * Essentially, a promise is a returned object to which you attach callbacks, instead of passing
 * callbacks into a function. Imagine a function, createAudioFileAsync(), which asynchronously
 * generates a sound file given a configuration record and two callback functions: one called if
 * the audio file is successfully created, and the other called if an error occurs.
 */
