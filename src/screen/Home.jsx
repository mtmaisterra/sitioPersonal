import React from 'react';
import NavBar from '../components/NavBar';
import Sobre from '../components/sobre';
import Footer from '../components/Footer';

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