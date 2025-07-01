import axios from "axios";
import ReactDOM from "react-dom/client";
import App from "./App";

// const xhttp = new XMLHttpRequest(); // object representing the http request
// // If the change in state means that the response to the request has arrived,
// // then the data is handled accordingly.
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     const data = JSON.parse(this.responseText);
//   }
// };

// xhttp.open("GET", "/data.json", true);
// xhttp.send();

/**
 * fetch method starts the process of fetching a resource from the network and returning a promise.
 */
// const promise = axios.get("http://localhost:3001/notes");
// promise.then((res) => {
//   console.log(res);
// });

// axios.get("http://localhost:3001/notes").then((res) => {
//   const notes = res.data;
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <App notes={notes} />
//   );
// });

const promise = axios.get("http://localhost:3001/notes");
console.log(promise);

const promise2 = axios.get("http://localhost:3001/foobar");
console.log(promise2);

// the axios get method returns a promise
/**
 * a promise is an object representing the eventual completion or failure of an asynchronous operation
 *
 * Essentially, a promise is a returned object to which you attach callbacks, instead of passing
 * callbacks into a function. Imagine a function, createAudioFileAsync(), which asynchronously
 * generates a sound file given a configuration record and two callback functions: one called if
 * the audio file is successfully created, and the other called if an error occurs.
 */
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
