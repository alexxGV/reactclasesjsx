import React, { Component } from 'react'
import Select from 'react-select';

export default class SeleccionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientes: [
                "Leche", "Cacao", "Vainilla", "Avellanas", "Sal", "Azucar"
            ],
            opciones: [],
            selectedOption: null,
            seleccionados: ""
        }
    }

    componentWillMount = () => {
        this.generarOptions();
    }

    generarOptions = () => {
        var datos = [];
        this.state.ingredientes.map((ingrediente, i) => {
            datos.push({
                value: ingrediente,
                label: ingrediente
            })
        });
        this.setState(
            { opciones: datos }
        )
    }

    mostarSeleccionado = seleccionado => {
        this.setState({
            selectedOption: seleccionado,
            seleccionados: seleccionado.value
        });
    }

    render() {
        return (
            <div>
                <h1>Select como compoente externo</h1>
                <Select value={this.state.selectedOption}
                    options={this.state.opciones}
                    onChange={this.mostarSeleccionado}
                    isMulti />
                <h2 style={{ color: "blue" }}>
                    {this.state.seleccionados}
                </h2>
            </div>
        )
    }
}
