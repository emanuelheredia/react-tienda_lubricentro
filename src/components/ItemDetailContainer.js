import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

    const productoDetallado=[{id:"1",categoria: "lubricantes", marca:"Elaion",tipo:"Sintético",envase:"4L",precio:"$6000",img:"https://http2.mlstatic.com/D_883278-MLA25675509149_062017-O.jpg",stock:15,descripcion:"La línea de lubricantes ELAION está diseñada por YPF para cada tipo de motorización bajo los más altos estándares de calidad a nivel mundial."},
                {id:"2", categoria: "lubricantes", marca:"Castrol",tipo:"Sintético",envase:"4L",precio:"$6500",img:"https://m.media-amazon.com/images/I/71QsLhuxcGL._AC_SL1500_.jpg",stock:5,descripcion:"lubricante que cuenta con una fórmula de doble acción que elimina los sedimentos y evita que se formen nuevos. Proporciona un 45 % más de la protección contra sedimentos que demandan los exigentes estándares del sector."},
                {id:"3",categoria: "lubricantes",marca:"Total",tipo:"Sintético",envase:"4L",precio:"$6800",img:"https://totalenergies.co/system/files/styles/large/private/atoms/image/envase.png?itok=bYC5oRMt",stock:7,descripcion:"Los aceites de motor TotalEnergies y ELF están diseñados para cubrir todas las necesidades de los consumidores, tanto a nivel de usuario final como para los usuarios profesionales. La gama cuenta con productos desarrollados especialmente para cada segmento: auto, moto, pesados, agro-vial y náutica."},
                {id:"4",categoria: "lubricantes",marca:"Elf",tipo:"Aceite",envase:"4L",precio:"$7200",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4344TYhQcYMC0kgEIzpA4c1FWtt-RYNo0Q&usqp=CAU",stock:0,descripcion:"Los aceites de motor TotalEnergies y ELF están diseñados para cubrir todas las necesidades de los consumidores, tanto a nivel de usuario final como para los usuarios profesionales. La gama cuenta con productos desarrollados especialmente para cada segmento: auto, moto, pesados, agro-vial y náutica."},
                {id:"5",categoria: "filtros",marca:"Fram",tipo:"Aceite",envase:"1U",precio:"$800",img:"https://http2.mlstatic.com/D_NQ_NP_685390-MLA31805641213_082019-O.webp",stock:20,descripcion:"Los filtros FRAM Racing® están diseñados para vehículos de carreras y alto rendimiento, para todos los tipos de aceite es compatible."},{id:"6",categoria: "filtros",marca:"Fram",tipo:"Aire",envase:"1U",precio:"$850",img:"https://www.fram.com/media/1709/fram-air-extra-box_filter-1.png?anchor=center&mode=crop&quality=70&width=600&rnd=132606170410000000",stock:10,descripcion:"Estos filtros de aire de alta gama están diseñados para evitar que entren contaminantes al motor de su vehículo y así protegerlo contra el desgaste por hasta dos años."},{id:"7",categoria: "filtros",marca:"Fram",tipo:"Combustible",envase:"1U",precio:"$650",img:"https://http2.mlstatic.com/D_NQ_NP_722408-MLA46831717404_072021-O.jpg",stock:6,decrpcion:"El filtro de gasolina protege el sistema de alimentación, eliminando las impurezas del combustible. El combustible filtrado favorece el aumento de las prestaciones y de la vida útil del motor."}
];

const ItemDetailContainer = ()=>{

    const[producto,setproducto]=useState([{}]);
    const {id}=useParams();
    useEffect(
        ()=>{let promesa=()=>{ 
            return new Promise((res,rej)=>{
                setTimeout(()=>{
                    res(productoDetallado)
                },2000);
            })
        }
        promesa().then(()=>{
            setproducto(productoDetallado.filter(producto=>producto.id===id.toString()))
        })},[id])
    return(
        <>
        <ItemDetail producto={producto[0]}/>
        </>
    )
}
export default ItemDetailContainer;