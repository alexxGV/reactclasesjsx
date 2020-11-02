import React, { Component } from 'react'

export default class EjemploSimple extends Component {
    //ENLAZAR LA CAJAS <inputs>
    nombre = React.createRef();
    apellidos = React.createRef();

    //PARA DIBUJAR NECESITAMOS UN STATE
    state = {
        usuario: {}
    }

    //METODO PARA CAPTURAR LOS DATOS
    recibirDatos = (e) => {
        //DEBEMOS CORTAR EL SUBMIT PARA EL FRONT
        e.preventDefault();
        console.log("Nombre: " + this.nombre.current.value);
        console.log("Apellidos: " + this.apellidos.current.value);
        var usuario = {
            nombre: this.nombre.current.value,
            apellidos: this.apellidos.current.value,
        }
        this.setState({
            usuario: usuario
        })

    }

    render() {
        return (
            <div>
                <h1>Ejemplo Forms React</h1>
                <form onSubmit={this.recibirDatos}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" ref={this.nombre} name="nombre" onChange={this.recibirDatos} /><br />
                    <label htmlFor="apellidos">Apellidos: </label>
                    <input type="text" ref={this.apellidos} name="apellidos" /><br />
                    <button>
                        Enviar datos
                    </button>
                    {this.state.usuario.nombre &&
                        <h2 style={{ color: "blue" }}>
                            Buenos días {this.state.usuario.nombre}, {this.state.usuario.apellidos}
                        </h2>
                    }
                </form>
            </div>
        )
    }
}
