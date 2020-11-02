import React, { Component } from 'react';

class Comic extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.comic.titulo}</h1>
                <img src={this.props.comic.imagen} />
                <p>{this.props.comic.descripcion}</p>
                <button onClick={() => {
                    this.props.seleccionarComic(this.props.comic)
                }}>Favorito</button>
                <button style={{ backgroundColor: "red" }}
                    onClick={() => {
                        this.props.eliminarComic(this.props.index)
                    }}>Eliminar</button>
            </div>
        )
    }
}
export default Comic;