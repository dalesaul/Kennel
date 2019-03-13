import React, { Component } from "react"



export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleCheckboxChange = () => {
        this.setState({checked:
            !this.state.checked})
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()
    //     if(this.state.checked){
    //         localStorage.setItem(
    //             "credentials",
    //     JSON.stringify({
    //         email: this.state.email,
    //         password: this.state.password
    //     })
    // )

    //     } else {
        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
       sessionStorage.setItem(
        "credentials",
        JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    )
    this.props.history.replace( '/' );
        }




    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" />
                {/* <label htmlFor ="checkbox">
                    Remember Me
                </label>
                <input onChange={this.handleCheckboxChange} type="checkbox"
                        id="checked" defaultChecked={this.state.checked}></input> */}
                <button type="submit">
                    Sign in
                </button>
            </form>
        )
    }
}