import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import DetailPage from './DetailPage.js';
import FavoritePage from './FavoritePage.js';
import About from './About.js';
import SearchPage from './SearchPage.js';
import './App.css';

export default class App extends Component {
    // set state
    state = {
        token: localStorage.getItem('TOKEN'),
    }

    handleToken = (token) => {
        this.setState({ token: token })
        localStorage.setItem('TOKEN', token)
    }

    clearToken = () => {
        this.setState({ token: '' })
        localStorage.setItem('TOKEN', '')
    }

    render() {

        return (
            <div className="App">
                {/* <h1>
                    <span className="hidetext"></span>
                </h1> */}

            {/* <!-- TOP BAR previously NAV bar =============================== -->
            // our LOGO / icon [note: import collected images]
             */}
            
            <div class="top-bar">
                {/* previously class menu */}
                <div class="logo">
                    <img src="https://image.flaticon.com/icons/svg/3275/3275029.svg" alt="logo" />
                    {/* <ion-icon name="ios-menu"></ion-icon> */}
                </div>
                <div class="lang">eng</div>

                <div class="search">
                    {/* <ion-icon name="ios-search"></ion-icon> */}
                </div>
            </div>


                <Router>
                    {/* {/* SIDE BAR @ 90 degrees - LINKS  */}
                        <Link to='/'>Home</Link>
                        {
                            this.state.token &&
                            // change className = "side-bar"
                            <div className="media">
                                <ul className="search">
                                    <li>
                                        <Link to='/SearchPage'>Search</Link>
                                    </li>
                                </ul>
                                <ul className="favorites">
                                    <li>
                                        <Link to='/FavoritePage'>Favorites</Link>
                                    </li>
                                </ul>
                            </div>
                        }
                        <ul className="about">
                            <li>
                                <Link to='/About'>About Us</Link>
                            </li>
                        </ul>
                    
                    <Switch> {/* Home route signup & signin */}
                        <Route
                            path='/'
                            exact
                            render={(routerProps) => <Home handleToken={this.handleToken} {...routerProps} />}
                        />
                        {/* Search & Result page */}
                        <Route
                            path='/SearchPage'
                            exact
                            render={(routerProps) => <SearchPage token={this.state.token} {...routerProps} />}
                        />
                        {/* MOAR DETAILS page */}
                        <Route
                            path='/DetailPage/:id'
                            exact
                            render={(routerProps) => <DetailPage token={this.state.token} {...routerProps} />}
                        />
                        {/* Favorites page */}
                        <Route
                            path='/FavoritePage'
                            exact
                            render={(routerProps) => <FavoritePage token={this.state.token} {...routerProps} />}
                        />
                        {/* About us page */}
                        <Route
                            path='/About'
                            exact
                            render={(routerProps) => <About {...routerProps} />}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}
