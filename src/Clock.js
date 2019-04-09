import React, { Component } from "react";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <React.Fragment>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </React.Fragment>
    );
  }
}

// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// }

// setInterval(tick, 1000);

export default Clock;
