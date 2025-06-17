const Persons = ({ persons, search }) => {
  return (
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
    </div>
  );
};

export default Persons;
