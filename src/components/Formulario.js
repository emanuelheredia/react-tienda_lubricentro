import React from "react";
import { useState } from "react";

const Formulario=({terminarCompra})=>{
        const [infoComprador,setInfoComprador]=useState(
        {
            nombre:"",
            apellido:"",
            telefono:"",
            mail:""
        }
        )
        const [verificarEmail,setVerificarEmail]=useState({
            mailVerificacion:"",
        })
        const[mensajeErrorMail,setMensajeErrorMail]=useState(false)
    const handleInputChange=(e)=>{
            setInfoComprador({
                ...infoComprador,
                [e.target.name]: e.target.value
            })
        }
    const handleInputChangeVerificar=(e)=>{
        setVerificarEmail({
            ...verificarEmail,
            mailVerificacion: e.target.value
        })
    }
        const finalizarCompra=(e)=>{
            e.preventDefault()
            if(infoComprador.mail===verificarEmail.mailVerificacion){
                terminarCompra(infoComprador)
            }else{
                setMensajeErrorMail(true)
            }
        }

    return(
            <form className="d-flex flex-column align-items-center ">
                <label>
                    <h1>Ingrese sus datos para finalizar la compra</h1>
                </label>
                <input onChange={handleInputChange} placeholder="Apellido" type="string" name="apellido" className="m-3" ></input>
                <input onChange={handleInputChange} placeholder="Nombre" type="string" name="nombre"className="m-3"></input>
                <input onChange={handleInputChange} placeholder="Teléfono" type="number" name="telefono"className="m-3"></input>
                <input onChange={handleInputChange} placeholder="E-mail" type="mail" name="mail"className="m-3"></input>
                <input onChange={handleInputChangeVerificar} placeholder="Repita el E-mail" type="mail" name="mailVerificacion"className="m-3"></input>
                {(mensajeErrorMail)?<h4 className="text-danger fs-5">Las direcciones de Email no coinciden</h4>:null}
                <button onClick={finalizarCompra} className="btn btn-success p-3 justify-content-center w-30 m-2" type="submit">Finalizar Compra</button>
            </form>
    )
}
export default Formulario;