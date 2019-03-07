import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Animals from './animal/Animals'
import Location from './location/Location'
import Employees from './employee/EmployeeList'
import Owners from "./owners/Owners"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from '../modules/EmployeeManager'
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"


export default class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    };

    deleteAnimal = id => {
        return AnimalManager.removeAndList(id)
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
        return EmployeeManager.getAll()
        .then(parsedEmployees => {
            newState.employees = parsedEmployees;
            return LocationManager.getAll()
        })

        .then(parsedLocations => {
            newState.locations = parsedLocations;
            return OwnerManager.getAll()
        })

        .then(parsedOwners => {
            newState.owners = parsedOwners;
            return AnimalManager.getAll()
        })

        .then(parsedAnimals => {
            newState.animals = parsedAnimals;
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
