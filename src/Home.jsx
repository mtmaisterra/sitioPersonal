'use client';
import React from 'react';
import NavBar from './components/NavBar.jsx';
import Sobre from './components/sobre.jsx';
import Footer from './components/Footer.jsx';

function Home() {
    return (
        <>
            <NavBar />
            <div>
                <Sobre />
            </div>
            <Footer />
        </>
    )
}
export default Home;