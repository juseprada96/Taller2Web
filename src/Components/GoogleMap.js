import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
  render() {
      let style = this.props.style;
      let latitud = this.props.latitud;
      let longitud = this.props.longitud;
      console.log(latitud);
    return (
        <div className="contenedor">
      <Map google={this.props.google} initialCenter ={{
        lat: latitud,
        lng: longitud
      }} style={style} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{'this.state.selectedPlace.name'}</h1>
            </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCS756o5lDDjymWdRKm6K2F5oR3As3lzZ0')
})(MapContainer)