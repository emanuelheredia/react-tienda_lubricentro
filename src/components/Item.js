import React from "react";
import { NavLink } from "react-router-dom";


const Item=({producto})=>{
    const id = producto.id
    const detalle=()=>{
        return "/producto/"+id
    }
    return (
        <div className="card" >
            <img src={producto.img} alt="..."/>
            <div className="card-body">
                <h4 className="text-center card-title">{producto.marca}</h4>
                <h5 className="text-center card-title">{producto.tipo}</h5>
                <h3 className="text-center text-primary card-text">{producto.precio}</h3>
                <NavLink to={detalle()}><button onClick={detalle} className="p-3 btn btn-primary m-4">Ver Detalle</button></NavLink>
            </div>
        </div>
    )
}
export default Item;