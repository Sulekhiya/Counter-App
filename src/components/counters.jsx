import React, { Component } from "react";
import Counter from "./counter.jsx";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
      { id: 5, value: 4 },
    ],
  };

  handleIncrement = (counter) => {
    var counters = [...this.state.counters];
    var index = counters.indexOf(counter);
    counters[index].value++;
    this.setState(counters);
  };

  handleDecrement = (counter) => {
    var counters = [...this.state.counters];
    var index = counters.indexOf(counter);
    counters[index].value--;
    this.setState(counters);
  };

  handleDelete = (value) => {
    console.log("deleting", value);
    const counters = this.state.counters.filter((c) => c.id != value);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <ul>
          {this.state.counters.map((counter) => (
            <li>
              <Counter
                key={counter.id}
                counter={counter}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
