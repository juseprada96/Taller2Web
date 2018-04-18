import React, { Component } from 'react';
import HotelComentsForm from './HotelComentsForm'
import HotelComents from './HotelComents'
import './HotelPage.css'
import MapContainer from '../GoogleMap';

class HotelPage extends Component {


    handleComentario(comentario){
        let hotel = this.props.hotel
        this.props.handleComent(hotel, comentario);
    }

 render() {
     let hotel = this.props.hotel;
     const style = {
        width: '300px',
        height: '160px',
        top: '10px'
      }
    return (
      
      <div className='container'>
          <div className='row'>
              <img className='baner' src={hotel.imagen}/>
          </div>
          <div className='row'>
                <div className='col-md-6 col-lg-6'>
                <h1>{hotel.nombre}</h1>
                <p>{hotel.descripcion}</p>
                <span>{'$'+ hotel.costo}</span>
                </div>
                <div className='col-md-6 col-lg-6'>
                <MapContainer latitud ={hotel.uLatitud} longitud={hotel.uLongitud} style={style} />
                </div>
          </div>
          <div className='row'>
            <div className=''>
            <h2> Deja tu comentario </h2>
            <HotelComentsForm handleComentario={this.handleComentario.bind(this)} />
            </div>
          </div>
          <div className='row'>
            <HotelComents comentarios={hotel.comentarios}/>
          </div>
      </div>
    );
  }
}

export default HotelPage;
