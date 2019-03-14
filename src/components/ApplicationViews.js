import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import AnimalDetail from "./animal/animalDetail";
import AnimalEditForm from "./animal/AnimalEditForm";
import AnimalForm from "./animal/AnimalForm";
import AnimalList from "./animal/AnimalList";
import AnimalManager from "../modules/AnimalManager";
import UserManager from "./authentication/registration";
import Employees from "./employee/EmployeeList";
import EmployeeDetail from "./employee/employeeDetail";
import EmployeeManager from "../modules/EmployeeManager";
import Location from "./location/Location";
import LocationManager from "../modules/LocationManager";
import Login from "./authentication/Login";
import Owners from "./owners/Owners";
import OwnerDetail from "./owners/ownerDetails";
import OwnerManager from "../modules/OwnerManager";
import Register from "./authentication/registration";

export default class ApplicationViews extends Component {
  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: []
  };

  isAuthenticated = () =>
    sessionStorage.getItem("credentials") !== null ||
    localStorage.getItem("credentials") !== null;

  //   isAuthenticated(){
  //       const credentials = sessionStorage.getItem("credentials");
  //         if(credentials !== null){
  //             return true;
  //
  //         }else{
  //             return false;
  //         }
  //     }

  deleteAnimal = id => {
    return AnimalManager.removeAndList(id).then(animals =>
      this.setState({
        animals: animals
      })
    );
  };

  addAnimal = animalObject =>
    AnimalManager.post(animalObject)
      .then(() => AnimalManager.getAll())
      .then(animals =>
        this.setState({
          animals: animals
        })
      );

  updateAnimal = editedAnimalObject => {
    return AnimalManager.put(editedAnimalObject)
      .then(() => AnimalManager.getAll())
      .then(animals => {
        this.setState({
          animals: animals
        });
      });
  };

  postUser = userObject => UserManager.registerUser(userObject);

  fireEmployee = id => {
    return EmployeeManager.removeAndList(id).then(employees =>
      this.setState({
        employees: employees
      })
    );
  };

  deleteOwner = id => {
    return OwnerManager.removeAndList(id).then(owners =>
      this.setState({
        owners: owners
      })
    );
  };

  componentDidMount() {
    const newState = {};
    return EmployeeManager.getAll()
      .then(parsedEmployees => {
        newState.employees = parsedEmployees;
        return LocationManager.getAll();
      })

      .then(parsedLocations => {
        newState.locations = parsedLocations;
        return OwnerManager.getAll();
      })

      .then(parsedOwners => {
        newState.owners = parsedOwners;
        return AnimalManager.getAll();
      })

      .then(parsedAnimals => {
        newState.animals = parsedAnimals;
        this.setState(newState);
      });
  }

  render() {
    return (
      <div id="div-container">
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          exact
          path="/"
          render={props => {
            return <Location locations={this.state.locations} />;
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props} animals={this.state.animals} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return (
              <AnimalForm
                {...props}
                addAnimal={this.addAnimal}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={props => {
            return (
              <AnimalDetail
                {...props}
                deleteAnimal={this.deleteAnimal}
                animals={this.state.animals}
              />
            );
          }}
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props => {
            return (
              <AnimalEditForm
                {...props}
                employees={this.state.employees}
                updateAnimal={this.updateAnimal}
              />
            );
          }}
        />
        <Route
          exact
          path="/employees"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <Employees
                  employees={this.state.employees}
                  animals={this.state.animals}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/employees/:employeeId(\d+)"
          render={props => {
            return (
              <EmployeeDetail
                {...props}
                fireEmployee={this.fireEmployee}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          exact
          path="/owners"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <Owners
                  deleteOwner={this.deleteOwner}
                  owners={this.state.owners}
                  animals={this.state.animals}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/owners/:ownerId(\d+)"
          render={props => {
            return (
              <OwnerDetail
                {...props}
                deleteOwner={this.deleteOwner}
                owners={this.state.owners}
              />
            );
          }}
        />
      </div>
    );
  }
}
