import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productosDetallados from "../productos.json"

const ItemDetailContainer = ()=>{

    const[producto,setproducto]=useState([{}]);
    const {id}=useParams();
    useEffect(
        ()=>{let promesa=()=>{ 
            return new Promise((res,rej)=>{
                setTimeout(()=>{
                    res(productosDetallados)
                },2000);
            })
        }
        promesa().then(()=>{
            setproducto(productosDetallados.filter(producto=>producto.id===id.toString()))
        })},[id])
    return(
        <>
        <ItemDetail producto={producto[0]}/>
        </>
    )
}
export default ItemDetailContainer;