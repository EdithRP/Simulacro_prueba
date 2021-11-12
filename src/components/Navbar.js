import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.css';

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="/Listar">Inicio</Link>
                <Link className="link" to="/Registro">Registro</Link>
                <Link className="link" to="/Listar2">Modificar</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}
