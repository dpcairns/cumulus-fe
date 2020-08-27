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
            {/* <!-- TOP BAR previously NAV bar -->
            // our LOGO / icon [note: import collected images] */}
               

                {/* previously class menu */}
                <div className="top-bar">
            
                <div className="logo">
                    <img src="https://image.flaticon.com/icons/svg/3275/3275022.svg" height="33px" alt="logo" />
                </div>
                <div className="lang">eng</div>
                <div className="search">
                    <img src="https://image.flaticon.com/icons/svg/3275/3275029.svg" height="33px" alt="logo" />
                </div>
            </div>


                <Router>
                    {/* {/* SIDE BAR @ 90 degrees - LINKS  */}
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                        </ul>
                        {
                            this.state.token &&
                            // change className = "side-bar"
                            <div activeClassName="side-bar">
                                <ul>
                                    <li>
                                        <Link to='/SearchPage'>Search</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link to='/FavoritePage'>Favorites</Link>
                                    </li>
                                </ul>
                            <ul>
                                <li>
                                    <Link to='/About'>About Us</Link>
                                </li>
                            </ul>
                            </div>
                        }
                    
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
                        {/* MORE DETAILS page */}
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
