const App = () => {
  const course = "Half Stack Application Development";
  const parts = [
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
  ];
  return (
    <div>
      {/* <Header course="Half Stack Application Development" />
      <Content />
      <Total /> */}
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const Part3 = () => {
  const excercise3 = 14;
  return (
    <>
      <p>State of component {excercise3}</p>
    </>
  );
};

const Part2 = () => {
  const excercise2 = 7;
  return (
    <>
      <p>Using props to pass data {excercise2}</p>
    </>
  );
};

const Part1 = () => {
  const excercise1 = 10;
  return (
    <>
      <p>Using props to pass data {excercise1}</p>
    </>
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
