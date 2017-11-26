import React, { Component } from 'react';
import './App.css';
import { get } from 'axios';
import ZipForm from "../ZipForm/ZipForm";
import WeatherList from "../Weather/WeatherList";

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
  }

  onFormSubmit(zipcode) {
    get(`http://localhost:3000/weather/${zipcode}`) // FAKE API
      .then(({data}) => {
        const { city, list: dates} = data;
        this.setState({zipcode, city, dates, selectedDate: null});
      });

    this.setState({zipcode})
  }

  render() {
    return (
      <div className="app">
        <ZipForm onSubmit={this.onFormSubmit}/>
          <WeatherList days={this.state.dates}/>
      </div>
    );
  }
}

export default App;
