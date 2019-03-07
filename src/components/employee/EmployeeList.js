import React, { Component } from "react";
import employee from "./employee.png"
import "./Employee.css"

export default class Employees extends Component {
  render() {
    return (
      <section className="employees">
      {
        this.props.employees.map(singleEmployee =>
          <div key={singleEmployee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={employee} className="icon--employee" alt="Employee Icon"/>
                                {singleEmployee.name}
                                <button className="btn btn-danger"
                                    onClick={() => this.props.fireEmployee(singleEmployee.id)}>Delete</button>

                            </h5>
                        </div>
                    </div>
                )
            }
      </section>
    );
  }
}


