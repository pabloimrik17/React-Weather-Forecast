import React, {Component} from 'react';
import './App.css';
import {get} from 'axios';
import ZipForm from "../ZipForm/ZipForm";
import WeatherList from "../Weather/WeatherList";
import CurrentDay from "../Day/CurrentDay";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            zipcode: '',
            city: {},
            dates: [],
            selectedDate: null
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onDayClicked = this.onDayClicked.bind(this);
    }

    onFormSubmit(zipcode) {
        get(`http://localhost:3000/weather/${zipcode}`) // FAKE API
            .then(({data}) => {
                const {city, list: dates} = data;
                this.setState({zipcode, city, dates, selectedDate: null});
            });

        this.setState({zipcode})
    }

    onDayClicked(dayIndex) {
        this.setState({selectedDate: dayIndex});
    }

    render() {
        return (
            <div className="app">
                <ZipForm onSubmit={this.onFormSubmit}/>
                <WeatherList days={this.state.dates} onDayClicked={this.onDayClicked}/>
                {this.state.selectedDate !== null &&
                <CurrentDay city={this.state.city} day={this.state.dates[this.state.selectedDate]}/>}
            </div>
        );
    }
}

export default App;
