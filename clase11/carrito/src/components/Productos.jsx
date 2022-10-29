import React from 'react';

const Producto = ({producto, productos, changuito, agregarProducto}) => {

    //Extraigo los valores
    const {id, articulo, precio} = producto;

    //Función para comprar un producto
    const seleccionarProducto = (id) => {
        //console.log("Seleccionado")
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([...changuito, producto]);
        console.log(producto,changuito)
    };

    return ( 
        <>
            {id} | {articulo} | {precio}
            <br/>
            {
                productos
                ?
                <button
                type="button"
                onClick={ () => seleccionarProducto(id) }
                >Comprar</button>
            :
                <button
                    type="button"
                    onClick={ () => seleccionarProducto(id) }
                >Eliminar</button>
            }
            <br/>
        </>
     );
}
 
export default Producto;