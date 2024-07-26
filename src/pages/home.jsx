import React from 'react';
import '../css/home.css';
import About from '../components/About';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
        <NavBar/>
            <div className='container'>
                <div className='img'>
                    <img src='./Imagen-2.jpeg' className='img-propia' />
                </div>
                <div className='about'>
                    <About />
                </div>
            </div>
            <Footer/>
        </>
    )
};
export default Home;
