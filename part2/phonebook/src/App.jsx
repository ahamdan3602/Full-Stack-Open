/* eslint-disable no-unused-vars */
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setNewSearch] = useState("");

  const handleSearchName = (event) => {
    setNewSearch(event.target.value);
    console.log(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();

    const numberObject = {
      name: newName,
      number: newNumber,
    };

    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      window.alert(`${newName} is already added to the phonebook!`);
    } else {
      setPersons(persons.concat(numberObject));
      setNewName("");
    }

    console.log("button clicked", event.target);
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
    console.log(event.target.value);
  };

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={handleSearchName} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name : <input value={newName} onChange={handleNewName} />
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {search.length === 0
          ? persons.map((person) => (
              <p key={person.name}>
                {person.name} {person.number}
              </p>
            ))
          : persons
              .filter((person) =>
                person.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((person) => (
                <p>
                  {person.name}
                  {person.number}
                </p>
              ))}

        {/* {persons.map((person) => (
          
          <p>
            {person.name} {person.number}
          </p>
        ))} */}
      </div>
    </div>
  );
};

export default App;
