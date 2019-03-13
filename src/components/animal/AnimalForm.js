import React, { Component } from "react";
import "./Animal.css";

export default class AnimalForm extends Component {
  state = {
    animalName: "",
    breed: "",
    employeeId: ""
  };

  handleFieldChange = evt => {
    // console.log("this is evt", evt);
    // console.log("this is eve.target.value", evt.target.value);
    // console.log("this is the evt.target.id", evt.target.id);
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewAnimal = evt => {
    evt.preventDefault();
    if (this.state.employee === "") {
      window.alert("Please select a caretaker");
    } else {
      const animalObject = {
        name: this.state.animalName,
        breed: this.state.breed,
        employeedId: parseInt(this.state.employeeId)
      };
      console.log(animalObject);
      this.props
        .addAnimal(animalObject)
        .then(() => this.props.history.push("/animals"));
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="animalForm">
          <div className="form-group">
            <label htmlFor="animalName">Animal name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="animalName"
              placeholder="Animal name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employee">Assign to caretaker</label>
            <select
              defaultValue=""
              name="employee"
              id="employeeId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select an employee</option>
              {this.props.employees.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={this.constructNewAnimal}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
