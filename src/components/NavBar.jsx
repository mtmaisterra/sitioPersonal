import React from 'react';
import '../css/navbar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function NavBar() {
    return (
        <>
            <Router>
                <nav className='navBar'>
                    <div className='div-navbar'>
                        <div className='div-logo'>
                            <img src='/MaisterraLogo.jpeg' className='img-logo' />
                        </div>
                        <ul className='enlaces-navbar'>
                            <li className='enlace'>
                                <Link to='./components/sobre.jsx'>
                                    Sobre mi
                                </Link>
                            </li>
                            <li className='enlace'>
                                <Link to='./screen/estudios.jsx'>
                                    Estudios
                                </Link>
                            </li>
                            <li className='enlace'>
                                <Link to='./screen/proyects.jsx'>
                                    Proyectos
                                </Link>
                            </li>
                            <li className='enlace'>
                                <Link to='./screen/contact.jsx'>
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route path='/sobre' Component={Sobre} />
                <Route path='/estudios' Component={Estudios} />
                <Route path='/proyects' Component={Proyects} />
                <Route path='/contact' Component={Contact} />
            </Router>
        </>
    )
}
export default NavBar;