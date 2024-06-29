import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Estudios from './pages/estudios';
import Home from './pages/home';
import Proyectos from './pages/proyectos';
import './css/app.css';


function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/proyectos' element={<Proyectos />} />
                    <Route path='/estudios' element={<Estudios />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
export default App;
