import React, { Component } from 'react';
import LogoMonaco from './../../assets/images/monaco.jpg'

class Monaco extends Component {
    render() {
        return (
            <div>
                <h1>Componente Monaco</h1>
                <img src={LogoMonaco} />
            </div>
        )
    }
}
export default Monaco;
