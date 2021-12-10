import React from "react";
import ItemCount from "./ItemCount";

const onAdd = ()=>{
    console.log("Agregado a Carrito")
}

const Item=({producto})=>{
    return (
        <div className="card" >
            <img src={producto.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4 className="text-center card-title">{producto.marca}</h4>
                <h5 className="text-center card-title">{producto.tipo}</h5>
                <h3 className="text-center text-primary card-text">{producto.precio}</h3>
                <ItemCount stock={producto.stock} inicial={0} onAdd={onAdd}  />
            </div>
        </div>
    )
}
export default Item;