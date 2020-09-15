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
                weather_description
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

    handleRemoveTile = async () => {
        await deleteFavorite(this.props.match.params.id);

        this.props.history.push('/FavoritePage')
    }

    render() {
        const { 
            location,
            country_code,
            lat,
            lon,
            sunrise,
            sunset,
            timezone,
            weather_description,
        } = this.state;

        return (
            <div className="detail-div">
                <p>City: {location}</p>
                <p>Country: {country_code}</p>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lon}</p>
                <p>Sunrise: {sunrise}</p>
                <p>Sunset: {sunset}</p>
                <p>Timezone: {timezone}</p>
                <p>Weather Description: {weather_description}</p>
                <button onClick={this.handleRemoveTile}>Remove</button>
            </div>
        )
    }
}
