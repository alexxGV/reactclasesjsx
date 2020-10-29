//SI TRABAJAMOS CON ES6, SIEMPRE DEBEMOS IMPORTAR 
//COMPONENT DE REACT
import React, { Component } from 'react';
import "./PrimeraClase.css";

//PODEMOS DECLARAR METODOS FUERA DE LA CLASE CON LA SINTAXIS function 
//PERO NO PODEMOS UTILIZAR VARIABLES DE LA CLASE
//PARA LLAMAR A LA FUNCIONES EXTERNAS NO SE UTILIZA this
function miFunction() {
    console.log("Estoy en mi function");
}

//CUALQUIER CLASE ES6 HEREDA DE COMPONENT
//SIEMPRE DEBE EMPEZAR POR MAYUSCULA O NO FUNCIONA

class PrimeraClase extends Component {
    //PARA CREAR METODOS NO SE UTILIZAN PALABRAS CLAVES

    contador = 1;
    metodoAccion = () => {
        console.log("Contador " + this.contador);
        this.contador++;
    }
    //PODEMOS MANEJAR VARIABLES DE ESTADO PARA LOS DIUBUJOS
    //LAS VARIABLES DE ESTADO DEBEMOS DECLARARLAS PARA PODER USARLAS
    // state = { variable1: valor1, variable2: valor2}
    //PODEMOS COMBINAR PROPS QUE RECIBIMOS CON STATE

    state = { valor: parseInt(this.props.iniciar) };
    incrementarEstado = () => {
        //VAMOS A TENER UN CONTADOR PARA DIBUJAR SU INCREMENTO EN LA PAGINA
        //CADA VEZ QUE ENTREMOS INCREMENTEMOS EL CONTADOR
        this.setState({
            valor: this.state.valor + 1
        });

    }

    //TODA CLASE TIENE METODO RENDER
    //COMO DIBUJO DE COMPONENTE
    //DEBEMOS PONER EL CODIGO DEL RETURN

    //RENDER SE EJECUTA CADA VEZ QUE EXISTAN CAMBIO EN EL DIBUJO
    render() {
        //DENTRO DEL RENDER PODEMOS DECLARAR VARIABLES O FUNCIONES, PERO CON LA SINTAXIS ANTERIOR
        //(const, var)
        var numero = 0;
        const hacerAlgo = () => {
            console.log("Haciendo algo " + numero)
            numero++;
        }
        return (<React.Fragment>
            <h1 className="rojo">Primer componente Class</h1>
            <h3 className="azul">
                Estado: {this.state.valor}
            </h3>
            <button onClick={this.incrementarEstado}>CAMBIAR VALOR </button>

            <button onClick={this.metodoAccion}>
                Incrementar contador
            </button>

            <button onClick={() => {
                miFunction();
                //SI EL METODO O LA VARIABLE ESTA EN EL RENDER NO DEBE USAR LA VARIABLE this
                hacerAlgo();
            }}>
                Mi function
            </button>
        </React.Fragment >)
    }
}

export default PrimeraClase;