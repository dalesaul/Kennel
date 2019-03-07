import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Animals from './animal/Animals'
import Location from './location/Location'
import Employees from './employee/EmployeeList'
import Owners from "./owners/Owners"


export default class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    };

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        })
      )
    }

    fireEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        })
        )
}

    componentDidMount(){
        const newState = {}
        fetch("http://localhost:5002/employees")
        .then(employees => employees.json())
        .then(parsedEmployees => {
            newState.employees = parsedEmployees;
            return fetch("http://localhost:5002/locations")
        }).then(locations => locations.json())
        .then(parsedLocations => {
            newState.locations = parsedLocations;
            return fetch("http://localhost:5002/animals")
            .then(animals => animals.json())
        }).then(parsedAnimals => {
            newState.animals = parsedAnimals;
            return fetch("http://localhost:5002/owners")
            .then(owners => owners.json())
        }).then(parsedOwners => {
            newState.owners = parsedOwners;
        this.setState(newState);
           })
        }



    render() {
        return (
            <div id="div-container">

                <Route exact path="/" render={(props) => {
                    return <Location locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <Animals deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <Employees fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <Owners deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
            </div>
        )
    }
}
