import React, { Component } from 'react'

export default class FavoritePage extends Component {

    componentDidMount = async () => {
        if (!this.props.token) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
