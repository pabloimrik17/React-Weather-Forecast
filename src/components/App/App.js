import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import ZipForm from "../ZipForm/ZipForm";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ZipForm/>
      </div>
    );
  }
}

export default App;
