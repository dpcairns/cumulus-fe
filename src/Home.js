import React, { Component } from 'react';
// import and make signInUser signUpUser function
import { signInUser } from './weather-api.js';

export default class Home extends Component {
    // set state
    state = {
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    // add handleSignInClick
    handleSignInClick = async(e) => {
        e.preventDefault();

        // pass user info into signInUser function
        const user = await signInUser({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        })

        // handle user token
        this.props.handleToken(user.body.token)


        // reroute user to favorites list page
        this.props.history.push('/SearchPage')
    }

    // add handleSignInEmailChange
    handleSignInEmailChange = (e) => {
        this.setState({ signInEmail: e.target.value })
    }

    // add handleSignInPasswordChange
    handleSignInPasswordChange = (e) => {
        this.setState({ signInPassword: e.target.value })
    }

    // add handleSignUpClick
    // add handleSignUpEmailChange
    // add handleSignUpPasswordChange



    render() {
        return (
            <div className="Home-Page">
                <h1>
                Home/Landing page
                </h1>

                <form className="Sign-In" onSubmit={this.handleSignInClick}>
                    <h3>Sign In</h3>

                    <label>
                        Email: 
                        <input onChange={this.handleSignInEmailChange} value={this.state.signInEmail} />
                    </label>
                    <label>
                        Password: 
                        <input onChange={this.handleSignInPasswordChange} value={this.state.signInPassword} />
                    </label>

                    <button>Sign In!</button>
                </form>

                <form className="Sign-Up" onSubmit={this.handleSignUpClick}>
                    <h3>Sign Up</h3>

                    <label>
                        Email: 
                        <input onChange={this.handleSignUpEmailChange} value={this.state.signUpEmail} />
                    </label>
                    <label>
                        Password: 
                        <input onChange={this.handleSignUpPasswordChange} value={this.state.signUpPassword} />
                    </label>

                    <button>Sign Up!</button>
                </form>
            </div>
        )
    }
}
