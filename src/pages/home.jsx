import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Sobre from '../components/Sobre';
import Intro from '../pages/intro';
import '../css/home.css';

export default function Home() {
    return (
        <>
            <div className='container'>
                <div className='navbar'>
                    <NavBar />
                </div>
                <div className='home'>
                    <div className='intro'>
                        <Intro />
                    </div>
                    <div className='sobre'>
                         <Sobre />
                    </div>
                </div>
                <div className='footer'>
                  <Footer />
                </div>
            </div>
        </>
    )
};

