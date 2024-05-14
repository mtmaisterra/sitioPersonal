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
                        <div>
                            <a href='./sobre.jsx' className='enlace'>
                                Sobre mi
                            </a>
                        </div>
                        <div>
                            <a href='./estudios.jsx' className='enlace'>
                                Estudios
                            </a>
                        </div>
                        <div>
                            <a href='./proyects.jsx' className='enlace'>
                                Proyectos
                            </a>
                        </div>
                        <div>
                            <a href='./contact.jsx' className='enlace'>
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