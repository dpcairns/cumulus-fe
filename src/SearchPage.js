import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import { fetchSearchedWeather, addFavorite } from './weather-api.js';
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
        if (!this.props.token) {
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

        try {
            const userSearch = await fetchSearchedWeather(
                {
                    city: this.state.searchCity,
                    state: this.state.searchState,
                    country: this.state.country
                }
            )
            console.log(userSearch, 'USER_SEARCH_RESULTS');

            //    set search results to state
            this.setState({
                country_code: userSearch.body.country_code,
                state_code: userSearch.body.state_code,
                lat: userSearch.body.lat,
                location: userSearch.body.location,
                lon: userSearch.body.lon,
                sunrise: userSearch.body.sunrise,
                sunset: userSearch.body.sunset,
                temp: userSearch.body.temp,
                timezone: userSearch.body.timezone,
                weather_description: userSearch.body.weather_description
            })
        } catch (e) {
            return ({ error: e.message })
        }
    }


    // handleSubmit function goes here
    handleDropdownChange = async (e) => {
        e.preventDefault();

        this.setState({ country: e.target.value });
        console.log(e.target.value, 'DROPDOWN COUNTRY');
    }

    handleAddFavorites = async () => {
        await addFavorite(
            {
                location: this.state.location,
                country_code: this.state.country_code,
                state_code: this.state.state_code,
                lat: this.state.lat,
                lon: this.state.lon
            }
        )
    }


    render() {
        return (
            <>
                <div className="search-div">
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
                <div className="results-div">
                    {
                        <section>
                            <p>Country: {this.state.country_code}</p>
                            <p>City: {this.state.location}</p>
                            <p>Temperature: {this.state.temp ? Math.ceil(((this.state.temp)*1.8) + 32)+'°' : ''} </p>
                        </section>
                    }
                </div>
                <button onClick={this.handleAddFavorites}>Add to Favorites</button>
            </>
        )
    }
}
