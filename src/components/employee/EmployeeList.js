import React, { Component } from "react";
import { Link } from "react-router-dom";
import employee from "./employee.png";
import "./Employee.css"
import AnimalCard from "../animal/AnimalCard";


export default class Employees extends Component {
  render() {
    return (
      <section className="employees">
      {
        this.props.employees.map(singleEmployee =>
          <div key={singleEmployee.id} className="card card--employee">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={employee} className="icon--employee" alt="Employee Icon"/>
                                {singleEmployee.name}
                                <Link className="nav-link" to={`/employees/${singleEmployee.id}`}>Details</Link>
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">Caretake for</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                  .filter(anml => {
                                  console.log("this is from the filter", anml.employeeId, singleEmployee.id, anml.employeeId === singleEmployee.id);
                                  return  anml.employeeId === singleEmployee.id})
                                  .map(anml => {
                                  console.log("this is from the map", anml, singleEmployee);
                                  return <AnimalCard key={anml.id} animal={anml} {...this.props} />})

                            }
                            </div>
                        </div>
            </div>
                )
            }
      </section>
    );
  }
}


