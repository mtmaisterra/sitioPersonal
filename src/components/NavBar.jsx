import React from 'react';
/* import { Link } from 'react-router-dom'; */
import '../css/navbar.css';

export default function NavBar() {
    return (
        <>
            <nav className='navBar'>
                <div className='div-logo'>
                    <img src='/MaisterraLogo.jpeg' className='img-logo' />
                </div>
                <div className='text-navbar'>
                    <p className='text'>
                        Sitio web personal
                    </p>
                </div>
                <div className='enlaces'>
                    <a href='./proyects.jsx' className='enlace'>Proyectos</a>
                    <a href='./estudios.jsx' className='enlace'>Educación</a>
                    <a href='./contact.jsx' className='enlace'>Contacto</a>
                </div>
            </nav>
        </>
    )
};