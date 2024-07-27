import React from 'react';
import '../css/estudios.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const cursosEducation = [
  {
    id: 1,
    name: 'Profesora en Técnicas Informáticas Aplicadas a Computación',
    description: 'Instituto Superior del Profesorado "Dr Joaquin Victor Gonzalez" Ciudad Autonoma de Buenos Aires, diciembre 2002',
    image: '/CertificadoTerciario.jpg'
  },
  {
    id: 2,
    name: 'Creación de contenidos digitales interactivos',
    description: 'Nuestra Escuela, La Rioja, julio 2019',
    image: '/CertificadoContenidosDigitales.jpg'
  },
  {
    id: 3,
    name: 'Introducción a la innovación tecnológica',
    description: 'Plataforma de Aprendizaje Virtual, julio 2022',
    image: '/CertificadoInnovacionTecnologica.jpg'
  },
  {
    id: 4,
    name: 'Taller de Proyectos Tecnológicos',
    description: 'Plataforma de Aprendizaje Virtual, julio 2022',
    image: '/CertificadoProyectosTecnologicos.jpg'
  }
];

const cursosProgramacion = [
  {
    id: 1,
    name: 'Spring y Proyecto Integrador 2',
    description: 'Egg, marzo 2024',
    image:'/CertificadoSpring.jpg'
  },
  {
    id: 2,
    name: 'Programación Web desde cero',
    description: 'Egg, diciembre 2023',
    image:'/CertificadoDesarrolloWeb.jpg'
  },
  {
    id: 3,
    name: 'Desarrollo Web Flex',
    description: 'CoderHouse, junio 2023',
    image:'/CertificadoDesarrolloWebFlex.jpg'
  },
  {
    id: 4,
    name: 'Programación Full Stack',
    description: 'Egg, octubre 2023',
    image: '/CertificadoFullStack.jpg'
  }
];

const Estudios = () => {
  return (
    <>
    <NavBar />
      <h1 className='titleGral'>CAPACITACIÓN</h1>
      <div className="docente">
        <div className='div-title'>
          <h2 className="title">Docente</h2>
        </div>
        <div className="cursos">
          {cursosEducation.map((cursos, id) => (
            <div className="card" key={cursos.id}>
              <div className='card-date'>
                <h2 className="name"> {cursos.name} </h2>
                <h3 className="description">{cursos.description}</h3>
              </div>
              <div className='card-button'>
                <a href={cursos.image}>
                  <button className='button-estudios'>
                  Certificado
                  </button>
                </a>
              </div>
            </div>
          ))};
        </div>
      </div>
      <div className="desarrolladora">
        <div className='div-title'>
          <h2 className="title">Programación</h2>
        </div>
        <div className="cursos">
          {cursosProgramacion.map((cursosP, id) => (
            <div className="card" key={cursosP.id}>
              <div className="card-date">
                <h2 className="name"> {cursosP.name} </h2>
                <h3 className="description">{cursosP.description}</h3>
              </div>
              <div className='card-button'>
                <a href={cursosP.image}>
                  <button className='button-estudios'>
                    Certificado
                    </button>
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
export default Estudios;

