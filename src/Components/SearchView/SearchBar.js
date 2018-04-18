import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  handleChange(e){
    if(this.refs.search.value){
    this.props.handleSearch(this.refs.search.value)
  }else{
    this.props.handleSearch('');
  }
  }

  changeView(){
    this.props.changeAdd();
  }

  render() {
    return (
        <div className="row search-row">
      <div className="col-md-6 col-lg-6 searchContainer">
        <form>
            <h1>Hotel Finder</h1>
            <input className="search form-control" type="text" ref="search" placeholder="Busca tu hotel ideal"
             onChange={this.handleChange.bind(this)}/>
        </form>
      </div>
      <div className='but'>
        <button onClick={this.changeView.bind(this)} className='btn btn-default'>Agregar Hotel</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
