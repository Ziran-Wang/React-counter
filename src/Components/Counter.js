// import React, { useState } from "react";

// export default function Counter() {
//   // const state = { initial: 0 };
//   let [number, setNumber] = useState(0);
//   function increase() {
//     setNumber(number + 1);
//     // return (state.initial += 1);
//     // console.log("increase num by 1");
//   }
//   function decrease() {
//     setNumber(number <= 0 ? 0 : number - 1);
//   }
//   function dispear() {
//     console.log("delete this item");
//   }
//   return (
//     <div>
//       <button>{number}</button>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//       <button onClick={dispear}>Delete</button>
//     </div>
//   );
// }

import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.counter.value
  // };

  render() {
    console.log(this.props.children);
    return (
      <div>
        {this.props.children[0]}
        {/* children is to capture the special property from its parent component where children property are defined between the opening and closing tag, not directly as attribute in self-closing tag and children props are saved in an array*/}
        {/* <h4>Counter {this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-sm btn-dark m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  // props.handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // }; function moved to parents components to make this component a controlled one
}

export default Counter;
