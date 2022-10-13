import React from "react";

const Footer = ({redsocial}) => {

    //acá código JS que necesito
    //Calculamos el año corriente

    const fecha = new Date().getFullYear();

    return (
            <div>
                <p>Acá van las redes sociales y los derechos de autor</p>
                <p>Año {fecha}</p>
                <p>Visita nuestra red social: {redsocial}</p>
            </div>
        );
}

export default Footer;