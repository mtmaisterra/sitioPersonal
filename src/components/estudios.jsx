import React from 'react';
import '../css/estudios.css';

const cursosEducation = [
  {
    id: 1,
    image: './CertificadoTerciario.jpg',
    name: 'Profesora en Técnicas Informáticas Aplicadas a Computación',
    description: 'Instituto Superior del Profesorado "Dr Joaquin Victor Gonzalez" Ciudad Autonoma de Buenos Aires, diciembre 2002',
  },
  {
    id: 2,
    image: './CertificadoContenidosDigitales.jpg',
    name: 'Creación de contenidos digitales interactivos',
    description: 'Nuestra Escuela, La Rioja, julio 2019',
  },
  {
    id: 3,
    image: './CertificadoInnovacionTecnologica.jpg',
    name: 'Introducción a la innovación tecnológica',
    description: 'Plataforma de Aprendizaje Virtual, julio 2022',
  },
  {
    id: 4,
    image: './CertificadoProyectosTecnologicos.jpg',
    name: 'Taller de Proyectos Tecnológicos',
    description: 'Plataforma de Aprendizaje Virtual, julio 2022',
  }
];

const cursosProgramacion = [
  {
    id: 1,
    image: './CertificadoSpring.jpg',
    name: 'Spring y Proyecto Integrador 2',
    description: 'Egg, marzo 2024',
  },
  {
    id: 2,
    image: './CertificadoDesarrolloWeb.jpg',
    name: 'Programación Web desde cero',
    description: 'Egg, diciembre 2023',
  },
  {
    id: 3,
    image: './CertificadoDesarrolloWebFlex.jpg',
    name: 'Desarrollo Web Flex',
    description: 'CoderHouse, junio 2023',
  },
  {
    id: 4,
    image: './CertificadoFullStack.jpg',
    name: 'Programación Full Stack',
    description: 'Egg, octubre 2023',
  }
];

const Estudios = () => {  
  return (
    <>
      <h1 className='titleGral'>ESTUDIOS</h1>
      <div className="docente">
        <div className='div-title'>
          <h2 className="title">Docente</h2>
        </div>
        <div className="cursos">
          {cursosEducation.map((cursos, id) => (
            <div className="card" key={cursos.id}>
              <div className="card-img">
                <img className="img" src={cursos.image} />
              </div>
              <div className='card-date'>
                <h2 className="name"> {cursos.name} </h2>
                <h3 className="description">{cursos.description}</h3>
              </div>
              <div className='card-button'>
                <button className='button'>Leer más...</button>
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
          {cursosProgramacion.map((cursos, id) => (
            <div className="card" key={cursos.id}>
              <div className="card-img">
                <img className="img" src={cursos.image} />
              </div>
              <div className="card-date">
                <h2 className="name"> {cursos.name} </h2>
                <h3 className="description">{cursos.description}</h3>
              </div>
              <div className='card-button'>
                <button className='button'>Leer más...</button>
              </div>
            </div>
          ))};
        </div>
      </div>
    </>
  )
}
export default Estudios;

