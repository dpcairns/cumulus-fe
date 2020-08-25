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
        this.setState({ token: token})
        localStorage.setItem('TOKEN', token)
    }

    clearToken = () => {
        this.setState({ token: '' })
        localStorage.setItem('TOKEN', '')
    }

    render() {

    return (
    <div className="App">
        Hello Derp
        <Router>
            <div className="Nav-Links">
                <Link to='/'>Home</Link>
                {
                    this.state.token &&
                    <div>
                        <Link to='/SearchPage'>Search</Link>
                        <Link to='/FavoritePage'>Favorites</Link>
                    </div>
                }
                <Link to='/About'>About Us</Link>
            </div> 
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
                    path='/DetailPage'
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
