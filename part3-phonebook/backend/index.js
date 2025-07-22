const express = require("express");
const app = express();

// Add this line to parse JSON request bodies
app.use(express.json());

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: "1",
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: "2",
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: "3",
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: "4",
  },
];

const generateId = () => {
  const maxId =
    persons.length > 0 ? Math.max(...persons.map((p) => Number(p.id))) : 0;
  return String(maxId + 1);
};
app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const person = {
    name: request.body.name,
    number: request.body.number,
    id: generateId(),
  };
  response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.filter((p) => p.id === id);

  response.status(204).end();
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((p) => p.id === id);

  if (!person) {
    response.status(404).end();
  } else {
    response.json(person);
  }
});
app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const dateSent = new Date();
  console.log(dateSent);
  const currMaxId = generateId() - 1;
  response.send(
    `<p>Phonebook has info for ${currMaxId} people</p> <p>${dateSent}</p>`
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
