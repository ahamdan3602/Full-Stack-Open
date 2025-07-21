const express = require("express");
const app = express();

const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0;

  return String(maxId + 1);
};

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

//first paramater (req) contains all of the info on http request,
//second parameter (res) is used to define how the req is responded to.
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

//defines route for handling HTTP GET to /api/notes endpoint
app.get("/api/notes", (reqeust, response) => {
  response.json(notes);
});

app.get(`/api/notes/:id`, (request, response) => {
  const id = request.params.id;
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.delete(`/api/notes/:id`, (request, response) => {
  const id = request.params.id;
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.post("/api/notes", (request, response) => {
  const body = request.body;
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  };

  notes = notes.concat(note);
  response.json(note);
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
