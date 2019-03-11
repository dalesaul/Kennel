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
import AnimalDetail from "./animal/animalDetail"
import EmployeeDetail from "./employee/employeeDetail"
import OwnerDetail from "./owners/ownerDetails"


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

    fireEmployee = id => {
        return EmployeeManager.removeAndList(id)
        .then(employees => this.setState( {
            employees: employees
        })
        )
    }

    deleteOwner = id => {
        return OwnerManager.removeAndList(id)
        .then(owners => this.setState( {
            owners: owners
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
                <Route exact path="/animals" render={(props) => {
                return <Animals animals={this.state.animals} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <Employees employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                return <EmployeeDetail {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <Owners deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
            </div>
        )}
}

