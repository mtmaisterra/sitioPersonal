import React from 'react';
import '../css/footer.css';

export default function Footer  ()  {
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
};
