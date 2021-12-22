import React ,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const producto=[{id:"1",categoria: "lubricantes", marca:"Elaion",tipo:"Sintético",envase:"4L",precio:"$6000",img:"https://http2.mlstatic.com/D_883278-MLA25675509149_062017-O.jpg",stock:15},
                {id:"2", categoria: "lubricantes", marca:"Castrol",tipo:"Sintético",envase:"4L",precio:"$6500",img:"https://m.media-amazon.com/images/I/71QsLhuxcGL._AC_SL1500_.jpg",stock:5},
                {id:"3",categoria: "lubricantes",marca:"Total",tipo:"Sintético",envase:"4L",precio:"$6800",img:"https://totalenergies.co/system/files/styles/large/private/atoms/image/envase.png?itok=bYC5oRMt",stock:7},
                {id:"4",categoria: "lubricantes",marca:"Elf",tipo:"Aceite",envase:"4L",precio:"$7200",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4344TYhQcYMC0kgEIzpA4c1FWtt-RYNo0Q&usqp=CAU",stock:0},
                {id:"5",categoria: "filtros",marca:"Fram",tipo:"Sintético",envase:"1U",precio:"$800",img:"https://http2.mlstatic.com/D_NQ_NP_685390-MLA31805641213_082019-O.webp",stock:20},{id:"6",categoria: "filtros",marca:"Fram",tipo:"Aire",envase:"1U",precio:"$850",img:"https://www.fram.com/media/1709/fram-air-extra-box_filter-1.png?anchor=center&mode=crop&quality=70&width=600&rnd=132606170410000000",stock:10},{id:"7",categoria: "filtros",marca:"Fram",tipo:"Combustible",envase:"1U",precio:"$650",img:"https://http2.mlstatic.com/D_NQ_NP_722408-MLA46831717404_072021-O.jpg",stock:6}
];

const ItemListContainer=()=>{

    let [listaProductos,setlistaProductos]=useState([]);
    // let [categoria, setCategoria]=useState()
    
    const {categoria}=useParams()
    useEffect(()=>{
        let delay=()=> { 
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(producto)
                },2000);
            });
        }
    delay().then(()=>{
        (categoria)?setlistaProductos(producto.filter(producto=>producto.categoria===categoria.toString()))
        :setlistaProductos(producto)
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