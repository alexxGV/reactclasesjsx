//SI TRABAJAMOS CON ES6, SIEMPRE DEBEMOS IMPORTAR 
//COMPONENT DE REACT
import React, { Component } from 'react';
import "./PrimeraClase.css";

//CUALQUIER CLASE ES6 HEREDA DE COMPONENT
//SIEMPRE DEBE EMPEZAR POR MAYUSCULA O NO FUNCIONA

class PrimeraClase extends Component {
    //TODA CLASE TIENE METODO RENDER
    //COMO DIBUJO DE COMPONENTE
    //DEBEMOS PONER EL CODIGO DEL RETURN

    render() {
        return (<React.Fragment>
            <h1 className="rojo">Primer componente Class</h1>
        </React.Fragment>)
    }
}

export default PrimeraClase;