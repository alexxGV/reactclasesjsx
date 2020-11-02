import React, { Component } from 'react'
//PARA ROUTER NECESITAMOS AGREGAR UNOS COMPONENTES
//DE LA LIBRERIA ROUTER-DOM
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//TODOS LOS COMPONENTE QUE QUEREMOS NAVEGAR DEBEN ESTAR AQUI DECLARADOS
import Home from './Rutas/Home';
import Dust from './Rutas/Dust';
import Gulag from './Rutas/Gulag';
import Hijacked from './Rutas/Hijacked';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dust" component={Dust} />
                    <Route path="/gulag" component={Gulag} />
                    <Route path="/hijacked" component={Hijacked} />
                </Switch>
            </BrowserRouter>
        )
    }
}
