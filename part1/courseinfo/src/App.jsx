const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
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

const Total = () => {
  const excercises1 = 10;
  const excercises2 = 7;
  const excercises3 = 14;

  return (
    <>
      <p>Number of excercises {excercises1 + excercises2 + excercises3}</p>
    </>
  );
};

const Content = () => {
  return (
    <>
      <Part1 />
      <Part2 />
      <Part3 />
    </>
  );
};

const Header = () => {
  const course = "Half Stack Application Development";
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

export default App;
