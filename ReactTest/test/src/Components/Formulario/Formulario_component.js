//Comando: rafce

import React from 'react'
//Importar todo lo necesario de React
import './Formulario_styles.css';
import Boton_component from '../Boton/Boton_component.js';
import Input_component from '../Input/Input_component.js';

//Componente de funcion
const Formulario_component = (prop) => {
  return (
    <div>
      <h1 className='Alineado'>Login</h1>
      <div>
        {Array(parseInt(prop.amount)).fill(<Input_component />)}
      </div>
      <div className='Alineado'>
        <Boton_component title="LOGIN"/>
      </div>
    </div>
  )
}

export default Formulario_component