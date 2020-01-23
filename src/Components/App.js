import React, { Component } from "react";
import Navbar from "./Navbar";
import Counters from "./Counters";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counterItem => {
    // const counters = this.state.counters.forEach(counter => {
    //   if (counter.id === counterItem.id) {
    //     counter.value = this.state.counter.value + 1;
    //   }
    // });
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterItem);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counterItem => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterItem);
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalConters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
