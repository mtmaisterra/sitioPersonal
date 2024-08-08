import '../css/proyectos.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ejemplos = [
  {
    id: 1,
    description: 'Proyecto desarrollado para la 1ra simulación de NoCountry',
    program: 'Visual Studio Code',
    title: 'Kazu Moda',
    image: '/KazuModa.jpg',
    thecnology: 'React Next, HTML, CSS, JavaScript',
    url: 'Por problemas no se puede ver el repositorio'
  },

  {
    id: 2,
    description: 'Proyecto desarrollado en curso de Codo a codo',
    program: 'Visual Studio Code',
    title: 'Proyecto SoClean',
    image: '/SoClean.jpg',
    thecnology: 'HTML, CSS',
    url: 'https://github.com/mtmaisterra/proyectoSoClean'
  },

  {
    id: 3,
    description: 'Proyecto desarrollada para la 3ra simulacion de NoCountry',
    program: 'Visual Studio Code',
    title: 'Colaborart',
    image: '/colaborart.jpg',
    thecnology: 'React vite, HTML, CSS, JavaScript',
    url: 'https://github.com/mtmaisterra/calculadora'
  },

  {
    id: 4,
    description: 'Proyecto desarrollado para la 2da simulación de NoCountry',
    program: 'Visual Studio Code',
    title: 'FishSeason',
    image: '/FishSeason.jpg',
    thecnology: 'React vite, HTML, CSS, JavaScript',
    url: 'https://github.com/xiriuxb/NoCountry_s15-08-n-node-react'
  }]

const ejemplos2 = [
  {
    id: 5,
    description: 'Proyecto realizado para la biblioteca virtual gratuita "El Chacho"',
    program: 'Visual Studio Code',
    title: 'Biblioteca "El Chacho"',
    image: '/Biblioteca.jpg',
    thecnology: 'React vite, HTML, CSS, Javascript',
    url: 'https://github.com/mtmaisterra/BibliotecaReact'
  },

  {
    id: 6,
    description: 'Proyecto personal como portafolio de desarrollo y proyectos web',
    program: 'Visual Studio Code',
    title: 'Sitio Web Personal',
    image: '/SitioPersonal.jpeg',
    thecnology: 'React Vite, HTML, CSS, Javascript',
    url: 'https://github.com/mtmaisterra/sitioPersonal'
  },

  {
    id: 7,
    description: 'Proyecto personal como docente de escuela secundaria técnica',
    program: 'Visual Studio Code',
    title: 'Página web personal',
    image: '/Docente.jpg',
    thecnology: 'HTML, CSS',
    url: 'https://github.com/mtmaisterra/SitioWebDocente'
  },

  {
    id: 8,
    description: 'Proyecto desarrollado para ver el clima de una localidad o país',
    program: 'Visual Studio Code',
    title: 'Clima',
    image: '/Clima.jpeg',
    thecnology: 'React vite, HTML, CSS, Javascript',
    url: 'https://github.com/mtmaisterra/clima'
  },
]


const Proyectos = () => {
  return (
    <>
      <NavBar />
      <h1 className='titleGral-proyect'>Proyectos</h1>
      <div className='proyect'>
        <div className="div-proyect">
          {ejemplos.map((ejemplos, id) => (
            <div className="card-proyect"
              key={ejemplos.id}>
              <div className="date-proyect">
                <img className='img-proyect' src={ejemplos.image} />
                <h2 className="title-proyect">
                  {ejemplos.title}
                </h2>
                <h3 className="description-proyect">
                  {ejemplos.description}
                </h3>
                <h3 className="program-proyect">
                  {ejemplos.program}
                </h3>
                <h3 className="thecnology-proyect">
                  {ejemplos.thecnology}
                </h3>
                <a href={ejemplos.url} className="url-proyect" target="_blank">
                  <button className='button-proyect'>Repositorio</button>
                </a>
              </div>
            </div>
          ))};
        </div>
        <div className="div-proyect">
          {ejemplos2.map((ejemplo, id) => (
            <div className="card-proyect"
              key={ejemplo.id}>
              <div className="date-proyect">
                <img className='img-proyect' src={ejemplo.image} />
                <h2 className="title-proyect">
                  {ejemplo.title}
                </h2>
                <h3 className="description-proyect">
                  {ejemplo.description}
                </h3>
                <h3 className="thecnology-proyect">
                  {ejemplo.thecnology}
                </h3>
                <h3 className="program-proyect">
                  {ejemplo.program}
                </h3>
                <h3 className="thecnology-proyect">
                  {ejemplos.thecnology}
                </h3>
                <a href={ejemplo.url} className="url-proyect" target="_blank">
                  <button className='button-proyect'>Repositorio</button>
                </a>
              </div>
            </div>
          ))};
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Proyectos;
