import React, { Component } from 'react'
import { fetchFavoriteWeather, deleteFavorite, fetchSearchedWeather } from './weather-api.js';

export default class DetailsPage extends Component {

    state = {
        searchCity: '',
        searchState: '',
        country: 'US',
        lon: '',
        sunrise: '',
        sunset: '',
        temp: '',
        timezone: '',
        weather_description: ''
    }

    componentDidMount = async () => {
        try {
            const locationData = await fetchFavoriteWeather(
                this.props.match.params.id
            )
            const userSearch = await fetchSearchedWeather(
                {
                    city: locationData.body.location,
                    state: locationData.body.state_code,
                    country: locationData.body.country_code
                }
            )
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

    handleRemoveTile = async () => {
        await deleteFavorite(this.props.match.params.id);

        this.props.history.push('/FavoritePage')
    }

    render() {
        return (
            <div className="detail-div">
                <p>City: {this.state.location}</p>
                <p>Country: {this.state.country_code}</p>
                <p>Latitude: {this.state.lat}</p>
                <p>Longitude: {this.state.lon}</p>
                <p>Sunrise: {this.state.sunrise}</p>
                <p>Sunset: {this.state.sunset}</p>
                <p>Timezone: {this.state.timezone}</p>
                <p>Weather Description: {this.state.weather_description}</p>
                <button onClick={this.handleRemoveTile}>Remove</button>
            </div>
        )
    }
}
