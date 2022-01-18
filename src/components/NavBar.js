import React from "react";
import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";

const NavBar=()=>{
        return (
            <>
            <div className="encabezado shadow p-3 bg-primary container-fluid">
                <NavLink className="col-md-7 text-white text-decoration-none"  to="/"><h2 className="col-md-7 text-white ">LUBRICANTES H&H</h2></NavLink>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container justify-content-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white active"  aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white"  aria-current="page" to="/productos">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white"  to="/productos/lubricantes">Lubricantes</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white"  to="/productos/filtros">Filtros</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link  text-white"  to="/carrito"><CartWidget/></NavLink>
                            </li>
                    
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            </>
            )
}
export default NavBar;