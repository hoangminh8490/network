import React from "react";
import ReactDOM from "react-dom";
import NetworkGraph from "./network";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <NetworkGraph />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
