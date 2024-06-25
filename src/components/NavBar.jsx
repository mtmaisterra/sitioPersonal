import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import '../css/navbar.css';
import Contacto from '../components/Contacto';
import Home from '../pages/home';
import Estudios from '../components/estudios';
import Proyectos from '../components/proyectos';

const NavBar = () => {
    return (
        <BrowserRouter>
            <nav className='navBar'>
                <div className='div-logo'>
                    <img src='/MaisterraLogo.jpeg' className='img-logo' alt="Logo" />
                </div>
                <div className='text-navbar'>
                    <p className='text'>
                        Sitio web personal
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
                <Routes>
                    <Route path='/proyectos' element={<Proyectos />} />
                    <Route path='/estudios' element={<Estudios />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/' element={"/"} />
                </Routes>
            </nav>
        </BrowserRouter>
    );
};

export default NavBar;
