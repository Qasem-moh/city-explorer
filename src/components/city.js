import React from 'react';
import axios from 'axios'

class City extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nameOfCity: "",
            long: "",
            lat: ""
        }
    }

    displayNameOfCity = (e) => {
        this.setState({
            nameOfCity: e.target.value
        })
    }
    /**
     * 
     * @param {Event} e 
     */
    searchData = async (e) => {
        e.preventDefault();
        let getDataAPI = await axios.get(`https://us1.locationiq.com/v1/search.php?key=	pk.3cf913088667d99eedcfd99de144aee7&city=${this.state.searchData}&format=json`)
        this.setState({
            // nameOfCity: getDataAPI.data[0].display_name,
            long: getDataAPI.data[0].lon,
            lat: getDataAPI.data[0].lat
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.searchData}>
                    <input type='text' placeholder='Enter City To search in US'
                        onChange={(e) => { this.displayNameOfCity(e) }} />
                    <button >Explore!</button>
                </form>
                <p>display_name: {this.state.nameOfCity}</p>
                <h3>{this.state.lat}</h3>
                <h3>{this.state.long}</h3>
            </div>
        )
    }

}

export default City;