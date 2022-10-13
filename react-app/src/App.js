import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {useState} from 'react';


function App() {

  //Creamos nuestro primer hook. Sirve para guardar información de algo en particular
  const [servicios, agregarServicio] = useState(
    [
      {id: 1, nombre:"Consulta", precio:1000},
      {id: 2, nombre:"Cat Chow 1kg", precio:650 },
      {id:3, nombre:"Vacunación", precio: 5000 }
    ]
  );

  return (
    <div className='dark'>
      <Header/>
      <h1>Veterinaria Unahur</h1>
      {
        servicios.map( servicio => (
          <p>{servicio.id} | {servicio.nombre} | {servicio.precio} </p>
          )
        )
      }
      <Footer
        redsocial={"@facebook"}
      />
    </div>
  );
}

export default App;
