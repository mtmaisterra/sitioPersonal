import React from 'react';
import '../css/home.css';
import About from './About';


const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='img'>
                    <img src='./Imagen-2.jpeg' className='img-propia' />
                </div>
                <div className='about'>
                    <About />
                </div>
            </div>
        </>
    )
};
export default Home;
