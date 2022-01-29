import React from "react";
import {useState}from "react";
import "../styles.css";
import { useContexto } from "./CartContext";

const ItemCount=({stock,inicial,onAddItem})=>{
    const {sumarCantidadTotal}=useContexto()
    let [contador,setContador]=useState(inicial);

    const onClickAdd=()=>{
        onAddItem(contador);
        setContador(0);
        sumarCantidadTotal(contador)
    }
    const sumar=()=>{
        if(contador<stock){
            setContador(contador+1)}
        }    
    const restar=()=>{
        if(contador>0){
            setContador(contador-1)}
        }
    
    return(
            <>
                <div className="d-flex justify-content-center">
                    <button className="p-3 btn btn-primary m-4" onClick={sumar}>+</button>
                    <h3 className="p-3 border border-primary m-4">{contador}</h3>
                    <button className="p-3 btn btn-primary m-4" onClick={restar}>-</button>
                </div>
                <div className="d-flex justify-content-center">
                    {(stock===0||contador===0)
                                                ?(<div></div>)
                                                :(<button className="btn btn-success p-3 justify-content-center" onClick={onClickAdd}>Add to Cart</button>)}
                </div>
                <p className="text-center">Stock Disponible: {stock}</p>
            </>
        )}
export default ItemCount;

