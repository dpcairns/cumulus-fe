import React, { Component } from 'react'

export default class Dropdown extends Component {

    state = {
        country: 'US'
    }


    handleDropdownChange = async (e) => {
        e.preventDefault();

        this.setState({ country: e.target.value });
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        <select value={this.state.value} onChange={this.handleDropdownChange}>
                            <option value="US"></option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}
