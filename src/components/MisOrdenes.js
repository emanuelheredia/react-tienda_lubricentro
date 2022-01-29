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
        getDoc(refDoc)
                .then(res=>{
            setConsulta(res.data())
            setMostrarConsulta(true)
        })
    }

    return(
            (mostrarConsulta)
                            ?<div className="d-flex flex-column align-items-center m-5 shadow p-3 mb-5 bg-body rounded">
                                <h2 className="text-center">ID : {idCompra} </h2>
                                <div className="d-flex flex-column align-items-center m-3">
                                    <table className="table table-success table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Item</th>
                                                <th scope="col">Tipo</th>
                                                <th scope="col">Precio Unitario</th>
                                                <th scope="col">Cantidad</th>
                                            </tr>                   
                                        </thead>
                                        <tbody>
                                            {consulta.items.map((e,index)=>{ 
                                                return (
                                                        <tr key={index}>
                                                            <th scope="row">{index+1}</th>
                                                            <td>{(e.categoria.toUpperCase())} {e.marca} {e.tipo}</td>
                                                            <td>$ {e.precio}</td>
                                                            <td>{e.cantidad}</td>
                                                        </tr>)})}
                                        </tbody>
                                    </table>
                                    <h2 className="m-4 text-center">Total : ${consulta.total} </h2>
                                </div>
                            </div>
                            :(<div className="d-flex flex-column align-items-center">
                                <h1 className="text-center m-3">Tus Órdenes</h1>
                                <input onChange={handleInputChange} placeholder="Ingrese Código Compra" className="m-4 w-50 text-center"/>
                                <button onClick={consultarCompra} className="w-10 btn btn-success m-3">Consultar</button>
                            </div>)
    )
}
export default MisOrdenes;