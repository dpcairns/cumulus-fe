import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import { fetchSearchedWeather, addFavorite } from './weather-api.js';
import CountryData from './CountryData.js';

export default class SearchPage extends Component {
    state = {
        searchCity: '',
        searchState: '',
        country: 'US',
        // this capitalized variable is a little weird
        CountryData: CountryData,
    }

    componentDidMount = async () => {
        if (!this.props.token) {
            this.props.history.push('/');
        }
    }

    handleCityChange = (e) => {
        this.setState({
            searchCity: e.target.value
        })
    }

    handleStateChange = (e) => {
        this.setState({
            searchState: e.target.value
        })
    }

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

            const {
                country_code,
                state_code,
                lat,
                location,
                lon,
                sunrise,
                sunset,
                temp,
                timezone,
                weather_description,
            } = userSearch.body;

            this.setState({
                country_code,
                state_code,
                lat,
                location,
                lon,
                sunrise,
                sunset,
                temp,
                timezone,
                weather_description,
            })
        } catch (e) {
            return ({ error: e.message })
        }
    }

    handleDropdownChange = async (e) => {
        e.preventDefault();

        this.setState({ country: e.target.value });
        console.log(e.target.value, 'DROPDOWN COUNTRY');
    }

    handleAddFavorites = async () => {
        if (!this.state.searchCity) {
            this.props.history.push('./SearchPage');
        } else {
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
    }


    render() {
        return (
            <>
                <div className="search-div">
                    <h1>How's the weather?</h1>
                    <form className="search-form">
                        <label>
                            Enter City
                                <input onChange={this.handleCityChange} value={this.state.searchCity} type="text" />
                        </label>
                        <label>
                            Enter State
                                <input onChange={this.handleStateChange} value={this.state.searchState} type="text" />
                        </label>
                        <Dropdown
                            country={this.state.country} CountryData={this.state.CountryData} handleDropdownChange={this.handleDropdownChange} />
                        <button onClick={this.handleSubmit} className="search-button">Search</button>
                    </form>

                    <div className="results-div">
                        {
                            <section>
                                <p>Country: {this.state.country_code}</p>
                                <p>City: {this.state.location}</p>
                                <p>Temperature: {this.state.temp ? Math.ceil(((this.state.temp) * 1.8) + 32) + '°' : ''} </p>
                            </section>
                        }
                        <button onClick={this.handleAddFavorites} className="favorites-button">Add to Favorites</button>
                    </div>
                </div>
            </>
        )
    }
}
