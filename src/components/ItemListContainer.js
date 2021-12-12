import React ,{useState} from "react";
import ItemList from "./ItemList";

const producto=[{id:"1",marca:"Elaion",tipo:"Sintético",envase:"4L",precio:"$6000",img:"https://http2.mlstatic.com/D_883278-MLA25675509149_062017-O.jpg",stock:15},
                {id:"2",marca:"Castrol",tipo:"Sintético",envase:"4L",precio:"$6500",img:"https://m.media-amazon.com/images/I/71QsLhuxcGL._AC_SL1500_.jpg",stock:5},
                {id:"3",marca:"Total",tipo:"Sintético",envase:"4L",precio:"$6800",img:"https://totalenergies.co/system/files/styles/large/private/atoms/image/envase.png?itok=bYC5oRMt",stock:7},
                {id:"4",marca:"Elf",tipo:"Sintético",envase:"4L",precio:"$7200",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4344TYhQcYMC0kgEIzpA4c1FWtt-RYNo0Q&usqp=CAU",stock:0}
];


const ItemListContainer=()=>{

    let [listaProductos,setlistaProductos]=useState([]);
    let delay=()=> { 
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(producto)
        },2000);
    });
    }
    delay().then((listaProductos)=>{setlistaProductos(producto)})

    return (
            <>
            <h1 className="text-center">Tienda</h1>
            <ItemList productos={listaProductos} />
            </>
            )
}
export default ItemListContainer;