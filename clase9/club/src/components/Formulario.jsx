import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from "uuid";

const Formulario = ({agregarSocio}) => {

    //Creo un socio vacío y lo inicializo con un hook de state

    const [socio, editarSocio] = useState({
        nombre:"",
        dni:""
    });

    //State para el error en el formulario

    const [error, setError] = useState(false);

    //Extraer valores

    const {nombre, dni} = socio;

    //Agarramos lo que el usuario escribe en el formulario

    const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name] : e.target.value
        })
        console.log("Esta escribiendo...")
    };

    //Funcion para cuando el formulario se envía

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");

        //Validar la info del Formulario
        //Manejo de errores

        if(nombre.trim() === '' || dni.trim() === '' ){
            setError(true);
            return
        }

        //Quitar el mensaje de error
        setError(false);

        //Generar el socio
        //Ponerle un id único al socio

        socio.id = uuid();
        console.log(socio);
        agregarSocio(socio);

        //Chequear que no exista

        //Limpiar el formulario
        editarSocio({
            nombre: "",
            dni: ""
        })
    }

    return ( 
        <Fragment>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre completo"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Sin puntos ni espacios"
                        name="dni"
                        onChange={handleChange}
                        value={dni} />
                </Form.Group>

                <Button 
                    variant="primary"
                    type="submit">
                    Ingresar socio
                </Button>
            </Form>
            {
                error
                ? <h4>Completá todos los campos</h4>
                : null
            }
        </Fragment>
     );
}
 
export default Formulario;

