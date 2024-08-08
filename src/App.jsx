import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacto from './pages/Contacto';
import Estudios from './pages/estudios';
import Home from './pages/home';
import Proyectos from './pages/proyectos';
import './css/app.css';
import Intro from './pages/Intro';


function App() {
    return (
        <div>
            <Routes>
                <Route path='/proyectos' element={<Proyectos />} />
                <Route path='/estudios' element={<Estudios />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/' element={<Intro />} />
            </Routes>
        </div>
    )
}
export default App;
