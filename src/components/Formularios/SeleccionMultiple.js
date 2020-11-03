import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectMultipleRef = React.createRef();

    state = {
        ingredientes: [
            "Leche", "Cacao", "Avellana", "Azucar"
        ],
        seleccionados: ""

    }

    generarOptions = () => {
        var options = [];
        this.state.ingredientes.map((ingrediente, i) => {
            options.push(
                <option key={i} value={ingrediente}>
                    {ingrediente}
                </option>
            );
        });
        return options;
    }

    mostrarSeleccionados = (e) => {
        e.preventDefault();
        var datos = "";
        //HASTA AHORA ESTAVAMOS UTILIZANDO EL CURRENT.VALUE PERO SOLO FUNCIONA PARA CADA UNO
        //EN ESTE EJEMPLO SOLO NOS DEVUELVE UN ARRAY
        //ACEDEMOS A TODOS LOS OCTIONS
        //Ref.current.options
        //RECORREMOS EL ARRAY Y PREGUNTAMOS POR SELECCIONADOS

        var options = this.selectMultipleRef.current.options;
        console.log(options);
        //RECOREMOS LOS OPTIONS
        for (var i = 0; i < options.length; i++) {
            //PREGUNTAMOS SI ESTA SELECCIONADO (selected)
            if (options[i].selected == true) {
                datos += options[i].value + ",";
            }
        }
        this.setState({
            seleccionados: datos
        })
    }

    render() {
        return (
            <div>
                <h1>Seleccion multiple</h1>
                <form onSubmit={this.mostrarSeleccionados}>
                    <select name="seleccionMultiple" size="10" multiple ref={this.selectMultipleRef}>
                        {this.generarOptions()}
                    </select>
                    <button>Mostrar Seleccionados</button>
                </form>
                <h1 style={{ color: "red" }}>
                    {this.state.seleccionados}
                </h1>
            </div>
        )
    }
}
