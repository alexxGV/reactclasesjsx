import React, { Component } from 'react';

class Numero extends Component {

    sumaHijo = () => {
        this.props.accion(this.props.num);
    }

    render() {
        return (
            <React.Fragment>
                <li>
                    {this.props.num}
                    <button onClick={this.sumaHijo}>
                        Sumar
                    </button>
                </li>
            </React.Fragment>
        )
    }
}
export default Numero;