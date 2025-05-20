const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        excercises: 10,
      },
      {
        name: "Using props to pass data",
        excercises: 7,
      },
      {
        name: "State of a component",
        excercises: 14,
      },
    ],
  };
  return (
    <div>
      {/* <Header course="Half Stack Application Development" />
      <Content />
      <Total /> */}
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of excercises{" "}
        {props.parts[0].excercises +
          props.parts[1].excercises +
          props.parts[2].excercises}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.parts[0].name} {props.parts[0].excercises}
      </p>
      <p>
        {props.parts[1].name} {props.parts[1].excercises}
      </p>
      <p>
        {props.parts[2].name} {props.parts[2].excercises}
      </p>
    </>
  );
};

const Header = (props) => {
  console.log(props);

  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

export default App;
