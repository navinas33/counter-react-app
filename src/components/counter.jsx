import React, { PureComponent } from "react";

class Counter extends PureComponent {
  state = {
    value: this.props.value,
  };

  incrementCounter = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrementCounter = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <h1>This is Navin {this.props.id}, Count Value {this.state.value}</h1>
        <button onClick={this.incrementCounter}>Increement</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
