import React, { Component } from "react"

import "./Employee.css"
import Employee from "./employee.png"


export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={Employee} className="icon--employee" alt="employee icon"/>
                            {employee.name}
                        </h4>
                        <button
                            onClick={() => this.props.fireEmployee(employee.id)
                                            .then(() => this.props.history.push("/employees"))}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
            )
            }
            }