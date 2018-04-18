import React, { Component } from 'react';
import './HotelResume.css'
import AnyReactComponent from '../GoogleMap';
import MapContainer from '../GoogleMap';

class HotelResume extends Component {

  handleClick(){
    this.props.changePage(this.props.hotel);
  }

  render() {
    
      let hotel = this.props.hotel;
      console.log(hotel);
      let name = hotel.nombre;
      let img = hotel.imagen;
      let val = hotel.costo;
      let costo = '$'+val;
      let ciudad = hotel.ciudad;
      let calification = hotel.calificacion;
      let ulongitud = hotel.uLongitud;
      let ulatitud = hotel.uLatitud;
      calification = Math.round(calification*100)/100;
      const style = {
        width: '180px',
        height: '210px',
        top: '-200px',
        left: '150px'
      }
    return (
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src={img} alt="..."/>
      <div className="caption">
        <h3>{name}</h3>
        <h4>Calificación: {calification}</h4>
        <span>{ciudad}</span>
        <p>{costo}</p>
        <p><a href="#" onClick={this.handleClick.bind(this)} className="btn btn-primary" role="button">Ver</a></p>
        <MapContainer latitud = {ulatitud} longitud = {ulongitud} style={style} />
      </div>
    </div>
  </div>

    );
  }
}

export default HotelResume;
