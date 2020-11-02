import React, { Component } from 'react';
import LogoDust from './../../assets/images/dust.jpg'

class Dust extends Component {
    render() {
        return (
            <div>
                <h1>Componente Dust</h1>
                <img src={LogoDust} />
            </div>
        )
    }
}
export default Dust;
