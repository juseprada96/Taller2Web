import React, { Component } from 'react';


class HotelComents extends Component {


  render() {
    
     let comentarios = this.props.comentarios;
     let comentArray = Object.values(comentarios);
     let comentariosA = comentArray.map((comentario)=>{
         return(
             <div className='row'>
            <ul className="list-group">
            <li className="list-group-item">Nombre</li>
            <li className="list-group-item">{comentario.nombre}</li>
            <li className="list-group-item">Email</li>
            <li className="list-group-item">{comentario.correo}</li>
            <li className="list-group-item">Comentario</li>
            <li className="list-group-item">{comentario.comentario}</li>
            <li className="list-group-item">Calificacion</li>
            <li className="list-group-item">{comentario.calificacion}</li>
          </ul>
          </div>
         )
     })
    return (
  <div className="col-sm-6 col-md-4">
    {comentariosA}
  </div>
    );
  }
}

export default HotelComents;
