import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 7,
  };
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.findCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment me
        </button>
      </React.Fragment>
    );
  }
  findCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
