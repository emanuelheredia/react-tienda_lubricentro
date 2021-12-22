import React from "react";
import { NavLink } from "react-router-dom";

const Home=()=>{
    return(
        <>
            <NavLink to="/productos"><img className="w-50 h-50 m-2  " src="https://www.endado.com/consejos/wp-content/uploads/2015/05/Aceites-de-motor-para-mi-coche.jpg" alt="portada"></img></NavLink>
            <h1 className="position-absolute top-50 start-50 ms-4 fs-2 ps-5">Cuidá tu vehículo con las mejores marcas</h1>
        </>
    )
}
export default Home;