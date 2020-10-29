import React, { Component } from 'react';

class Deporte extends Component {
    //state = { seleccionado: "" };

    seleccionarDeporte = () => {
        //CUANDO PULSEMOS LLAMAREMOS EL METODO DEL PADRE,
        //ENVIADO POR props
        this.props.seleccionarFavorito(this.props.deporte);

        // console.log(this.props.deporte);
        //CUANDO EL USUARIO PULSE CLICK, CAMBIAMOS EL VALOR DEL STATE

        // this.setState({
        //     seleccionado: this.props.deporte

        // })
    }

    render() {
        return (
            <React.Fragment>
                <li style={{ color: "blue" }}>
                    {this.props.deporte}
                    <button onClick={this.seleccionarDeporte}>
                        Seleccionar deporte
                </button>
                    {/* <span style={{ color: "red" }}>
                        {this.state.seleccionado}
                    </span> */}
                </li>
            </React.Fragment>
        );
    }
}

export default Deporte;