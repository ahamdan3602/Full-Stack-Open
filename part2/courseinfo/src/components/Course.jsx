const Course = (props) => {
  const { name, parts } = props.course;

  const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <h1>{name}</h1>

      <ul>
        {parts.map((part) => (
          <li>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <p>total of {sum} excercises</p>
    </>
  );
};

export default Course;
