import React, { Component } from 'react';


class HotelAdd extends Component {


  handleSubmit(e){
    e.preventDefault();
    let comentarios = [];
    let hotel = {
      nombre: this.refs.nombre.value,
      descripcion: this.refs.descripcion.value,
      ciudad: this.refs.ciudad.value,
      imagen: this.refs.nombre.value + ".jpg",
      uLatitud: this.refs.ulatitud.value,
      uLongitud: this.refs.ulongitud.value,
      costo: this.refs.costo.value,
      comentarios: comentarios
    };
    let image = this.refs.image.files[0];
    this.props.handleAdd(hotel, image);
    this.props.changePrincipal();
  }

  render() {
    return(
    <div className='container'>
    <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group'>
        <label>Nombre del hotel</label>
        <input type='text' className='form-control' ref='nombre'/>
        </div>
        <div className='form-group'>
        <label>Descripcion</label>
        <input type='textarea' className='form-control' ref='descripcion'/>
        </div>
        <div className='form-group'>
        <label>Ciudad</label>
        <input type='text' className='form-control' ref='ciudad'/>
        </div>
        <div className='form-group'>
        <label>Costo del hotel</label>
        <input type='text' className='form-control' ref='costo'/>
        </div>
        <div className='form-group'>
        <label>Latitud</label>
        <input type='text' className='form-control' ref='ulatitud'/>
        </div>
        <div className='form-group'>
        <label>Longitud</label>
        <input type='text' className='form-control' ref='ulongitud'/>
        </div>
        <div className='form-group'>
        <label>Subir foto del hotel</label>
        <input type='file' ref='image' accept='image/*'/>
        <p className='help-block'>Imagen para el banner del hotel</p>
        </div>
        <input type='submit' className='btn btn-default'/>
    </form>
    </div>
    );
  }
}

export default HotelAdd;
