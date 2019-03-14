import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserManager from "../../modules/UserManager";

export default class Login extends Component {
  // Set initial state
  state = {
    email: "",
    password: "",
    rememberMe: false,
    errorMessage: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    if (evt.target.type === "checkbox") {
      stateToChange[evt.target.id] = evt.target.checked;
    } else {
      stateToChange[evt.target.id] = evt.target.value;
    }
    this.setState(stateToChange);
  };

  // Simplistic handler for login submit
  handleLogin = e => {
    e.preventDefault();
    UserManager.getByEmail(this.state.email).then(user => {
      let errorMessage = "";
      if (user.length === 0) {
        errorMessage =
          "Unable to find that email address. Would you like to register instead?";
        this.setState({ errorMessage: errorMessage });
      } else {
        if (user[0].password === this.state.password) {
          this.state.rememberMe
            ? localStorage.setItem("credentials", JSON.stringify(user[0].id))
            : sessionStorage.setItem("credentials", JSON.stringify(user[0].id));
          this.props.history.push("/");
        } else {
          errorMessage = "Your password was incorrect. Please try again.";
          this.setState({ errorMessage: errorMessage });
        }
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleLogin}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail">Email address</label>
          <input
            onChange={this.handleFieldChange}
            type="email"
            id="email"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputPassword">Password</label>
          <input
            onChange={this.handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <label htmlFor="rememberMe">Remember me?</label>
          <input
            type="checkbox"
            onChange={this.handleFieldChange}
            id="remeberMe"
          />
          <button type="submit">Sign in</button>
        </form>
        <Link className="nav-link" to={`/register`}>
          No account? Click to register.
        </Link>
        <h4>{this.state.errorMessage}</h4>
      </React.Fragment>
    );
  }
}
