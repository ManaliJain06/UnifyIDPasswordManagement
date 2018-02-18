import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserHome from './components/UserHome';

class App extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <UserHome />
    );
  }
}

export default App;
