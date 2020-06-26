import React, { Component } from "react";

class Counter extends Component {
  // constructor(){
  //   super();
  //   this.handleIncrement =this.handleIncrement.bind(this);
  // }

  render() {
    const product = "sahil";
    return (
      // only span is affected in virtual dom
      <React.Fragment>
        <span className="badge badge-primary m-2">
          {this.props.counter.value}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment me
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Decrement me
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete Me
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
