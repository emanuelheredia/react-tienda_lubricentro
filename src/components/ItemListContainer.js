import React ,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import productosJson from "../productos.json"

const productos=productosJson;

const ItemListContainer=()=>{

    let [listaProductos,setlistaProductos]=useState([]);
    // let [categoria, setCategoria]=useState()
    
    const {categoria}=useParams()
    useEffect(()=>{
        let delay=()=> { 
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(productos)
                },2000);
            });
        }
    delay().then(()=>{
        (categoria)?setlistaProductos(productos.filter(producto=>producto.categoria===categoria.toString()))
        :setlistaProductos(productos)
    })
    },[categoria])

    return (
            <>
            <h1 className="text-center text-uppercase "> Catálogo  {categoria}</h1>
            <ItemList productos={listaProductos} />
            </>
            )
}
export default ItemListContainer;