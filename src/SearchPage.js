import React, { Component } from 'react';
import Dropdown from './Dropdown.js';

export default class SearchPage extends Component {
    state = {
        searchCity: '',
        searchState: ''
    }



// pick up finishing search bar here
handleSubmit = async (e) => {
    e.preventDefault();
    // const userSearch = await fetchWeather({
    // })

}

handleCityChange = (e) => {
    this.setState({
        searchCity: e.target.value
    })
    
    console.log(e.target.value, 'okkkkkkkkkkkkkkkkk');
}

// handle State
handleStateChange = (e) => {
    this.setState({
        searchState: e.target.value
    })
    
    console.log(e.target.value, 'okkkkkkkkkkkkkkkkk');
}


// handleSubmit function goes here



    render() {
        return (
            <div>
                <form>
                    <label>
                        Enter City
                            <input onChange={this.handleCityChange} value={this.state.searchCity} />
                    </label>
                    <label>
                        Enter State
                            <input onChange={this.handleStateChange} value={this.state.searchState} />
                    </label>
                    <Dropdown />
                </form>
                    {/* button -city name- */}
                    <button onSubmit={this.handleSubmit} className="search-button">Search</button>
            </div>
        )
    }
}
