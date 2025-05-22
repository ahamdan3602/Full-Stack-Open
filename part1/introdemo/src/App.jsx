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
const Hello = ({ name, age }) => {
  // Helper functions

  // const name = props.name;
  // const age = props.age;

  // Destructuring props

  /** Works as such
   * props = {
   *    name: 'Arto Helas',
   *    age: 35,
   * }
   * The expression const {name, age} = props assigns the values 'Artos Hellas' to name and 35 to age.
   */
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old{" "}
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = (props) => {
  const { counter } = props;
  return <div>{counter}</div>;
};

// Technically defined as a function: () => {}.... Which is also assigned to constant variable called App

export default App; // Bottom line should never be removed
// Without the export the whole app breaks down
