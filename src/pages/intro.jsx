import React from 'react';
import '../css/intro.css';

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
                <div className='div-button'>
                    <div>
                        <button href='/home' className='button-intro'>
                            Ingresar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Intro;