import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">hEmaily</h1>
        </header>
        <p className="App-intro">
          Started like a warted melon.
        </p>
        <a href="//localhost:5000/auth/google">Sign in with Google</a>
      </div>
    );
  }
}

export default App;
