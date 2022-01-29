import { useContexto } from "./CartContext";
import  {NavLink} from "react-router-dom";

const Carrito = ()=>{
    const {vaciarCarrito,carrito,removeItem,precioTotal}=useContexto()
    const quitarItem=(id)=>{
        removeItem((carrito[id].id))
        }

    return(
        <div className="d-flex flex-column align-items-center m-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Quitar</th>
                    </tr>
                </thead>
                <tbody>
            {carrito.map((e,index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{carrito[index].cantidad}</td>
                        <td><img src={carrito[index].img} className="p-4 imgCarrito" alt="..."/></td>
                        <td>{(carrito[index].categoria).toUpperCase()}</td>
                        <td>{carrito[index].marca}</td>
                        <td>{carrito[index].tipo}</td>
                        <td>$ {(carrito[index].precio)}</td>
                        <td><button onClick={()=>{quitarItem(index)}} className="btn btn-danger justify-content-center m-2">X</button></td>
                    </tr>))}
                </tbody>
                </table>
            {(carrito.length===0)
                                ?<div className="d-flex flex-column align-items-center">
                                    <h2 className="m-3 w-100">Sin productos en el carrito</h2>
                                    <NavLink to="/productos">
                                        <button  className="btn btn-success p-3 justify-content-center w-30 mt-2">Ir a la Tienda</button>
                                    </NavLink>
                                </div>
                                :<div className="d-flex flex-column align-items-center">
                                    <h1>Total : $ {precioTotal}</h1>
                                    <div className="d-flex ">
                                        <button onClick={vaciarCarrito} className="btn btn-danger p-3 justify-content-center w-30 m-5">Vaciar Carrito</button>
                                        <NavLink to={"/compra"}>
                                            <button className="btn btn-success p-3 justify-content-center w-30 m-5">Continuar con la Compra</button>
                                        </NavLink></div>
                                    </div>}
        </div>
        )
}
export default Carrito;

