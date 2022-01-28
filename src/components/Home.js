import React from "react";
import { NavLink } from "react-router-dom";

const Home=()=>{
    return(
        <>
            <div className="d-flex align-items-center">
            <NavLink to="/productos">
                <img className="m-1 img-home" src="https://www.endado.com/consejos/wp-content/uploads/2015/05/Aceites-de-motor-para-mi-coche.jpg" alt="portada"></img>
            </NavLink>
            <h1 className="ms-4 fs-2 ps-5">Cuidá tu vehículo con las mejores marcas</h1>
            </div>
        </>
    )
}
export default Home;