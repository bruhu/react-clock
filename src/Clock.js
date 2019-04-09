import React, { Component } from "react";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //LIFE CYCLE METHODS
  //it will run code when a component mounts
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //same when it unmounts
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //makes Clock component run every second
  tick() {
    //schedules upsdates to the component local state
    this.setState({ date: new Date() });
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
