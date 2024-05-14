import React from 'react';
import NavBar from '../components/Footer';
import Sobre from '../components/Sobre';
import Footer from '../components/NavBar';

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