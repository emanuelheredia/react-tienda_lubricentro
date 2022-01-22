import React, { useState } from "react";
import {db} from "./firebase";
import { getDoc,collection,doc  } from "firebase/firestore";

const MisOrdenes=()=>{
    const[idCompra,setIdCompra]=useState([]);
    const[mostrarConsulta,setMostrarConsulta]=useState(false)
    const [consulta,setConsulta]=useState([])
    
    const handleInputChange=(e)=>{
        setIdCompra(e.target.value,...idCompra)
    }
    const consultarCompra=()=>{
        const coleccionVentas=collection(db,"ventas");
        let idCompraFiltrado=idCompra.split("").filter(e=> e!==" ").join("")
        const refDoc=doc(coleccionVentas,idCompraFiltrado);
        getDoc(refDoc).then(res=>{
            setConsulta(res.data())
            setMostrarConsulta(true)
        })
    }
    return(
        (mostrarConsulta)?<div className="d-flex flex-column align-items-center m-5 shadow p-3 mb-5 bg-body rounded"><h2 className="text-center">ID : {idCompra} </h2> <div className="d-flex flex-column align-items-center m-3">{consulta.items.map(
            (e,index)=>{ return (
                <h3 key={index} className="fs-4">Item {index+1} : {(e.categoria.toUpperCase())} {e.marca} {e.tipo} - Precio unitario: ${e.precio} - Cantidad: {e.cantidad} </h3>
                )}
        )}<h2 className="m-4 text-center">Total : ${consulta.total} </h2></div></div>:
        (<div className="d-flex flex-column align-items-center">
        <h1 className="text-center m-3">Tus Órdenes</h1>
        <input onChange={handleInputChange} placeholder="Ingrese Código Compra" className="m-4 w-50 text-center"/>
        <button onClick={consultarCompra} className="w-10 btn btn-success m-3">Consultar</button>
        </div>)
    )
}
export default MisOrdenes;