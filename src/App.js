import React, { Component } from 'react';
import SearchBar from './Components/SearchView/SearchBar'
import firebase  from 'firebase'
import './App.css';

const config = {
  apiKey: "",
  authDomain: "hotelsearch-79fa0.firebaseapp.com",
  databaseURL: "https://hotelsearch-79fa0.firebaseio.com",
  projectId: "hotelsearch-79fa0",
  storageBucket: "hotelsearch-79fa0.appspot.com",
  messagingSenderId: ""
};

class App extends Component {

  
  render() {
    return (
      <div className="App">
      <SearchBar/>
      </div>
    );
  }
}

export default App;
