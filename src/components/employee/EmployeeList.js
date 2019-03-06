import React, { Component } from "react";

class Employees extends Component {
  render() {
    return (
      <article>
        <h1>Employee List</h1>
        {this.props.employees.map(singleEmployee => {
          return <p key={singleEmployee.id}>{singleEmployee.name}</p>;
        })}
      </article>
    );
  }
}

export default Employees;
