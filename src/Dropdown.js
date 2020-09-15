import React, { Component } from 'react';

export default class Dropdown extends Component {

    state = {
        country: this.props.country,
        CountryData: this.props.CountryData,
    }

    render() {

        return (
            <div>
                <form>
                    <label>
                        <select value={this.state.value} onChange={this.props.handleDropdownChange}>
                            {
                                // nice use of Object.values!
                                (Object.values(this.state.CountryData)).map((country) => <option value={country.iso2}>{country.name}</option>)
                            }
                            <option value="US"></option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}
