import React, { useEffect } from "react";
import {createContext, useContext,useState } from "react";

const contexto = createContext();

const {Provider} = contexto;

export const useContexto=()=>{
    return useContext(contexto);
}

const CartContext=({children})=>{
    const [cantidadTotal,setCantidadTotal]=useState([]);
    const [carrito,setCarrito]=useState([]);
    const onAdd=(producto)=>{
        if(isInCarrito(producto.producto.id)){
            alert("El producto seleccionado ya se encuentra agregado al carrito")
        }else{
        setCarrito([...carrito,producto])
        }
    }
    const removeItem=(id)=>{
        let carritoFiltrado=carrito.filter(e=>(e.producto.id)!==id)
        setCarrito(carritoFiltrado)
    }
    const vaciarCarrito=()=>{
        setCarrito([])
    }
    const isInCarrito=(id)=>{
        let productoDuplicado=carrito.find(e=>(e.producto.id)===id)
        if(productoDuplicado===undefined){
            return false;
        }else{
            return true;
        }
    }
    const valorDelCarrito={
        cantidadTotal,
        carrito,
        onAdd,
        removeItem,
        vaciarCarrito,
        isInCarrito
    }
    useEffect(()=>{
        setCantidadTotal(carrito.length)
    },[carrito])
    console.log(cantidadTotal)
    return (
        <Provider value={valorDelCarrito}>
        {children}
        </Provider>
        )
}
export default CartContext;