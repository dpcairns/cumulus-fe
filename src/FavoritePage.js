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

    handleRedirect = (id) => {
        this.props.history.push(`/DetailPage/${id}`)
    }

    render() {
        return (
            <div className="favorites-container">
                <h1>Your Favorites</h1>
                <div className="all-favorited-tiles">
                    {
                        this.state.favoritedWeather.map(weather => {
                            return <div className="one-tile">
                                <div>
                                <p>{weather.location}</p>
                                <p>{weather.state_code}</p>
                                <p>{weather.country_code}</p>
                                </div>
                                {/* nice use of the anonymous function pattern to get a particular item's id in a callback */}
                                <button onClick={() => this.handleRedirect(weather.id)}>See Details</button>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
