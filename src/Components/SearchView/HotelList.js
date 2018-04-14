import React, { Component } from 'react';
import HotelResume from './HotelResume'

class HotelList extends Component {
  render() {
      let hotels = this.props.hotels;
      let hotelList = hotels.map((hotel)=>{
        return (
            <HotelResume hotel = {hotel} />
          );      
      });
    
  }
}

export default HotelList;
