import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import DetailPage from './DetailPage.js';
import FavoritePage from './FavoritePage.js';
import About from './About.js';
import SearchPage from './SearchPage.js';
import './App.css';

export default class App extends Component {

    render() {

    return (
    <div className="App">
        Hello Derp
        <Router>
            <Switch> {/* Home route signup & signin */}
                <Route 
                    path='/'
                    exact
                    render={(routerProps) => <Home {...routerProps} />}
                />
                {/* Search & Result page */}
                <Route 
                    path='/SearchPage'
                    exact
                    render={(routerProps) => <SearchPage {...routerProps} />}
                />
                {/* MOAR DETAILS page */}
                <Route 
                    path='/DetailPage'
                    exact
                    render={(routerProps) => <DetailPage {...routerProps} />}
                />
                {/* Favorites page */}
                <Route 
                    path='/FavoritePage'
                    exact
                    render={(routerProps) => <FavoritePage {...routerProps} />}
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
