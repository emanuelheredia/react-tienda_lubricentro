import {createContext, useContext,useState } from "react";

const contexto = createContext();
const {Provider} = contexto;
let productoDuplicado;

export const useContexto=()=>{
    return useContext(contexto);
}
const CartContext=({children})=>{
    const [cantidadTotal,setCantidadTotal]=useState(sumarCantidadTotalStorage());
    const [carrito,setCarrito]=useState(((sessionStorage.getItem("Carrito")!==null))?(JSON.parse(sessionStorage.getItem("Carrito"))):[]);
    const [precioTotal,setPrecioTotal]=useState((sumarPrecioTotalStorage()))
    
    function sumarPrecioTotalStorage(){
        if(sessionStorage.getItem("Carrito")!==null){
            let carritoStorage=JSON.parse(sessionStorage.getItem("Carrito"))
            let sumaPrecioTotalStorage=0;
            for(let i=0;i<carritoStorage.length;i++){sumaPrecioTotalStorage+=(carritoStorage[i].cantidad*carritoStorage[i].precio)}
            return sumaPrecioTotalStorage;
        }else{return 0}
    }
    function sumarCantidadTotalStorage(){
        if(sessionStorage.getItem("Carrito")!==null){
            let carritoStorage=JSON.parse(sessionStorage.getItem("Carrito"))
            let sumaCantidadTotalStorage=0;
            for(let i=0;i<carritoStorage.length;i++){sumaCantidadTotalStorage+=carritoStorage[i].cantidad}
            return sumaCantidadTotalStorage;
        }else{return 0}
    }
    const onAdd=(producto)=>{
        if(isInCarrito(producto.id)){
            producto.cantidad=producto.cantidad+productoDuplicado.cantidad
            let carritoCopia=carrito.filter(e=>(e.id!==producto.id))
            carritoCopia.push(producto)
            sessionStorage.setItem("Carrito",JSON.stringify(carritoCopia))
            setCarrito(carritoCopia)
        }else{
        setCarrito([...carrito,producto])
        sessionStorage.setItem("Carrito",JSON.stringify([...carrito,producto]))
        }
    }
    const removeItem=(id)=>{
        let carritoFiltrado=carrito.filter(e=>(e.id)!==id)
        setCarrito(carritoFiltrado)
        sessionStorage.clear("carrito")
        sessionStorage.setItem("Carrito",JSON.stringify(carritoFiltrado))
        let item= carrito.filter(e=>(e.id)===id)
        setPrecioTotal(precioTotal-((item[0].cantidad)*Number(item[0].precio)))
        setCantidadTotal(cantidadTotal-item[0].cantidad)
    }
    const vaciarCarrito=()=>{
        setCarrito([])
        setPrecioTotal(0)
        setCantidadTotal(0)
        sessionStorage.clear()
    }
    const isInCarrito=(id)=>{
        productoDuplicado=carrito.find(e=>(e.id)===id)
        if(productoDuplicado===undefined){
            return false;
        }else{
            return true;
        }
    }
    const sumarPrecioTotal=()=>{
        let carritoStorage=JSON.parse(sessionStorage.getItem("Carrito"))
        let sumaPrecioTotalStorage=0;
        for(let i=0;i<carritoStorage.length;i++){sumaPrecioTotalStorage+=(carritoStorage[i].cantidad*carritoStorage[i].precio)}
        setPrecioTotal(sumaPrecioTotalStorage) 
    }
    const sumarCantidadTotal=(contador)=>{
        setCantidadTotal(cantidadTotal+contador)
    }
    const valorDelCarrito={
        cantidadTotal,
        carrito,
        onAdd,
        removeItem,
        vaciarCarrito,
        isInCarrito,
        precioTotal,
        sumarPrecioTotal,
        sumarCantidadTotal
    }
    return (
        <Provider value={valorDelCarrito}>
        {children}
        </Provider>
        )
}
export default CartContext;