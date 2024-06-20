import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import '../css/navbar.css';
import Estudios from '../pages/estudios';
import Proyectos from '../pages/proyectos';
import Contacto from '../components/Contacto';
import Home from '../pages/home';

const NavBar = () => {
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
                <BrowserRouter>
                    <div className='enlaces'>
                        <Link to="/proyectos" className='enlace'>
                            Proyectos
                        </Link>
                        <Link to="/estudios" className='enlace'>
                            Estudios
                        </Link>
                        <Link to="/contacto" className='enlace'>
                            Contacto
                        </Link>
                    </div>
                    <Routes>
                        <Route path='/proyectos' element={<Proyectos />}>
                        </Route>
                        <Route path='/estudios' element={<Estudios />}>
                        </Route>
                        <Route path='/contacto' element={<Contacto />}>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </nav>
        </>
    )
};
export default NavBar;