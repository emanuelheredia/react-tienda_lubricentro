import React from "react";
import { useState } from "react";

const Formulario=({recibirInfoComprador})=>{
        const [infoComprador,setInfoComprador]=useState(
        {
            nombre:"",
            apellido:"",
            telefono:"",
            mail:""
        }
    )
const handleInputChange=(e)=>{
        setInfoComprador({
            ...infoComprador,
            [e.target.name]: e.target.value
        })
    }
recibirInfoComprador(infoComprador)
return(
        <form className="d-flex flex-column align-items-center ">
        <label><h1>Ingrese sus datos para finalizar la compra</h1></label>
        <input onChange={handleInputChange} placeholder="Apellido" type="string" name="apellido" className="m-3"></input>
        <input onChange={handleInputChange} placeholder="Nombre" type="string" name="nombre"className="m-3"></input>
        <input onChange={handleInputChange} placeholder="Teléfono" type="number" name="telefono"className="m-3"></input>
        <input onChange={handleInputChange} placeholder="Mail" type="mail" name="mail"className="m-3"></input>
        </form>
)
}
export default Formulario;