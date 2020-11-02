import React, { Component } from 'react';
import LogoHijacked from './../../assets/images/hijacked.jpg'

class Hijacked extends Component {
    render() {
        return (
            <div>
                <h1>Componente hijacked</h1>
                <img src={LogoHijacked} />
            </div>
        )
    }
}
export default Hijacked;
