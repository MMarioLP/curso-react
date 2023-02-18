import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

 function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt='Foto de emma' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais }</p>
        <p className='cargo-testimonio'>{props.cargo} de Software en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}".</p>
      </div>
    </div>
  );
}  
export default Testimonio;

//lograr que eel etxto testimonio aparezca en negrita
// que el alt de la descripcion corresponda a la imagen dinamicamente de acuredo a la imagen
// guardar los valores de los props en un archivo por separado en un solo objeto de javascript  
