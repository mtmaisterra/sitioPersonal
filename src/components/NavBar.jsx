import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <div className='div-logo'>
                <img src='/MaisterraLogo.jpeg' className='img-logo' alt="Logo" />
            </div>
            <div className='text-navbar'>
                <p className='text'>
                    <Link to='/Home' className='text'>
                        Sitio web personal
                    </Link>
                </p>
            </div>
            <div className='enlaces'>
                <Link to="/estudios" className='enlace'>
                    Estudios
                </Link>
                <Link to="/proyectos" className='enlace'>
                    Proyectos
                </Link>
                <Link to="/contacto" className='enlace'>
                    Contacto
                </Link>
                <Link to="/"></Link>
            </div>
        </nav>
    );
};

export default NavBar;
