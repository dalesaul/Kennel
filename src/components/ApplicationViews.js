import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/Animals'
import LocationList from './location/Location'
import EmployeeList from './employee/EmployeeList'
import OwnersList from "./owners/Owners"


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]

    ownersFromAPI = [
                { id: 1, name: "Ryan Tanay", phone: "555-1234"},
                { id: 2, name: "Emma Beaton", phone: "555-1235"},
                { id: 3, name: "Dani Adkins", phone: "555-1236"},
                { id: 4, name: "Adam Oswalt", phone: "555-1237"},
                { id: 5, name: "Fletcher Bangs", phone: "555-0987"},
                { id: 6, name: "Angela Lee", phone: "555-9876"}
            ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <div id="div-container">

                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
            </div>
        )
    }
}

export default ApplicationViews