import React, { Component, createRef } from 'react';
import Comic from './../Comics/Comic';

export default class ComicsSeleccionMultiple extends Component {
    seleccionados = React.createRef();

    state = {
        comics: [
            {
                titulo: "Spiderman",
                imagen:
                    "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                descripcion: "Hombre araña"
            },
            {
                titulo: "Wolverine",
                imagen:
                    "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                descripcion: "Lobezno"
            },
            {
                titulo: "Guardianes de la Galaxia",
                imagen:
                    "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
                descripcion: "Yo soy Groot"
            },
            {
                titulo: "Avengers",
                imagen:
                    "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                descripcion: "Los Vengadores"
            },
            {
                titulo: "Spawn",
                imagen:
                    "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                descripcion: "Al Simmons"
            },
            {
                titulo: "Batman",
                imagen:
                    "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                descripcion: "Murcielago"
            }
        ],
        comicsSelect: []
    }

    mostrarNombre = () => {
        var nombresOption = [];
        this.state.comics.map((comic, i) => {
            nombresOption.push(
                <option key={i} value={comic.titulo}>
                    {comic.titulo}
                </option>
            )
        });
        return nombresOption;
    }

    visualizarComics = (e) => {
        e.preventDefault();


        var comicsSeleccionados = [];
        var options = this.seleccionados.current.options;
        console.log(options);
        for (var i = 0; i < options.length; i++) {
            if (options[i].selected == true) {
                console.log("Dentro del seleccionado" + options[i]);
                comicsSeleccionados.push(<Comic comic={options[i]} key={i} />);
            }
        }
        this.setState({
            comicsSelect: comicsSeleccionados
        });
        console.log(this.state.comicsSelect);

    }

    verComic = () => {

    }

    render() {
        return (
            <div>
                <h1>Seleccionar Comics a mostrar</h1>
                <form onSubmit={this.visualizarComics}>
                    <select name="comics" size="10" multiple ref={this.seleccionados}>
                        {this.mostrarNombre()}
                    </select>
                    <button>Visualizar comics</button>
                </form>
                <div>
                    <Comic comic={this.state.comics[0]} key={0} />
                    {this.state.comicsSelect}
                </div>
            </div>
        )
    }
}
