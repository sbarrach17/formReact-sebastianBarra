import React, { useState } from 'react'


const Formulario = ({updateMensaje}) => {
const [name,setName] = useState("")
const [correo,setCorreo] = useState("")
const [contraseña,setContraseña] = useState("")
const [confirmacion,setConfirmacion] = useState("")


const enviarRegistro = (e) => {
    e.preventDefault();

    
    if (!name) {
    updateMensaje("¡ El nombre es requerido !");
    return
    }
    if (!correo) {
        updateMensaje("¡ El correo es requerido !");
        return
        }
        if (!contraseña) {
        updateMensaje("¡ Contraseña requerida !");
            return
            }
            if (!confirmacion) {
            updateMensaje("¡ Confirmacion contraseña requerida !");
                return
                }
                if (contraseña !== confirmacion) {
                    updateMensaje("¡ La contraseña y confirmacion deben coincidir !");
                        return
                        }
                        
                alert("¡Registro Existoso!")


    setName("");
    setCorreo("");
    setContraseña("");
    setConfirmacion("");



    updateMensaje("")
}

return (
        
            <form onSubmit={(e)=>enviarRegistro(e)} >
        <input type="text"  placeholder="Ingrese Nombre"   onChange={(e)=> setName (e.target.value) } value={name}/>
        <input type="email"  placeholder="Tucorreo@ejemplo.com"   onChange={(e)=> setCorreo (e.target.value) } value={correo}/>
        <input type="password"  placeholder="Contraseña"   onChange={(e)=> setContraseña(e.target.value) } value={contraseña}/>
        <input type="password"  placeholder="Confirme contraseña"   onChange={(e)=> setConfirmacion (e.target.value) } value={confirmacion}/>
        <div className='btn'>
        <button>Registrarse</button>
        </div>
        
        
        </form>

        

)
}

export default Formulario