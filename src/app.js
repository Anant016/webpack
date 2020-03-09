import React from "react";
import { render } from "react-dom";

import "./mycss.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ fontFamily: "cursive" }}>React</h1>

        <img src="./e.jpg" height="100px" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
