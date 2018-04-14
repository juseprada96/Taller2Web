import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
        <div className="row">
      <div className="col-md-6 col-lg-6 searchContainer">
        <form>
            <h1>Hotel Finder</h1>
            <input className="search form-control" type="text" name="search" placeholder="Busca tu hotel ideal"/>
        </form>
      </div>
      </div>
    );
  }
}

export default SearchBar;
