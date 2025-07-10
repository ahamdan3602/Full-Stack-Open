/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import numberService from "../services/number";

const Persons = ({ search }) => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    numberService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      numberService.remove(id).then(() => {
        console.log(`Deleted person with id: ${id}`);
        // Update state to remove the deleted person
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      {search.length === 0
        ? persons.map((person) => (
            <p key={person.id}>
              {person.name} {person.number}{" "}
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </p>
          ))
        : persons
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => (
              <p key={person.id}>
                {person.name} {person.number}{" "}
                <button onClick={() => handleDelete(person.id)}>Delete</button>
              </p>
            ))}
    </div>
  );
};

export default Persons;
