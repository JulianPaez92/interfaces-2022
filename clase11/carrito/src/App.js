import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Producto from './components/Productos';
import Changuito from './components/Changuito';

function App() {

  //Creamos nuestra lista de productos
  const [productos, guardarProductos] = useState([
    {id:0, articulo:"Guitarra", precio:80000},
    {id:1, articulo:"Bateria", precio:200000},
    {id:2, articulo:"Microfono", precio:50000},
    {id:3, articulo:"Atril", precio:10000}
  ])

  //Creamos nuestro changuito
  const [changuito, agregarProducto] = useState([]);

  return (
    <>
      <Header
        titulo="Tienda de música SIU - Carrito de compras"
      />
      <h1>Listado de productos</h1>
      {
        productos.map( producto => (
          <Producto
            producto={producto}
            productos={productos}
            key={producto.id}
            changuito={changuito}
            agregarProducto={agregarProducto}
          />
        ) )
      }
      <Changuito
        changuito={changuito}
      />
      <Footer/>

    </>
  );
}

export default App;
