import React, { Component } from "react";
import UserManager from "../../modules/UserManager";

export default class Register extends Component {
  // Set initial state
  state = {
    email: "",
    password: "",
    passwordConfirm: "",
    errorMessage: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // Simplistic handler for register submit
  handleRegister = e => {
    e.preventDefault();

    //check for matching passwords//
    if (this.state.password !== this.state.passwordConfirm) {
      const errorMessage = "Your passwords didn't match. Please try again.";
      this.setState({ errorMessage: errorMessage });
    }
    //build user object//
    const userToPost = {
      email: this.state.email,
      password: this.state.password
    };

    //check if email is already reg'd//
    UserManager.getByEmail(this.state.email).then(user => {
      if (user.length > 0) {
        const errorMessage =
          "That email is already in use. Would you like to Login instead?";
        this.setState({ errorMessage: errorMessage });
      } else {
        // add user to database.//
        this.props.postUser(userToPost).then(user => {
          sessionStorage.setItem("credentials", JSON.stringify(user.Id));
          this.props.history.push("/");
        });
      }
    });
  };

  //redirect to login page//
  // this.props.history.replace( '/login' );
  // }

  render() {
    return (
        <React.Fragment>
      <form onSubmit={this.handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">Please Register New User</h1>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            onChange={this.handleFieldChange}
            type="email"
            id="email"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            onChange={this.handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            className="form-control"
            onChange={this.handleFieldChange}
          />
        </div>
        <h4>{this.state.errorMessage}</h4>
        <button type="submit"
            onClick={this.handleRegister}
            className="btn btn-primary"
        >Register</button>
      </form>
      </React.Fragment>
    );
  }
}
