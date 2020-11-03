import React, { Component } from 'react'

export default class Collatz extends Component {
    numero = React.createRef();

    //NECESITO EL STATE PARA PODER REPRESENTARLO EN LA PANTALLA
    state = {
        lista: []
    }

    calculo = (e) => {
        e.preventDefault();
        var numero = parseInt(this.numero.current.value);
        //VARIABLE PARA ASIGNAR CADA LI
        var datos = [];

        //CADA ELEMENTO DEBE TENER UN KEY DIFERENTE
        var contador = 1;

        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }

            var lista = this.state.lista;
            lista.push(<li key={contador}>{numero}</li>)
            contador++;

            this.setState({
                lista: lista
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.calculo}>
                    <label htmlFor="numero">Numero: </label>
                    <input type="number" ref={this.numero} name="numero" />
                    <button>Hacer calculo</button>
                    {this.state.lista &&
                        <ul>
                            {this.state.lista}
                        </ul>
                    }
                </form>
            </div>
        )
    }
}
