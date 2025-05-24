/* eslint-disable no-unused-vars */
// const Hello = () => {
//   return (
//     <div>
//       <p>Hello World</p>
//     </div>
//   );
// };

// the file imports useState function
import { useState } from "react";
//Props

const Hello = ({ name, age }) => {
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

const App = () => {
  /* The function adds state to the component and
   * renders it initialzied with the value zero.
   *
   */
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);
  return <div>{counter}</div>;
};

// Technically defined as a function: () => {}.... Which is also assigned to constant variable called App

export default App; // Bottom line should never be removed
// Without the export the whole app breaks down
