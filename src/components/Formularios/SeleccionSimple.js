import React, { Component } from 'react'

export default class SeleccionSimple extends Component {
    seleccionado = React.createRef();

    state = {
        filas: [],
        opciones: []
    }

    generarOptions = () => {
        var options = [];
        for (var i = 0; i < 10; i++) {
            var aleatorio = Math.round((Math.random() * 55) + 1);
            options.push(
                <option key={i} value={aleatorio}>
                    {aleatorio}
                </option>
            )
        }
        this.setState({
            opciones: options
        });
        return options;

    }

    componentWillMount = () => {
        this.generarOptions()
    }

    tablaMultiplicar = (e) => {
        e.preventDefault();
        var numero = parseInt(this.seleccionado.current.value);

        var datos = [];
        for (var i = 1; i <= 10; i++) {
            var operacion = numero * i;
            datos.push(
                <tr key={i}>
                    <td>{numero + "*" + i}</td>
                    <td>{operacion}</td>
                </tr>
            );
        }

        this.setState({
            filas: datos
        });
    }

    render() {
        return (
            <div>
                <h2>Seleccion de elementos</h2>
                <form onSubmit={this.tablaMultiplicar}>
                    <select name="salectNumeros" ref={this.seleccionado}>
                        {this.state.opciones}
                    </select>
                    <button>Generar tabla</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>OPERACION</th>
                            <th>RESULTADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filas}
                    </tbody>
                </table>
            </div>
        )
    }
}
