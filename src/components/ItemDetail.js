import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props)=>{
    let producto=props.producto
    const onAdd = (contador)=>{
        console.log(`Se agregaron ${contador} unidades del producto ${producto.marca}`)
    }
    return(
        <div className="mt-5 d-flex align-items-center flex-column text-center">
            {(producto.id===undefined)?(<h2>Cargando...</h2>):(
            <div>
                <h2 className="w-100 ">Detalle del Producto</h2>
                    <div className="card w-100 shadow ">
                        <div>
                            <h4 className="text-center card-title fs-1 mt-5">{producto.marca}</h4>
                            <h5 className="text-center card-title fs-2">{producto.tipo}</h5>
                            <div className="d-flex">
                                <img src={producto.img} className="card-img-top w-50 p-4" alt="..."/>
                                <p className="w-100 fs-2 p-5">{producto.descripcion}</p>
                            </div>
                            <h3 className="text-center text-primary card-text fs-1 mt-2">{producto.precio}</h3>
                            <ItemCount stock={producto.stock} inicial={0} onAdd={onAdd} />
                        </div>
                    </div>
            </div>)}
        </div>
    )
}
export default ItemDetail;