import React ,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import {db} from "./firebase"

const ItemListContainer=()=>{
    let [listaProductos,setlistaProductos]=useState([]);
    const {categoria}=useParams()
    
    useEffect(()=>{
        const productosCollection=collection(db,"productos")
        if (categoria){
            const consultaCategoria=query(productosCollection,where("categoria","==",categoria))
            getDocs(consultaCategoria)
                    .then(({docs})=>{
                        setlistaProductos(docs.map(doc=> {return {"id":doc.id,...doc.data()}}))
                    })
                    .catch(err=>{console.log(err)})
        }else{
            getDocs(productosCollection)
                    .then(({docs})=>{
                        setlistaProductos(docs.map(doc=>{return {"id":doc.id,...doc.data()}
                    }))
                })
                    .catch(err=>{console.log(err)})
            }
    },[categoria])

    return (
            <>
                <h1 className="text-center text-uppercase "> Catálogo  {categoria}</h1>
                <ItemList productos={listaProductos} />
            </>
            )
}
export default ItemListContainer;