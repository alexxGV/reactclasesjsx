import React, { Component } from 'react';
import Deporte from './Deporte';

class Deportes extends Component {
    //ESTE METODO LO EJECUTARA EL HIJO, LLAMANDO AL PARENT
    //Y MANDARA SU DEPORTE

    //TENEMOS UN ESTADO CON UN ARRAY DE DEPORTES
    state = {
        deportes: ["Padel", "Futbol", "Basket", "Balonmano"],
        nombre: "Alumno React",
        seleccionado: ""
    }
    seleccionarFavorito = deportefavorito => {
        this.setState({
            seleccionado: deportefavorito
        })
    }
    cont = 0;
    nuevoDeporte = () => {
        //DEBEMOS CAMBIAR LOS DEPORTES
        //PRIMERO RECUPERAMOS LOS DEPORTES
        var deportes = this.state.deportes;

        deportes.push("Deporte " + this.cont);
        this.cont++;

        this.setState({
            deportes: deportes
        })
    }

    render() {
        return (
            <div>
                <h2>Deportes de {this.state.nombre}</h2>
                <h2 style={{ color: "green" }}>{this.state.seleccionado}</h2>
                <button onClick={this.nuevoDeporte}>
                    Crear nuevo deporte
                </button>
                <ul>
                    {
                        this.state.deportes.map((depor, index) => {
                            return (
                                <Deporte key={index} deporte={depor} seleccionarFavorito={this.seleccionarFavorito} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Deportes;