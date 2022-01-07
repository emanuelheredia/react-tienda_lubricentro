import { useContexto } from "./CartContext";

const Carrito = ()=>{
    const {vaciarCarrito,carrito,removeItem}=useContexto()
    console.log(carrito)
    const quitarItem=(id)=>{
        removeItem((carrito[id].producto.id))
    }
    return(
        <div className="d-flex flex-column align-items-center">
            {carrito.map((e,index)=>(<div key={index} className="d-flex align-items-center justify-content-between m-5 border border-2">
                <img src={carrito[index].producto.img} className="p-4 imgCarrito" alt="..."/>
                <h4 className="cantidadCarrito ">{carrito[index].cantidad} Un.</h4>
                <h4 className="text-center card-title fs-1 p-3">{carrito[index].producto.marca} {carrito[index].producto.tipo}</h4>
                <h3 className="text-center text-primary card-text fs-1 p-5">{(carrito[index].producto.precio)}</h3>
                <button onClick={()=>{quitarItem(index)}} className="btn btn-danger justify-content-center m-2">X</button>
            </div>))}
            {(carrito.length===0)?<div></div>:<button onClick={vaciarCarrito} className="btn btn-success p-3 justify-content-center w-30 mt-5">Vaciar Carrito</button>}
        </div>
        )
}
export default Carrito;

