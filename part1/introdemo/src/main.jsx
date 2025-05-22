import ReactDOM from "react-dom/client";

import App from "./App.jsx";

let counter = 1;

const root = ReactDOM.createRoot(document.getElementById("root"));

const refresh = () => {
  root.render(<App counter={counter} />);
};
refresh();
// counter += 1;
// refresh();
// counter += 1;
// refresh();
// We can do setInterval which essentially allows us to increment the counter by a set time

setInterval(() => {
  refresh();
  counter += 1;
}, 1000);
