import { useContexto } from "./CartContext";
import  {NavLink} from "react-router-dom";

const Carrito = ()=>{
    const {vaciarCarrito,carrito,removeItem,precioTotal}=useContexto()
    const quitarItem=(id)=>{
        removeItem((carrito[id].id))
    }
    return(
        <div className="d-flex flex-column align-items-center">
            {carrito.map((e,index)=>(<div key={index} className="d-flex align-items-center justify-content-between m-5 border border-2">
                <img src={carrito[index].img} className="p-4 imgCarrito" alt="..."/>
                <h4 className="cantidadCarrito ">{carrito[index].cantidad} Un.</h4>
                <h4 className="text-center card-title fs-1 p-3">{carrito[index].marca} {carrito[index].tipo}</h4>
                <h3 className="text-center text-primary card-text fs-1 p-3">$ {(carrito[index].precio)} un</h3>
                <button onClick={()=>{quitarItem(index)}} className="btn btn-danger justify-content-center m-2">X</button>
            </div>))}
            {(carrito.length===0)?<div className="d-flex flex-column align-items-center"><h2 className="m-3 w-100">Sin productos en el carrito</h2><NavLink to="/productos"><button  className="btn btn-success p-3 justify-content-center w-30 mt-2">Ir a la Tienda</button></NavLink></div>:<div className="d-flex flex-column align-items-center"><h1>Total : $ {precioTotal}</h1><div className="d-flex "><button onClick={vaciarCarrito} className="btn btn-danger p-3 justify-content-center w-30 m-5">Vaciar Carrito</button><NavLink to={"/compra"}><button className="btn btn-success p-3 justify-content-center w-30 m-5">Continuar con la Compra</button></NavLink></div></div>}
        </div>
        )
}
export default Carrito;

