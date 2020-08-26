import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import { fetchSearchedWeather } from './weather-api.js';
import CountryData from './CountryData.js';


export default class SearchPage extends Component {
    state = {
        searchCity: '',
        searchState: '',
        country: 'US',
        CountryData: CountryData,
    }

    // check for token
    componentDidMount = async () => {
        if(!this.props.token) {
            this.props.history.push('/');
        }
    }
    
    // handle City
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

    // handle submit-button
    handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
        const userSearch = await fetchSearchedWeather(
            {
                city: this.state.searchCity,
                state: this.state.searchState,
                country: this.state.country
            }
        )
           console.log(userSearch, 'STATE');
        }catch(e){ 
            return({ error:e.message })
        }
    }
    
    
    // handleSubmit function goes here
    handleDropdownChange = async (e) => {
        e.preventDefault();

        this.setState({ country: e.target.value });
        console.log(e.target.value, 'DROPDOWN COUNTRY');
    }


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
                    <Dropdown 
                        country={this.state.country} CountryData={this.state.CountryData} handleDropdownChange={this.handleDropdownChange} />
                </form>
                    {/* button -city name- */}
                    <button onClick={this.handleSubmit} className="search-button">Search</button>
            </div>
        )
    }
}
