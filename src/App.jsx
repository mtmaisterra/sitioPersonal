import React from 'react';
import './css/app.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Sobre from './components/sobre';



const App = () => {
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
export default App;