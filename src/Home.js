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
                    <div className="overlay first"></div>
                    <div className="overlay second"></div>
                    <div className="overlay third"></div>

                <div className="text">
                    <h1>Welcome to</h1>
                    <h3>Your favorite weather app you've yet to discover <br /> Cumulis </h3>
                    <p>A not-so-average, visually stunning weather application for your every day needs</p>
                </div>

                {/* instructions ref. sponsor section */}
                <div className="instruction">
                    <img src="https://image.flaticon.com/icons/svg/3275/3275020.svg" height="45px" alt="logo" />
                    <p>Feel free to sign up if you haven't done so previously, otherwise sign in!</p>
                </div>

                {/* <div className="distortion"></div> */}
                    

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
                <div className="sign-up">
                <form onSubmit={this.handleSignUpClick}>
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
            </div>
        )
    }
}
