import React from "react";
import { useContexto } from "../components/CartContext";

const CartWidget=()=>{
    const {cantidadTotal}=useContexto()

    return(
        <div className="d-flex w-100">
            <span className={(cantidadTotal>0)?"position-absolute material-icons fs-2":"position-relative material-icons fs-2"} >shopping_cart</span>
            {(cantidadTotal===0)
                                ?<div></div>
                                :<h5 className="text-danger fs-6">{cantidadTotal}</h5>}
        </div>
    )
}
export default CartWidget;