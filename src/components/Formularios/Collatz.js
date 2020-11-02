import React, { Component } from 'react'

export default class Collatz extends Component {
    numero = React.createRef();

    //NECESITO EL STATE PARA PODER REPRESENTARLO EN LA PANTALLA
    state = {
        numeros: ""
    }

    calculo = (e) => {
        e.preventDefault();
        console.log(this.numero.current.value);
        var numero = this.numero.current.value;
        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }
            var numeros = this.state.numeros;
            console.log("Numeros guardado en state: " + numeros)

            if (numeros == "") {
                console.log("Numero dentro de vacio: " + numero);
                this.setState({
                    numeros: numero
                });
            } else {
                this.setState({
                    numeros: this.state.numeros + ", " + numero
                });
                console.log("Numero en el else: " + numero);
            }

            console.log("Numero guardado" + this.state.numeros);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.calculo}>
                    <label htmlFor="numero">Numero: </label>
                    <input type="number" ref={this.numero} name="numero" />
                    <button>Hacer calculo</button>
                    {this.state.numeros &&
                        <h2 style={{ color: "blue" }}>
                            {this.state.numeros}
                        </h2>
                    }
                </form>
            </div>
        )
    }
}
