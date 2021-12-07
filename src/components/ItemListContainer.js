import React from "react";
import Item from "./Item";

const productos=[{id:"1",marca:"Elaion",tipo:"Sintético",envase:"4L",precio:"$6000",img:"https://http2.mlstatic.com/D_883278-MLA25675509149_062017-O.jpg"},
                {id:"2",marca:"Castrol",tipo:"Sintético",envase:"4L",precio:"$6500",img:"https://m.media-amazon.com/images/I/71QsLhuxcGL._AC_SL1500_.jpg"},
                {id:"3",marca:"Total",tipo:"Sintético",envase:"4L",precio:"$6800",img:"https://totalenergies.co/system/files/styles/large/private/atoms/image/envase.png?itok=bYC5oRMt"},
                {id:"4",marca:"Elf",tipo:"Sintético",envase:"4L",precio:"$7200",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4344TYhQcYMC0kgEIzpA4c1FWtt-RYNo0Q&usqp=CAU"}
];

const ItemListContainer=()=>{
    return (
            <>
            <h1 className="text-center">Tienda</h1>
            <div className="contenedor-productos d-flex">
            {productos.map((e)=> <Item producto={e}/>)}
            </div>
            </>
            )
}
export default ItemListContainer;