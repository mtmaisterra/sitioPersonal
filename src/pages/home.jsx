import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import About from '../components/About';
import '../css/home.css';


const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <NavBar />
                </div>
                <div className='home'>
                    <div className='img'>
                        <img src='./Imagen-2.jpeg' className='img-propia' />
                    </div>
                    <div className='about'>
                        <About />
                    </div>
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </>
    )
};
export default Home;
