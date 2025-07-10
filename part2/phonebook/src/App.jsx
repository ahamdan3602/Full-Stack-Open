/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import numberService from "./services/number";
import number from "./services/number";

const baseURL = "http://localhost:3001/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setNewSearch] = useState("");

  const hook = () => {
    console.log("effect");
    numberService.getAll().then((initialNumbers) => {
      console.log("promise fufilled");
      setPersons(initialNumbers);
    });
  };

  useEffect(hook, []);

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
      numberService.create(numberObject).then((numberObject) => {
        setPersons(persons.concat(numberObject));
        setNewName("");
      });
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
      <Filter search={search} handleSearchName={handleSearchName} />

      <h2>add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
