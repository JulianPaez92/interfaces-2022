import React, {Fragment} from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


//const algo = ({property1,property2}) => {return ()}
const Socio = ({socio, borrarSocio}) => {
    return ( 
        <Fragment>
            <Badge bg="secondary">
                <p>Socio: {socio.id}</p>
                <p>Nombre: {socio.nombre}</p>
                <p>DNI: {socio.dni}</p>
                <Button
                    variant="light"
                    onClick={ () => borrarSocio(socio.id) }
                    >Borrar</Button>
            </Badge>
        </Fragment>

     );
}
 
export default Socio;