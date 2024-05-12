import React from 'react';
import '../css/navbar.css';

function NavBar() {
    return (
        <>
            <nav className='navBar'>
                <div className='div-navbar'>
                    <div className='div-logo'>
                        <img src='/MaisterraLogo.jpeg' className='img-logo' />
                    </div>
                    <div className='enlaces-navbar'>
                        <div className='enlace'>
                            <a href='../components/sobre.jsx' className='a-navbar'>
                                Sobre mi
                            </a>
                        </div>
                        <div className='enlace'>
                            <a href='#estudios' className='a-navbar'>
                                Estudios y Cursos
                            </a>
                        </div>
                        <div className='enlace'>
                            <a href='#proyectos' className='a-navbar'>
                                Proyectos
                            </a>
                        </div>
                        <div className='enlace'>
                            <a href='#contact' className='a-navbar'>
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar;