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
                    return <Animals animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <Employees employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <Owners owners={this.state.owners} />
                }} />
            </div>
        )
    }
}
