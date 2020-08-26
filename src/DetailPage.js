import React, { Component } from 'react'

export default class DetailsPage extends Component {

    handleRemoveTile = async () => {
        //await deleteFavorite(this.props.token);
    }

    render() {
        return (
            <div>
                Details here
                <button onClick={this.handleRemoveTile}>Remove</button>
            </div>
        )
    }
}
