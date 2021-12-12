import React from "react";
import {useState}from "react";
import "../styles.css";

const ItemCount=({stock,inicial,onAdd})=>{
    let [contador,setContador]=useState(inicial);
    
    const sumar=()=>{
        (contador<stock)?setContador(contador+1):console.log("Sin Stock")
        }
    const restar=()=>{
        (contador>0)?setContador(contador-1):console.log("Sin productos para restar")
        }
    
    if (stock===0 || contador===0){
    return(
        <>
        <div className="d-flex mb-3 justify-content-center">
        <button className="p-3 btn btn-primary m-4" onClick={sumar}>+</button>
        <h3 className="p-3 border border-primary m-4">{contador}</h3>
        <button className="p-3 btn btn-primary m-4" onClick={restar}>-</button>
        </div>
        <div className="d-flex mb-3 justify-content-center">
        </div>
        <p className="text-center">Stock Disponible: {stock}</p>
        </>
    )}else{
    return(
        <>
        <div className="d-flex mb-3 justify-content-center">
        <button className="btn btn-primary" onClick={sumar}>+</button>
        <h3 className="p-2 border border-primary m-2">{contador}</h3>
        <button className="btn btn-primary" onClick={restar}>-</button>
        </div>
        <div className="d-flex mb-3 justify-content-center">
        <button className="btn btn-success p-3 justify-content-center" onClick={onAdd}>Add to Cart</button>
        </div>
        <p className="text-center">Stock Disponible: {stock}</p>
        </>
    )}
}
export default ItemCount;