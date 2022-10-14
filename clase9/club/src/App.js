import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from './components/Formulario';


function App() {

  //Creamos un state para vacío para la lista de asociados
  const [asociados, editarAsociados] = useState([])

  //Creamos una función que recibe el socio nuevo 
  // y lo agrega a la lista de asociados

  const agregarSocio = (socio) => {
    editarAsociados([
      ...asociados,
      socio
    ]);
    console.log(asociados);
    
  }

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
          <Col>Lista de socios</Col>
        </Row>

      </Container>

    </Fragment>
  );
}

export default App;
