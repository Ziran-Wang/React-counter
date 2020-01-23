import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    const {
      counters,
      onIncrement,
      onDecrement,
      onDelete,
      onReset
    } = this.props;
    return (
      <div>
        <button className="btn btn-sm btn-primary m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <h4>Counter {counter.id}</h4>
            <h5>
              Ziran<strong>WANG</strong>
            </h5>
            {/* can delete the following closing tag of Counter if it has no children h4*/}
          </Counter>
        ))}
      </div>
    );
  }
}

// Counters.defaultProps = { counters.value: 0 }
