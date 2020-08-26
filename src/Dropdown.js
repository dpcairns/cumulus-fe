import React, { Component } from 'react';
// import CountryData from './CountryData.js';

export default class Dropdown extends Component {

    state = {
        country: this.props.country,
        CountryData: this.props.CountryData,
    }

    // handleDropdownChange = async (e) => {
    //     e.preventDefault();

    //     this.setState({ country: e.target.value });
    //     //console.log(this.state.country);
    // }

    render() {
        
        return (
            <div>
                <form>
                    <label>
                        <select value={this.state.value} onChange={this.props.handleDropdownChange}>
                        {/* {
                                this.state.CountryData.map((country) => <option value={country.countries}>{country.countries}</option>)
                            } */}
                        {
                            //const countryNames = Object.values(CountryData);
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
