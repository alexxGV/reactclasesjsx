import React, { Component } from 'react';
import LogoGulag from './../../assets/images/gulag.jpg'

class Gulag extends Component {
    render() {
        return (
            <div>
                <h1>Componente Gulag</h1>
                <img src={LogoGulag} />
            </div>
        )
    }
}
export default Gulag;
