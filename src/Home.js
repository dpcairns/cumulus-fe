import React, { Component } from 'react';
import { signInUser, signUpUser } from './weather-api.js';

export default class Home extends Component {
    // set state
    state = {
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    // add handleSignInClick
    handleSignInClick = async (e) => {
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
    handleSignUpClick = async (e) => {
        e.preventDefault();

        // pass user info into signUpUser function
        const user = await signUpUser({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        })

        // handle user token
        this.props.handleToken(user.body.token)

        // reroute user to favorites list page
        this.props.history.push('/SearchPage')
    }

    // add handleSignUpEmailChange
    handleSignUpEmailChange = (e) => {
        this.setState({ signUpEmail: e.target.value })
    }

    // add handleSignUpPasswordChange
    handleSignUpPasswordChange = (e) => {
        this.setState({ signUpPassword: e.target.value })
    }


    render() {
        return (
            <div className="Home-Page">
                    {/* for BIG TEXT styling css */}
                    <div class="overlay first"></div>
                    <div class="overlay second"></div>
                    <div class="overlay third"></div>

                <h1>
                    {/* got to change this */}
                    Home/Landing page
                </h1>

                {/* Need to style the form .sign-in via className */}
                <form className="sign-in" onSubmit={this.handleSignInClick}>
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

                {/* Need to style the form .sign-in via className */}
                <form className="sign-up" onSubmit={this.handleSignUpClick}>
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
