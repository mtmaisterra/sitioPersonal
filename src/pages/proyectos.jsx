import '../css/proyectos.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ejemplos = [
  {
    id: 1,
    description: 'Proyecto realizado sobre el servicio de salud Egg',
    program: 'Visual Studio Code y Netbeans 8.2',
    title: 'Spring Proyecto Integrador',
    thecnology: 'Spring, HTML, CSS, Javascript',
    url: 'https://github.com/Nildaluciamonteros/SERVICIOS-DE-SALUD-EGG'
  },

  {
    id: 2,
    description: 'Proyecto desarrollado en curso de Codo a codo',
    program: 'Visual Studio Code',
    title: 'Proyecto SoClean',
    thecnology: 'HTML, CSS',
    url: 'https://github.com/mtmaisterra/proyectoSoClean'
  },

  {
    id: 3,
    description: 'Proyecto Calculadora básica',
    program: 'Visual Studio Code',
    title: 'Calculadora',
    thecnology: 'React vite, HTML, CSS, JavaScript',
    url: 'https://github.com/mtmaisterra/calculadora'
  },

  {
    id: 4,
    description: 'Proyecto desarrollado para la simulación de NoCountry',
    program: 'Visual Studio Code',
    title: 'FishSeason',
    thecnology: 'React vite, HTML, CSS, Javascritp',
    url: 'https://github.com/xiriuxb/NoCountry_s15-08-n-node-react'
  }]

const ejemplos2 = [
  {
    id: 5,
    description: 'Proyecto realizado para la biblioteca virtual gratuita "El Chacho"',
    program: 'Visual Studio Code',
    title: 'Biblioteca "El Chacho"',
    thecnology: 'React vite, HTML, CSS, Javascript',
    url: 'https://github.com/mtmaisterra/BibliotecaReact'
  },

  {
    id: 6,
    description: 'Proyecto personal como portafolio de desarrollo y proyectos web',
    program: 'Visual Studio Code',
    title: 'Sitio Web Personal',
    thecnology: 'React Vite, HTML, CSS, Javascript',
    url: 'https://github.com/mtmaisterra/sitioPersonal'
  },

  {
    id: 7,
    description: 'Proyecto personal como docente de escuela secundaria técnica',
    program: 'Visual Studio Code',
    title: 'Página web personal',
    thecnology: 'HTML, CSS',
    url: 'https://github.com/mtmaisterra/SitioWebDocente'
  },

  {
    id: 8,
    description: 'Proyecto desarrollado para ver el clima de una localidad o país',
    program: 'Visual Studio Code',
    title: 'Clima',
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
