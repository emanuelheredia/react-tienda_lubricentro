import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";

    const productoDetalle={id:"1",marca:"Elaion",tipo:"Sintético",envase:"4L",precio:"$6000",img:"https://http2.mlstatic.com/D_883278-MLA25675509149_062017-O.jpg",stock:15,descripcion:"La línea de lubricantes ELAION está diseñada por YPF para cada tipo de motorización bajo los más altos estándares de calidad a nivel mundial. Luego de un exhaustivo proceso de investigación y desarrollo, estos productos son testeados, aprobados y posteriormente recomendados por los principales fabricantes de vehículos."}

const ItemDetailContainer = ()=>{

    const[producto,setproducto]=useState({});
    
    useEffect(
        ()=>{ 
            let getItem=()=>{ 
                return new Promise((res,rej)=>{
                    setTimeout(()=>{
                    res(productoDetalle)
                },2000);
        })
    }
    getItem().then(()=>{setproducto(productoDetalle)})},[])

    return(
        <>
        <ItemDetail producto={producto}/>
        </>
    )
}

export default ItemDetailContainer;