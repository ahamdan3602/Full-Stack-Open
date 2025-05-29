import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <h2>statistics</h2>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive}</p>
      </div>
    </div>
  );
};

export default App;
