import {createContext, useContext,useState } from "react";

const contexto = createContext();
const {Provider} = contexto;
let productoDuplicado;

export const useContexto=()=>{
    return useContext(contexto);
}
const CartContext=({children})=>{
    const [cantidadTotal,setCantidadTotal]=useState(0);
    const [carrito,setCarrito]=useState([]);
    const [precioTotal,setPrecioTotal]=useState(0)

    const onAdd=(producto)=>{
        if(isInCarrito(producto.id)){
            producto.cantidad=producto.cantidad+productoDuplicado.cantidad
            let carritoCopia=carrito.filter(e=>(e.id!==producto.id))
            carritoCopia.push(producto)
            setCarrito(carritoCopia)
        }else{
        setCarrito([...carrito,producto])
        }
    }
    const removeItem=(id)=>{
        let carritoFiltrado=carrito.filter(e=>(e.id)!==id)
        setCarrito(carritoFiltrado)
        let item= carrito.filter(e=>(e.id)===id)
        setPrecioTotal(precioTotal-((item[0].cantidad)*Number(item[0].precio)))
        setCantidadTotal(cantidadTotal-item[0].cantidad)
    }
    const vaciarCarrito=()=>{
        setCarrito([])
        setPrecioTotal(0)
        setCantidadTotal(0)
    }
    const isInCarrito=(id)=>{
        productoDuplicado=carrito.find(e=>(e.id)===id)
        if(productoDuplicado===undefined){
            return false;
        }else{
            return true;
        }
    }
    const sumarPrecioTotal=({precio,cantidad})=>{
        setPrecioTotal(precioTotal+(Number(precio)*cantidad)) 
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