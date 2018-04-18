import React, { Component } from 'react';
import SearchBar from './SearchView/SearchBar'
import HotelList from './SearchView/HotelList'
import HotelAdd from './HotelView/HotelAdd'
import HotelPage from './HotelView/HotelPage'
import firebase from './firebase'
import './Principal.css'

class Principal extends Component {


  reference = null;
  storage = null;

 constructor(){
   super();
   let hotelarray = [];
   this.state = {
    hoteles: hotelarray,
    hotelesFiltrados: hotelarray,
    page: 'principal',
    hotel : null
  }
  this.reference = firebase.database().ref('hoteles');
  this.storage = firebase.storage();
 }

 componentDidMount(){
  this.reference.on('value',(snapshot)=>{
    let hoteles = snapshot.val();
    let newHoteles = [];
    
    for(let hotel in hoteles){
        let imagen = this.storage.ref(hoteles[hotel].nombre+'.jpg').getDownloadURL().then((url)=>{
            let comentarios = [];
            let calificacion = 0
            if(hoteles[hotel].comentarios){
                comentarios = hoteles[hotel].comentarios;
                Object.values(comentarios).forEach((comentario)=>{
                    calificacion+=Number(comentario.calificacion);
                })
                calificacion /= Object.values(comentarios).length;
                console.log(calificacion);
            }
            newHoteles.push({
                id: hotel,
                nombre: hoteles[hotel].nombre,
                descripcion: hoteles[hotel].descripcion,
                uLatitud: hoteles[hotel].uLatitud,
                uLongitud: hoteles[hotel].uLongitud,
                ciudad: hoteles[hotel].ciudad,
                comentarios: comentarios,
                imagen: url,
                costo: hoteles[hotel].costo,
                calificacion: calificacion
              });
              console.log(url)
              this.setState({
                hoteles: newHoteles,
                hotelesFiltrados : newHoteles
              });
        });
      
    }
    
  })
 }

 changePage(hotel){
    this.setState({
        hotel: hotel,
        page: 'page'
    })
 }

 changeAdd(){
     this.setState({
         page: 'add'
     })
 }

 changePrincipal(){
     this.setState({
         page: 'principal',
         hotelesFiltrados: this.state.hoteles
     })
 }

 handleSearch(searchParam){
  let hotelesFiltrados = this.state.hoteles;
  if(searchParam){
  let hotelesNombre = hotelesFiltrados.filter((hotel)=>{
        if(!searchParam){
            return true;
          }
      return hotel.nombre.toLowerCase().includes(searchParam.toLowerCase())
    });
 let hotelesCiudad = hotelesFiltrados.filter((hotel)=>{
    if(!searchParam){
        return true;
      }
  return hotel.ciudad.toLowerCase().includes(searchParam.toLowerCase());
});
hotelesFiltrados = hotelesNombre.concat(hotelesCiudad);
}
this.setState({
  hotelesFiltrados: hotelesFiltrados
})
 }
 
handleAdd(hotel, image){
  this.reference.push(hotel)
  let ref = this.storage.ref().child(hotel.nombre+'.jpg');
  ref.put(image);
}

handleComent(hotel, comentario){
    let ref = firebase.database().ref('hoteles/'+hotel.id+'/comentarios');
    console.log(comentario);
    ref.push({
        nombre: comentario.nombre,
        comentario: comentario.comentario,
        calificacion: comentario.calificacion,
        correo: comentario.correo
    });
    this.setState({
        page: 'principal'
    })
  
}

 render() {
     let page = this.state.page
     if(page=='principal'){
    return (
    <div className='principal'>
      <SearchBar handleSearch={this.handleSearch.bind(this)} changeAdd={this.changeAdd.bind(this)}/>
      <HotelList hoteles = {this.state.hotelesFiltrados} changePage={this.changePage.bind(this)}/>
      </div>
    );
}else if(page=='page'){
    return(
    <HotelPage hotel={this.state.hotel} handleComent={this.handleComent.bind(this)} />
);
}else{
    return(
        <HotelAdd handleAdd={this.handleAdd.bind(this)} changePrincipal={this.changePrincipal.bind(this)}/>
    );
}
  }
}

export default Principal;
