// import React, {Component} from 'react';
// import EmployeeList from './employee/EmployeeList'
// import Location from "./locations/Location"
// import Animals from "./animals/Animals"
// import Owners from "./owners/Owners"
// import Relations from "./relations/Relations"

// class Kennel extends Component {

//     employeesFromAPI = [
//         { id: 1, name: "Jessica Younker" },
//         { id: 2, name: "Jordan Nelson" },
//         { id: 3, name: "Zoe LeBlanc" },
//         { id: 4, name: "Blaise Roberts" }
//     ]

//     // This will eventually get pulled from the API
//     locationsFromAPI = [
//         { id: 1, name: "Nashville North", address: "500 Circle Way" },
//         { id: 2, name: "Nashville South", address: "10101 Binary Court" }
//     ]

//     animalsFromAPI = [
//         { id: 1, name: "Gunner", type: "dog", breed: "Labradoodle"},
//         { id: 2, name: "Barkley", type: "dog", breed: "Goldendoodle"},
//         { id: 3, name: "Kato", type: "dog", breed: "Boxer"},
//         { id: 4, name: "Annie", type: "dog", breed: "Pomeranian"},
//         { id: 5, name: "Cheeto", type: "dog", breed: "Shitzu"},
//         { id: 6, name: "Tsar", type: "dog", breed: "Bernese Mountain"},
//     ]

//     ownersFromAPI = [
//         { id: 1, name: "Ryan Tanay" },
//         { id: 2, name: "Emma Beaton" },
//         { id: 3, name: "Dani Adkins" },
//         { id: 4, name: "Adam Oswalt" },
//         { id: 5, name: "Fletcher Bangs" },
//         { id: 6, name: "Angela Lee" }
//     ]

//     relationsFromAPI = [
//         {id: 1, ownerId: "1", animalId: "3"},
//         {id: 2, ownerId: "2", animalId: "4"},
//         {id: 3, ownerId: "3", animalId: "2"},
//         {id: 4, ownerId: "4", animalId: "5"},
//         {id: 5, ownerId: "5", animalId: "6"},
//         {id: 6, ownerId: "6", animalId: "1"},

//     ]

//     state = {
//         employees: this.employeesFromAPI,
//         locations: this.locationsFromAPI,
//         animals: this.animalsFromAPI,
//         owners: this.ownersFromAPI,
//         relations: this.relationsFromAPI
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Student Kennels</h3>

//                 <EmployeeList employees={this.state.employees}/>
//                 <Location locations={this.state.locations}/>
//                 <Animals animals={this.state.animals}/>
//                 <Owners owners={this.state.owners} />
//                 <Relations relations={this.state.relations} />
//             </div>
//         );
//     }
// }

// export default Kennel;

import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel