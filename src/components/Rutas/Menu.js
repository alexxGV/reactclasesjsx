import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/dust">Dust</a>
                    </li>
                    <li>
                        <a href="/gulag">Gulag</a>
                    </li>
                    <li>
                        <a href="/hijacked">Hijacked</a>
                    </li>
                </ul>
            </div>
        )
    }
}
