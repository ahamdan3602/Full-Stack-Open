const express = require("express");
const app = express();

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];
app.get("/", (req, res) => {
  res.send("<h1>Hello World! </h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(JSON.stringify(notes));
// });
// // uses the createserver method to create a new web server.
// // an event handler is registered to the seever each time an HTTP request is made to the server's address

// /**
//  * The request is responded to with the status code 200, with the Content-Type header set to text/plain, and the
//  * content of the site to be returned set to Hello World.
//  */

// const PORT = 3001; // binds the http server to the app variable, to listen to HTTP requests snet to port 3001
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);

// // localhost:3001 will display Hello World
// // localhost:3001/foo/bar will display the same content
