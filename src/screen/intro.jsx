import React from 'react';
import '../css/intro.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';

function Intro() {
    return (
        <>
            <div className='intro'>
                <div className='section'>
                    <div className='div-intro'>
                        <h1 className='title-intro'>
                            Bienvenidos a mi sitio
                        </h1>
                    </div>
                    <div className='presentacion-intro'>
                        <div className='img-intro'>
                            <img src='/Imagen-2.jpeg' className='img-intro-presentacion' />
                        </div>
                    </div>
                </div>
                <Router>
                    <div className='div-button'>
                        <button className='button-intro' >
                            <Link to='/home'>
                                Ingresar
                            </Link>
                        </button>
                    </div>
                    <Route path='/home' component={Home} />
                </Router>
            </div>
        </>
    )
}
export default Intro;