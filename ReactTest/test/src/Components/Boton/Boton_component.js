import React from 'react'
import './Boton_styles.css';

const Boton_component = (prop) => {
  return (
    <button className='baseline'>
        {prop.title}
    </button>
  )
}

export default Boton_component
