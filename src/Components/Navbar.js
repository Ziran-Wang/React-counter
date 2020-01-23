import React from "react";

function Navbar({ totalConters }) {
  // let stateless functional component can also use arrow function
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        navbar
        <span className="badge badge-pill badge-secondary">{totalConters}</span>
      </span>
    </nav>
  );
}
export default Navbar;
