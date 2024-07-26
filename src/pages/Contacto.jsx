import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../css/contact.css';

const Contacto = () => {
    return (
        <>
        <NavBar />
            <form className="form-contact" action="/index.html" method="post" enctype="multipart/form-data">
                <h1 id="contact" className="title-contact">Contacto</h1>
                <div className="div-contact">
                    <div>
                        <label className="label-contact">Email:</label>
                    </div>
                    <div>
                        <p className='p-contact'>tmaisterra75@gmail.com</p>
                    </div>
                    <div>
                        <label className='label-contact'>Linkedln:</label>
                    </div>
                    <div>
                        <p className='p-contact'>www.linkedin.com/in/mariateresamaisterra</p>
                    </div>
                    <div>
                        <label className='label-contact'>GitHub:</label>
                    </div>
                    <div>
                        <p className='p-contact'>https://github.com/mtmaisterra</p>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    )
}
export default Contacto;
