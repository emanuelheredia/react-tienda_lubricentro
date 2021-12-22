import React, { useEffect } from "react";
import Item from "./Item";

const ItemList =(props)=>{
    let producto=props.productos
    useEffect(()=>{
        return(
        <div className="contenedor-productos d-flex justify-content-center">
        {producto.map((e)=> <Item productos={e} key={e.id} />)}
        </div>
        )
    }
    ,[producto]);
    return(
        <div className="contenedor-productos d-flex justify-content-center flex-wrap">
        {producto.map((e)=> <Item producto={e} key={e.id} />)}
        </div>
        )
    }
export default ItemList;