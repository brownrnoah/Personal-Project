import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes.js"

class App extends Component {
  render() {
    console.log("Hello")
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;
