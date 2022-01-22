import React, { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";
import { useContexto } from "./CartContext";

const ItemDetail = ({producto})=>{
    const {onAdd,sumarPrecioTotal}= useContexto();
    let [mostrarBotonFinalizar,setMostrarBotonFinalizar]=useState(true)
    let [contador,setContador]= useState()
        
    const onAddItem = (contador)=>{
        setContador(contador);
        setMostrarBotonFinalizar(false)
        let productoNuevo = {"cantidad":contador,...producto}
        onAdd(productoNuevo)
        sumarPrecioTotal({"precio":producto.precio,"cantidad":contador})
    }
    useEffect(()=>{
    },[contador])
    const id = producto.id
    return(
        <div className="mt-5 d-flex align-items-center flex-column text-center ">
            {(id===undefined)?(<h2>Cargando...</h2>):(
            <div className="d-flex align-items-center flex-column">
                <h2 className="w-100 ">Detalle del Producto</h2>
                <div className="card shadow w-50">
                    <div className="w-100">
                        <h4 className="text-center card-title fs-1 mt-5">{producto.marca}</h4>
                        <h5 className="text-center card-title fs-2">{producto.tipo}</h5>
                        <div className="d-flex itemDetalle">
                            <img src={producto.img} className="card-img-top w-50 p-4 h-100" alt="..."/>
                            <p className="descr-detail w-100 fs-4 p-5">{producto.descripcion}</p>
                        </div>
                        <h3 className="text-center text-primary card-text fs-1 mt-2">$ {producto.precio}</h3>
                        {(mostrarBotonFinalizar===true)?<ItemCount stock={producto.stock} inicial={0} onAddItem={onAddItem}/>:<NavLink to="../carrito"><button className="btn btn-success p-3 justify-content-center">Ir al Carrito</button></NavLink>}
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default ItemDetail;