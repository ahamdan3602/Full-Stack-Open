/* eslint-disable no-unused-vars */
// const Hello = () => {
//   return (
//     <div>
//       <p>Hello World</p>
//     </div>
//   );
// };

//Props
/**
 * Now the function defining the component has a parameter props. As an argument,
 * the parameter receives an object, which has fields corresponding to all the "props" the user of the
 * component defines.
 */
const Hello = (props) => {
  // Helper functions
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;
  return (
    // Component will be rendered as a div tag which wraps a p-tag containing the text Hello World
    <div>
      <p>Greetings</p>
      <Hello name="Daisy" age={20} />
      {/**Defined a new component Hello and used it inside component App */}
      <Hello name="George" age={35} />
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

// Technically defined as a function: () => {}.... Which is also assigned to constant variable called App

export default App; // Bottom line should never be removed
// Without the export the whole app breaks down
