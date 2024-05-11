import React from 'react';
import '../css/navbar.css';

function NavBar () {
    return (
        <>
            <nav className='navBar'>
                <div className='div-navbar'>
                    <div className='div-logo'>
                        <img src='/MaisterraLogo.png' className='img-logo'></img>
                    </div>
                    <div className='enlaces-navbar'>
                        <div className='enlace'>
                            <a href='/sobre.jsx' className='a-navbar'>
                                Desarrollo Académico
                            </a>
                        </div>
                        <div className='enlace'>
                            <a href='desarrollo.jsx' className='a-navbar'>
                                Desarrollo Profesional
                            </a>
                        </div>
                        <div className='enlace'>
                            <a href='\contact.html' className='a-navbar'>
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