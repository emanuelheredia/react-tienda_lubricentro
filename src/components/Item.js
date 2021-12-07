import React from "react";

const Item=({producto})=>{
    return (
        <div className="card" key={producto.id} style={{width:"18rem"}}>
            <img src={producto.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4 className="card-title">{producto.marca}</h4>
                <h5 className="card-title">{producto.tipo}</h5>
                <p className="card-text">{producto.precio}</p>
                <a href="..." className="btn btn-primary">Comprar</a>
            </div>
        </div>
    )
}
export default Item;