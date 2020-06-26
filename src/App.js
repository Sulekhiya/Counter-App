import React, { Component } from "react";

import NavBar from "./components/navbar.jsx";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import Counters from "./components/counters.jsx";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
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
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
