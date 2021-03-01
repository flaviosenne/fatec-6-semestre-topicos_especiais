import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {

    return (
        <div className="container">
            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cadastro">
                            Cadastro
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/consulta">
                            Consulta
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}