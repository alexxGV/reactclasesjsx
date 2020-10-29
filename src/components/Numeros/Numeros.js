import React, { Component } from 'react';
import Numero from './Numero';

class Numeros extends Component {

    state = {
        numeros: ["23", "4", "56", "64", "9"],
        suma: 0
    }

    sumar = dato => {
        console.log(dato);
        this.setState({
            suma: this.state.suma + parseInt(dato)
        });
    }

    nuevoNumero = () => {
        var numeros = this.state.numeros;

        numeros.push(Math.floor(Math.random() * 100));

        this.setState({
            numeros: numeros
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.suma}</h2>
                <button onClick={this.nuevoNumero}>Crear nuevo numero</button>
                <ul>
                    {
                        this.state.numeros.map((numero, index) => {
                            return (
                                <Numero key={index} num={numero} accion={this.sumar} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Numeros;