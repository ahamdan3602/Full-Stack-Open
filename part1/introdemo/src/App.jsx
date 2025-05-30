import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the byttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;
const Display = (props) => <div>{props.value}</div>;
const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
};
export default App;
