const Course = (props) => {
  const { courses } = props;
  return (
    <>
      <h1>Web Development Curriculum</h1>

      {courses.map((course) => (
        <div>
          <h2>{course.name}</h2>
          {course.parts.map((part) => (
            <p>
              {part.name} {part.exercises}
            </p>
          ))}
          {course.parts.reduce(function (sum, part) {
            return sum + part.exercises;
          }, 0)}
        </div>
      ))}
    </>
  );
};

export default Course;
