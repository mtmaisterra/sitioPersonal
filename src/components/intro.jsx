'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/intro.css';

function Intro() {
    return (
        <>
            <div className='intro'>
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
                <div className='div-button'>
                    <Link to='/Home.jsx'>
                        <button className='button-intro'>
                            Ingresar
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Intro;