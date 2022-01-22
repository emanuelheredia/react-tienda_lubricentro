import React, {  useEffect, useState } from "react";
import {db} from "./firebase"
import {addDoc,collection, serverTimestamp,query,where,getDocs,updateDoc,doc,getDoc} from "firebase/firestore"
import { useContexto } from "./CartContext";
import Formulario from "./Formulario"

const Compra=()=>{
    const {vaciarCarrito,carrito,precioTotal}=useContexto()
    const [mostrarFormulario,setMostrarFormulario]=useState(true)
    const [datosCompra,setDatosCompra]=useState()
    const [datosComprador,setDatosComprador]=useState({});

    const recibirInfoComprador=(info)=>{
        setDatosComprador(info)
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
            const consultaCompra=query(ventaColeccion,where("items","==",carrito))
            getDocs(consultaCompra).then(({docs})=>{
                setDatosCompra(docs.map(doc=> {
                    return {"id":doc.id,...doc.data()}}))
                setMostrarFormulario(false)
                vaciarCarrito();
            }).catch(err=>{console.log(err)})
    }
    useEffect(()=>{
        if(datosCompra!==undefined){
            const coleccionProductos=collection(db,"productos")
            datosCompra[0].items.forEach(item => {
                const id=item.id
                const refDoc=doc(coleccionProductos,id)
                getDoc(refDoc).then(resultado=>{updateDoc(doc(coleccionProductos,id),{stock:((resultado.data().stock)-item.cantidad)})})
                });
        }},[datosCompra])

    return (
        <>  
            {(mostrarFormulario)?<div className="d-flex flex-column align-items-center"><Formulario recibirInfoComprador={recibirInfoComprador}/><button onClick={terminarCompra} className="btn btn-success p-3 justify-content-center w-30 m-2">Finalizar Compra</button></div>:(<div className="d-flex flex-column align-items-center m-5 border border-primary bg-primary"><h1 className="text-white">FELICITACIONES! COMPRA EXITOSA</h1>
            <h2 className="mt-5 text-center text-warning">ID DE COMPRA: {datosCompra[0].id} </h2>
            <h1 className=" mb-5  text-center text-white">Total a pagar: $ {datosCompra[0].total}
            </h1>
            </div>)
            }
        </>
    )
}
export default Compra; 