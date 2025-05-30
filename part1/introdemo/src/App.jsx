import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the byttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue); // print the new value to console
    setValue(newValue);
  };

  const hello = (who) => () => {
    console.log("hello", who);
  };

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    console.log("left before", left);
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    console.log("left after", updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    console.log("right before", right);
    const updatedRight = right + 1;
    setRight(updatedRight);
    console.log("right after", updatedRight);
    setTotal(left + updatedRight);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      {value}
      <button onClick={hello("world")}>button</button>
      <button onClick={hello("react")}>button</button>
      <button onClick={hello("function")}>button</button>
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />

      <Button onClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
      <p>Total: {total}</p>
    </div>
  );
};
export default App;
