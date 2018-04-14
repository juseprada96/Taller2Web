import React, { Component } from 'react';


class HotelResume extends Component {
  render() {
      let hotel = this.props.hotel;
      let name = hotel.name;
      let img = hotel.img;
      let desc = hotel.desc;
      let calification = hotel.calification;
    return (
        <div className="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src="{img}" alt="..."/>
      <div className="caption">
        <h3>{name}</h3>
        <span>{calification}</span>
        <p>desc</p>
        <p><a href="#" className="btn btn-primary" role="button">Ver</a></p>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default HotelResume;
