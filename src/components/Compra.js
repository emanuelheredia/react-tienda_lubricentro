import React, {  useState } from "react";
import {db} from "./firebase"
import {addDoc,collection, serverTimestamp,query,where,getDocs,} from "firebase/firestore"
import { useContexto } from "./CartContext";

const Compra=()=>{
    const {vaciarCarrito,carrito,precioTotal}=useContexto()
    const [mostrarFormulario,setMostrarFormulario]=useState(true)
    const [datosCompra,setDatosCompra]=useState()
    const [datosComprador,setDatosComprador]=useState(
        {
            nombre:"",
            apellido:"",
            mail:""
        }
    )
    const handleInputChange=(e)=>{
        setDatosComprador({
            ...datosComprador,
            [e.target.name]: e.target.value
        })
    }
    const terminarCompra=(e)=>{
        e.preventDefault()
        const ventaColeccion=collection(db,"ventas")
        addDoc(ventaColeccion,{
            buyer:datosComprador,
            items:carrito,
            date:serverTimestamp(),
            total:precioTotal
        })
        const consultaCompra=query(ventaColeccion,where("buyer","==",datosComprador))
        getDocs(consultaCompra).then(({docs})=>{
            setDatosCompra(docs.map(doc=> {return {"id":doc.id,...doc.data()}}))
            setMostrarFormulario(false)
            vaciarCarrito();
        }).catch(err=>{console.log(err)})
}

    return (
        <>  
            {(mostrarFormulario)?<form className="d-flex flex-column align-items-center ">
                <label><h1>Ingrese sus datos para finalizar la compra</h1></label>
                <input onChange={handleInputChange} placeholder="Apellido" type="string" name="apellido" className="m-3"></input>
                <input onChange={handleInputChange} placeholder="Nombre" type="string" name="nombre"className="m-3"></input>
                <input onChange={handleInputChange} placeholder="Mail" type="mail" name="mail"className="m-3"></input>
                <button onClick={terminarCompra} className="btn btn-success p-3 justify-content-center w-30 m-5">Finalizar Compra</button>
            </form>:(<div className="d-flex flex-column align-items-center m-5 border border-primary bg-primary"><h1 className="text-white">FELICITACIONES! COMPRA EXITOSA</h1>
            <h2 className="mt-5 text-center text-warning">ID DE COMPRA: {datosCompra[0].id} </h2>
            <h1 className=" mb-5  text-center text-white">Total a pagar: $ {datosCompra[0].total}
            </h1>
            </div>)
            }
        </>
    )
}
export default Compra; 