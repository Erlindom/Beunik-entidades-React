import React, { Component }  from "react";
import { Link } from "react-router-dom"
import './header.css';

class Header extends Component {
    render () {
        return (
            <header className='header' id="home">
                <div className="header_content">
                    <h1 className="header_title">BeUnik PRO</h1>
                    <p className="header_description">Dale visibilidad a tu negocio y recibe recomendaciones
                    de cómo crecer y mejorar la experiencia con tus clientes.</p>
                    <div className="header_button">
                        <Link to={"/tutorials"} href="" className="btn">
                        <i className='bx bxs-right-arrow'></i> Ver Tutoriales</Link>
                        <Link to={"/form"} className="btn btn_access">
                        <i className='bx bx-log-in' ></i> Regístrate</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;