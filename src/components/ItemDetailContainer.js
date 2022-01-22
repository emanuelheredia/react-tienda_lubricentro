import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {db} from "./firebase"
import { collection ,getDoc,doc } from "firebase/firestore";

const ItemDetailContainer = ()=>{

    const[producto,setproducto]=useState([{}]);
    const {id}=useParams();
    useEffect(()=>{
            const productosCollection=collection(db,"productos")
            const refDoc=doc(productosCollection,id)
            getDoc(refDoc).then(resultado=>{
            setproducto({"id":id,...resultado.data()})
            }).catch(err=>console.log(err))
        },[id])
    return(
            <ItemDetail producto={producto}/>
          )
}
export default ItemDetailContainer;