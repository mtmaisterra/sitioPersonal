import React from 'react';
import '../css/footer.css';

function Footer  ()  {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='footer'>
                <div className='div-footer'>
                <p className='p-footer'>&copy; Derechos reservados - {year} - Maisterra Digital Designs</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;
