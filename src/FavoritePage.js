import React, { Component } from 'react'
import { fetchAllWeather } from './weather-api.js';

export default class FavoritePage extends Component {

    state = {
        favoritedWeather: []
    }

    componentDidMount = async () => {
        if (!this.props.token) {
            this.props.history.push('/');
        } else {
            const data = await fetchAllWeather();

            this.setState({
                favoritedWeather: data.body

            })
        }
    }

    handleRedirect = () => {
        this.props.history.push('/DetailPage')
    }

    render() {
        return (
            <div>
                {
                    this.state.favoritedWeather.map(weather => {
                        return <div>
                            <p>{weather.location}</p>
                            <p>{weather.state_code}</p>
                            <p>{weather.country_code}</p>
                            <button onClick={this.handleRedirect}>See Details</button>
                        </div>
                    })
                }
            </div>
        )
    }
}
