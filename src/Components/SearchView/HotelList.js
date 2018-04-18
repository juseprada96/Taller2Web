import React, { Component } from 'react';
import HotelResume from './HotelResume'

class HotelList extends Component {

  changePage(hotel){
    this.props.changePage(hotel);
  }
  render() {
      let hoteles = this.props.hoteles;
      let hotelList = hoteles.map((hotel)=>{
        return (
            <HotelResume hotel = {hotel} changePage={this.changePage.bind(this)} />
          );      
      });
      return(
        <div className='container'>
        {hotelList}
        </div>
      )
  }
}

export default HotelList;
