import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";

const ItemDetail = (producto)=>{

    let [listaCarrito,setListaCarrito]= useState([]);
    let [mostrarBotonFinalizar,setMostrarBotonFinalizar]=useState(true)
    
    const onAdd = (contador)=>{
        console.log(contador)
        let productoNuevo={"cantidad":contador,"producto":(producto.producto)}
        setListaCarrito([...listaCarrito, productoNuevo])
        setMostrarBotonFinalizar(false)
    }
    
    useEffect(()=>{
        localStorage.setItem("Carrito",JSON.stringify(listaCarrito))
    },[listaCarrito])

    const id = producto.producto.id
    return(
        <div className="mt-5 d-flex align-items-center flex-column text-center">
            {(id===undefined)?(<h2>Cargando...</h2>):(
            <div>
                <h2 className="w-100 ">Detalle del Producto</h2>
                    <div className="card w-100 shadow ">
                        <div>
                            <h4 className="text-center card-title fs-1 mt-5">{producto.producto.marca}</h4>
                            <h5 className="text-center card-title fs-2">{producto.producto.tipo}</h5>
                            <div className="d-flex itemDetalle">
                                <img src={producto.producto.img} className="card-img-top w-50 p-4 h-100" alt="..."/>
                                <p className="w-100 fs-2 p-5">{producto.producto.descripcion}</p>
                            </div>
                            <h3 className="text-center text-primary card-text fs-1 mt-2">{producto.producto.precio}</h3>
                            {(mostrarBotonFinalizar===true)?<ItemCount stock={producto.producto.stock} inicial={0} onAdd={onAdd}/>:<NavLink to="../carrito"><button className="btn btn-success p-3 justify-content-center">Finalizar Compra</button></NavLink>}
                        </div>
                    </div>
            </div>)}
        </div>
    )
}
export default ItemDetail;