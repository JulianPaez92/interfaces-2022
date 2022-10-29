import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment,useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from './components/Formulario';
import Socio from './components/Socio';


function App() {

  //Iniciamos el almacenamiento en el navegador
  //localStorage

  let sociosIniciales = JSON.parse(localStorage.getItem('asociados'));
  if(!sociosIniciales){
    sociosIniciales=[];
  };

  //Creamos un state para vacío para la lista de asociados
  const [asociados, editarAsociados] = useState(sociosIniciales)

  //El hook useEffect sirve para ejecutar cosas cuando cambia el estado
  // de un elemento

  useEffect(
    () => {
      if(sociosIniciales){
        localStorage.setItem('asociados', JSON.stringify(asociados));
      } else{
        localStorage.setItem('asociados', JSON.stringify([]));
      }
      console.log("Cambio el estado");
    }, [sociosIniciales]

  );



  //Creamos una función que recibe el socio nuevo 
  // y lo agrega a la lista de asociados

  const agregarSocio = (socio) => {
    editarAsociados([
      ...asociados,
      socio
    ]);
    console.log(asociados);
    
  }

  const borrarSocio = (id) => {
    const nuevosSocios = asociados.filter(socio => socio.id !== id);
    editarAsociados(nuevosSocios);
  };

  //Cambiamos el título si no hay socios
  let titulo = asociados.length === 0 ? "Aún no hay socios" : "Lista de socios"

  return (
    <Fragment>

      <Container>

        <Row>
          <Col>Club Social y Deportivo</Col>
        </Row>

        <Row>
          <Col>
            <Formulario
              agregarSocio={agregarSocio}
              />
          </Col>
          <Col>
            {titulo}
            {
              asociados.map( socio =>  
                <Socio
                  socio={socio}
                  key={socio.id}
                  borrarSocio={borrarSocio}
                />
              )
            }
          </Col>
        </Row>

      </Container>

    </Fragment>
  );
}

export default App;
