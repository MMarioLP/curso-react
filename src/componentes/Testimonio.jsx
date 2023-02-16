import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

 function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
      src={require('../imagenes/testimonio-emma.png')}
      alt='Foto de emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} en {props.pais }</p>
        <p className='cargo-testimonio'>Ineniera de Software en spotify</p>
        <p className='texto-testimonio'>"Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify".</p>
      </div>
    </div>
  );
}  
export default Testimonio;