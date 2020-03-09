import React from "react";
import { render } from "react-dom";

import "./mycss.css";

class App extends React.Component {
  render() {
    return (
      <div>
        React
        <img src="./e.jpg" height="100px" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
