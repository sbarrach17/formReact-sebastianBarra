import React, { useState } from 'react'
import SocialButtons from './SocialButtons'
import Formulario from './Formulario'
import Alert from './Alert'



const Registro = ({caracteristicas}) => {

  const [mensaje, setMensaje] = useState("")

  const updateMensaje = (message) => {
    setMensaje(message);
  };

  return (

    <section className='content'>   
      <h1>Crea tu cuenta</h1>
      <div className='mediaIcon'>
  <SocialButtons caracteristicas={caracteristicas[0]}></SocialButtons>
  <SocialButtons caracteristicas={caracteristicas[1]}></SocialButtons>
  <SocialButtons caracteristicas={caracteristicas[2]}></SocialButtons>
  </div>
    <h3>O inicia sesion con tus redes sociales</h3>
        <Formulario updateMensaje={updateMensaje}></Formulario>
        <Alert message={mensaje}  />
      </section>
      
  )
}

export default Registro