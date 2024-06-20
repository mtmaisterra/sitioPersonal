import { BrowserRouter, Link } from 'react-router-dom';
import '../css/intro.css';

const Intro = () => {
    return (
        <>
            <div className='Intro'>
                <div className='section'>
                    <div className='div-intro'>
                        <h1 className='title-intro'>
                            Bienvenidos a mi sitio
                        </h1>
                    </div>
                </div>
                <div className='presentacion-intro'>
                    <div className='img-intro'>
                        <img src='/Imagen-2.jpeg'
                            className='img-intro-presentacion' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Intro;