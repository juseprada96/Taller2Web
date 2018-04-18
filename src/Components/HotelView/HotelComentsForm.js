import React, { Component } from 'react';


class HotelComentsForm extends Component {


  handleSubmit(e){
    e.preventDefault();
    let cal = Number(this.refs.calificacion.value);
    console.log(cal)
    if(cal == NaN){
        
        alert('Calificacion debe ser un numero');
    }else if(this.refs.calificacion.value<0 || this.refs.calificacion.value>5){
            alert('Calificacion debe ser entre 1 y 5');
    }else{
    let comentario = {
        nombre: this.refs.nombre.value,
        correo: this.refs.correo.value,
        comentario: this.refs.comentario.value,
        calificacion: this.refs.calificacion.value
    }
    this.props.handleComentario(comentario);
    }
  }

  render() {
    return(
    <div className='container'>
    <form onSubmit={this.handleSubmit.bind(this)} className='form-inline'>
        <div className='form-group'>
        <label>Nombre</label>
        <input type='text' className='form-control' ref='nombre'/>
        </div>
        <div className='form-group'>
        <label>Correo</label>
        <input type='textarea' className='form-control' ref='correo'/>
        </div>
        <div className='form-group'>
        <label>Comentario</label>
        <input type='text' className='form-control' ref='comentario'/>
        </div>
        <div className='form-group'>
        <label>Calificacion</label>
        <input type='text' className='form-control' ref='calificacion'/>
        </div>
        <input type='submit' className='btn btn-default'/>
    </form>
    </div>
    );
  }
}

export default HotelComentsForm;
